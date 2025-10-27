import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

type Form = { name: string; email: string; password: string };

export default function Register() {
  const { register: reg, handleSubmit } = useForm<Form>();
  const { register: signup, loading } = useAuth();

  const onSubmit = async (data: Form) => {
    await signup(data.name, data.email, data.password);
  };

  return (
    <main className="auth">
      <form onSubmit={handleSubmit(onSubmit)} className="card">
        <h2>Criar Conta</h2>
        <input placeholder="Nome" {...reg("name")} required />
        <input placeholder="Email" type="email" {...reg("email")} required />
        <input placeholder="Senha" type="password" {...reg("password")} required />
        <button className="btn-primary" disabled={loading}>
          {loading ? "Criando..." : "Cadastrar"}
        </button>
      </form>
    </main>
  );
}
