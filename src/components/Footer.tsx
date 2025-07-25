export default function Footer() {
  return (
    <footer className="bg-text-color text-white py-12">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ElReco</h3>
            <p className="text-gray-300 text-sm">
              Votre guide de confiance pour découvrir les meilleurs restaurants de Paris.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Explorer</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/restaurants" className="text-gray-300 hover:text-white transition-colors">Restaurants</a></li>
              <li><a href="/quartiers" className="text-gray-300 hover:text-white transition-colors">Quartiers</a></li>
              <li><a href="/collections" className="text-gray-300 hover:text-white transition-colors">Collections</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">À propos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Notre équipe</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Magazine</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 ElReco. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}