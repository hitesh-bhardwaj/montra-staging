"use client";

import { useEffect, useRef } from "react";
import { initSplitLines } from "@/utils/splitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionBreak({content, width}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    initSplitLines();
    
    const lines = sectionRef.current.querySelectorAll(".single-line");

    if(globalThis.innerWidth>1024){
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 0.25,
            //   markers:true,
          },
        })
        .to(lines, {
          maskPosition: "40% 100%",
          stagger: 0.03,
          ease: "none",
        });
    }
    else{
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            end: "center 10%",
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
    return () => {
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-screen  px-[4vw] overflow-hidden  max-sm:py-[25%] max-sm:px-[7vw] bg-[#FBFBFB] max-md:h-[70vh] max-sm:h-screen"
    >
      <div className={`h-full flex items-center justify-center relative text-center mx-auto max-sm:w-full max-md:w-[90%] ${width}`}>
        <h2
          data-split="lines"
          className="text-[5.7vw] font-medium font-display leading-[1.2] text-break text-black-1 max-sm:text-[10.5vw] max-md:text-[7.5vw]"
        >
          {content}
        </h2>
      </div>
    </section>
  );
}
