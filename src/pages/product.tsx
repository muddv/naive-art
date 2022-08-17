import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'

const Product: NextPageWithLayout = () => {
  const router = useRouter()
  const { title, imageSrc } = router.query
  function handleClick() {
    console.log("title:", title)
    console.log("imageSrc:", imageSrc)
  }
  return (
    <>
      <Head>
        <title>Наивное искусство - Новости</title>
        <meta name="description" content="Сведения о картине" />
      </Head>
      <div className="w-screen h-100 flex justify-center">
        <h2 className="h-1/2">ПРОИЗВЕДЕНИЕ</h2>
        <div className="flex flex-col w-48 h-48">
          <Image src='/gallery__item-1.png' alt={title as string}></Image>
          <div>{imageSrc}</div>
          <button onClick={handleClick} className="bg-red-500">jfwjewjef</button>
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
