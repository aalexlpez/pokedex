import Image from 'next/image';
import Link from 'next/link';
import { formatPokemonName } from '@/lib/pokemon-api';
import { PokemonListItem } from '@/types/pokemon';

interface PokemonCardProps {
  pokemon: PokemonListItem;
  showId?: boolean;
  showDetails?: boolean;
}

export default function PokemonCard({ pokemon, showId = false, showDetails = true }: PokemonCardProps) {
  const cardContent = (
    <div className="group relative">
      {/* Pokédex Device */}
      <div className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border-4 border-red-800">

        {/* Pokédex Top Panel (Left Side) */}
        <div className="relative p-4">
          {/* Main Screen Area */}
          <div className="bg-black rounded-lg p-3 mb-3 shadow-inner border border-gray-600 group-hover:border-b-black  group-hover:scale-y-116 group-hover:origin-top transition-all duration-500">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-md p-2 h-32 flex items-center justify-center relative">
              <Image
                src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                alt={pokemon.name}
                width={120}
                height={200}
                className="drop-shadow-lg group-hover:scale-120 transition-all duration-500"
                priority
              />
              {/* Screen reflection effect */}
              <div className="absolute top-1 left-1 w-8 h-1 bg-white opacity-20 rounded-full"></div>
            </div>
          </div>

          {/* Info Screen */}
          <div className="bg-black rounded-lg p-3 mb-3 border border-gray-600">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-md p-2 text-white text-center">
              <h3 className="text-sm font-bold mb-1 text-yellow-300 drop-shadow-sm">
                {formatPokemonName(pokemon.name)}
              </h3>
              {showId && (
                <p className="text-xs text-gray-300 mb-1 font-mono">#{pokemon.id.toString().padStart(3, '0')}</p>
              )}
              <div className="text-xs text-gray-400 font-mono">
                POKÉMON DATA
              </div>
            </div>
          </div>

          {/* Hinge Line - Moved below the name */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 to-red-900 transform z-10"></div>
          {/* Status Light */}
          <div className="flex justify-center">
            <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full animate-pulse shadow-lg border border-blue-300"></div>
          </div>
        </div>

        {/* Pokédex Bottom Panel (Right Side) */}
        <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-4 rounded-b-2xl">
          {/* Control Panel */}
          <div className="flex justify-between items-center mb-3">
            {/* D-Pad */}
            <div className="flex flex-col items-center space-y-1">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-inner">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm"></div>
              </div>
              <div className="flex space-x-1">
                <div className="w-6 h-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-inner">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                <div className="w-6 h-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-inner">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                <div className="w-6 h-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-inner">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-inner">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-lg border border-yellow-300"></div>
              <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-lg border border-green-300"></div>
              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full shadow-lg border border-blue-300"></div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full shadow-inner"></div>
              <div className="w-4 h-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full shadow-inner"></div>
            </div>

            {showDetails && (
              <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black px-4 py-1 rounded-full font-bold text-xs border border-yellow-300">
                VER DETALLES
              </div>
            )}
          </div>
        </div>

        {/* Screw Details */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-inner"></div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-inner"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-inner"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-inner"></div>

        {/* Additional Details */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-600 rounded-full opacity-50"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-600 rounded-full opacity-30"></div>
      </div>
    </div>
  );

  if (showDetails) {
    return (
      <Link href={`/pokemon/${pokemon.id}`} className="block cursor-pointer" style={{ textDecoration: 'none' }}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}