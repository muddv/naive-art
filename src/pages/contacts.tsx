import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Image from 'next/image'
import Layout from "../components/Layout"
import phone from "../assets/icons/contacts__phone.svg"
import shopAdress from "../assets/icons/contacts__adress.svg"
import shopMap from "../assets/images/contacts__example_map.png"

const Contacts: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Контакты - Навиное искусство</title>
                <meta name="description" content="Контакты" />
            </Head>
            <div className="text-naive-black flex justify-center w-screen h-100 mb-46">
                <div className="w-11/12 lg:w-3/4  flex flex-col">
                    <h2 className="text-header2">Контакты</h2>
                    <div className="mt-5 flex flex-col  md:flex-row">
                        <div className="relative flex-none w-fit h-fit mr-5">
                            <Image src={shopMap} alt="Магазин на карте" width="550px" height="350px"></Image></div>
                        <div className="w-full h-full lg:mx-10">
                            <div>
                                <h2 className="font-semibold text-4xl">Свяжитесь с нами</h2>
                                <div className="flex flex-nowrap gap-1">
                                    <div><Image src={phone} alt="телефон"></Image></div>
                                    <h3 className="transition-all hover:underline font-semibold text-2xl">+7(123)456789012</h3></div>
                            </div>
                            <div className="mt-5">
                                Современные технологии достигли такого уровня,
                                что глубокий уровень погружения представляет собой
                                интересный эксперимент проверки новых принципов
                                формирования материально-технической и кадровой базы.
                            </div>
                            <div className="mt-2 grid grid-cols-2 gap-y-5">
                                <div>
                                    <h4 className="font-semibold">Адрес</h4>
                                    <div className="font-semibold flex gap-1"><Image src={shopAdress} alt="адрес"></Image>Москва, ул. Улица, дом 1</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
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
