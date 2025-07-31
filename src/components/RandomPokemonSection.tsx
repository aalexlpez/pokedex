"use client";

import { useEffect, useState } from "react";
import PokemonCard from "@/components/PokemonCard";
import { Pokemon } from "@/types/pokemon";
import { countVowels, formatPokemonName } from "@/lib/pokemon-api";
import type { VowelCount } from "@/types/pokemon";

export default function RandomPokemonSection() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [vowelCount, setVowelCount] = useState<VowelCount>({ a: 0, e: 0, i: 0, o: 0, u: 0 });

    const fetchPokemons = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/random-pokemons");
            if (!res.ok) throw new Error("Error al obtener pokemones aleatorios");
            const data = await res.json();
            setPokemons(data);
            setVowelCount(countVowels(data.map((p: Pokemon) => p.name)));
        } catch (err) {
            setError("No se pudieron cargar los pokemones aleatorios.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <>
            {/* Pokemon Grid */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-12">
                    <svg className="animate-spin h-10 w-10 text-yellow-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    <div className="text-lg font-semibold text-gray-700">Cargando pokemones aleatorios...</div>
                </div>
            ) : error ? (
                <div className="flex flex-col items-center justify-center py-12">
                    <svg className="w-12 h-12 text-red-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                    </svg>
                    <div className="text-lg font-semibold text-red-700 bg-red-100 px-6 py-4 rounded-xl shadow">
                        {error}
                    </div>
                </div>) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4">
                    {pokemons.map((pokemon) => (
                        <div key={pokemon.id} className="animate-fade-in-up">
                            <PokemonCard pokemon={pokemon} showId={true} showDetails={true} />
                        </div>
                    ))}
                </div>
            )}

            {/* Vowel Count Table */}
            {!loading && !error && (
                <div className="max-w-4xl mx-auto px-4 mt-12">
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
                                    {pokemons.length > 0 ? Math.round(pokemons.map(p => p.name.length).reduce((a, b) => a + b, 0) / pokemons.length) : 0}
                                </div>
                                <div className="text-sm text-gray-600">Longitud Promedio</div>
                            </div>
                            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                                <div className="flex justify-center mb-2">
                                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <div className="text-2xl font-bold text-green-600">
                                    {pokemons.length}
                                </div>
                                <div className="text-sm text-gray-600">Pokémon Mostrados</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Botón para recargar */}
            <div className="text-center space-y-6">
                <p className="text-lg text-gray-600">
                    ¿Quieres explorar más Pokémon aleatorios?
                </p>
                <button
                    onClick={fetchPokemons}
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto"
                >
                    <span>Haz click aquí</span>
                </button>
            </div>

            {/* <div className="text-center space-y-6">
                <p className="text-lg text-gray-600">
                    ¿Quieres explorar más Pokémon aleatorios?
                </p>
                <Link
                    href="/random"
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto"
                >
                    <span>Haz click aquí</span>
                </Link>
            </div> */}
        </>
    );
}