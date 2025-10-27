import { useEffect, useState } from "react";
import api from "../services/api";

type Game = {
  id: number;
  title: string;
  genre?: string;
  platform?: string;
  releaseYear?: number;
};

export default function Dashboard() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div className="min-h-screen grid place-items-center text-slate-200">Carregando...</div>;
  }

  return (
    <main className="min-h-screen bg-surface text-slate-100 p-6">
      <header className="flex items-center justify-between max-w-6xl mx-auto mb-6">
        <h1 className="text-2xl font-bold">Seus Jogos</h1>
        <a href="/" className="btn-outline">Sair</a>
      </header>

      <section className="grid max-w-6xl mx-auto gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((g) => (
          <article key={g.id} className="card">
            <h3 className="text-lg font-semibold">{g.title}</h3>
            <p className="text-sm text-slate-300">{g.genre ?? "—"} · {g.platform ?? "—"}</p>
            <p className="text-xs text-slate-400">Ano: {g.releaseYear ?? "—"}</p>
          </article>
        ))}
        {games.length === 0 && (
          <p className="text-slate-300">Nenhum jogo cadastrado ainda.</p>
        )}
      </section>
    </main>
  );
}
