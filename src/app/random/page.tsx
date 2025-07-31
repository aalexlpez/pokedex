import { getRandomPokemons, countVowels, formatPokemonName } from '@/lib/pokemon-api';
import PokemonCard from '@/components/PokemonCard';
import Link from 'next/link';

export default async function RandomPage() {
  const randomPokemons = await getRandomPokemons(5);
  const vowelCount = countVowels(randomPokemons.map(p => p.name));

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

      {/* Pokemon Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4">
        {randomPokemons.map((pokemon) => (
          <div key={pokemon.id} className="animate-fade-in-up">
            <PokemonCard pokemon={pokemon} showId={true} showDetails={true} />
          </div>
        ))}
      </div>

      {/* Vowel Count Table */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center space-x-3">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
            </svg>
            <span>Conteo de vocales en los nombres</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full max-w-md mx-auto">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-700 text-lg">Vocal</th>
                  <th className="text-right py-4 px-6 font-bold text-gray-700 text-lg">Repeticiones</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(vowelCount).map(([vowel, count]) => (
                  <tr key={vowel} className="border-b border-gray-300 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-700 text-lg">
                      {vowel.toUpperCase()}
                    </td>
                    <td className="py-4 px-6 text-right font-bold text-lg">
                      <span className="bg-gradient-to-r from-blue-500 to-blue-300 text-white px-3 py-1 rounded-full">
                        {count}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
              <div className="flex justify-center mb-2">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-red-600">
                {Object.values(vowelCount).reduce((sum, count) => sum + count, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Vocales</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="flex justify-center mb-2">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {Object.values(vowelCount).filter(count => count > 0).length}
              </div>
              <div className="text-sm text-gray-600">Vocales Únicas</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
              <div className="flex justify-center mb-2">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-yellow-600">
                {Object.entries(vowelCount).reduce((max, [vowel, count]) =>
                  count > max.count ? { vowel, count } : max,
                  { vowel: 'a', count: 0 }
                ).vowel.toUpperCase()}
              </div>
              <div className="text-sm text-gray-600">Más Frecuente</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="flex justify-center mb-2">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-green-600">
                {randomPokemons.length}
              </div>
              <div className="text-sm text-gray-600">Pokémon</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pokemon Names List */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-300">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center space-x-2">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
            </svg>
            <span>Nombres Analizados</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {randomPokemons.map((pokemon) => (
              <div key={pokemon.id} className="bg-gradient-to-r from-red-100 to-blue-100 px-4 py-2 rounded-full border border-red-200">
                <span className="font-medium text-gray-800">
                  {formatPokemonName(pokemon.name)}
                </span>
                <span className="ml-2 text-sm text-gray-500">#{pokemon.id}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore More Button */}
      <div className="text-center space-y-6">
        <p className="text-lg text-gray-600">
          ¿Quieres explorar más Pokémon aleatorios?
        </p>
        <Link
          href="/random"
          className="inline-block bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto"
        >
          <span>Haz click aquí</span>
        </Link>
      </div>
    </div>
  );
} 