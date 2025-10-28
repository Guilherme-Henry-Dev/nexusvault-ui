import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import api from "../services/api";

type AuthContextType = {
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("token");
    if (t) setToken(t);
    setLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const { data } = await api.post<{ token: string }>("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      setToken(data.token);
      return true;
    } catch {
      return false;
    }
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string) => {
    try {
      await api.post("/auth/register", { name, email, password });
      const ok = await login(email, password);
      return ok;
    } catch {
      return false;
    }
  }, [login]);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setToken(null);
  }, []);

  const value = useMemo<AuthContextType>(() => ({
    isAuthenticated: !!token,
    loading,
    login,
    signup,
    logout,
  }), [token, loading, login, signup, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
};

