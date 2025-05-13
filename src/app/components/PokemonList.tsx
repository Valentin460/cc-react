"use client";
import React, { useEffect, useState } from "react";
import { fetchPokemons, fetchTypes } from "../api";
import PokemonCard from "./PokemonCard";
import FilterBar from "./FilterBar";

export default function PokemonList({ onSelect }: { onSelect: (id: string) => void }) {
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [name, setName] = useState("");
    const [types, setTypes] = useState<any[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

    useEffect(() => {
        fetchTypes().then(setTypes);
    }, []);

    useEffect(() => {
        setPokemons([]);
        setPage(1);
        setHasMore(true);
    }, [name, selectedTypes]);

    useEffect(() => {
        if (!hasMore) return;
        fetchPokemons({ page, name, types: selectedTypes }).then(data => {
            if (Array.isArray(data)) {
                setPokemons(prev => [...prev, ...data]);
                setHasMore(data.length > 0);
            } else if (data.items && Array.isArray(data.items)) {
                setPokemons(prev => [...prev, ...data.items]);
                setHasMore(data.items.length > 0);
            } else {
                setHasMore(false);
            }
        });
    }, [page, name, selectedTypes, hasMore]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && hasMore) {
                setPage(p => p + 1);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasMore]);

    return (
        <div>
            <FilterBar name={name} setName={setName} types={types} selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} />
            <div className="flex flex-wrap justify-center">
                {pokemons.map((p, idx) => (
                    <PokemonCard key={`${p.id}-${idx}`} pokemon={p} onClick={onSelect} />
                ))}
            </div>
            {!hasMore && <div className="text-center text-gray-500 mt-4">Fin de la liste</div>}
        </div>
    );
}
