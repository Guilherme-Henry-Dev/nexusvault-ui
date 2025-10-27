import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddGame() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [userRating, setUserRating] = useState("");
  const [userReview, setUserReview] = useState("");
  const [finishedAt, setFinishedAt] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Usuário não autenticado. Faça login novamente.");
        return;
      }

      await api.post(
        "/games",
        {
          title,
          genre,
          releaseYear: parseInt(releaseYear),
          userRating: parseFloat(userRating),
          userReview,
          finishedAt: finishedAt ? new Date(finishedAt) : null,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/dashboard");
    } catch (err: any) {
      console.error("Erro ao adicionar jogo:", err);
      setError("Erro ao adicionar jogo. Verifique os dados e tente novamente.");
    }
  };

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center text-slate-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#161b27] p-8 rounded-xl shadow-lg w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Adicionar Novo Jogo
        </h2>

        {error && (
          <p className="text-red-400 text-sm text-center bg-red-950/40 py-1 rounded">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Título"
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
          onChange={(e) => setReleaseYear(e.target.value)}
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
          onChange={(e) => setUserRating(e.target.value)}
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
            className="w-1/2 bg-indigo-600 hover:bg-indigo-700 p-2 rounded-lg font-medium transition-colors"
          >
            Salvar
          </button>
        </div>
      </form>
    </main>
  );
}
