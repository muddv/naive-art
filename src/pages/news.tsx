import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link' 
import Layout from '../components/Layout'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import headerBg from '../assets/images/news__header-bg.png'
import newsImage1 from '../assets/images/gallery__item-3.png'
import newsImage2 from '../assets/images/gallery__item-5.png'

function NewsItem(props: { newsTitle: string, newsText: string, newsImageSrc: StaticImageData["src"], newsImagePosition: boolean }) {
  return (
    <>
      <div className="text-naive-black mx-auto mb-5 flex justify-center lg:w-101 md:w-screen sm:w-screen">
        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* this is kinda janky */}
          <div className={props.newsImagePosition ? "flex-none mx-auto md:mx-0" : "hidden"}><Image src={props.newsImageSrc} alt={props.newsTitle + "Иллюстрация"}></Image></div>
          <div className="flex justify-center flex-col align-middle gap-5 ml-5 lg:ml-0 lg:w-newsText md:w-screen sm:w-screen">
            <h2 className="flex font-semibold text-header2">{props.newsTitle}</h2>
            {props.newsText}
          </div>
          {/* this is kinda janky */}
          <div className={props.newsImagePosition ? "hidden" : "flex-none mx-auto md:mx-0"}><Image src={props.newsImageSrc} alt={props.newsTitle + "Иллюстрация"}></Image></div>
        </div>
      </div>
    </>
  )
}

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Новости - Наивное искусство</title>
        <meta name="description" content="Новости Наивного Искусства" />
      </Head>
      <div className="w-screen flex justify-center -mt-2">
        <div className="flex lg:flex-none lg:w-101 md:w-screen sm:w-screen h-101">
          <Image className="relative" src={headerBg} alt="Фоновое изображение"></Image>
        </div>
        <div className="text-naive-black lg:bg-white text-center text-2xl lg:w-100 md:w-screen sm:w-screen h-100 absolute top-12 md:top-52">
          <div className="bg-white bg-opacity-50 md:bg-opacity-100 flex flex-col mt-24 h-100">
            <h1 className="text-header1 font-semibold md:text-center my-10">Немного об искусстве</h1>
            <div className="lg:mx-24 md:mx-2 sm:mx-2 font-normal flex justify-center">
              Есть над чем задуматься: многие известные личности
              заблокированы в рамках своих собственных рациональных
              ограничений. Есть над чем задуматься: диаграммы связей,
              инициированные исключительно синтетически, рассмотрены
              исключительно в разрезе маркетинговых и финансовых
              предпосылок.
            </div>
            <Link href="/">
              <button className="mt-5 mx-auto w-44 flex-none bg-transparent hover:bg-naive-black py-2 px-4 border border-naive-black rounded hover:text-white">В МАГАЗИН</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-72">
        <NewsItem newsTitle="НОВАЯ НОВОСТЬ"
          newsText="Кстати, реплицированные с зарубежных источников, современные исследования, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Таким образом, сложившаяся структура организации обеспечивает актуальность прогресса профессионального сообщества. Для современного мира сплочённость команды профессионалов не оставляет шанса для экономической целесообразности принимаемых решений."
          newsImageSrc={newsImage1 as unknown as StaticImageData["src"]} newsImagePosition={true}></NewsItem>
        <NewsItem newsTitle="ЕЩЕ НОВОСТЬ"
          newsText="Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании форм воздействия. В целом, конечно, внедрение современных методик прекрасно подходит для реализации дальнейших направлений развития. Внезапно, многие известные личности представлены в исключительно положительном свете."
          newsImageSrc={newsImage2 as unknown as StaticImageData["src"]} newsImagePosition={false}></NewsItem>
      </div>
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
