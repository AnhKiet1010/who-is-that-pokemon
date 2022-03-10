import Header from '@/components/Header'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
  return (
    <>
      <Header />
    </>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
