import Header from '@/components/Header'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRecoilValue } from 'recoil'
import { pokemonState } from 'store/pokemonListStore'
import useSWR, { Key, Fetcher } from 'swr'
import Image from 'next/image'

type PokeDetail = {
  name: string
  sprites: {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
    other: {
      dream_world: {
        front_default: string | null
        front_female: string | null
      }
      home: {
        front_default: string | null
        front_female: string | null
        front_shiny: string | null
        front_shiny_female: string | null
      }
      'official-artwork': {
        front_default: string
      }
    }
  }
}

const uid: Key = 'pokemonDetail'

const Pokemon: NextPage = () => {
  const pokemon = useRecoilValue(pokemonState)
  const fetcher: Fetcher<PokeDetail, Key> = () => fetch(pokemon!.url).then((res) => res.json())

  const { data } = useSWR(uid, fetcher)

  return (
    <>
      <Header />
      {data && <Image src={data?.sprites?.other?.['official-artwork'].front_default} layout="fill" alt={data.name} />}
    </>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Pokemon
