import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Dashboard } from "./pages/DashBoard"
import { GameDetails } from "./pages/GameDetails"
import { Home } from "./pages/Home"
import { useContext } from "react"
import { AuthContext } from "./contexts/AuthContext"

function PrivateRoute({ children }: { children: JSX.Element }) {
    const auth = useContext(AuthContext)
    return auth?.user ? children : <Navigate to="/login" replace/>
}

function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
