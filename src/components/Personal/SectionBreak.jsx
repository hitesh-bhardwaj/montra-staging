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
    gsap.to(".gradient", {
      scrollTrigger: {
        trigger: sectionRef.current,
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
          trigger: sectionRef.current,
          start: "top center",
          end: "center 20%",
          scrub: 0.25,
          //   markers:true,
        },
      })
      .to(lines, {
        maskPosition: "0% 100%",
        stagger: 0.1,
        ease: "none",
      });

    // — now the floating icons logic

    return () => {
      // clearTimeout(spawnTimeout)
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen mt-[-10vw] w-screen  px-[4vw] overflow-hidden"
    >
      <div className="w-screen h-[20vw] absolute gradient left-0 top-0 z-[10] bg-gradient-to-b from-transparemt via-white to-white"></div>

      <div className="h-full flex items-center justify-center relative text-center w-[88%] mx-auto">
        <h2
          data-split="lines"
          className="text-[5.7vw] font-medium font-display leading-[1.2] text-break text-black-1"
        >
          With Montra for Personal, you're in charge—track spending, send money,
          save, and access financial tools without the bank hassle.
        </h2>
      </div>
    </section>
  );
}
