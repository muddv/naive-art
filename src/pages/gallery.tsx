import type { NextPage } from 'next'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import filter from '../assets/icons/gallery__filter.svg'
import up from '../assets/icons/gallery__filter_up.svg'
import down from '../assets/icons/gallery__filter_down.svg'
// replace with original
import author from '../assets/icons/gallery-image__author.svg'
// replace with original
import price from '../assets/icons/gallery-image__price.svg'
import lowerBoundary from '../assets/icons/gallery-image__lower-boundary.svg'
import upperBoundary from '../assets/icons/gallery-image__upper-boundary.svg'

function GalleryImage(props: { imageSrc: StaticImageData["src"], imageTitle: string, imageAuthor: string, imageYear: number, imagePrice: string }) {

    // OK, WHY DO I NEED TO USE STRING HERE THIS IS TOo FUNNNY
    const [imageDescription, setImageDescription] = useState("hide");
    function handleImageHover() {
        setImageDescription("show")
    }

    function handeImageLeave() {
        setImageDescription("hide")
    }

    const [ratio, setRatio] = useState(16 / 9)

    return (
        <div className="flex flex-col gap-y-5 flex-none">
            <div onMouseLeave={handeImageLeave} onMouseOver={handleImageHover} className="gallery__image relative">
                <div className="relative w-full h-full">
                    <Image
                        src={props.imageSrc}
                        alt={props.imageAuthor + "," + props.imageTitle}
                        width={360}
                        height={360 / ratio}
                        layout="intrinsic"
                        onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                            setRatio(naturalWidth / naturalHeight)
                        }>
                    </Image>
                </div>
                {/* maybe make description position conditional on native image size */}
                <div className={imageDescription === "show" ? "gallery__image_description absolute left-0 right-0 top-1/2 mx-auto w-[90%] h-[90%]" : "hidden"}>
                    <div className={imageDescription === "show" ? "absolute left-0 right-0 bottom-1/2 lg:w-80 md:w-72 sm:w-52 h-full text-center bg-body-gray bg-opacity-60 text-white font-semibold" : "hidden"}>
                        <div className="flex justify-center h-full items-center">
                            <div className="absolute top-5 right-5"><Image src={upperBoundary} alt="?????????????? ?????????????? ???????????????? ??????????????"></Image></div>
                            <div className="gallery__image_description_text text-center flex flex-col items-center">
                                <div className="">
                                    <Link href={`./product/?title=${props.imageTitle}&imageSrc=${props.imageSrc}&author=${props.imageAuthor}&year=${props.imageYear}&price=${props.imagePrice}`}>{props.imageTitle}</Link>
                                </div>
                                <div className="font-medium">
                                    <div><Image src={author} alt="??????????"></Image>
                                        {" "}<Link href="/author">{props.imageAuthor}</Link></div>

                                    {props.imageYear} .??
                                </div>
                                <div>
                                    <div className="mt-2"><Image src={price} alt="????????"></Image>
                                        {" "}{props.imagePrice}</div>

                                </div>
                            </div>
                            <div className="absolute bottom-5 left-5"><Image src={lowerBoundary} alt="???????????? ?????????????? ???????????????? ??????????????"></Image></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

const Gallery: NextPage = () => {

    return (
        <>
            <div className="flex justify-center w-full">
                <div className="h-full flex flex-col justify-center items-center mt-10">
                    <div className="ml-auto flex gap-x-2">
                        <div><Image src={filter} alt="??????????????????????"></Image></div>
                        <span className="ml-5">??????</span>
                        <div><Image src={up} alt="????????????"></Image>
                            <Image src={down} alt="??????????"></Image></div>
                        <span className="ml-5">????????</span>
                        <div><Image src={up} alt="????????????"></Image>
                            <Image src={down} alt="????????????"></Image></div>
                    </div>
                    <div className="mt-5 gap-x-5 lg:flex sm:flex lg:flex-row sm:flex-col md:grid md:grid-rows-2 md:grid-cols-2 flex-wrap">
                        {/* FIX JANKY LAYOUT */}

                        <div className="flex flex-col flex-none">
                            <GalleryImage imageSrc={"/gallery__item-1.png" as unknown as StaticImageData["src"]} imageTitle="?????????????????? ???????? ????????????" imageAuthor="???????????? ????????????????" imageYear={2022} imagePrice="18.000 ???"></GalleryImage>
                            <GalleryImage imageSrc={"/gallery__item-4.png" as unknown as StaticImageData["src"]} imageTitle="??????????????" imageAuthor="?????????????? ????????????" imageYear={1973} imagePrice="23.000 ???"></GalleryImage>
                        </div>

                        <div className="flex flex-col flex-none">
                            <GalleryImage imageSrc={"/gallery__item-2.png" as unknown as StaticImageData["src"]} imageTitle="????????????????????????" imageAuthor="???????????? ????????????????" imageYear={2011} imagePrice="18.000 ???"></GalleryImage>
                            <GalleryImage imageSrc={"/gallery__item-5.png" as unknown as StaticImageData["src"]} imageTitle="???????? ???????????????????? ????????" imageAuthor="???????????? ????????????????" imageYear={2022} imagePrice="25.000 ???"></GalleryImage>
                            <GalleryImage imageSrc={"/gallery__item-7.png" as unknown as StaticImageData["src"]} imageTitle="???? ??????????" imageAuthor="???????????? ??????????????????" imageYear={1992} imagePrice="13.000 ???"></GalleryImage>
                        </div>

                        {/* this needs better styling for smaller screens */}
                        <div className="flex flex-col flex-none">
                            <GalleryImage imageSrc={"/gallery__item-3.png" as unknown as StaticImageData["src"]} imageTitle="?????????????? ?? ????????????" imageAuthor="???????? ??????????????????" imageYear={2022} imagePrice="40.000 ???"></GalleryImage>
                            <GalleryImage imageSrc={"/gallery__item-6.png" as unknown as StaticImageData["src"]} imageTitle="???????? ??????????" imageAuthor="?????????????????????? ??????????????" imageYear={2013} imagePrice="8.000 ???"></GalleryImage>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gallery
