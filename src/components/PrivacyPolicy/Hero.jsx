"use client"
import React, { useEffect } from 'react'
import Heading from '../Heading'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".montra-logo",{
                filter: "brightness(16)",
            })
          gsap.to(".montra-logo", {
            filter: "brightness(16)",
            scrollTrigger: {
              trigger: "#hero",
              start: "top top",
              // markers: true,
              onLeaveBack: () => {
                gsap.to(".montra-logo", {
                  filter: "brightness(16)",
                  duration: 0,
                });
              },
              onEnter: () => {
                gsap.to(".montra-logo", {
                  filter: "brightness(16)",
                  duration: 0,
                });
              },
              onLeave: () => {
                gsap.to(".montra-logo", {
                  filter: "brightness(1)",
                  duration: 0,
                });
              },
             
              onEnterBack: () => {
                gsap.to(".montra-logo", {
                  filter: "brightness(16)",
                  duration: 0,
                });
              },
            },
          });
          gsap.to(".ham-mobile", {
            backgroundColor: "#215CFF",
            duration: 0,
            scrollTrigger: {
              trigger: "#hero",
              start: "top top",
              // markers: true,
              onEnter: () => {
                gsap.to(".ham-mobile", {
                  backgroundColor: "white",
                  duration: 0,
                });
              },
              onLeaveBack: () => {
                gsap.to(".ham-mobile", {
                  backgroundColor: "#215CFF",
                  duration: 0,
                });
              },
              onLeave: () => {
                gsap.to(".ham-mobile", {
                  backgroundColor: "#215CFF",
                  duration: 0,
                });
              },
              onEnterBack: () => {
                gsap.to(".ham-mobile", {
                  backgroundColor: "white",
                  duration: 0,
                });
              },
            },
          });
        });
        return () => ctx.revert();
      });
  return (
    <section className='w-screen h-[60vh] bg-[#FBFBFB]' id='hero'>
        <div className='w-full h-full rounded-b-[2vw] bg-primary flex justify-center items-center'>
            <Heading delay={0.8}>
            <h1 className='text-white text-[5.7vw] font-display font-medium capitalize leading-[1.15] flex flex-col items-center'>
                <div>Montra</div>
                <div>Privacy Policy</div>

            </h1>
            </Heading>

        </div>
        
    </section>
  )
}

export default Hero