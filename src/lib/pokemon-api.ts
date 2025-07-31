import { Pokemon, PokemonListItem, VowelCount } from '@/types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemon(id: number): Promise<Pokemon> {
  console.log(`Fetching Pokemon with ID: ${id}`);
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  console.log(`Response status: ${response.status}`);
  if (!response.ok) {
    console.error(`Failed to fetch Pokemon ${id}: ${response.status} ${response.statusText}`);
    throw new Error(`Failed to fetch Pokemon ${id}`);
  }
  const data = await response.json();
  console.log(`Successfully fetched Pokemon: ${data.name}`);
  return data;
}

export async function getPokemonList(startId: number, endId: number): Promise<PokemonListItem[]> {
  const promises = [];
  for (let i = startId; i <= endId; i++) {
    promises.push(getPokemon(i));
  }
  
  const pokemons = await Promise.all(promises);
  return pokemons.map(pokemon => ({
    id: pokemon.id,
    name: pokemon.name,
    sprites: pokemon.sprites
  }));
}

export async function getRandomPokemons(count: number = 5): Promise<Pokemon[]> {
  // Generate random odd numbers between 1 and 500
  const randomIds: number[] = [];
  while (randomIds.length < count) {
    const randomId = Math.floor(Math.random() * 500) + 1;
    if (randomId % 2 === 1 && !randomIds.includes(randomId)) {
      randomIds.push(randomId);
    }
  }
  
  const promises = randomIds.map(id => getPokemon(id));
  return Promise.all(promises);
}

export function countVowels(names: string[]): VowelCount {
  const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  
  names.forEach(name => {
    const lowerName = name.toLowerCase();
    for (const char of lowerName) {
      if (vowels.hasOwnProperty(char)) {
        vowels[char as keyof VowelCount]++;
      }
    }
  });
  
  return vowels;
}

export function formatPokemonName(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function getTypeColor(type: string): string {
  const colors: Record<string, string> = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500',
    ice: 'bg-blue-200',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    flying: 'bg-indigo-400',
    psychic: 'bg-pink-500',
    bug: 'bg-green-400',
    rock: 'bg-yellow-700',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-700',
    dark: 'bg-gray-700',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-300'
  };
  
  return colors[type] || 'bg-gray-400';
} 