import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";


type Game = {
  id: number;
  title: string;
  genre?: string;
  platform?: string;
  releaseYear?: number;
  userRating?: number;
  userReview?: string;
  finishedAt?: string | null;
};

export default function Dashboard() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  const { logout } = useAuth();

  const handleAddGame = () => nav("/add-game");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<Game[]>("/games");
        setGames(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className="min-h-screen grid place-items-center text-slate-200">Carregando...</div>;

  return (
    <main className="min-h-screen bg-surface text-slate-100 p-4 sm:p-6 md:p-8">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-surface text-slate-100 p-4 sm:p-6 md:p-8"
      >
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 max-w-6xl mx-auto mb-6">
          <h1 className="text-2xl font-bold text-center sm:text-left">Seus Jogos</h1>
          <div className="flex gap-2 items-center justify-center sm:justify-end">
            <ThemeToggle />
            <button onClick={handleAddGame} className="btn-primary">Adicionar</button>
            <a href="/" className="btn-outline">Sair</a>
          </div>
        </header>

        <section className="grid gap-4 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g, i) => (
            <motion.article
              key={g.id}
              className="card transition-transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <p className="text-sm text-slate-300">{g.genre ?? "—"} · {g.platform ?? "—"}</p>
              <p className="text-xs text-slate-400">Ano: {g.releaseYear ?? "—"}</p>
            </motion.article>
          ))}
        </section>
      </motion.main>
    </main>

  );
}
