"use client";
import React from "react";

export default function FilterBar({ name, setName, types, selectedTypes, setSelectedTypes }: any) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center items-center w-full">
            <input
                type="text"
                placeholder="Nom du Pokémon"
                value={name}
                onChange={e => setName(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="relative">
                <select
                    multiple
                    value={selectedTypes}
                    onChange={e => setSelectedTypes(Array.from(e.target.selectedOptions, o => o.value))}
                    className="appearance-none border border-gray-300 rounded px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[150px] bg-white dark:bg-gray-800 shadow-sm"
                >
                    {types.map((type: any) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}
