import type { NextPage } from 'next'
import { useState } from 'react'
import type { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import sandwich from '../assets/icons/menu__sandwich.svg'
import sandwichActive from '../assets/icons/menu__sandwich-active.svg'
import glass from '../assets/icons/menu__looking-glass.svg'
import basket from '../assets/icons/menu__basket.svg'
import separator from '../assets/icons/menu__separator.svg'
import shop from '../assets/icons/menu__sandwich_shop.svg'
import how from '../assets/icons/menu__sandwich_how.svg'
import delivery from '../assets/icons/menu__sandwich_delivery.svg'
import contacts from '../assets/icons/menu__sandwich_contacts.svg'

const Header = () => {
    const [navMenu, setNavMenu] = useState(false);
    function handleMenuClick() {
        setNavMenu(!navMenu);
    }

    const [search, setSearch] = useState(false);
    function handleSearchClick() {
        setSearch(!search);
    }

    // ADD VISIBILITY ON SCROLL FOR MOBILE
    return (
        <>
            <div className="mt-5 mx-0 w-full sm:mx-auto sm:w-9/12 ">
                <div className="flex justify-between">
                    <div className="flex gap-10">
                        <div className="flex flex-col ml-10 flex-0">
                            <button onClick={handleMenuClick}><Image src={navMenu ? sandwichActive : sandwich} alt="меню навигации"></Image></button>
                            <div className={navMenu ? "absolute z-50 p-7 mt-7 bg-white  rounded-lg shadow w-64 h-80 flex flex-col justify-center" : "hidden"}>
                                <ul className="flex flex-col gap-5">
                                    <li className="flex gap-2"><Image src={shop} alt="магазин"></Image><Link href="/">МАГАЗИН</Link></li>
                                    <li className="flex gap-2"><Image src={how} alt="как заказать"></Image><Link href="/how">КАК ЗАКАЗАТЬ</Link></li>
                                    <li className="flex gap-2"><Image src={delivery} alt="доствка"></Image><Link href="/delivery">ДОСТАВКА</Link></li>
                                    <li className="flex gap-2"><Image src={contacts} alt="контакты"></Image><Link href="/contacts">КОНТАКТЫ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={search ? "absolute ml-20 border-2 border-black p-2 top-3 w-36 lg:w-80" : ""}>
                            <input autoFocus placeholder="Поиск..." className={search ? "focus:outline-none ml-2 w-28 lg:w-72" : "hidden"}></input>
                            <button className={search ? "absolute top-2 left-28 lg:left-72" : ""} onClick={handleSearchClick}><Image src={glass} alt="поиск"></Image></button>
                        </div>
                    </div>
                    <div className="flex gap-5 mr-10">
                        <Image src={basket} alt="корзина"></Image>
                        <span><Link href="/cart">Корзина</Link></span>
                    </div>
                </div>
            </div>
            <Image src={separator} alt="конец меню"></Image>
        </>
    )
}

const Footer: NextPage = () => {
    return (
        <>
            <Image src={separator} alt="граница футера"></Image>
            <div className="flex flex-col h-44 justify-center align-baseline text-naive-black ">
                <h3 className="flex justify-center my-6 text-4xl font-semibold">Наивное искусство</h3>
                <div className="flex flex-row gap-x-10 gap-y-4 justify-center flex-wrap">
                    <span className="transition-all hover:underline"><Link href="/">МАГАЗИН</Link></span>
                    <span className="transition-all hover:underline"><Link href="/news">НОВОСТИ</Link></span>
                    <span className="transition-all hover:underline"><Link href="/delivery">ДОСТАВКА</Link></span>
                    <span className="transition-all hover:underline"><Link href="/contacts">КОНТАКТЫ</Link></span>
                    <span className="transition-all hover:underline"><Link href="/how">КАК ЗАКАЗАТЬ</Link></span>
                </div>
                <div className="flex justify-center my-6 transition-all hover:underline"><Link href="/confidentiality">Политика конфиденциальности</Link></div>
            </div>
        </>
    )
}

const Layout = (props: { children: ReactElement }) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

export default Layout