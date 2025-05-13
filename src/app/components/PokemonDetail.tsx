"use client";
import React, { useEffect, useState } from "react";
import { fetchPokemonById } from "../api";

export default function PokemonDetail({ id, onBack }: { id: string, onBack: () => void }) {
    const [pokemon, setPokemon] = useState<any>(null);

    useEffect(() => {
        fetchPokemonById(id).then(setPokemon);
    }, [id]);

    if (!pokemon) return <div className="text-center mt-8">Chargement...</div>;

    return (
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-8">
            <button
                onClick={onBack}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Retour
            </button>
            <h2 className="text-2xl font-bold mb-2 text-center">{pokemon.name}</h2>
            <div className="flex justify-center mb-4">
                <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32 object-contain" />
            </div>
            <div className="mb-4 text-center">
                <strong>Types :</strong>{" "}
                {pokemon.types.map((t: any, idx: number) => (
                    <span
                        key={t.id || idx}
                        className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full px-3 py-1 text-xs font-semibold mr-2"
                    >
                        {t.name}
                    </span>
                ))}
            </div>
            <div className="mb-4">
                <strong>Stats :</strong>
                {pokemon.stats ? (
                    <ul className="list-disc list-inside">
                        <li>Attaque : {pokemon.stats.attack}</li>
                        <li>Défense : {pokemon.stats.defense}</li>
                        <li>Sp. Attaque : {pokemon.stats.special_attack}</li>
                        <li>Sp. Défense : {pokemon.stats.special_defense}</li>
                        <li>Vitesse : {pokemon.stats.speed}</li>
                    </ul>
                ) : (
                    <p>Aucune statistique disponible</p>
                )}
            </div>
            <div>
                <strong>Évolutions :</strong>
                <ul className="list-disc list-inside">
                    {Array.isArray(pokemon.evolutions) && pokemon.evolutions.length > 0 ? (
                        pokemon.evolutions.map((evo: any, idx: number) => (
                            <li key={evo.id || idx}>{evo.name}</li>
                        ))
                    ) : (
                        <li>Aucune évolution</li>
                    )}
                </ul>
            </div>
        </div>
    );
}
