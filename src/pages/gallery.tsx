import type { NextPage } from 'next'
import Image from 'next/image'
import filter from '../public/icons/gallery__filter.svg'
import up from '../public/icons/gallery__filter_up.svg'
import down from '../public/icons/gallery__filter_down.svg'
import item1 from '../public/images/gallery__item-1.png'
import item2 from '../public/images/gallery__item-2.png'
import item3 from '../public/images/gallery__item-3.png'
import item4 from '../public/images/gallery__item-4.png'
import item5 from '../public/images/gallery__item-5.png'
import item6 from '../public/images/gallery__item-6.png'

const Gallery: NextPage = () => {
    return (
        <>
            <div className="h-full flex flex-col justify-center items-center mt-10">
                <div className="mr-24">
                    <Image src={filter} alt="сортировать"></Image>
                    <span className="ml-5">Год</span>
                    <Image src={up} alt="раньше"></Image>
                    <Image src={down} alt="позже"></Image>
                    <span className="ml-5">Цена</span>
                    <Image src={up} alt="больше"></Image>
                    <Image src={down} alt="меньше"></Image>
                </div>
                <div className="flex flex-row gap-5">
                    <Image src={item1} alt="предмет 1"></Image>
                    <Image src={item2} alt="предмет 2"></Image>
                    <Image src={item3} alt="предмет 3"></Image>
                </div>
                <div className="flex flex-row gap-5 mt-5">
                    <Image src={item4} alt="предмет 4"></Image>
                    <Image src={item5} alt="предмет 5"></Image>
                    <Image src={item6} alt="предмет 6"></Image>
                </div>
            </div>
        </>
    )
}
export default Gallery
