import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { text: 'Restaurants', url: '/restaurants' },
    { text: 'Quartiers', url: '/quartiers' },
    { text: 'Collections', url: '/collections' },
    { text: 'Magazine', url: '/blog' }
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">ElReco</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.url}
                className="text-text-color hover:text-primary transition-colors font-medium"
              >
                {item.text}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.url}
                className="block py-2 text-text-color hover:text-primary transition-colors font-medium"
              >
                {item.text}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}