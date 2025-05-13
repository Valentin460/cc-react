"use client";
import React from "react";

export default function PokemonCard({ pokemon, onClick }: any) {
    return (
        <div
            onClick={() => onClick(pokemon.id)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 m-2 cursor-pointer hover:scale-105 transition-transform w-56 flex flex-col items-center border border-gray-200 dark:border-gray-700"
        >
            <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 object-contain mb-2" />
            <div className="font-bold text-lg mb-1">#{pokemon.id} {pokemon.name}</div>
            <div className="flex flex-wrap gap-2 justify-center">
                {pokemon.types.map((type: any) => (
                    <span
                        key={type.id}
                        className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                        {type.name}
                    </span>
                ))}
            </div>
        </div>
    );
}
