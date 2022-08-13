import type { NextPage } from 'next'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import filter from '../public/icons/gallery__filter.svg'
import up from '../public/icons/gallery__filter_up.svg'
import down from '../public/icons/gallery__filter_down.svg'
import author from '../public/icons/gallery-image__author.svg'
import price from '../public/icons/gallery-image__price.svg'
import lowerBoundary from '../public/icons/gallery-image__lower-boundary.svg'
import upperBoundary from '../public/icons/gallery-image__upper-boundary.svg'
import item1 from '../public/images/gallery__item-1.png'
import item2 from '../public/images/gallery__item-2.png'
import item3 from '../public/images/gallery__item-3.png'
import item4 from '../public/images/gallery__item-4.png'
import item5 from '../public/images/gallery__item-5.png'
import item6 from '../public/images/gallery__item-6.png'
import item7 from '../public/images/gallery__item-7.png'

function GalleryImage(props: { imageSrc: StaticImageData["src"], imageTitle: string, imageAuthor: string, imageYear: number, imagePrice: string }) {

    // OK, WHY DO I NEED TO USE STRING HERE THIS IS TOo FUNNNY
    const [imageDescription, setImageDescription] = useState("hide");
    function handleImageHover() {
        setImageDescription("show")
    }

    function handeImageLeave() {
        setImageDescription("hide")
    }

    return (
        <div className="flex flex-col gap-5 flex-none">
            <div onMouseLeave={handeImageLeave} onMouseOver={handleImageHover} className="relative">
                <Image className="absolute" src={props.imageSrc} alt={props.imageAuthor + "," + props.imageTitle}></Image>
                {/* maybe make description position conditional on native image size */}
                <div className={imageDescription === "show" ? "lg:w-80 md:w-64 sm:w-52 h-48 left-5 text-center transition-all absolute bg-body-gray bg-opacity-60 p-12  bottom-12 text-white font-semibold" : "hidden"}>
                    <div className="absolute left-52 bottom-24"><Image src={upperBoundary} alt="Верхняя граница описания картины"></Image></div>
                    {props.imageTitle}
                    <div>
                        <Image src={author} alt="автор" className="mr-10"></Image>
                        {" "}{props.imageAuthor}
                    </div>
                    {props.imageYear} .г
                    <div>
                        <Image src={price} alt="цена" className="mr-10"></Image>
                        {" "}{props.imagePrice}
                    </div>
                    <div className="absolute right-52 top-24"><Image src={lowerBoundary} alt="Нижняя граница описания картины"></Image></div>
                </div>
            </div>
        </div>
    )
}

const Gallery: NextPage = () => {

    return (
        <>
            <div className="flex justify-center w-full">
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
                    <div className="mt-5 gap-5 lg:flex sm:flex lg:flex-row sm:flex-col md:grid md:grid-cols-2 flex-wrap ">
                        {/* FIX JANKY LAYOUT */}

                        <div className="flex flex-col gap-5 flex-none">
                            <GalleryImage imageSrc={item1 as unknown as StaticImageData["src"]} imageTitle="Бородатые лица зверей" imageAuthor="Виктор Тимофеев" imageYear={2022} imagePrice="18.000 ₽"></GalleryImage>
                            <GalleryImage imageSrc={item4 as unknown as StaticImageData["src"]} imageTitle="Котенок" imageAuthor="Татьяна Еленок" imageYear={1973} imagePrice="23.000 ₽"></GalleryImage>
                        </div>

                        <div className="flex flex-col gap-5 flex-none">
                            <GalleryImage imageSrc={item2 as unknown as StaticImageData["src"]} imageTitle="Преображение" imageAuthor="Виктор Тимофеев" imageYear={2011} imagePrice="18.000 ₽"></GalleryImage>
                            <GalleryImage imageSrc={item5 as unknown as StaticImageData["src"]} imageTitle="Пора тополиного пуха" imageAuthor="Виктор Тимофеев" imageYear={2022} imagePrice="25.000 ₽"></GalleryImage>
                            <GalleryImage imageSrc={item7 as unknown as StaticImageData["src"]} imageTitle="На пруду" imageAuthor="Михаил Ржанников" imageYear={1992} imagePrice="13.000 ₽"></GalleryImage>
                        </div>

                        <div className="flex flex-col gap-5 flex-none">
                            <GalleryImage imageSrc={item3 as unknown as StaticImageData["src"]} imageTitle="Картина с кошкой" imageAuthor="Иван Генералич" imageYear={2022} imagePrice="40.000 ₽"></GalleryImage>
                            <GalleryImage imageSrc={item6 as unknown as StaticImageData["src"]} imageTitle="Река жизни" imageAuthor="Шаймарданов Альфрид" imageYear={2013} imagePrice="8.000 ₽"></GalleryImage>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gallery
