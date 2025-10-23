interface ButtonProps {
  label: string
  onClick?: () => void
  type?: "button" | "submit"
}

export function Button({ label, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn-accent uppercase tracking-wider font-orbitron"
    >
      {label}
    </button>
  )
}