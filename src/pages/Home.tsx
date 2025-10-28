import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-surface text-center text-slate-100 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Bem-vindo ao NexusVault</h1>
      <p className="text-sm sm:text-base text-slate-400 mb-6 max-w-sm sm:max-w-md">
        Organize seus jogos, acompanhe progresso e registre reviews — tudo em um só lugar.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/login" className="btn-primary">Acessar</Link>
        <Link to="/register" className="btn-outline">Criar conta</Link>
      </div>
    </main>

  );
}
