import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from "../components/Layout"

const Confidentiality: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Политика конфиденциальности - Навиное искусство</title>
                <meta name="description" content="Политика конфиденциальности" />
            </Head>
            <div className="flex justify-center items-center w-screen h-screen">
                <div>Политика конфиденциальности</div>
            </div>
        </>
    )
}

Confidentiality.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Confidentiality
