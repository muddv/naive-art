import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from "../components/Layout"

const Delivery: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Информация о доставке - Навиное искусство</title>
                <meta name="description" content="Информация о доставке" />
            </Head>
            <div className="flex justify-center items-center w-screen h-screen">
                <div>Информация о доставке</div>
            </div>
        </>
    )
}

Delivery.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Delivery
