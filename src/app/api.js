const BASE_URL = "https://nestjs-pokedex-api.vercel.app";

export async function fetchPokemons({ page = 1, limit = 50, name = "", types = [] }) {
    let url = `${BASE_URL}/pokemons?page=${page}&limit=${limit}`;
    if (name) url += `&name=${name}`;
    if (types.length) url += `&types=${types.join(",")}`;
    const res = await fetch(url);
    return res.json();
}

export async function fetchTypes() {
    const res = await fetch(`${BASE_URL}/types`);
    return res.json();
}

export async function fetchPokemonById(id) {
    const res = await fetch(`${BASE_URL}/pokemons/${id}`);
    return res.json();
}
