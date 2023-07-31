// library import
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Img from 'react-optimized-image';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// style import
import "./styles/SwiperGallery.scss";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

interface ImageObject {
    default: {
        src: string;
        width: number;
        height: number;
        format: string;
    };
    [Symbol.toStringTag]: 'Module';
}
interface DefaultObject {
    project: string;
    title: string[]
}
interface FigureDataObject {
    default: Array<DefaultObject>
}
interface GalleryProps {
    projectImages: Array<ImageObject>;
    figureData: Array<FigureDataObject>
}

const Gallery: React.FC<GalleryProps> = ({ projectImages, figureData }) => {
    return (
        <>
            <h2 className="imgHeading">All Figures</h2>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    projectImages.map((item: any, index: number) => (
                        <SwiperSlide key={index}>
                            <img src={item.default.src} alt={(item.default.src.split("figures/")[1]).split(".")[1]} width={250} height={250} />
                            {/* <Img src={item.default.src} alt={altImgArr[index]} /> */}
                            <sub>{figureData[0].default[0].title[index]}</sub>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

export default Gallery