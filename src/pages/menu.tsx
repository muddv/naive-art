import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import sandwich from '../public/icons/menu__sandwich.svg'
import sandwichActive from '../public/icons/menu__sandwich-active.svg'
import glass from '../public/icons/menu__looking-glass.svg'
import basket from '../public/icons/menu__basket.svg'
import separator from '../public/icons/menu__separator.svg'
import shop from '../public/icons/menu__sandwich_shop.svg'
import how from '../public/icons/menu__sandwich_how.svg'
import delivery from '../public/icons/menu__sandwich_delivery.svg'
import contacts from '../public/icons/menu__sandwich_contacts.svg'

const Menu: NextPage = () => {
    const [navMenu, setNavMenu] = useState(false);
    function handleMenuClick() {
        setNavMenu(!navMenu);
    }

    const [search, setSearch] = useState(false);
    function handleSearchClick() {
        setSearch(!search);
    }

    return (
        <>
            <div className="lg:w-1/2 mt-5 mx-auto">
                <div className="flex justify-between">
                    <div className="flex gap-10">
                        <div className="flex flex-col ml-10 flex-0">
                            <button onClick={handleMenuClick}><Image src={navMenu ? sandwichActive : sandwich} alt="меню навигации"></Image></button>
                            <div className={navMenu ? "absolute p-7 mt-7 bg-white  rounded-lg shadow w-64 h-80 flex flex-col justify-center" : "hidden"}>
                                <ul className="flex flex-col gap-5">
                                    <li className="flex gap-2"><Image src={shop} alt="магазин"></Image>МАГАЗИН</li>
                                    <li className="flex gap-2"><Image src={how} alt="как заказать"></Image>КАК ЗАКАЗАТЬ</li>
                                    <li className="flex gap-2"><Image src={delivery} alt="доствка"></Image>ДОСТАВКА</li>
                                    <li className="flex gap-2"><Image src={contacts} alt="контакты"></Image>КОНТАКТЫ</li>
                                </ul>
                            </div>
                        </div>
                        <div className={search ? "transition-all absolute ml-24 border-2 border-black p-2 top-3" : ""}>
                            <input placeholder="Поиск..." className={search ? "focus:outline-none ml-2" : "hidden"}></input>
                            <button onClick={handleSearchClick}><Image src={glass} alt="поиск"></Image></button>
                        </div>

                    </div>
                    <div className="flex gap-5 mr-10">
                        <Image src={basket} alt="корзина"></Image>
                        <span>Корзина</span>
                    </div>
                </div>
            </div>
            <Image src={separator} alt="конец меню"></Image>
        </>
    )
}

export default Menu