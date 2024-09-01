import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MySlider() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
}
