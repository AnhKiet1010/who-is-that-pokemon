import { POKEMON_URL } from '@/config/API'
import { request, gql } from 'graphql-request'

export const getPokemonList = async () => {
  const query = gql`
    {
      pokemon_v2_pokemon {
        name
        id
        height
        weight
        pokemon_v2_pokemonspecy {
          pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: 1 } }) {
            name
          }
          pokemon_v2_pokemonspeciesflavortexts(where: { language_id: { _eq: 1 } }) {
            flavor_text
          }
        }
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            pokemon_v2_typenames(where: { language_id: { _eq: 1 } }) {
              name
            }
          }
        }
        pokemon_v2_pokemonsprites {
          sprites
        }
      }
    }
  `

  return await request<PokemonList>(POKEMON_URL, query).then((res) => res.pokemon_v2_pokemon)
}
