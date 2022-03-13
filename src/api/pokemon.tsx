import axios from 'axios'
import { POKEMON_LIST_URL } from 'config/API'
import { PokemonList } from 'types/Pokemon'

export const getPokemonList = async () => {
  return axios.get<PokemonList>(POKEMON_LIST_URL).then((res) => res.data.results)
}
