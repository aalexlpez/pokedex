import Image from 'next/image';
import Link from 'next/link';
import { getPokemon } from '@/lib/pokemon-api';
import { formatPokemonName, getTypeColor } from '@/lib/pokemon-api';
import { notFound } from 'next/navigation';

interface PokemonDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PokemonDetailPage({ params }: PokemonDetailPageProps) {
  try {
    const { id } = await params;
    const pokemon = await getPokemon(parseInt(id));

    return (
      <div className="min-h-screen bg-gray-400 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-800 font-bold hover:text-yellow-300 transition-colors text-sm mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Volver al inicio</span>
          </Link>

          {/* Pokédex Screen Container */}
          <div className="bg-black rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden sm:mt-10 mb-20">

            {/* Screen Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-b-2 border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <div className="text-green-400 font-mono text-sm">POKÉDEX v2.0</div>
                <div className="text-yellow-400 font-mono text-xs">SCANNING...</div>
              </div>
            </div>

            {/* Main Screen Content */}
            <div className="p-6 space-y-6">

              {/* Pokemon Header */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                                 {/* Pokemon Image */}
                 <div className="lg:col-span-1 h-full">
                   <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-inner h-full w-full flex items-center justify-center">
                     <Image
                       src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                       alt={pokemon.name}
                       width={300}
                       height={300}
                       className="drop-shadow-lg"
                       priority
                     />
                     {/* Screen scan lines effect */}
                     <div className="absolute inset-0 bg-gradient-to-b opacity-10 pointer-events-none">
                       <div className="h-px bg-green-400 animate-pulse" style={{ top: '20%' }}></div>
                       <div className="h-px bg-green-400 animate-pulse" style={{ top: '40%', animationDelay: '0.5s' }}></div>
                       <div className="h-px bg-green-400 animate-pulse" style={{ top: '60%', animationDelay: '1s' }}></div>
                       <div className="h-px bg-green-400 animate-pulse" style={{ top: '80%', animationDelay: '1.5s' }}></div>
                     </div>
                   </div>
                 </div>

                {/* Pokemon Info */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700">
                    <h1 className="text-3xl font-bold text-yellow-400 mb-1 font-mono">
                      {formatPokemonName(pokemon.name)}
                    </h1>
                    <p className="text-lg text-green-400 font-mono">#{pokemon.id.toString().padStart(3, '0')}</p>
                  </div>

                  {/* Types */}
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700">
                    <h3 className="text-sm font-semibold text-blue-400 mb-2 font-mono">TIPOS DETECTADOS</h3>
                    <div className="flex space-x-2">
                      {pokemon.types.map((type, index) => (
                        <span
                          key={index}
                          className={`${getTypeColor(type.type.name)} text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20`}
                        >
                          {formatPokemonName(type.type.name)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Basic Stats */}
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700">
                    <h3 className="text-sm font-semibold text-blue-400 mb-3 font-mono">DATOS BÁSICOS</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-gray-900 rounded-lg p-3 border border-gray-600">
                        <h4 className="text-xs font-medium text-gray-400 mb-1 font-mono">ALTURA</h4>
                        <p className="text-sm font-semibold text-green-400 font-mono">{(pokemon.height / 10).toFixed(1)} m</p>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-3 border border-gray-600">
                        <h4 className="text-xs font-medium text-gray-400 mb-1 font-mono">PESO</h4>
                        <p className="text-sm font-semibold text-green-400 font-mono">{(pokemon.weight / 10).toFixed(1)} kg</p>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-3 border border-gray-600">
                        <h4 className="text-xs font-medium text-gray-400 mb-1 font-mono">EXP</h4>
                        <p className="text-sm font-semibold text-green-400 font-mono">{pokemon.base_experience || 'N/A'}</p>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-3 border border-gray-600">
                        <h4 className="text-xs font-medium text-gray-400 mb-1 font-mono">ORDEN</h4>
                        <p className="text-sm font-semibold text-green-400 font-mono">{pokemon.order || 'N/A'}</p>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-3 border border-gray-600">
                        <h4 className="text-xs font-medium text-gray-400 mb-1 font-mono">ESPECIE</h4>
                        <p className="text-sm font-semibold text-green-400 font-mono">{formatPokemonName(pokemon.species?.name || 'N/A')}</p>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-3 border border-gray-600">
                        <h4 className="text-xs font-medium text-gray-400 mb-1 font-mono">HABILIDADES</h4>
                        <p className="text-sm font-semibold text-green-400 font-mono">{pokemon.abilities.length}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Stats Table */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 sm:p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-yellow-400 mb-4 font-mono">ESTADÍSTICAS BASE</h2>

                {/* Desktop Table */}
                <div className="hidden md:block">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-600">
                        <th className="text-left py-3 px-4 font-semibold text-blue-400 text-sm font-mono">ESTADÍSTICA</th>
                        <th className="text-left py-3 px-4 font-semibold text-blue-400 text-sm font-mono">VALOR</th>
                        <th className="text-left py-3 px-4 font-semibold text-blue-400 text-sm font-mono">PROGRESO</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pokemon.stats.map((stat, index) => (
                        <tr key={index} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                          <td className="py-3 px-4 font-medium text-green-400 text-sm font-mono">
                            {formatPokemonName(stat.stat.name)}
                          </td>
                          <td className="py-3 px-4 text-yellow-400 text-sm font-mono">{stat.base_stat}</td>
                          <td className="py-3 px-4">
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-300 shadow-lg"
                                style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-3">
                  {pokemon.stats.map((stat, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-green-400 text-sm font-mono">
                          {formatPokemonName(stat.stat.name)}
                        </span>
                        <span className="text-yellow-400 text-sm font-mono font-bold">
                          {stat.base_stat}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-400 to-blue-400 h-3 rounded-full transition-all duration-300 shadow-lg"
                          style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-400 font-mono">0</span>
                        <span className="text-xs text-gray-400 font-mono">255</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Abilities */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-yellow-400 mb-4 font-mono">HABILIDADES DETECTADAS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pokemon.abilities.map((ability, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${ability.is_hidden
                          ? 'bg-gradient-to-r from-yellow-900 to-yellow-800 border-yellow-600'
                          : 'bg-gradient-to-r from-blue-900 to-blue-800 border-blue-600'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-green-400 text-sm font-mono">
                          {formatPokemonName(ability.ability.name)}
                        </span>
                        {ability.is_hidden && (
                          <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded-full font-mono font-bold">
                            OCULTA
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Screen Footer */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-t-2 border-gray-700">
              <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
                <div>SCAN COMPLETE</div>
                <div>DATA LOADED</div>
                <div>READY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log('Error al obtener los detalles del Pokémon:', error);
    notFound();
  }
} 