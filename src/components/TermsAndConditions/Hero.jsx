'use client'
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../Copy";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.set(".montra-logo", {
        filter: "brightness(16)",
        // duration: 0,
      });
      gsap.to(".montra-logo", {
        filter: "brightness(16)",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          // markers: true,
      
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
          // onLeaveBack: () => {
          //   gsap.to(".montra-logo", {
          //     filter: "brightness(1)",
          //     duration: 0,
          //   });
          // },
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
    <>
      <div
        id="hero"
        className="h-[70vh] max-sm:h-[45vh]  rounded-b-[3vw] max-sm:rounded-b-[9vw] flex items-center justify-center bg-[#215CFF] w-full max-md:h-[50vh]"
      >
        <Copy delay={0.6}>
        <h1 className="flex flex-col items-center max-sm:text-[10vw] justify-center text-[5.7vw] font-display font-medium capitalize leading-[1.15] text-white">
          <span>Montra</span>
          <span>Terms and Conditions</span>
        </h1>
        </Copy>
      </div>
    </>
  );
}