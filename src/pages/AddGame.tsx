import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function AddGame() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")
  const [releaseYear, setReleaseYear] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.post("https://nexusvault-api.onrender.com/games", {
        title,
        genre,
        releaseYear: parseInt(releaseYear),
      })
      navigate("/dashboard")
    } catch (error) {
      console.error("Erro ao adicionar jogo:", error)
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0e16] flex items-center justify-center text-white">
      
      
      
      
      <form
        onSubmit={handleSubmit}
        className="bg-[#161b27] p-8 rounded-xl shadow-lg w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Adicionar Novo Jogo</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded bg-[#1f2638] focus:outline-none"
        />
        <input
          type="text"
          placeholder="Gênero"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full p-2 rounded bg-[#1f2638] focus:outline-none"
        />
        <input
          type="number"
          placeholder="Ano de lançamento"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          className="w-full p-2 rounded bg-[#1f2638] focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 p-2 rounded-lg font-medium transition-colors"
        >
          Salvar
        </button>
      </form>
    </div>
  )
}