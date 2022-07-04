import React from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useState } from 'react';

const ImageSlider = () => {

    const SliderData = [
        {
          image:
            'https://images.unsplash.com/photo-1656956628671-0808608f7e38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1656956698070-888f0bb0616b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1656956945948-ae390ecb8a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
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
              {index === current && (<img src={slide.image} alt='travel image' className='image' />)}
            </div>
          );

    })}

    </section>
  )
}

export default ImageSlider
