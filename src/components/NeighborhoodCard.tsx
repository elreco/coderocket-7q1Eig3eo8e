interface Neighborhood {
  id: number
  name: string
  description: string
  image: string
  restaurantCount: number
}

interface NeighborhoodCardProps {
  neighborhood: Neighborhood
}

export default function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-64 rounded-lg overflow-hidden mb-4">
        <img
          src={neighborhood.image}
          alt={neighborhood.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold mb-1">
            {neighborhood.name}
          </h3>
          <p className="text-sm opacity-90">
            {neighborhood.restaurantCount} restaurants
          </p>
        </div>
      </div>
      <p className="text-gray-600 text-sm">
        {neighborhood.description}
      </p>
    </div>
  )
}