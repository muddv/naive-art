import type { NextPage } from 'next'
import Image from 'next/image'
import separator from '../public/icons/menu__separator.svg'

const Footer: NextPage = () => {
    return (
        <>
            <Image src={separator} alt="граница футера"></Image>
            <div className="flex flex-col h-44 justify-center align-baseline text-header-black ">
                <h3 className="flex justify-center my-6 text-4xl font-semibold">Наивное искусство</h3>
                <div className="flex flex-row gap-x-10 gap-y-4 justify-center flex-wrap"><span>МАГАЗИН</span> <span>НОВОСТИ</span> <span>ДОСТАВКА</span> <span>КОНТАКТЫ</span> <span>КАК ЗАКАЗАТЬ</span></div>
                <div className="flex justify-center my-6">Политика конфиденциальности</div>
            </div>
        </>
    )
}

export default Footer