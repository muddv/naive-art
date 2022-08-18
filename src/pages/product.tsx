import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

type Artwork = {
  title: string,
  id: number
}

async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:5001/api/graphql/",
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    query allArtworks {
      allArtworks {
        title,
        id
      }
    }
     `})
  return {
    props: {
      artworks: data.allArtworks as Artwork
    }
  }
}

const Product: NextPageWithLayout = () => {
  const router = useRouter()
  const { title, imageSrc } = router.query
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
              <h3>АВТОР</h3>
              <span>ГОД</span>
              <div>
                Современные технологии достигли такого уровня,
                что глубокий уровень погружения представляет собой
                интересный эксперимент проверки новых принципов
                формирования материально-технической и кадровой базы.
              </div>
              <div>TECHNIQUE WOOD OIL</div>
              <div>SIZE XXXX x XXXX mm</div>
              <div>PRICE XXXXXX$</div>
              <button>В КОРЗИНУ</button>
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
