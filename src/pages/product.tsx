import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import iconAuthor from '../assets/icons/product__author.svg'
import iconPrice from '../assets/icons/product__price.svg'

const Product: NextPageWithLayout = () => {
  const router = useRouter()
  const { title = "Название Произведения", imageSrc = '/gallery__item-1.png', author = "Автор Произведения", year = "Год написания", price = "цена" } = router.query
  const [ratio, setRatio] = useState(16 / 9)
  return (
    <>
      <Head>
        <title>{title} - {author} | Наивное искусство</title>
        <meta name="description" content="Сведения о картине" />
      </Head>
      <div className="text-naive-black flex justify-center w-screen h-100 mb-46">
        <div className="w-11/12 lg:w-3/4  flex flex-col">
          <h2 className="text-header2">ПРОИЗВЕДЕНИЕ</h2>
          <div className="mt-5 flex flex-col  md:flex-row">
            <div className="relative flex-none w-fit h-fit mr-5">
              <Image
                src={imageSrc as unknown as StaticImageData["src"]}
                alt={title as string}
                width={360}
                height={360 / ratio}
                layout="intrinsic"
                onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                  setRatio(naturalWidth / naturalHeight)
                }>
              </Image></div>
            <div className="w-full h-full lg:mx-10">
              <div>
                <h2 className="font-semibold text-4xl">{title}</h2>
                <div className="flex flex-nowrap gap-1">
                  <div><Image src={iconAuthor} alt="автор"></Image></div>
                <h3 className="transition-all hover:underline font-semibold text-2xl"><Link href="/author">{author}</Link> {year + " г."}</h3></div>
              </div>
              <div className="mt-5">
                Современные технологии достигли такого уровня,
                что глубокий уровень погружения представляет собой
                интересный эксперимент проверки новых принципов
                формирования материально-технической и кадровой базы.
              </div>
              <div className="mt-2 grid grid-cols-2 gap-y-5">
                <div>
                  <h4 className="font-semibold">Техника</h4>
                  ДВП, Масло
                </div>
                <div>
                  <h4 className="font-semibold">Размер</h4>
                  700x500 мм
                </div>
                <div>
                  <h4 className="font-semibold">Цена</h4>
                  <div className="font-semibold flex gap-1"><Image src={iconPrice} alt="цена"></Image>{price}</div>
                </div>
                <button className="font-semibold mt-5 h-10 w-28 flex-none bg-transparent hover:bg-naive-black border border-naive-black rounded hover:text-white">В КОРЗИНУ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Product.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Product
