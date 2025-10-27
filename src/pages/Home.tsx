import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Nexus<span className="text-primary">Vault</span>
        </h1>
        <p className="text-slate-300 max-w-lg mx-auto">
          Seu cofre gamer. Cadastre, filtre e acompanhe seus jogos favoritos.
        </p>
        <div className="flex gap-3 justify-center">
          <Link to="/login" className="btn-primary">Acessar</Link>
          <Link to="/register" className="btn-outline">Criar conta</Link>
        </div>
      </section>
    </main>
  );
}
