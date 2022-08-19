import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from "../components/Layout"

const How: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Как заказать? - Навиное искусство</title>
                <meta name="description" content="Как работает доставка" />
            </Head>
            <div className="flex justify-center items-center w-screen h-screen">
                <div>Как заказать?</div>
            </div>
        </>
    )
}

How.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default How
