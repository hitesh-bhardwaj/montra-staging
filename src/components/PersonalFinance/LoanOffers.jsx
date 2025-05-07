"use client"
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'

const letters = [
    {  classPrefix: "a" ,left:"!left-[10%]",top:"!top-[25%]",color:"bg-[#EAF1FF]", content:"",title:"Compare Loan Offers" ,z:"z-[6]" },
    { classPrefix: "b" ,left:"!left-[20%]",top:"!top-[55%]",color:"bg-[#FEFFA7]", content:"",title:"View Loan Statements" ,z:"z-[5]"},
    {  classPrefix: "c",left:"!left-[49.5%]",top:"!top-[15%]",color:"bg-[#FFEAEE]",content:"Stay updated in real-time. Monitor the progress of your loan applications right from your Montra app.",title:"Track Your Application" ,z:"z-[7]"},
    {  classPrefix: "d" ,left:"!left-[70%]",top:"!top-[45.9%]",color:"bg-[#D9F7C5]", content:"",title:"Easy Repayments",z:"z-[6]"},
    {  classPrefix: "e" ,left:"!left-[60%]",top:"!top-[80%]",color:"bg-[#FFD7CB]", content:"",title:"Smart Payment Reminders" ,z:"z-[4]" },
    {  classPrefix: "f" ,left:"!left-[10%]",top:"!top-[85%]",color:"bg-[#CAC5F7]", content:"",title:"Instant Disbursement" ,z:"z-[4]" },

  ];
const LoanOffers = () => {
  return (
    <section className='w-screen h-[120vh] px-[4vw] py-[7%] bg-white' id='benefits'>
        <div className='w-full h-full flex flex-col gap-[1.2vw] text-center'>
          <div className='flex flex-col items-center gap-[1.5vw] '>
            <h2 className='text-[5.7vw] w-[60%]  font-display font-medium leading-[1.2]'>Compare <span className='text-primary'>Loan </span> Offers. Get Funded Instantly.</h2>
            <p className='w-[45%]'>Explore personalized loan options from trusted lending partners and receive funds in minutes—right from your Montra App.</p>
            </div>
            <div
          className={`flex w-full h-full relative text-[1.2vw] font-medium `}
        >
          {letters.map(({ letter, classPrefix,left,top,color,title ,z}) => (
        <AnimatedOpeners key={classPrefix} letter={letter} classPrefix={classPrefix} left={left} top={top} color={color} title={title} z={z}/>
      ))}
        </div>

        </div>

    </section>
  )
}


export default LoanOffers

const AnimatedOpeners = ({ letter, classPrefix ,left,top,color,title,z}) => {
    const tlRef = useRef(null);
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ paused: true });
  
        tl.to(`.${classPrefix}-container`, {
          x: "-4vw",
          ease:"power3.inOut"
        })
        .to(`.${classPrefix}-alpha`, {
          x: "-4vw",
          delay: -0.5,
          ease:"power3.inOut"
        })
        .to(`.${classPrefix}-circle`, {
          height: "25vw",
          ease:"power3.inOut",
          delay:-0.3,
        })
        .from(`.${classPrefix}-content`,{
          opacity:0,
          delay:-0.3,
          ease:"power3.inOut"
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
          className={`w-[27vw] rounded-[3vw] absolute overflow-hidden`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`w-[27vw] h-[4.2vw] border-[2px] relative border-black overflow-hidden rounded-[3vw]  circle ${classPrefix}-circle`}>
            <div className={`w-fit bg-black rounded-[3vw] flex h-full z-[-1] ${classPrefix}-container`}>
              <span className={` h-[4vw] w-[4vw] rounded-full flex justify-center items-center ${color}`}></span>
              <div className={`h-full rounded-[3vw] w-[27vw] px-[2vw] flex flex-col items-start py-[1vw] capitalize relative gap-[2vw] ${color}`}>
                <div className="h-[4vw] ">
                  {title}
                </div>
                <div className='absolute right-[8%] cursor-pointer' >
                  <Image className='w-[2vw] h-[2vw] object-contain invert' alt='cross' src="/assets/icons/cross-icon.svg" width={50} height={50} onClick={handleMouseLeave}/>
                </div>
                <div className={`text-[1.2vw] ${classPrefix}-content font-normal`}>
                No payment goes through without your personal Montra PIN. It's your final word on every transaction.
                </div>
              </div>
            </div>
          </div>
          <div className={`absolute top-[30%] left-[5%] ${classPrefix}-alpha`}><Image width={100} height={100} src={"/assets/icons/arrow-right.svg"} alt='arrow' className='w-[1.5vw] h-[1.5vw] object-contain'/></div>
        </div>
      </span>
    );
  };
  