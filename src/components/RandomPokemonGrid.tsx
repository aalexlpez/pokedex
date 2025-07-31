"use client";

import { useEffect, useState } from "react";
import PokemonCard from "@/components/PokemonCard";
import { Pokemon } from "@/types/pokemon";

export default function RandomPokemonGrid() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemons = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/random-pokemons");
      if (!res.ok) throw new Error("Error al obtener pokemones aleatorios");
      const data = await res.json();
      setPokemons(data);
    } catch (err) {
      setError("No se pudieron cargar los pokemones aleatorios.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-lg font-semibold">Cargando pokemones aleatorios...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-600 font-semibold">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="animate-fade-in-up">
          <PokemonCard pokemon={pokemon} showId={true} showDetails={true} />
        </div>
      ))}
    </div>
  );
}