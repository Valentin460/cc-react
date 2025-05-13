"use client";
import React, { useState } from "react";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 dark:text-blue-300">Pokédex</h1>
      {!selectedId ? (
        <PokemonList onSelect={setSelectedId} />
      ) : (
        <PokemonDetail id={selectedId} onBack={() => setSelectedId(null)} />
      )}
    </div>
  );
}
