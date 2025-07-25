export default function Hero() {
  return (
    <section className="relative h-[800px] bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: 'url(https://picsum.photos/id/326/1920/800)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative max-w-[1200px] mx-auto px-5 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Découvrez les meilleurs restaurants de Paris
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Sélectionnés et testés par nos experts culinaires
          </p>
          <button className="btn-primary">
            Explorer
          </button>
        </div>
      </div>
    </section>
  )
}