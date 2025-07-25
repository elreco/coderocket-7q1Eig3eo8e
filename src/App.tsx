import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedRestaurants from './components/FeaturedRestaurants'
import Neighborhoods from './components/Neighborhoods'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedRestaurants />
        <Neighborhoods />
      </main>
      <Footer />
    </div>
  )
}

export default App