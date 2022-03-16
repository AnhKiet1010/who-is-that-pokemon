import useSWRImmutable from 'swr/immutable'
import { POKEMON_LIST_URL } from 'config/API'
import { getPokemonList } from 'api/pokemon'

export const usePokemonList = () => {
  const fetcher = () => getPokemonList()

  return useSWRImmutable(POKEMON_LIST_URL, fetcher)
}
