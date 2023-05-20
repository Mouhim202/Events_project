// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/css/App.css";

import { NavLink } from "react-router-dom";
import {useState, useEffect } from "react"
 import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
const SwiperEvents = ({categorieEvent}) => {
    const [data,setData]=useState(undefined)
    const [url,setUrl]=useState("http://localhost/events/")
   useEffect(()=>{
          try
          {
          loadData() 
          }
            catch(err)
          {
            console.log(err)
          }
  
   },[url])
  
  
   const loadData=async ()=>
   {
     const response = await axios.get(url+categorieEvent,{
      headers: {
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json',
      }
     });
     console.log(response.data)
     setData(response.data)
   }

  return ( <>
  <h1>{categorieEvent}</h1>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          data?
          data.map((evenement)=>
          <SwiperSlide>
          <div class="card" style={{"width": "18rem"}} >
                  <img src={"../assets/img/"+evenement.photo} className="card-img-top" alt="..."/>
                  <div class="card-body">
                      <h5 className="card-title">{evenement.title}</h5>
                      <p className="card-text">{evenement.description}</p>
                      <NavLink to="/allservices" className="btn btn-primary">Detaille</NavLink>
                  </div>
                  </div>
          </SwiperSlide>
          )
          :
          <h1>Loading..........</h1>
        }
      

      </Swiper>

      </> );
    }
     
    export default SwiperEvents;