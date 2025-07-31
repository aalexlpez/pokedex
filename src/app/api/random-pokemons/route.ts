import { NextResponse } from 'next/server';
import { getRandomPokemons } from '@/lib/pokemon-api';

export async function GET() {
  try {
    const pokemons = await getRandomPokemons(5);
    return NextResponse.json(pokemons, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Error al obtener pokemones aleatorios' }, { status: 500 });
  }
}