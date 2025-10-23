import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "../services/api";

interface AuthContextProps {
    user: any
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    register: (data: any) => Promise<void>
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: {children: ReactNode}){
    const [user, setUser] = useState<any>(null)

    async function register(data:any) {
        await axios.post("/auth/register", data)
    }

    function logout() {
        localStorage.removeItem("token")
        setUser(null)
    }

    useEffect(() => {
        const token = localStorage.getItem("toke")
        if (token) setUser({ token })
    }, []) 

    return(
        <AuthContext.Provider value={{ user, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}