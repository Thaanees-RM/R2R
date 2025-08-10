import React from 'react'
import doller from '../assets/doller.png'

const InfoSection = () => {
  return (
    <>  

      <div className="flex flex-col items-center justify-center gap-10 py-10 px-6 md:px-40">
        <h1 className='text-4xl md:text-5xl font-bold text-center text-[#0076A1] leading-14'>
          Registration With “Accreditation”
        </h1>
        <p className='text-xl font-semibold text-[#5B5B5B] text-center'>
          To complete your G17 Accreditation, a one-time registration fee is required. Please follow the payment guidelines below based on your location.
        </p>
        <div className='flex items-center md:gap-30'>

          {/* <div className='flex flex-col items-center justify-center gap-6 text-black px-12 py-6 rounded-lg w-75' style={{
              boxShadow: '4px 4px 30px 0px #00000040',
            }}>
            <h2 className='font-bold text-base'>
              Sri Lankan Participation
            </h2>
            <div className='flex items-center bg-[#CFDDF6] p-2 rounded-sm '>
              <img src={doller} alt="" className='w-7 h-7' />
            </div>
            <p className='text-2xl font-extrabold'>
              $12
            </p>
            <ul className='list-disc space-y-2 leading-7 text-base font-semibold mt-2'>
              <li>
                one-time accreditation fee
              </li>
              <li>
                you’ll gain access to incredible perks, mentorships, masterclasses, and the global G17 network of changemakers.
              </li>
            </ul>
          </div> */}

          <div className='flex flex-col items-center justify-start gap-6 text-black px-12 py-6 rounded-lg w-75' style={{
              boxShadow: '4px 4px 30px 0px #00000040',
            }}>
            <h2 className='font-bold text-base'>
              Foreign Participation
            </h2>
            <div className='flex items-center bg-[#CFDDF6] p-2 rounded-sm '>
              <img src={doller} alt="" className='w-7 h-7' />
            </div>
            <p className='text-2xl font-extrabold'>
              $32
            </p>
            <ul className='list-disc space-y-2 leading-7 text-base font-semibold mt-2'>
              <li>
                $12 One-time accreditation fee
              </li>
              <li>
                An additional USD 20 must be added to cover international bank transaction charges.
              </li>
            </ul>
          </div>

        </div>
        <div className='flex flex-col gap-8 items-center justify-center px-0'>
          <p className='text-2xl font-extrabold text-[#5B5B5B] text-center'>
            When entering the payment reference or note, please use the following format.
          </p>
          <div className='flex flex-col items-center justify-center px-6 py-10 md:px-30 md:py-20 gap-8 text-black rounded-lg' style={{
              boxShadow: '4px 4px 30px 0px #00000040',
            }}>
            <div className='md:w-150'>
              <p className='text-xl font-bold'>
                If you are a university ambassador, use the following format
              </p>
              <p className='text-base font-semibold'>
                [Amb][SDGNumber][University Abbreviation][Country Code(ISO 2-letter)] <br/>
                 e.g., Amb12uokLK
              </p>
            </div>
            <div className='md:w-150'>
              <p className='text-xl font-bold'>
                If you are a university coordinator, use the following format
              </p>
              <p className='text-base font-semibold'>
                [Coor][University Name Abbreviation][Country Code(ISO 2-letter)] <br/>
                 e.g., CooruostPH 
              </p>
            </div>
            <div className='md:w-150'>
              <p className='text-xl font-bold'>
                If you are a national executive committee member, use the following format
              </p>
              <p className='text-base font-semibold'>
                [YourFirstName][EXCO][Country Code(ISO 2-letter)] <br/>
                 e.g., MariaEXCOBR
              </p>
            </div>
          </div>
        </div>

      </div>
    
    </>
  )
}

export default InfoSection