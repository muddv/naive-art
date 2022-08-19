import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from "../components/Layout"

const Contacts: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Контакты - Навиное искусство</title>
                <meta name="description" content="Контакты" />
            </Head>
            <div className="flex justify-center items-center w-screen h-screen">
                <div>Контакты</div>
            </div>
        </>
    )
}

Contacts.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Contacts
