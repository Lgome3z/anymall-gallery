import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ImageCarouselProps = {
  images: string[];
};

export default function ImageCarousel({
  images,
}: ImageCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      className="aspect-video overflow-hidden rounded-xl shadow-lg w-1/2"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}