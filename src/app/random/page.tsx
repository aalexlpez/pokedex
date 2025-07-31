import RandomPokemonSection from '@/components/RandomPokemonSection';

export default function RandomPage() {
  return (
    <div className="min-h-screen py-12 space-y-12 bg-gray-100">
      {/* Header */}
      <div className="text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
          Pokémon Aleatorios
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Descubre 5 Pokémon aleatorios.
          Explora las estadísticas de vocales en sus nombres.
        </p>
      </div>
      {/* Sección dinámica */}
      <RandomPokemonSection />
    </div>
  );
} 