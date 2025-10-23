import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { AuthProvider } from "./contexts/AuthContext"
import "./styles/index.css"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Elemento root não encontrado no index.html")
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
