import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'

const Benefits = ({data}) => {
  return (
    <section className='w-screen h-[120vh] px-[4vw] py-[7%] bg-white' id='benefits'>
      <div className='w-full h-full flex flex-col gap-[1.2vw] text-center'>
        <h2 className='text-[5.7vw] font-display font-medium'>{data.heading}</h2>
        <p>{data.para}</p>
        <div
          className={`flex w-full h-full relative text-[1.2vw] font-medium `}
        >
          {data.cards.map((item) => (
            <AnimatedOpeners key={item.classPrefix} classPrefix={item.classPrefix} left={item.left} top={item.top} color={item.color} title={item.title} z={item.z}  width={item.width} content={item.content} height={item.height}/>
          ))}
        </div>

      </div>
    </section>
  )
}


export default Benefits

const AnimatedOpeners = ({ classPrefix, left, top, color, title, z, width,content,height }) => {
  const tlRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      tl.to(`.${classPrefix}-container`, {
        x: "-4vw",
        ease: "power3.inOut"
      })
        .to(`.${classPrefix}-alpha`, {
          x: "-4vw",
          delay: -0.5,
          ease: "power3.inOut"
        })
        .to(`.${classPrefix}-circle`, {
          height: height,
          ease: "power3.inOut",
          delay: -0.3,
        })
        .from(`.${classPrefix}-content`, {
          opacity: 0,
          delay: -0.3,
          ease: "power3.inOut"
        })

      tlRef.current = tl;
    });

    return () => ctx.revert();
  }, [classPrefix]);

  const handleMouseEnter = () => {
    tlRef.current?.play();
  };

  const handleMouseLeave = () => {
    tlRef.current?.reverse();
  };

  return (
    <span className={`absolute ${left} ${top} ${classPrefix} ${z} `}>
      <div
        className={`${width} rounded-[3vw] absolute overflow-hidden`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`${width} h-[4.2vw] border-[1.5px] relative border-black overflow-hidden rounded-[3vw]  circle ${classPrefix}-circle`}>
          <div className={`w-fit bg-black rounded-[3vw] flex h-full z-[-1] ${classPrefix}-container`}>
            <span className={` h-[4vw] w-[4vw] rounded-full flex justify-center items-center ${color}`}></span>
            <div className={`h-full rounded-[3vw] ${width} px-[2vw] flex flex-col items-start py-[1vw] capitalize relative gap-[2vw] ${color}`}>
              <div className="h-[4vw] ">
                {title}
              </div>
              <div className='absolute right-[8%] cursor-pointer' >
                <Image className='w-[2vw] h-[2vw] object-contain invert' alt='cross' src="/assets/icons/cross-icon.svg" width={50} height={50} onClick={handleMouseLeave} />
              </div>
              <div className={`text-[1.2vw] ${classPrefix}-content font-normal`}>
               {content}
              </div>
            </div>
          </div>
        </div>
        <div className={`absolute top-[30%] left-[5%] ${classPrefix}-alpha`}><Image width={100} height={100} src={"/assets/icons/arrow-right.svg"} alt='arrow' className='w-[1.5vw] h-[1.5vw] object-contain' /></div>
      </div>
    </span>
  );
};
