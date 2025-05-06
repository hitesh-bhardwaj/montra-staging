"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const Overview = ({icon1,icon2,mainImg,bgImg,title,content,subcontent1,subcontent2}) => {
  const block1 = useRef(null);
  const block2 = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2; 
      const y = ((e.clientY - top) / height - 0.5) * 2; 

      const moveX1 = x * 10; 
      const moveY1 = y * 10;
      const moveX2 = -x * 8;
      const moveY2 = -y * 8;

      if (block1.current) {
        block1.current.style.transform = `translate(${moveX1}px, ${moveY1}px)`;
      }
      if (block2.current) {
        block2.current.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  return (
    <> 
    <section  className='w-screen h-screen bg-[#fbfbfb] py-[5%] overflow-hidden' id='overview'>
        <div className='w-full flex justify-between px-[4vw] '>
        <div  ref={containerRef} className='w-[40%] relative'>
            <Image src={mainImg} alt='overview-phone-image' className='object-cover w-full h-[60vw] mt-[-7vw] z-[2] relative' width={700} height={1080}/>
            <div className='absolute top-[12%] left-[10%] w-full h-full'>
                <Image src={bgImg} alt='overview-banking-image' className='w-full h-[35vw] object-cover' width={400} height={800}/>
            </div>
            <div ref={block1} className='w-[15vw] h-fit rounded-[1.2vw] shadow-md drop-shadow-md py-[1vw] px-[1vw] bg-[#F1FFE8] absolute top-[60%] left-[70%] z-[7] flex gap-[1vw]'>
              <div className='w-[2vw] h-[2vw]'>
                <Image src={icon2} width={100} height={100} className='w-full h-full object-cover' alt='overview-icon'/>
              </div>
              <div className="capitalize">
               {subcontent1}
              </div>
            </div>
            <div ref={block2} className='w-[15vw] h-fit rounded-[1.2vw] shadow-md drop-shadow-md py-[1vw] px-[1vw] bg-[#FFEAEE] absolute top-[30%] left-[10%] z-[7] flex gap-[1vw]'>
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