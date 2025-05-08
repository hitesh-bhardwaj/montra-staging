import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='w-screen px-[4vw] py-[5%] h-screen bg-[#fbfbfb]' id='about'>
      <div className='flex w-full flex-col items-center gap-[5vw]'>
        <h2 className='text-[5.7vw] font-display font-medium w-[55%] leading-[1.3] text-center'>
        Simple, Transparent & Fair Pricing
        </h2>
        <div className='w-[68vw] h-[28vw] relative'>
            <Image src={"/assets/images/business-tapnpay/about-ticket.png"} alt='' width={700} height={400} className='w-full h-full object-contain drop-shadow-xl'/>
            <div className='w-full h-full absolute top-0 left-0 '>

            </div>
        </div>

      </div>

    </section>
  )
}

export default About