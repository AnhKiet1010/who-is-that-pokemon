import useSWRImmutable from 'swr/immutable'
import { getPokemonList } from '@/api/pokemon'
import { POKEMON_URL } from '@/config/API'

export const usePokemonList = () => {
  const fetcher = () => getPokemonList()

  return useSWRImmutable(POKEMON_URL, fetcher)
}

export const usePokemon = () => {
  const { data } = usePokemonList()
  const randomPokemon = data ? data[Math.floor(Math.random() * data.length)] : undefined

  return randomPokemon
}
