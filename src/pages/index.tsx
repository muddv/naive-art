import type { NextPage } from 'next'
import Head from 'next/head'
import Menu from './menu'
import Gallery from './gallery'
import Footer from './footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Наивное искусство</title>
        <meta name="description" content="Наивная верстка" />
      </Head>
      <Menu></Menu>
      <header className="flex flex-col justify-center items-center">
        <div className="lg:w-1/2 md:w-3/4">
        <h1 className="text-header1 font-semibold text-center text-header-black">Наивное искусство</h1>
        <div className="mt-5 text-2xl text-center text-body-gray">Современные технологии достигли такого уровня, что глубокий уровень погружения представляет собой интересный эксперимент проверки новых принципов формирования материально-технической и кадровой базы.</div>
        </div>
      </header>
      <Gallery></Gallery>
      <Footer></Footer>
    </>
  )
}

export default Home
