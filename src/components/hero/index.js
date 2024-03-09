import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'

const Hero = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === Slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const Slides = [
    {
      url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2837&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1607681034540-2c46cc71896d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, 
    {
      url: 'https://images.unsplash.com/photo-1552346989-e069318e20a5?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  return(
    <>
      <div className="container max-w-full h-[620px] w-full m-auto relative group">
        
        <div style={{backgroundImage: `url(${Slides[currentIndex].url})`}} className="w-full h-full rounder-2xl bg-center bg-cover duration-500">
        <div className=" flex bottom-24 justify-center  text-white">
          {
            Slides.map((slide, slideIndex) => (
              <div key={slideIndex} onClick={() => goSlide(slideIndex)} className="text-2xl cursor-pointe">
                <RxDotFilled />
              </div>
            ))
          }
        </div>
        
        </div>
        
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        
        
      </div>
    </>
  )
}

export default Hero;