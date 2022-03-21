import { getPokemonList } from '@/api/pokemon'
import Header from '@/components/Header'
import { POKEMON_LIST_URL, POKEMON_LIST_URL_TYPE } from '@/config/API'
import { useLevel } from '@/hooks/useLevel'
import { useOptions } from '@/hooks/useOptions'
import { usePokemonList } from '@/hooks/usePokemonList'
import { levelKeyList } from '@/store/levelStore'
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

type TestProp3 = {
  checked: boolean
  level: string
}

const Test3: FC<TestProp3> = ({ checked, level }) => {
  const { setLevel } = useLevel()

  return (
    <div>
      <input type="radio" checked={checked} onChange={() => setLevel(level)} />
      {level}
    </div>
  )
}

const Home: NextPage<PageProps> = ({ fallback }) => {
  const { options } = useOptions()
  const { level } = useLevel()

  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      {optionKeyList.map((option) => (
        <Test2 checked={options[option]} type={option} key={option} />
      ))}
      {levelKeyList.map((v) => (
        <Test3 checked={level === v} level={v} key={v} />
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
