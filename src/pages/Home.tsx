import { Link } from "react-router-dom"

export function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            <h1 className="text-4x1 font-bold mb-4">Bem-vindo ao NexusVault</h1>
            <p className="text-lg text-gray-300 max-w-md mb-8">
                Armazene, organize e avalie os jogos que marcaram sua jornada gamer.
            </p>
            <Link to="/dashboard"
                className="bg-accent px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition"
            >
                Acesar minha biblioteca
            </Link>
        </div>
    )
}   