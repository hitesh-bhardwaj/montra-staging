"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import InfoCarouselSwiper from "./InfoCarouselSwiper";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    icon: "/assets/images/homepage/pay.svg",
    label: "BANKING",
    color: "text-[#FF8100]",
  },
  {
    icon: "/assets/images/homepage/receive.svg",
    label: "PAYMENTS",
    color: "text-primary",
  },
  {
    icon: "/assets/images/homepage/sell.svg",
    label: "MARKETPLACE",
    color: "text-[#35C771]",
  },
  {
    icon: "/assets/images/homepage/borrow.svg",
    label: "LOANS",
    color: "text-black-1]",
  },
  {
    icon: "/assets/images/homepage/insaurance.svg",
    label: "INSURANCE",
    color: "text-[#7A78FF]",
  },
  {
    icon: "/assets/images/homepage/invest.svg",
    label: "INVESTMENTS",
    color: "text-[#FB2F55]",
  },
];

export default function PinnedRevealSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const thresholds = [
    [0.0, 0.12],
    [0.05, 0.16],
    [0.1, 0.24],
    [0.15, 0.32],
    [0.2, 0.36],
    [0.25, 0.42],
  ];

  const transforms = thresholds.map(([from, to]) => ({
    opacity: useTransform(scrollYProgress, [from, to], [0, 1]),
    y: useTransform(scrollYProgress, [from, to], [300, 0]),
    scale: useTransform(scrollYProgress, [from, to], [0.5, 1]),
  }));

  const arrowTranslateX = useTransform(
    scrollYProgress,
    [0.42, 0.58],
    ["-100%", "0%"]
  );
  const arrowScale = useTransform(scrollYProgress, [0.42, 0.58], [1, 4.2]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if(globalThis.innerWidth>1024){
        gsap.to(".montra-logo", {
          scrollTrigger: {
            trigger: "#feature-text",
            start: "36% top",
            // markers: true,
            onLeaveBack: () => {
              gsap.to(".montra-logo", {
                filter: "brightness(1)",
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
      }
      else{
        gsap.to(".montra-logo", {
          scrollTrigger: {
            trigger: "#feature-text",
            start: "35% top",
            // markers: true,
            onLeaveBack: () => {
              gsap.to(".montra-logo", {
                filter: "brightness(1)",
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
        gsap.to(".ham-mobile",{
          backgroundColor: "#215CFF",
          duration:0,
          scrollTrigger: {
            trigger: "#feature-text",
            start: "38% top",
            // markers: true,
            onEnter: () => {
              gsap.to(".ham-mobile", {
                backgroundColor:"white",
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
        })
      }
    });
    return () => ctx.revert();
  });

  return (
    <section
      ref={ref}
      className="relative h-[400vh] max-md:h-[280vh] max-sm:h-[300vh] z-[101]"
      id="feature-text"
    >
      <div className="sticky top-0 h-screen w-screen overflow-hidden flex flex-col justify-center items-center bg-[#FBFBFB]">
        {/* 1) Six HEADINGS */}
        <div className="flex flex-col justify-center items-center max-sm:gap-[4vw] max-md:gap-[3vw]">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              style={{
                opacity: transforms[i].opacity,
                y: transforms[i].y,
                scale: transforms[i].scale,
              }}
              className="flex items-center space-x-[2vw] max-sm:space-x-[4vw]"
            >
              <img
                src={it.icon}
                alt={it.label}
                className="w-[4.5vw] h-[4.5vw] max-sm:w-[12vw] max-sm:h-[12vw] max-md:w-[10vw] max-md:h-[10vw]"
                loading="lazy"
              />
              <h2
                className={`text-[5vw] font-bold font-display max-sm:text-[10.5vw] max-md:text-[7.5vw] ${it.color}`}
              >
                {it.label}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* 2) ARROW SVG */}
        <motion.svg
          style={{
            scale: arrowScale,
            translateX: arrowTranslateX,
            transformOrigin: "0% 50%",
          }}
          className="absolute inset-0 w-auto h-full"
          width="1459"
          height="1073"
          viewBox="0 0 1459 1073"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.000976562 0.510742C84.1488 171.168 459.872 513.205 1289.6 516.178V516.176L1393.16 516.412L1399.45 481.279L1458.43 537.775L1379.49 592.722L1386.13 555.657L1289.75 556.808V556.821C459.917 559.754 84.1538 901.822 0.000976562 1072.49V0.510742Z"
            fill="#215CFF"
          />
        </motion.svg>
      </div>

      {/* 3) Carousel cards */}
      <motion.div className="absolute bottom-0 w-screen z-10 h-fit max-md:h-fit max-md:pb-[7%] max-sm:bottom-0">
        <InfoCarouselSwiper />
      </motion.div>
    </section>
  );
}
