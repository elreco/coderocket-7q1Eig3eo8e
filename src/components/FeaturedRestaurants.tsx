import RestaurantCard from './RestaurantCard'

export default function FeaturedRestaurants() {
  const restaurants = [
    {
      id: 1,
      name: "Le Comptoir du Relais",
      cuisine: "Bistrot traditionnel",
      image: "https://picsum.photos/id/431/400/300",
      rating: 4.8,
      priceRange: "€€€"
    },
    {
      id: 2,
      name: "L'Ami Jean",
      cuisine: "Cuisine du Sud-Ouest",
      image: "https://picsum.photos/id/312/400/300",
      rating: 4.7,
      priceRange: "€€€"
    },
    {
      id: 3,
      name: "Breizh Café",
      cuisine: "Crêperie moderne",
      image: "https://picsum.photos/id/292/400/300",
      rating: 4.6,
      priceRange: "€€"
    },
    {
      id: 4,
      name: "Le Chateaubriand",
      cuisine: "Cuisine créative",
      image: "https://picsum.photos/id/541/400/300",
      rating: 4.9,
      priceRange: "€€€€"
    },
    {
      id: 5,
      name: "Du Pain et des Idées",
      cuisine: "Boulangerie artisanale",
      image: "https://picsum.photos/id/312/400/300",
      rating: 4.8,
      priceRange: "€"
    },
    {
      id: 6,
      name: "Le Mary Celeste",
      cuisine: "Bar à huîtres",
      image: "https://picsum.photos/id/431/400/300",
      rating: 4.5,
      priceRange: "€€€"
    }
  ]

  return (
    <section className="py-16 bg-background-light">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-color mb-4">
            Restaurants en vedette
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection des meilleurs restaurants parisiens, 
            choisis pour leur excellence culinaire et leur atmosphère unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  )
}