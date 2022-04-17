import { getPokemonList } from '@/api/pokemon'
import Header from '@/components/Header'
// import Image from 'next/image'
import { POKEMON_URL } from '@/config/API'
import { useLevel } from '@/hooks/useLevel'
import { useOptions } from '@/hooks/useOptions'
// import { usePokemon } from '@/hooks/usePokemonList'
import { levelKeyList } from '@/store/levelStore'
import { optionKeyList } from '@/store/optionsStore'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { FC } from 'react'
import { SWRConfig } from 'swr'
import dynamic from 'next/dynamic'

const Quiz = dynamic(() => import('@/components/Quiz'), { ssr: false })

type Props<K extends typeof POKEMON_URL> = {
  fallback: {
    [k in K]: Array<Pokemon>
  }
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

// const Test = () => {
//   const randomPokemon = usePokemon()

//   return randomPokemon ? (
//     <>
//       <div>{randomPokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesnames[0].name}</div>
//       <Image alt="Vercel logo" src={`${POKEMON_BACK_IMG_URL}${randomPokemon.id}.png`} layout="fill" />
//       <Image alt="Vercel logo" src={`${POKEMON_FRONT_IMG_URL}${randomPokemon.id}.png`} layout="fill" />
//       <Image alt="Vercel logo" src={`${POKEMON_OFFICIAL_IMG_URL}${randomPokemon.id}.png`} layout="fill" />
//     </>
//   ) : (
//     <div></div>
//   )
// }

type TestProp2 = {
  option: string
}

const Test2: FC<TestProp2> = ({ option }) => {
  const { options, setOption } = useOptions()
  const checked = options[option]

  return (
    <div>
      {checked && <div>{`${option} active`}</div>}
      <input type="checkbox" checked={checked} onChange={() => setOption(option)} />
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
  const { level } = useLevel()

  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      {optionKeyList.map((option) => (
        <Test2 option={option} key={option} />
      ))}
      {levelKeyList.map((v) => (
        <Test3 checked={level === v} level={v} key={v} />
      ))}
      {/* <Test /> */}
      <Quiz />
    </SWRConfig>
  )
}

export const getStaticProps: GetStaticProps<Props<typeof POKEMON_URL>> = async () => {
  const pokemonList = await getPokemonList()

  return {
    props: {
      fallback: {
        [POKEMON_URL]: pokemonList,
      },
    },
  }
}

export default Home
