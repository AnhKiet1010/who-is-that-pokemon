import { getPokemonList } from '@/api/pokemon'
import Header from '@/components/Header'
import { POKEMON_LIST_URL, POKEMON_LIST_URL_TYPE } from '@/config/API'
import { useOptions } from '@/hooks/useOptions'
import { usePokemonList } from '@/hooks/usePokemonList'
import { optionKeyList } from '@/store/optionsStore'
import { PokemonInfo } from '@/types/Pokemon'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { FC } from 'react'
import { SWRConfig } from 'swr'

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

type TestProp2 = {
  checked: boolean
  type: string
}

const Test2: FC<TestProp2> = ({ checked, type }) => {
  const { setOption } = useOptions()

  return (
    <div>
      {checked && <div>{`${type} active`}</div>}
      <input type="checkbox" checked={checked} onChange={() => setOption(type)} />
    </div>
  )
}

const Home: NextPage<PageProps> = ({ fallback }) => {
  const { options } = useOptions()

  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      {optionKeyList.map((option) => (
        <Test2 checked={options[option]} type={option} key={option} />
      ))}
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
