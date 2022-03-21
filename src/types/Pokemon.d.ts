type PokemonName = {
  name: string
}

type PokemonSpecyFlavorText = {
  flavor_text: string
}

type PoekmonSpecy = {
  pokemon_v2_pokemonspeciesnames: Array<PokemonName>
  pokemon_v2_pokemonspeciesflavortexts: Array<PokemonSpecyFlavorText>
}

type PokemonType = {
  pokemon_v2_type: {
    pokemon_v2_typenames: Array<PokemonName>
  }
}

type Pokemon = {
  name: string
  id: number
  height: number
  weight: number
  pokemon_v2_pokemonspecy: PoekmonSpecy
  pokemon_v2_pokemontypes: Array<PokemonType>
}

type PokemonList = {
  pokemon_v2_pokemon: Array<Pokemon>
}
