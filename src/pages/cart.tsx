import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from "../components/Layout"

const Cart: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Корзина - Навиное искусство</title>
                <meta name="description" content="Корзина" />
            </Head>
            <div className="flex justify-center items-center w-screen h-screen">
                <div>Корзина</div>
            </div>
        </>
    )
}

Cart.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Cart
