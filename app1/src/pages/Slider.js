// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Slider = () => {
    return ( 
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={"assets/img/306.jpg"} alt='' className='img-fluid' /></SwiperSlide>
      <SwiperSlide><img src={"assets/img/306.jpg"} alt='' className='img-fluid' /></SwiperSlide>
      <SwiperSlide><img src={"assets/img/306.jpg"} alt='' className='img-fluid' /></SwiperSlide>
      <SwiperSlide><img src={"assets/img/306.jpg"} alt='' className='img-fluid' /></SwiperSlide>
    </Swiper>

     );
}
 
export default Slider;