// library import
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// style import
import "./styles/SwiperGallery.scss";

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
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    galleryImages.map((item: any) => (
                        <SwiperSlide>
                            <img src={item.imgSrc.src} alt={item.imgAlt} />
                            <sub>{item.imgDetails}</sub>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

export default Gallery