import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme"

interface Game {
  id: number;
  title: string;
  genre: string;
  platform: string;
  rating: number;
}

export function Dashboard() {
  const { theme, toggle } = useTheme();
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    async function fetchGames() {
      try {
        const res = await api.get("/games")
        setGames(res.data)
      } catch (err) {
        console.error("Erro ao carregar jogos:", err)
      }
    }
    fetchGames()
  }, [])

  return (
    <div className="min-h-screen bg-primary text-text p-6">

      <button
        onClick={toggle}
        className="absolute top-6 right-6 bg-accent px-3 py-2 rounded text-sm font-semibold hover:bg-opacity-80 transition"
      >
        {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
      </button>

      <h1 className="text-3xl font-bold mb-6">Minha Biblioteca</h1>
      {games.length === 0 ? (
        <p className="text-gray-400">Nenhum jogo cadastrado ainda.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <Link
              key={game.id}
              to={`/game/${game.id}`}
              className="bg-secondary rounded-lg p-4 hover:bg-opacity-80 transition"
            >
              <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
              <p className="text-sm text-gray-300">Gênero: {game.genre}</p>
              <p className="text-sm text-gray-300">Plataforma: {game.platform}</p>
              <p className="text-sm text-gray-300">Nota: {game.rating}/10</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}