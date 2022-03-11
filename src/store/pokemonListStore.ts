import { atom } from 'recoil'

type PokemonLink = {
  name: string
  url: string
}

type PokeList = Array<PokemonLink>

export const pokemonListState = atom<PokeList | undefined>({
  key: 'pokemonListState',
  default: undefined,
})

export const pokemonState = atom<PokemonLink | undefined>({
  key: 'pokemonState',
  default: undefined,
})
