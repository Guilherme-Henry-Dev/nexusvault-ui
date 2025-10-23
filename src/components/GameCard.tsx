interface GameCardProps {
  title: string
  genre: string
  rating: number
}

export function GameCard({ title, genre, rating }: GameCardProps) {
  return (
    <div className="card w-72 text-center hover:scale-105">
      <h2 className="text-2xl font-orbitron mb-2">{title}</h2>
      <p className="text-sm text-gray-400">{genre}</p>
      <span className="mt-3 inline-block text-accent font-semibold">
        Nota: {rating}/10
      </span>
    </div>
  )
}