import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import api from "../services/api";

export default function AddGame() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState<number | "">("");
  const [userRating, setUserRating] = useState<number | "">("");
  const [userReview, setUserReview] = useState("");
  const [finishedAt, setFinishedAt] = useState("");
  const [error, setErr] = useState("");

async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErr('');
    try {
      await api.post('/games', {
        title,
        genre: genre || undefined,
        releaseYear: releaseYear === '' ? undefined : Number(releaseYear),
        userRating: userRating === '' ? undefined : Number(userRating),
        userReview: userReview || undefined,
        finishedAt: finishedAt || undefined,
      });
      navigate('/dashboard');
    } catch (e: any) {
      setErr(e?.response?.data?.error ?? 'Erro ao adicionar jogo');
    }
  }

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center text-slate-100 p-6">
      <div className="card w-full max-w-md animate-fadeIn">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Adicionar Novo Jogo</h1>
          <ThemeToggle />
        </header>
        <form
          onSubmit={onSubmit}
          className="bg-[#161b27] p-8 rounded-xl shadow-lg w-96 space-y-4"
        >

          {error && (
            <p className="text-red-400 text-sm text-center bg-red-950/40 py-1 rounded">
              {error}
            </p>
          )}

          <input
            type="text"
            placeholder="Título do Jogo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-[#1f2638] focus:outline-none"
            required
          />

          <input
            type="text"
            placeholder="Gênero"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full p-2 rounded bg-[#1f2638] focus:outline-none"
            required
          />

          <input
            type="number"
            placeholder="Ano de lançamento"
            value={releaseYear}
            onChange={e=>setReleaseYear(e.target.value ? Number(e.target.value) : '')}
            className="w-full p-2 rounded bg-[#1f2638] focus:outline-none"
            required
          />

          <input
            type="number"
            placeholder="Nota do Usuário (0 a 10)"
            min="0"
            max="10"
            step="0.1"
            value={userRating}
            onChange={e=>setUserRating(e.target.value ? Number(e.target.value) : '')}
            className="w-full p-2 rounded bg-[#1f2638] focus:outline-none"
          />

          <textarea
            placeholder="Sua Review (opcional)"
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}
            className="w-full p-2 rounded bg-[#1f2638] focus:outline-none h-24 resize-none"
          />

          <div>
            <label className="text-sm text-slate-300 block mb-1">
              Data que finalizou
            </label>
            <input
              type="date"
              value={finishedAt}
              onChange={(e) => setFinishedAt(e.target.value)}
              className="w-full p-2 rounded bg-[#1f2638] focus:outline-none"
            />
          </div>

          <div className="flex gap-2 justify-between mt-4">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="w-1/2 bg-slate-600 hover:bg-slate-700 p-2 rounded-lg font-medium transition-colors"
            >
              Voltar
            </button>

            <button
              type="submit"
              className="w-1/2 bg-[rgb(var(--primary))] hover:bg-purple-900 p-2 rounded-lg font-medium transition-colors"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
