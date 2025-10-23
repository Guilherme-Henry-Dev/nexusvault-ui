import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import api from "../services/api"
import { useNavigate } from "react-router-dom"

const schema = z.object({
  title: z.string().min(2),
  genre: z.string().min(2),
  platform: z.string().min(2),
  rating: z.number().min(0).max(10),
  review: z.string().optional(),
})

export function AddGame() {
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: any) {
    try {
      await api.post("/games", data)
      alert("Jogo adicionado com sucesso!")
      reset()
      navigate("/dashboard")
    } catch (err) {
      alert("Erro ao adicionar jogo.")
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-text">
      <h1 className="text-3xl font-bold mb-6">Adicionar novo jogo</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-80">
        <input {...register("title")} placeholder="Título" className="p-2 rounded bg-secondary" />
        <input {...register("genre")} placeholder="Gênero" className="p-2 rounded bg-secondary" />
        <input {...register("platform")} placeholder="Plataforma" className="p-2 rounded bg-secondary" />
        <input {...register("rating", { valueAsNumber: true })} placeholder="Nota (0 a 10)" className="p-2 rounded bg-secondary" />
        <textarea {...register("review")} placeholder="Review (opcional)" className="p-2 rounded bg-secondary h-24" />
        <button className="bg-accent py-2 rounded font-semibold hover:bg-opacity-80 transition">
          Salvar
        </button>
      </form>
    </div>
  )
}
