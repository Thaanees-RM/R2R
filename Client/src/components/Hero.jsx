import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <>

      <div className='flex flex-col items-center justify-center w-full h-140 md:h-120 bg-cover bg-center relative font-lato' style={{ backgroundImage: `url(${hero})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1E1E1E]/60" />
        <div className='flex flex-col items-center justify-center gap-8 px-6 md:px-0 md:w-230 text-center z-10 text-white font-extrabold'>
          <h1 className='text-4xl md:text-5xl leading-16 md:leading-14'>
            OBTAIN YOUR <span className='text-yellow-300'>G17 ACCREDITATION</span> HERE
          </h1>
          <p className='text-base md:text-lg leading-8'>
            Complete Your G17 Onboarding Process, And Gain Your Internationally Recognized UNESCO Accredited Student And Global Citizen ID
          </p>
        </div>
      </div>
    
    </>
  )
}

export default Hero