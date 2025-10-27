import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import  Home  from "./pages/Home";
import  Login  from "./pages/Login";
import  Register  from "./pages/Register";
import { AddGame } from "./pages/AddGame";
import  Dashboard  from "./pages/DashBoard";
import PrivateRoute from "./routes/PrivateRoute";
import "./styles/index.css";

export default function App() {
  return (
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-game" element={<AddGame />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
  );
}
