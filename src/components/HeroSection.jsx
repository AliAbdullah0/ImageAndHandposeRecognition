import React, { useRef, useEffect } from 'react';

function HeroSection() {
  
  return (
    <>
      <div className='w-full lg:h-[80vh] md:h-[70vh] h-[40vh] bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center shadow-md'>
        <div className='flex flex-col md:gap-3 gap-4 p-5'>
          <div>
          <h2 className='text-[#3dfefe] lg:text-[7ch] md:text-[5ch] text-wrap  text-[3ch] tracking-wide font-bold  drop-shadow-2xl font-[Josefin Sans] animation-type'>A Journey Towards AI</h2>
          <h3 className=' font-light font-[Josefin Sans] lg:text-[3ch] md:[2ch] text-xs drop-shadow-lg text-[#99eded]'>Visual Representation of Facial & Object Recongination <span className='animate-pulse duration-75 font-light'>|</span></h3>
          </div>
          <div>
            <button className='bg-[#3dfefe] md:p-2 p-1 lg:text-base md:text-sm text-xs rounded-3xl font-semibold w-1/3 hover:transtion duration-150 hover:bg-blue-500 hover:text-white shadowmd'>Try It Out!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
