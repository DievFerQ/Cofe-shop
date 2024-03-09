// import React from "react";
// import cafeMesa from "../../images/cafeImg/cafeenmesa.jpg";

// const Hero = () => {
//   return (
//     <section className="text-gray-600 body-font ">
//       <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
//         <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//             Before they sold out
//             <br className="hidden lg:inline-block" />
//             readymade gluten
//           </h1>
//           <p className="mb-8 leading-relaxed">
//             Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
//             plant cold-pressed tacos poke beard tote bag. Heirloom echo park
//             mlkshk tote bag selvage hot chicken authentic tumeric truffaut
//             hexagon try-hard chambray.
//           </p>
//           <div className="flex justify-center">
//             <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//               Button
//             </button>
//             <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
//               Button
//             </button>
//           </div>
//         </div>
//         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
//           <img
//             className="object-cover object-center rounded max-w-64"
//             alt="cafe"
//             src={cafeMesa}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// =========================================

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