import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    try {
      await login(form.email, form.password);
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError("Falha ao entrar. Verifique o e-mail e a senha.");
    }
  }

  return (
    <main className="min-h-screen grid place-items-center bg-surface text-slate-100">
      <form onSubmit={handleSubmit} className="card w-80 space-y-3">
        <h1 className="text-lg font-bold text-center">Entrar</h1>
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Senha"
          className="input"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button type="submit" className="btn-primary w-full">
          Entrar
        </button>
      </form>
    </main>
  );
}
