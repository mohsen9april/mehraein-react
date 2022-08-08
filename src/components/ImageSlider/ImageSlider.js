import React from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useState } from 'react';
import './ImageSlider.css'


const ImageSlider = () => {

    const SliderData = [
        {
          image:
            'https://images.unsplash.com/photo-1659725220034-78194d568d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1638137731128-07b495f1bcb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
        },
      ];
      
      const [current, setCurrent] = useState(0);
      const length = SliderData.length;
  
      const nextSlide = () => {
          setCurrent(current === length - 1 ? 0 : current + 1);
        };
      
        const prevSlide = () => {
          setCurrent(current === 0 ? length - 1 : current - 1);
        };
      
        if (!Array.isArray(SliderData) || SliderData.length <= 0) {
          return null;
        }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    {SliderData.map((slide,index) => {
        // return <img src={slide.image} alt='/' />
        return (
            <div className={index === current ? 'slide active' : 'slide'} key={index} >
              {index === current && (<img src={slide.image} alt='travel_image' className='image' />)}
            </div>
          );

    })}

    </section>
  )
}

export default ImageSlider
