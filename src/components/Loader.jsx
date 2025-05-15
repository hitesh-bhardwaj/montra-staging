"use client"
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Loader = () => {
  const [hidden, setIsHidden] = useState(false)
  useEffect(() => {
    const ctx = gsap.context(() => {
      if(globalThis.innerWidth>1024){
        const tl = gsap.timeline();
        const steps = 5; // Number of animation steps (and iterations)
  
        for (let i = 1; i <= steps; i++) {
          tl.to(".sequence-container", {
            xPercent: i * 100,
            ease: "power3.inOut",
            duration: 0.9,
          }).to(
            ".number-container",
            {
              xPercent: i * 20,
              duration: 0.9,
              ease: "power3.inOut",
            },
            "<"
          );
        }
        tl.to("#loader", {
          opacity: 0,
  
          filter: "blur(20px)",
          // duration:4,
  
          onComplete: () => {
            setIsHidden(true)
          }
        })

      }
      if(globalThis.innerWidth>541&&globalThis.innerWidth<1024){
        const tl = gsap.timeline();
        const steps = 5; // Number of animation steps (and iterations)
  
        for (let i = 1; i <= steps; i++) {
          tl.to(".sequence-container", {
            xPercent: i * 100,
            ease: "power3.inOut",
            duration: 0.9,
          }).to(
            ".number-container",
            {
              xPercent: i * 20,
              duration: 0.9,
              ease: "power3.inOut",
            },
            "<"
          );
        }
        tl.to("#loader", {
          opacity: 0,
  
          filter: "blur(20px)",
          // duration:4,
  
          onComplete: () => {
            setIsHidden(true)
          }
        })
      }
      if(globalThis.innerWidth<541){
        const tl = gsap.timeline();
        const steps = 5; // Number of animation steps (and iterations)
  
        for (let i = 1; i <= steps; i++) {
          tl.to(".sequence-container", {
            xPercent: i * 60,
            ease: "power3.inOut",
            duration: 0.9,
          }).to(
            ".number-container",
            {
              xPercent: i * 20,
              duration: 0.9,
              ease: "power3.inOut",
            },
            "<"
          );
        }
        tl.to("#loader", {
          opacity: 0,
  
          filter: "blur(20px)",
          // duration:4,
  
          onComplete: () => {
            setIsHidden(true)
          }
        })
      }


    });

    return () => ctx.revert();
  }, []);
 
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 flex items-end z-[9999] bg-white text-[17vw] overflow-hidden max-sm:text-[25vw] max-sm:h-dvh ${hidden ? "hidden" : ""}`}
      id="loader"
    >

      <div className="w-fit h-fit flex sequence-container relative z-[2] text-primary ">
        <div className="flex w-[10vw] overflow-hidden max-sm:w-[15vw] ">
          <div className="flex w-fit translate-x-[-80%] number-container">
            <span>9</span>
            <span>7</span>
            <span>5</span>
            <span>2</span>
            <span>0</span>
          </div>
        </div>

        <div className="flex w-[10vw] overflow-hidden max-sm:w-[15vw]">
          <div className="flex w-fit translate-x-[-80%] number-container">
            <span>9</span>
            <span>7</span>
            <span>9</span>
            <span>7</span>
            <span>0</span>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Loader;
