import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

type Form = { email: string; password: string };

export default function Login() {
  const { register: reg, handleSubmit } = useForm<Form>();
  const { login, loading } = useAuth();

  const onSubmit = async (data: Form) => {
    await login(data.email, data.password);
  };

  return (
    <main className="auth">
      <form onSubmit={handleSubmit(onSubmit)} className="card">
        <h2>Entrar</h2>
        <input placeholder="Email" type="email" {...reg("email")} required />
        <input placeholder="Senha" type="password" {...reg("password")} required />
        <button className="btn-primary" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}
