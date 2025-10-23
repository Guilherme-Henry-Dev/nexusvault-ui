import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { div } from "framer-motion/client";

const schema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
})

export function Login() {
    const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) })
    const auth = useContext(AuthContext)

    const onSubmit = async (data: any) => {
        try {
            await auth?.login(data.email, data.password)
            alert("Login realiazado com sucesso!")
        } catch {
            alert("Falha no login.")
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-3xl font-bold mb-4">NexusVault</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-80">
                <input {...register("email")} placeholder="Email" className="p-2 rounded bg-secondary text-text" />
                <input {...register("password")} type="password" placeholder="Senha" className="p-2 rounded bg-secondary text-text" />
                <button className="bg-accent py-2 rounded font-semibold hover:bg-opacity-80 transition">
                    Entrar
                </button>
            </form>
        </div>
    )
}