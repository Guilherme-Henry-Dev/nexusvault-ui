import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import api from "../services/api"

interface Game {
    id: number
    title: string
    genre: string
    platform: string
    rating: number
    review: string
    completedAt: string
}

export function GameDetails() {
    const { id } = useParams()
    const [game, setGame] = useState<Game | null>(null)

    useEffect(() => {
        async function fetchGame() {
            try {
                const res = await api.get(`/games/${id}`)
                setGame(res.data)
            } catch (err) {
                console.error("Erro ao buscar detalhes:", err)
            }
        }
        fetchGame()
    }, [id])

    if (!game) return <p className="p-6">Carregando...</p>

    return (
        <div className="min-h-screen bg-primary text-text p-6">
            <Link to="/dashboard" className="text-accent hover:underline mb-4 block">
                ← Voltar
            </Link>
            <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
            <p className="text-lg text-gray-300 mb-2">Gênero: {game.genre}</p>
            <p className="text-lg text-gray-300 mb-2">Plataforma: {game.platform}</p>
            <p className="text-lg text-gray-300 mb-2">Nota: {game.rating}/10</p>
            <p className="text-gray-400 mt-4">{game.review}</p>
            <p className="text-sm text-gray-500 mt-6">
                Concluído em: {new Date(game.completedAt).toLocaleDateString("pt-BR")}
            </p>
        </div>
    )
}
