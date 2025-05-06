'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image'
import React from 'react'

const Discover = () => {
    const marqueeRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;

      const animate = () => {
        const containerRect = marquee.parentElement.getBoundingClientRect();
        const centerY = containerRect.top + containerRect.height / 2;
        itemRefs.current.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const dist = Math.abs(centerY - elCenter);
          const maxDist = containerRect.height / 2;
          const scale = gsap.utils.mapRange(0, maxDist, 1.3, 1)(dist);
          el.style.transform = `scale(${scale})`;
        });

        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });

    return () => ctx.revert();
  }, []);
    return (
        <section className='px-[6vw] py-[4vw] h-full w-screen bg-white'>
            <div className='flex items-center relative  justify-between  overflow-hidden bg-primary rounded-[4vw] py-[4vw] px-[2vw] pl-[4vw]'>
                <div className='w-[70%]'>
                    <h2 className='text-[5.7vw] font-display font-medium  w-[80%] capitalize leading-[1.15] text-white'>Discover More on Montra Marketplace</h2>
                </div>
      <div className="w-screen h-[8vw] absolute gradient left-0 top-0 z-[10] bg-gradient-to-t from-transparent via-primary/50 to-primary max-sm:hidden"/>
      <div className="w-screen h-[8vw] absolute gradient left-0 bottom-0 z-[10] bg-gradient-to-b from-transparent via-primary/50 to-primary max-sm:hidden"/>
      <div className='h-[33vw]  w-[40vw]'>

                <div ref={marqueeRef} className='w-full marquee-vertical h-fit overflow-hidden  flex flex-col items-center gap-[2.5vw]'>
                    {[...data,...data].map((item, index) => (
                        <div key={index}  ref={(el) => (itemRefs.current[index] = el)} className='bg-[#111111] rounded-[6vw] h-fit w-fit p-[0.1vw] flex '>
                            <div className='h-[4.5vw] w-[4.5vw] bg-white rounded-full flex items-center justify-center'>
                                <Image src={item.icon} height={28} width={28} alt='electricity-icon' className='h-[2.2vw] w-[2.2vw]' />
                            </div>
                            <div className={`h-[4.5vw] w-[14.5vw] px-[2.5vw] rounded-[6vw]  flex items-center justify-center text-center`}   style={{ backgroundColor: item.color }}>
                                <p className='font-medium'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>

            </div>

        </section>
    )
}

export default Discover

const data = [
    {
        icon: "/assets/images/personal-payments/airtime.svg",
        color: "#D9F7C5",
        text: "Airtime top-up"
    },
    {
        icon: "/assets/images/personal-payments/data-recharge.svg",
        color: "#FFEAEE",
        text: "Data Recharge"
    },
    {
        icon: "/assets/images/personal-payments/cable-tv.svg",
        color: "#EAF1FF",
        text: "Cable TV"
    },
    {
        icon: "/assets/images/personal-payments/electricity-icon.svg",
        color: "#FEFFA7",
        text: "Electricity Bill"
    },
    {
        icon: "/assets/images/personal-payments/utility-bill.svg",
        color: "#CAC5F7",
        text: "Bills Payment"
    },
    {
        icon: "/assets/images/personal-payments/broadband.svg",
        color: "#FFD7CB",
        text: "Broadband"
    },
    {
        icon: "/assets/images/personal-payments/shop.svg",
        color: "#A4F3FF",
        text: "Shop"
    }
]