import useSWRImmutable from 'swr/immutable'
import { getPokemonList } from '@/api/pokemon'
import { POKEMON_URL } from '@/config/API'

export const usePokemonList = () => {
  const fetcher = () => getPokemonList()

  return useSWRImmutable(POKEMON_URL, fetcher)
}
