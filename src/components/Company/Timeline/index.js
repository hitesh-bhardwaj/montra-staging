"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import TimelineSlide from "./TimelineSlide";
import MarqueeBackground from "./MarqueeBackground";
import { timelineData } from "./TimelineData";
import { ArrowRight } from "@/components/Buttons/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
  const useIsMobile = (breakpoint = 541) => {
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
      className="relative w-full h-screen overflow-hidden bg-primary text-white timeline-section"
      id="timeline"
    >
      <div className="absolute top-[5%] text-center left-1/2 -translate-x-1/2 w-full max-sm:w-[80%]">
        <h3 className="leading-[1.2] font-medium font-display text-[5.7vw] max-sm:text-[10.5vw]">
          Our Story from Vision to Impact
        </h3>
      </div>
      <div className="absolute z-[100] bottom-[7%] left-1/2 -translate-x-1/2 flex space-x-[2vw] max-sm:top-[20%] max-sm:bottom-auto max-sm:items-center">
        <button
          onClick={prevSlide}
          className="border w-[3.2vw] h-[3.2vw] flex items-center justify-center border-white hover:bg-white hover:text-primary text-white duration-300 rounded-full max-sm:w-[12vw] max-sm:h-[12vw] "
          aria-label="previous slide"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
        {/* Year Selector */}
        <div
          className="transform flex gap-2 bg-white/20 rounded-full  "
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
                  className={`relative z-10 px-[1.5vw] font-display text-[1vw] py-[0.8vw] rounded-full transition-colors duration-300 max-sm:text-[6.5vw] max-sm:px-[10vw]  max-sm:py-[2.5vw]`}
                >
                  {year}
                </button>
              </div>
            );
          })}
        </div>
        <button
          onClick={nextSlide}
          className="border w-[3.2vw] h-[3.2vw] flex items-center justify-center border-white hover:bg-white hover:text-primary text-white duration-300 rounded-full max-sm:w-[12vw] max-sm:h-[12vw]"
          aria-label="next slide"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Slide Content */}
      <MarqueeBackground year={years[activeIndex]} />
      <AnimatePresence custom={direction} mode="wait">
        <TimelineSlide
          key={years[activeIndex]}
          year={years[activeIndex]}
          direction={direction}
          data={timelineData[activeIndex]}
        />
      </AnimatePresence>
    </section>
  );
}
