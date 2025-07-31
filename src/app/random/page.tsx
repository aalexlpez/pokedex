import RandomPokemonSection from '@/components/RandomPokemonSection';

export default function RandomPage() {
  return (
    <div className="min-h-screen py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent flex items-center justify-center space-x-3">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <span>Pokémon Aleatorios</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre 5 Pokémon aleatorios del rango 1-500 (índices impares).
          Explora las estadísticas de vocales en sus nombres.
        </p>
      </div>
      {/* Sección dinámica */}
      <RandomPokemonSection />
    </div>
  );
} 