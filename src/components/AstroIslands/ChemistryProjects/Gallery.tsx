import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

interface GalleryProps {
    galleryImages: string[];
}

const Gallery: React.FC<GalleryProps> = ({ galleryImages }) => {
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
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    galleryImages.map((imgSrc: any) => (
                        <SwiperSlide>
                            <img src={imgSrc.src} alt={imgSrc} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

export default Gallery