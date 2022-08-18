import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from "../components/Layout"

type Artwork = {
    title: string,
    id: number
}

interface Props {
    artworks: Artwork
}

export async function getStaticProps() {
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
    const wow = JSON.stringify(data.allArtworks)
    console.log("wow: " + wow)
    console.log("type of wow: " + typeof (wow))
    return {
        props: {
            artworks: data.allArtworks as Artwork
        }
    }
}

const WorkPlease: NextPageWithLayout = (artworks) => {
    const wow = JSON.stringify(artworks)
    const obj = JSON.parse(wow)
    const hmm = JSON.stringify(obj.title)
    console.log(wow)
    console.log(obj)
    console.log(hmm)
    return (
        <>
            <Head>
                <title>Work Please</title>
                <meta name="description" content="Work Please" />
            </Head>
            <div className="flex justify-center items-center w-screen h-screen">
                <div>Work Please</div>
                <div>{hmm}</div>
            </div>
        </>
    )
}

WorkPlease.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default WorkPlease
