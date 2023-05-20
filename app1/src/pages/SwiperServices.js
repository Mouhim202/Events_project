// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/css/App.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
const SwiperEvents = ({categorieService}) => {
    
  return ( <>
  <h1>{categorieService}</h1>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="card" style={{"width": "18rem"}} >
                <img src="../assets/img/306.jpg" className="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
        </SwiperSlide>

      </Swiper>

      </> );
    }
     
    export default SwiperEvents;