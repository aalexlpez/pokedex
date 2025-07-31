import { getPokemonList } from '@/lib/pokemon-api';
import PokemonCard from '@/components/PokemonCard';
import Link from 'next/link';

export default async function HomePage() {
  const pokemons = await getPokemonList(1, 9);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:pb-20 sm:pt-10">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="relative">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                Pokédex
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explora los primeros Pokémon del mundo. Descubre sus habilidades, tipos y estadísticas únicas.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>

          {/* Pokemon Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pokemons.map((pokemon, index) => (
              <div key={pokemon.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PokemonCard pokemon={pokemon} />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-600">
              ¿Quieres descubrir más Pokémon?
            </p>
            <Link
              href="/random"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Ver Pokémon Aleatorios</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}
