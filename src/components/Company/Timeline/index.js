"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import TimelineSlide from "./TimelineSlide";
import MarqueeBackground from "./MarqueeBackground";
import { timelineData } from "./TimelineData";
import { ArrowRight } from "@/components/Buttons/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Heading from "@/components/Heading";

gsap.registerPlugin(ScrollTrigger);

const years = [2019, 2020, 2021, 2022, 2023, 2024];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % years.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + years.length) % years.length);
  };

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };
  const useIsMobile = (breakpoint = 1024) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, [breakpoint]);

    return isMobile;
  };

  const isMobile = useIsMobile();

  //    useEffect(() => {
  //     const ctx = gsap.context(() => {
  //         gsap.fromTo(".timeline-section", {
  //             opacity: 0, y: 50
  //         }, {
  //             opacity: 1, y: 0, duration: 1, stagger: 0.1,delay:-0.5 ,scrollTrigger: { trigger: "#timeline", start: 'top 90%', markers: false}
  //         })
  //     })
  //     return () => ctx.revert();
  // });

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-primary text-white timeline-section max-sm:h-full max-sm:px-[7vw]  max-md:px-[5vw] max-md:h-full max-md:flex max-md:flex-col max-md:gap-[5vw] max-md:py-[7%]"
      id="timeline"
    >
      <div className="absolute top-[5%] text-center left-1/2 -translate-x-1/2 w-full max-sm:w-[100%] max-sm:static max-sm:translate-x-0 max-sm:text-left max-md:w-full max-md:text-center max-md:static max-md:translate-x-0 max-md:order-0">
      <Heading>
        <h3 className="leading-[1.2] font-medium font-display text-[5.7vw] max-sm:text-[10.5vw] max-md:text-[7.5vw] max-md:w-[70%] max-md:text-center max-md:mx-auto max-sm:w-full max-sm:text-center max-sm:mx-auto ">
          Our Story from Vision to Impact
        </h3>
      </Heading>
      </div>
      <div className="absolute z-[100] bottom-[7%] left-1/2 -translate-x-1/2 flex space-x-[2vw] max-sm:static max-sm:translate-x-0 max-sm:items-center max-sm:justify-center max-sm:pt-[15%] max-md:items-center max-md:justify-center max-md:static max-md:translate-x-0  max-md:order-2  max-sm:order-1">
        <button
          onClick={prevSlide}
          className="border w-[3.2vw] h-[3.2vw] flex items-center justify-center border-white hover:bg-white hover:text-primary text-white duration-300 rounded-full max-sm:w-[12vw] max-sm:h-[12vw] max-md:w-[8vw] max-md:h-[8vw] cursor-pointer"
          aria-label="previous slide"
        >
          <ArrowRight className="w-4 h-4 rotate-180 max-sm:h-4 max-sm:w-4 max-md:h-[3vw] max-md:w-[3vw]" />
        </button>
        <div
          className="transform flex gap-2 bg-white/20 rounded-full "
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {years.map((year, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;
            const shouldShowPill = hoveredIndex !== null ? isHovered : isActive;
            if (isMobile && !isActive) return null;
            return (
              <div
                key={year}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {!isMobile && shouldShowPill && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0.5 bg-primary rounded-full z-0"
                    transition={{ type: "ease", stiffness: 500, damping: 30 }}
                  />
                )}
                <button
                  onClick={() => goToSlide(index)}
                  className={`relative z-10 px-[1.5vw] font-display text-[1vw] py-[0.8vw] rounded-full transition-colors duration-300 max-sm:text-[6.5vw] max-sm:px-[10vw]  max-sm:py-[2.5vw] max-md:text-[4.5vw] max-md:px-[10vw] max-md:py-[2vw] max-sm:w-[35vw] max-md:w-[30vw]`}
                >
                  {year}
                </button>
              </div>
            );
          })}
        </div>
        <button
          onClick={nextSlide}
          className="border w-[3.2vw] h-[3.2vw] flex items-center justify-center border-white hover:bg-white hover:text-primary text-white duration-300 rounded-full max-sm:w-[12vw] max-sm:h-[12vw] max-md:w-[8vw] max-md:h-[8vw] cursor-pointer"
          aria-label="next slide"
        >
          <ArrowRight className="w-4 h-4 max-sm:h-4 max-sm:w-4 max-md:h-[3vw] max-md:w-[3vw]" />
        </button>
      </div>
      <div className="max-sm:pb-[15%] max-md:h-full max-md:w-full max-md:order-1 max-sm:order-2">
      <MarqueeBackground year={years[activeIndex]} />
      <AnimatePresence custom={direction} mode="wait">
        <TimelineSlide
          key={years[activeIndex]}
          year={years[activeIndex]}
          direction={direction}
          data={timelineData[activeIndex]}
        />
      </AnimatePresence>

      </div>
    </section>
  );
}
