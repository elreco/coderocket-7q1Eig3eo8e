import { Star } from 'lucide-react'

interface Restaurant {
  id: number
  name: string
  cuisine: string
  image: string
  rating: number
  priceRange: string
}

interface RestaurantCardProps {
  restaurant: Restaurant
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="restaurant-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-text-color">
            {restaurant.name}
          </h3>
          <span className="text-sm font-medium text-gray-500">
            {restaurant.priceRange}
          </span>
        </div>
        
        <p className="text-gray-600 mb-3">
          {restaurant.cuisine}
        </p>
        
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium text-gray-700">
            {restaurant.rating}
          </span>
        </div>
      </div>
    </div>
  )
}