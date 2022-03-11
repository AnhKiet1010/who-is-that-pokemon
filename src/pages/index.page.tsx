import Header from '@/components/Header'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { pokemonListState, pokemonState } from 'store/pokemonListStore'
import useSWR, { Key, Fetcher } from 'swr'

type PokeResponse = {
  count: number
  next: string | null
  previous: string | null
  results: Array<{
    name: string
    url: string
  }>
}

const uid: Key = 'pokemonList'
const fetcher: Fetcher<PokeResponse, Key> = () =>
  fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=5000').then((res) => res.json())

const Home: NextPage = () => {
  const setPokemonList = useSetRecoilState(pokemonListState)
  const setPokemon = useSetRecoilState(pokemonState)

  const { data } = useSWR(uid, fetcher)

  useEffect(() => {
    const pokemonList = data?.results
    setPokemonList(pokemonList)
    const randomPokemon = pokemonList ? pokemonList[Math.floor(Math.random() * pokemonList.length)] : undefined
    setPokemon(randomPokemon)
  }, [data, setPokemon, setPokemonList])

  return (
    <>
      <Header />
      <Link href="/pokemon">
        <a>show pokemon!</a>
      </Link>
    </>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
