import { createContext, useState, useEffect, ReactNode } from "react"
import api from "../services/api"

interface User {
  id?: number
  name?: string
  email?: string
  token?: string
}

interface AuthContextProps {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (data: any) => Promise<void>
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)


  async function login(email: string, password: string) {
    try {
      const res = await api.post("/auth/login", { email, password })
      const { token, user } = res.data
      localStorage.setItem("token", token)
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setUser(user)
    } catch (error) {
      console.error("Erro ao fazer login:", error)
    }
  }


  async function register(data: any) {
    try {
      await api.post("/auth/register", data)
    } catch (error) {
      console.error("Erro ao registrar:", error)
    }
  }

  function logout() {
    localStorage.removeItem("token")
    setUser(null)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setUser({ token })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  )
}
