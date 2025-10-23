import { createContext, useState, useEffect, ReactNode } from "react"
import api from "../services/api"

interface User {
  id?: number
  name?: string
  email?: string
}

interface AuthContextProps {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (data: { name: string; email: string; password: string }) => Promise<boolean>
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setUser({ email: "persisted" })
    }
    setLoading(false)
  }, [])

  async function login(email: string, password: string) {
    try {
      if (!email || !password) throw new Error("missing credentials")

      const res = await api.post("/auth/login", { email, password })
      const { token, user } = res.data || {}
      if (!token || !user) {
        console.error("Resposta inesperada do /auth/login:", res.data)
        return false
      }

      localStorage.setItem("token", token)
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setUser(user)
      return true
    } catch (err: any) {
      console.error("Erro no login:", err?.response?.status, err?.response?.data || err?.message)
      return false
    }
  }

  async function register(data: { name: string; email: string; password: string }) {
    try {
      const res = await api.post("/auth/register", data)
      return res.status >= 200 && res.status < 300
    } catch (err: any) {
      console.error("Erro no register:", err?.response?.status, err?.response?.data || err?.message)
      return false
    }
  }

  function logout() {
    localStorage.removeItem("token")
    delete api.defaults.headers.common.Authorization
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, loading, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  )
}
