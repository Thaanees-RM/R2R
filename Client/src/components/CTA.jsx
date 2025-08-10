import React from 'react'

const CTA = () => {
  return (
    <>

      <div className='flex flex-col items-center justify-center px-6 w-full h-100 md:h-90 bg-[#0076A1] text-white font-bold text-center gap-6'>
        <h1 className='text-4xl md:text-5xl leading-14'>
          Get Ready to Go Global!
        </h1>
        <p className='text-xl'>
          With your global accreditation, you're not just part of a network, you're leading it.
        </p>
        <button className='text-base text-black w-fit px-12 py-3 rounded-lg bg-[#F0B100] '>
          Start Your Accreditation
        </button>

      </div>
    
    </>
  )
}

export default CTA