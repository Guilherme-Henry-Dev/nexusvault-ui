import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ThemeToggle from "../components/ThemeToggle";

export default function Register() {
  const nav = useNavigate();
  const { signup } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErr('');
    try {
      await signup({ name, email, password });
      nav('/dashboard');
    } catch (e: any) {
      setErr(e?.response?.data?.error ?? 'Falha ao criar conta');
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface text-slate-100 px-4 sm:px-6">
      <div className="card w-full max-w-md animate-fadeIn">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold drop-shadow-[0_0_6px_rgba(123,47,247,0.7)]">
            Criar Conta
          </h1>
          <ThemeToggle />
        </header>

        {err && <p className="text-red-400 text-sm mb-3">{err}</p>}

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            className="input"
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
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
          <button className="btn-primary w-full text-sm sm:text-base py-2 sm:py-3 shadow-glow">Cadastrar</button>
        </form>

        <p className="text-lg text-center text-slate-400 mt-4">
          Já tem uma conta?{" "}
          <Link
            to="/login"
            className="text-slate-400 hover:underline hover:text-primary/80"
          >
            Entrar
          </Link>
        </p>
      </div>
    </main>
  );
}
