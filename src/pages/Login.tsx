import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ThemeToggle from "../components/ThemeToggle";

export default function Login() {
  const nav = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErr('');
    try {
      await login({ email, password });
      nav('/dashboard');
    } catch (e: any) {
      setErr(e?.response?.data?.error ?? 'Falha no login');
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface text-slate-100 px-4 sm:px-6">
      <div className="card w-full max-w-md animate-fadeIn">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold drop-shadow-[0_0_6px_rgba(123,47,247,0.7)]">
            Login
          </h1>
          <ThemeToggle />
        </header>

        {err && <p className="text-red-400 text-sm mb-3">{err}</p>}

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            className="input"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="input"
            placeholder="Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="btn-primary w-full text-sm sm:text-base py-2 sm:py-3 shadow-glow">Entrar</button>
        </form>

        <p className="text-lg  text-center text-slate-400 mt-4">
          Ainda não tem conta? {" "}
          <Link
            to="/register"
            className="text-slate-400 hover:underline hover:text-primary/80"
          >
          Crie uma agora
          </Link>
        </p>
      </div>
    </main>
  );
}
