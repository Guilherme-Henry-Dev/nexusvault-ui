import { Link } from "react-router-dom"
import ThemeToggle from "../components/ThemeToggle"
import bghero from "../assets/bg/background-home.png"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center text-slate-100 px-4 sm:px-6 bg-cover bg-center bg-no-repeat transition-all duration-300"
      style={{ backgroundImage: `url(${bghero})` }}
    >
      <div className="card w-full max-w-md text-center animate-fadeIn shadow-glow">
        <header className="flex items-center justify-center mb-6 pl-9 pr-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Bem-vindo ao{" "}
            <span className="drop-shadow-[0_0_8px_rgba(123,47,247,0.6)]">
              NexusVault
            </span>
          </h1>
          <ThemeToggle />
        </header>

        <p className="text-sm sm:text-base text-slate-900 dark:text-slate-100 mb-8 leading-relaxed">
          Organize seus jogos, acompanhe progresso e registre reviews, tudo em
          um só lugar.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/login"
            className="btn-primary shadow-glow hover:shadow-[0_0_15px_rgba(123,47,247,0.8)]"
          >
            Acessar
          </Link>
          <Link
            to="/register"
            className="btn-outline hover:border-primary hover:text-primary transition"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </main>
  )
}