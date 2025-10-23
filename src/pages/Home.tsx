import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-4"
            >
                Bem-vindo ao NexusVault 🎮
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-300 max-w-md mb-8"
            >
                Armazene, organize e avalie os jogos que marcaram sua jornada gamer.
            </motion.p>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
            >
                <Link
                    to="/dashboard"
                    className="bg-accent px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition"
                >
                    Acessar minha biblioteca
                </Link>
            </motion.div>
        </div>
    )
}   