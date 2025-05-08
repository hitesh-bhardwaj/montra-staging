"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const Overview = ({content}) => {
  const block1 = useRef(null);
  const block2 = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
  
    const target = { x: 0, y: 0 };
    const current = { x1: 0, y1: 0, x2: 0, y2: 0 };
  
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
  
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2;
      const y = ((e.clientY - top) / height - 0.5) * 2;
  
      target.x = x;
      target.y = y;
    };
  
    const lerp = (start, end, alpha) => start + (end - start) * alpha;
  
    const animate = () => {
      current.x1 = lerp(current.x1, target.x * 10, 0.1);
      current.y1 = lerp(current.y1, target.y * 10, 0.1);
      current.x2 = lerp(current.x2, -target.x * 8, 0.1);
      current.y2 = lerp(current.y2, -target.y * 8, 0.1);
  
      if (block1.current) {
        block1.current.style.transform = `translate(${current.x1}px, ${current.y1}px)`;
      }
      if (block2.current) {
        block2.current.style.transform = `translate(${current.x2}px, ${current.y2}px)`;
      }
  
      animationFrameId = requestAnimationFrame(animate);
    };
  
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      animate(); 
    }
  
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <> 
    <section  className='w-screen h-screen bg-[#fbfbfb] py-[5%] overflow-hidden' id='overview'>
        <div className='w-full flex items-start justify-between px-[4vw] '>
        <div  ref={containerRef} className='w-[40%] relative'>
            <Image src={content.mainImg} alt='overview-phone-image' className='object-cover w-full h-[60vw] mt-[-7vw] z-[2] relative' width={700} height={1080}/>
            <div className='absolute top-[12%] left-[10%] w-full h-full'>
                <Image src={content.bgImg} alt='overview-banking-image' className='w-full h-[35vw] object-cover' width={400} height={800}/>
            </div>
            <div ref={block1} className='!w-fit  h-fit rounded-[1.2vw] shadow-md drop-shadow-md py-[1vw] px-[1vw] bg-[#F1FFE8] absolute top-[55%] left-[45%] z-[7] flex gap-[1vw]'>
              <div className='w-[2vw] h-[2vw]'>
                <Image src={content.icon2} width={100} height={100} className='w-full h-full object-cover' alt='overview-icon'/>
              </div>
              <div className="capitalize">
               {content.subcontent1}
              </div>
            </div>
            <div ref={block2} className='w-fit h-fit rounded-[1.2vw] shadow-md drop-shadow-md py-[1vw] px-[1vw] bg-[#FFEAEE] absolute top-[30%] left-[10%] z-[7] flex gap-[1vw]'>
              <div className='w-[2vw] h-[2vw]'>
                <Image src={content.icon1} width={100} height={100} className='w-full h-full object-cover' alt='overview-icon'/>
              </div>
              <div className="capitalize">
               {content.subcontent2}
              </div>
            </div>
        </div>
        <div className='w-[45%] h-full flex flex-col items-center space-y-[3vw] mt-[-7vw]'>
        <div className='w-full flex flex-col gap-[2vw] mt-[14vw] pr-[3vw]'>
            <h2 className='text-[3.2vw] leading-[1.2] font-display font-medium capitalize'>{content.title}</h2>
            {content.content.map((item,index)=>(
                <p key={index} className='text-[1.2vw] w-[90%]'>{item}</p>
            ))}
            
        </div>
        {content.cards?.length > 0 && (
        <div className='flex items-center gap-[1vw]'>
          {content.cards.map((item,index)=>(
 <div key={index} className={`h-[9vw] w-[9vw] p-[1vw] px-[1.5vw] rounded-[1.5vw] flex flex-col gap-[0.5vw] items-center justify-center ${item.color}`}>
 <Image src={item.icon} height={90} width={90} alt={item.text} className='h-[5vw] w-[5vw]'/>
 <p className='text-white font-medium'>{item.text}</p>
</div>
          ))}
        </div>
        )}
        </div>
        </div>
    </section>
    
    </>
  )
}

export default Overview