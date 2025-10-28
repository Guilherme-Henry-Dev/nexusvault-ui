import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

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
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 max-w-6xl mx-auto mb-6">
        <h1 className="text-2xl font-bold text-center sm:text-left">Seus Jogos</h1>
        <div className="flex gap-2 justify-center sm:justify-end">
          <button onClick={handleAddGame} className="btn-primary text-sm sm:text-base">Adicionar Jogo</button>
          <a href="/" className="btn-outline text-sm sm:text-base">Sair</a>
        </div>
      </header>

      <section className="grid gap-4 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {games.map(g => (
          <article key={g.id} className="card transition-transform hover:scale-[1.02]">
            <h3 className="text-lg font-semibold">{g.title}</h3>
            <p className="text-sm text-slate-300 mt-1">
              {g.genre ?? "—"} · {g.platform ?? "—"}
            </p>
            <p className="text-xs text-slate-400 mt-1">Ano: {g.releaseYear ?? "—"}</p>
          </article>
        ))}
        {games.length === 0 && (
          <p className="text-slate-400 text-center col-span-full">Nenhum jogo cadastrado ainda.</p>
        )}
      </section>
    </main>

  );
}
