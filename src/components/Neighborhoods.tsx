import NeighborhoodCard from './NeighborhoodCard'

export default function Neighborhoods() {
  const neighborhoods = [
    {
      id: 1,
      name: "Le Marais",
      description: "Quartier historique aux ruelles pavées",
      image: "https://picsum.photos/id/378/400/300",
      restaurantCount: 45
    },
    {
      id: 2,
      name: "Saint-Germain",
      description: "Élégance et gastronomie parisienne",
      image: "https://picsum.photos/id/429/400/300",
      restaurantCount: 38
    },
    {
      id: 3,
      name: "Montmartre",
      description: "Charme bohème et vues panoramiques",
      image: "https://picsum.photos/id/515/400/300",
      restaurantCount: 32
    },
    {
      id: 4,
      name: "Belleville",
      description: "Diversité culinaire et ambiance authentique",
      image: "https://picsum.photos/id/342/400/300",
      restaurantCount: 28
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-color mb-4">
            Explorer par quartier
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chaque quartier de Paris a sa propre personnalité culinaire. 
            Explorez les saveurs uniques de chaque arrondissement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {neighborhoods.map((neighborhood) => (
            <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            Voir les recommandations
          </button>
        </div>
      </div>
    </section>
  )
}