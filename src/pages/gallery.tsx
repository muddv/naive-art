import type { NextPage } from 'next'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import filter from '../public/icons/gallery__filter.svg'
import up from '../public/icons/gallery__filter_up.svg'
import down from '../public/icons/gallery__filter_down.svg'
// replace with original
import author from '../public/icons/gallery-image__author.svg'
// replace with original
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
            <div onMouseLeave={handeImageLeave} onMouseOver={handleImageHover} className="gallery__image relative">
                <div><Image src={props.imageSrc} alt={props.imageAuthor + "," + props.imageTitle}></Image></div>
                {/* maybe make description position conditional on native image size */}
                <div className="gallery__image_description absolute left-0 right-0 top-1/2 mx-auto lg:w-80 md:w-72 sm:w-52 h-48 ">
                    <div className={imageDescription === "show" ? "absolute left-0 right-0 bottom-1/2 lg:w-80 md:w-72 sm:w-52 h-48 text-center bg-body-gray bg-opacity-60 text-white font-semibold" : "hidden"}>
                        <div className="absolute lg:left-52 md:left-48 right-12 bottom-24"><Image src={upperBoundary} alt="Верхняя граница описания картины"></Image></div>
                        <div className="gallery__image_description_text text-center flex flex-col items-center">
                            <div className="mt-10">{props.imageTitle}</div>
                            <div><Image src={author} alt="автор"></Image>
                                {" "}{props.imageAuthor}</div>
                            {props.imageYear} .г
                            <div>
                                <div className="mt-2"><Image src={price} alt="цена"></Image>
                                    {" "}{props.imagePrice}</div>
                            </div>
                        </div>
                        <div className="absolute lg:right-52 md:right-48 sm:right-28 left-12 top-24"><Image src={lowerBoundary} alt="Нижняя граница описания картины"></Image></div>
                    </div>
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
                    <div className="ml-auto flex gap-x-2">
                        <div><Image src={filter} alt="сортировать"></Image></div>
                        <span className="ml-5">Год</span>
                        <div><Image src={up} alt="раньше"></Image>
                        <Image src={down} alt="позже"></Image></div>
                        <span className="ml-5">Цена</span>
                        <div><Image src={up} alt="больше"></Image>
                        <Image src={down} alt="меньше"></Image></div>
                    </div>
                    <div className="mt-5 gap-5 lg:flex sm:flex lg:flex-row sm:flex-col md:grid md:grid-cols-2 flex-wrap ">
                        {/* FIX JANKY LAYOUT */}

                        <div className="flex flex-col flex-none">
                            <GalleryImage imageSrc={item1 as unknown as StaticImageData["src"]} imageTitle="Бородатые лица зверей" imageAuthor="Виктор Тимофеев" imageYear={2022} imagePrice="18.000 ₽"></GalleryImage>
                            <GalleryImage imageSrc={item4 as unknown as StaticImageData["src"]} imageTitle="Котенок" imageAuthor="Татьяна Еленок" imageYear={1973} imagePrice="23.000 ₽"></GalleryImage>
                        </div>

                        <div className="flex flex-col flex-none">
                            <GalleryImage imageSrc={item2 as unknown as StaticImageData["src"]} imageTitle="Преображение" imageAuthor="Виктор Тимофеев" imageYear={2011} imagePrice="18.000 ₽"></GalleryImage>
                            <GalleryImage imageSrc={item5 as unknown as StaticImageData["src"]} imageTitle="Пора тополиного пуха" imageAuthor="Виктор Тимофеев" imageYear={2022} imagePrice="25.000 ₽"></GalleryImage>
                            <GalleryImage imageSrc={item7 as unknown as StaticImageData["src"]} imageTitle="На пруду" imageAuthor="Михаил Ржанников" imageYear={1992} imagePrice="13.000 ₽"></GalleryImage>
                        </div>

                        <div className="flex flex-col flex-none">
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
