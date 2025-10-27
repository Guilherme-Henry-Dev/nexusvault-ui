import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleAddGame = () => {
    navigate("/add-game");
  };

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const { data } = await api.get<Game[]>("/games", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setGames(data);
      } catch (error) {
        console.error("Erro ao carregar jogos:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center text-slate-200">
        Carregando...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-surface text-slate-100 p-6">
      <header className="flex items-center justify-between max-w-6xl mx-auto mb-6">
        <h1 className="text-2xl font-bold">Seus Jogos</h1>
        <div className="flex gap-3">
          <button
            onClick={handleAddGame}
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium transition-colors"
          >
            + Adicionar Jogo
          </button>
          <a
            href="/"
            className="btn-outline bg-slate-700 hover:bg-slate-800 px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Sair
          </a>
        </div>
      </header>

      <section className="grid max-w-6xl mx-auto gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((g) => (
          <article
            key={g.id}
            className="card bg-[#161b27] p-5 rounded-lg shadow-lg border border-slate-800 hover:border-indigo-600 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-1">{g.title}</h3>
            <p className="text-sm text-slate-300 mb-2">
              {g.genre ?? "—"} · {g.platform ?? "—"}
            </p>
            <p className="text-xs text-slate-400 mb-2">
              Ano: {g.releaseYear ?? "—"}
            </p>

            {g.userRating && (
              <p className="text-sm text-indigo-400 font-medium">
                ⭐ Nota: {g.userRating.toFixed(1)}
              </p>
            )}

            {g.userReview && (
              <p className="text-sm text-slate-300 italic mt-2">
                “{g.userReview}”
              </p>
            )}

            {g.finishedAt && (
              <p className="text-xs text-slate-400 mt-2">
                📅 Finalizado em:{" "}
                {new Date(g.finishedAt).toLocaleDateString("pt-BR")}
              </p>
            )}
          </article>
        ))}

        {games.length === 0 && (
          <p className="text-slate-300 text-center col-span-full">
            Nenhum jogo cadastrado ainda.
          </p>
        )}
      </section>
    </main>
  );
}
