import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from "../components/Layout"

const Author: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Автор произвдения</title>
                <meta name="description" content="Информация о художнике" />
            </Head>
            <div className="flex justify-center items-center w-screen h-screen">
                <div>Автор произвдения</div>
            </div>
        </>
    )
}

Author.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Author
