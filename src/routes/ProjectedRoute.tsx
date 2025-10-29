import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import type { JSX } from 'react/jsx-runtime';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { token, initializing } = useAuth();

  if (initializing) return <div className="min-h-screen grid place-items-center">Carregando…</div>;
  if (!token) return <Navigate to="/login" replace />;

  return children;
}
