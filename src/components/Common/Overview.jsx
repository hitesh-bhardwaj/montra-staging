import Image from 'next/image'
import React from 'react'

const Overview = ({icon1,icon2,mainImg,bgImg,title,content,subcontent1,subcontent2}) => {
  return (
    <> 
    <section className='w-screen h-screen bg-[#fbfbfb] py-[5%] overflow-hidden' id='overview'>
        <div className='w-full flex justify-between px-[4vw] '>
        <div className='w-[40%] relative'>
            <Image src={mainImg} alt='overview-phone-image' className='object-cover w-full h-[60vw] mt-[-7vw] z-[2] relative' width={700} height={1080}/>
            <div className='absolute top-[12%] left-[10%] w-full h-full'>
                <Image src={bgImg} alt='overview-banking-image' className='w-full h-[35vw] object-cover' width={400} height={800}/>
            </div>
            <div className='w-[15vw] h-fit rounded-[1.2vw] shadow-md drop-shadow-md py-[1vw] px-[1vw] bg-[#F1FFE8] absolute top-[60%] left-[70%] z-[7] flex gap-[1vw]'>
              <div className='w-[2vw] h-[2vw]'>
                <Image src={icon2} width={100} height={100} className='w-full h-full object-cover' alt='overview-icon'/>
              </div>
              <div className="capitalize">
               {subcontent1}
              </div>
            </div>
            <div className='w-[15vw] h-fit rounded-[1.2vw] shadow-md drop-shadow-md py-[1vw] px-[1vw] bg-[#FFEAEE] absolute top-[30%] left-[10%] z-[7] flex gap-[1vw]'>
              <div className='w-[2vw] h-[2vw]'>
                <Image src={icon1} width={100} height={100} className='w-full h-full object-cover' alt='overview-icon'/>
              </div>
              <div className="capitalize">
               {subcontent2}
              </div>
            </div>
        </div>
        <div className='w-[45%] flex flex-col gap-[2vw] text-center mt-[14vw] pr-[3vw]'>
            <h2 className='text-[3.2vw] leading-[1.2] font-display font-medium'>{title}</h2>
            {content.map((item,index)=>(
                <p key={index} className='text-[1.2vw]'>{item}</p>
            ))}
            
        </div>
        </div>
    </section>
    
    </>
  )
}

export default Overview