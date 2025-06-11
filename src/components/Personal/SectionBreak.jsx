"use client";

import { useEffect, useRef } from "react";
import { initSplitLines } from "@/utils/splitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionBreak() {
  const sectionRef = useRef(null);
  // const iconsContainer = useRef(null)

  useEffect(() => {
    initSplitLines();

    const lines = sectionRef.current.querySelectorAll(".single-line");

    if (globalThis.innerWidth > 1024) {
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
          stagger: 0.25,
          ease: "none",
        });
    }
    if (globalThis.innerWidth > 541 && globalThis.innerWidth < 1024) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "center center",
            scrub: 0.25,
            // markers:true,
          },
        })
        .to(lines, {
          maskPosition: "0% 100%",
          stagger: 0.25,
          ease: "none",
        });
    }
    if (globalThis.innerWidth < 541) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 0.15,
            // markers:true,
          },
        })
        .to(lines, {
          maskPosition: "0% 100%",
          stagger: 0.15,
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
      ref={sectionRef}
      className="relative h-screen mt-[-20vw] w-screen  px-[4vw] overflow-hidden max-sm:py-[25%] max-sm:mt-[15vw] bg-[#FBFBFB] max-md:mt-0 max-md:h-[80vh] max-sm:h-screen"
    >
      <div className="h-full flex items-center justify-center relative text-center w-[88%] mx-auto">
        <h2
          data-split="lines"
          className="text-[5.7vw] font-medium font-display leading-[1.2] text-break text-black-1 max-sm:text-[10.5vw] max-md:text-[7.5vw]"
        >
          With Montra Personal, You're in Charge – send, spend, and manage your
          finances right from your phone.
        </h2>
      </div>
    </section>
  );
}
