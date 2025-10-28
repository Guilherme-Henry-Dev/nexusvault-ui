import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
  const { signup } = useAuth();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setSubmitting(true);
    const ok = await signup(name, email, password);
    setSubmitting(false);
    if (ok) nav("/dashboard", { replace: true });
    else setErr("Não foi possível criar a conta.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface text-slate-100 px-4 sm:px-6">
      <form onSubmit={onSubmit} className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-black/20 p-6 sm:p-8 rounded-2xl shadow-lg border border-white/10">
        <h1 className="text-2xl font-bold mb-6 text-center">Criar Conta</h1>
        {err && <p className="text-red-400 text-sm mb-3">{err}</p>}
        <input className="input mb-3" placeholder="Nome" value={name} onChange={e=>setName(e.target.value)} />
        <input className="input mb-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input mb-4" placeholder="Senha" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn-primary w-full text-sm sm:text-base py-2 sm:py-3" disabled={submitting}>{submitting ? "Cadastrando..." : "Cadastrar"}</button>
        <a className="block text-center text-xs text-slate-400 mt-4 hover:text-slate-200 transition" href="/login">Já tenho conta</a>
      </form>
    </main>
  );
}
