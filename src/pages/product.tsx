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
  const { title, imageSrc, author, year, price } = router.query
  const [ratio, setRatio] = useState(16 / 9)
  return (
    <>
      <Head>
        <title>Наивное искусство - Новости</title>
        <meta name="description" content="Сведения о картине" />
      </Head>
      <div className="text-naive-black flex justify-center w-screen h-100">
        <div className="w-3/4 flex flex-col">
          <h2 className="text-header2">ПРОИЗВЕДЕНИЕ</h2>
          <div className="mt-5 flex flex-row">
            <div className="relative flex-none w-fit h-fit"><Image
              src={imageSrc as unknown as StaticImageData["src"]}
              alt={title as string}
              width={360}
              height={360 / ratio}
              layout="intrinsic"
              onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                setRatio(naturalWidth / naturalHeight)
              }>
            </Image></div>
            <div className="w-100 h-full mx-10">
              <h2>{title}</h2>
              <div className='flex'><Image src={iconAuthor} alt="автор"></Image><h3 className="transition-all hover:underline"><Link href="/author">{author}</Link> {year} г.</h3></div>
              <span></span>
              <div>
                Современные технологии достигли такого уровня,
                что глубокий уровень погружения представляет собой
                интересный эксперимент проверки новых принципов
                формирования материально-технической и кадровой базы.
              </div>
              <div className="mt-2 flex gap-5">
                <div>
                  <h4>Техника</h4>
                  ДВП, Масло
                </div>
                <div>
                  <h4>Размер</h4>
                  700x500 мм
                </div>
                <div>
                  <h4>Цена</h4>
                  <div><Image src={iconPrice} alt="цена"></Image>{price}</div>
                </div>
                <button className="mt-5 mx-5 h-10 w-28 flex-none bg-transparent hover:bg-naive-black border border-naive-black rounded hover:text-white">В КОРЗИНУ</button>
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
