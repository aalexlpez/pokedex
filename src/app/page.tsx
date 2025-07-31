import { getPokemonList, getPokemon } from '@/lib/pokemon-api';
import PokemonCard from '@/components/PokemonCard';
import Link from 'next/link';

export default async function HomePage() {
  const pokemons = await getPokemonList(1, 9);

  // Obtener datos completos para el análisis
  const pokemonDetails = await Promise.all(
    pokemons.map(pokemon => getPokemon(pokemon.id))
  );

  // Calcular estadísticas más interesantes
  const types = pokemonDetails.flatMap(pokemon => 
    pokemon.types?.map(type => type.type.name) || []
  );
  const uniqueTypes = [...new Set(types)];
  const typeCounts = types.reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const mostCommonType = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

          {/* Stats Section */}
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center space-x-3">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
              </svg>
              <span>Análisis de la Colección</span>
            </h2>
            
            {/* Estadísticas Principales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border border-red-200 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-4xl font-bold text-red-600 mb-2">{pokemons.length}</div>
                <div className="text-sm text-gray-600 font-medium">Pokémon</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{uniqueTypes.length}</div>
                <div className="text-sm text-gray-600 font-medium">Tipos Únicos</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">{mostCommonType?.[0]?.toUpperCase() || 'N/A'}</div>
                <div className="text-sm text-gray-600 font-medium">Tipo Más Común</div>
              </div>
            </div>

            {/* Distribución de Tipos */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-700 mb-4 text-center flex items-center justify-center space-x-2">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                </svg>
                <span>Distribución de Tipos</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(typeCounts).map(([type, count]) => (
                  <div key={type} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-700 capitalize">{type}</span>
                      <span className="text-2xl font-bold text-blue-600">{count}</span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(count / pokemons.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-600">
              ¿Quieres descubrir más Pokémon?
            </p>
            <Link
              href="/random"
              className="inline-block bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Ver Pokémon Aleatorios</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
