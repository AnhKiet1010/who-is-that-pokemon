import { POKEMON_LIST_URL } from '@/config/API'
import { PokemonList } from '@/types/Pokemon'
import axios from 'axios'

export const getPokemonList = async () => {
  return await axios.get<PokemonList>(POKEMON_LIST_URL).then((res) => res.data.results)
}
