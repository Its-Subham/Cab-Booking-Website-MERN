import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../assets/all_cars'
import CarCard from './CarCard';

const CarSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 4000,  // Time between slides (3000ms = 3s)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
         <div className='max-w-2xscreen container mx-auto md:px-20 px-4 pl-10 '>
        <div className='text-center pt-6'>
        <span className=' text-blue-500 font-semibold text-sm' >What We Offer</span>
        <h2 className='text-4xl pb-14  font-sans pt-6 font-bold'>Our Vehicles</h2>
        
        </div>
       
      <div className=''>
      <Slider {...settings}>
        {list.map((items)=>(
          <CarCard item={items} key={items.id}/>
        ))}
      </Slider>
      </div>
      </div>
    </>
  )
}

export default CarSlider

