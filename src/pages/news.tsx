import Head from 'next/head'
import Layout from '../components/Layout'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Наивное искусство - Новости</title>
        <meta name="description" content="Новости Наивного Искусства" />
      </Head>

      <header className="flex flex-col justify-center items-center">
        <div className="lg:w-1/2 md:w-3/4">
          <h1 className="text-header1 font-semibold text-center text-header-black">Новости</h1>
        </div>
      </header>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home
