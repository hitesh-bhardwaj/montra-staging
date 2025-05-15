"use client";

import { useEffect, useRef } from "react";
import { initSplitLines } from "@/utils/splitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, useScroll, useTransform } from 'motion/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TextBreak() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
})

const arrowTranslateX = useTransform(scrollYProgress, [0.38, 0.70], ['-100%', '0%'])
const arrowScale = useTransform(scrollYProgress, [0.38, 0.60], [1, 4])

  useEffect(() => {
    initSplitLines();

    const lines = sectionRef.current.querySelectorAll(".single-line");


    if (globalThis.innerWidth > 1024) {
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
            start: "top 70%",
            end: "center 50%",
            scrub: 0.25,
            //   markers:true,
          },
        })
        .to(lines, {
          maskPosition: "0% 100%",
          stagger: 0.1,
          ease: "none",
        });
    }
    else {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#text-break",
            start: "60% 90%",
            end: "bottom 50%",
            scrub: 0.25,
            // markers: true,
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
      className="relative h-[130vh] w-screen  px-[4vw] overflow-hidden max-sm:py-[25%]  bg-[#FBFBFB] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:h-screen" id="text-break"
    >
      {/* <div className="w-screen h-[20vw] absolute gradient left-0 top-0 z-[10] bg-gradient-to-b from-transparemt via-white to-white max-sm:hidden" /> */}

      <div className="h-full flex items-center justify-center relative text-center w-[88%] mx-auto mt-[-10vw] max-sm:mt-0 max-sm:pt-[40vw]">
        <h2
          data-split="lines"
          className="text-[5.7vw] font-medium font-display leading-[1.2] text-break text-black-1 max-sm:text-[10.5vw] max-md:text-[7.5vw]"
        >
          We're not just building products—we're building possibilities.
        </h2>
      </div>
      <div className=" h-screen w-screen overflow-hidden flex flex-col justify-center items-center bg-[#FBFBFB] max-sm:h-[50vh] ">
                <motion.svg
                    style={{
                        scale: arrowScale,
                        translateX: arrowTranslateX,
                        transformOrigin: '0% 50%',
                    }}
                    className="absolute inset-0 w-auto h-full"
                    width="1459"
                    height="1073"
                    viewBox="0 0 1459 1073"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0.000976562 0.510742C84.1488 171.168 459.872 513.205 1289.6 516.178V516.176L1393.16 516.412L1399.45 481.279L1458.43 537.775L1379.49 592.722L1386.13 555.657L1289.75 556.808V556.821C459.917 559.754 84.1538 901.822 0.000976562 1072.49V0.510742Z" fill="#215CFF" />
                </motion.svg>
            </div>
    </section>
  );
}



