import Header from '@/components/Header'
import { getPokemonList } from 'api/pokemon'
import { POKEMON_LIST_URL, POKEMON_LIST_URL_TYPE } from 'config/API'
import { usePokemonList } from 'hooks/usePokemonList'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { SWRConfig } from 'swr'
import { PokemonInfo } from 'types/Pokemon'

type Props<K extends POKEMON_LIST_URL_TYPE> = {
  fallback: {
    [k in K]: PokemonInfo[]
  }
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Test = () => {
  const { data } = usePokemonList()
  return (
    <>
      <ul>
        {data?.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </>
  )
}

const Home: NextPage<PageProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <Test />
    </SWRConfig>
  )
}

export const getStaticProps: GetStaticProps<Props<POKEMON_LIST_URL_TYPE>> = async () => {
  const pokemonList = await getPokemonList()

  return {
    props: {
      fallback: {
        [POKEMON_LIST_URL]: pokemonList,
      },
    },
  }
}

export default Home
