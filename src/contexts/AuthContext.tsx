import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

type User = { id: number; name: string; email: string };
type AuthContextType = {
  user: User | null;
  token: string | null;
  initializing: boolean;
  signup: (data: { name: string; email: string; password: string }) => Promise<void>;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as any);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const t = localStorage.getItem('@nexusvault:token');
    if (t) {
      setToken(t);
      api.get<User>('/auth/me')
        .then((r) => setUser(r.data))
        .catch(() => {
          localStorage.removeItem('@nexusvault:token');
          setUser(null);
          setToken(null);
        })
        .finally(() => setInitializing(false));
    } else {
      setInitializing(false);
    }

  }, []);

  async function signup(data: { name: string; email: string; password: string }) {
    await api.post('/auth/register', data);
    await login({ email: data.email, password: data.password });
  }

  async function login(data: { email: string; password: string }) {
    const r = await api.post<{ token: string; user: User }>('/auth/login', data);
    localStorage.setItem('@nexusvault:token', r.data.token);
    setToken(r.data.token);
    setUser(r.data.user);
  }

  function logout() {
    localStorage.removeItem('@nexusvault:token');
    setUser(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ user, token, initializing, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

