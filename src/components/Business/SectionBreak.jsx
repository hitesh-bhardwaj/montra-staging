"use client";

import { useEffect, useRef } from "react";
import { initSplitLines } from "@/utils/splitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionBreak() {
  const sectionNewRef = useRef(null);
  // const iconsContainer = useRef(null)

  useEffect(() => {
    initSplitLines();
    
    const lines = sectionNewRef.current.querySelectorAll(".single-line");

    if(globalThis.innerWidth>1024){

      gsap.to(".gradient", {
        scrollTrigger: {
          trigger: sectionNewRef.current,
          pin: ".gradient",
          start: "top 70%",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      });
      
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionNewRef.current,
            start: "top center",
            end: "center 20%",
            scrub: 0.25,
              // markers:true,
          },
        })
        .to(lines, {
          maskPosition: "0% 100%",
          stagger: 0.1,
          ease: "none",
        });
    }
    else{
      gsap.to(".gradient", {
        scrollTrigger: {
          trigger: sectionNewRef.current,
          pin: ".gradient",
          start: "top 90%",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      });
      
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionNewRef.current,
            start: "top center",
            end: "center 20%",
            scrub: 0.25,
              // markers:true,
          },
        })
        .to(lines, {
          maskPosition: "0% 100%",
          stagger: 0.1,
          ease: "none",
        });

    }

    // — now the floating icons logic

    return () => {
      // clearTimeout(spawnTimeout)
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section
      ref={sectionNewRef}
      className="relative h-screen  w-screen  px-[4vw] overflow-hidden max-sm:h-screen max-sm:py-[25%] max-sm:mt-[15vw] max-sm:bg-[#FBFBFB] bg-white"
    >
      <div className="w-screen h-[20vw] absolute gradient left-0 top-0 z-[10] bg-gradient-to-b from-transparemt via-white to-white max-sm:hidden"/>

      <div className="h-full flex items-center justify-center relative text-center w-[88%] mx-auto">
        <h2
          data-split="lines"
          className="text-[5.7vw] font-medium font-display leading-[1.2] text-break text-black-1 max-sm:text-[10.5vw]"
        >
          With Montra for Personal, you're in charge—track spending, send money,
          save, and access financial tools without the bank hassle.
        </h2>
      </div>
    </section>
  );
}
