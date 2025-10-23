import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const schema = z.object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().email(),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
})

export function Register () {
    const { register, handleSubmit } = useForm({ resolver: zodResolver(schema)})
    const auth = useContext(AuthContext)

    const onSubmit = async (data:any) => {
        try {
            await auth?.register(data)
            alert("Cadastro realizado com sucesso!")
        } catch (error) {
            alert("Erro ao registrar.")
        }    
    }

    return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Crie sua conta</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-80">
        <input {...register("name")} placeholder="Nome" className="p-2 rounded bg-secondary text-text" />
        <input {...register("email")} placeholder="Email" className="p-2 rounded bg-secondary text-text" />
        <input {...register("password")} type="password" placeholder="Senha" className="p-2 rounded bg-secondary text-text" />
        <button className="bg-accent py-2 rounded font-semibold hover:bg-opacity-80 transition">
          Registrar
        </button>
      </form>
    </div>
  )
}