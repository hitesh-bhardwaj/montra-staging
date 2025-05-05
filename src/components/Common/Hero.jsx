"use client"
import { initSplitLines } from "@/utils/splitText";
import { AppleStoreButton, PlayStoreButton } from "../Buttons";
import { useEffect, useRef } from "react";
import gsap from "gsap";


export default function Hero({primaryHeading, heading, content}) {
    const heroRef = useRef(null);
    useEffect(() => {
        initSplitLines();
        const ctx = gsap.context(() => {
          const heroLines = heroRef.current.querySelectorAll(".single-line");
          gsap.to(heroLines, {
            maskPosition: "0% 100%",
            stagger: 0.2,
            duration: 2,
            // delay:4.2,
            ease: "none",
          });
          gsap.from(".header", {
            yPercent: -70,
            opacity: 0,
            duration: 1,
          });
    
          gsap.from(".heroFadeUp", {
            yPercent: 70,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
          });
        });
        return () => ctx.revert();
      }, []);

  return (
    <section id="hero" ref={heroRef} className="w-screen overflow-hidden">
      <div className="h-full flex items-center justify-center text-center px-[4vw]">
        <div className="w-4/5 mx-auto space-y-[1.2vw] pt-[14vw] py-[5vw] max-sm:w-full max-sm:pt-[30vw] max-sm:space-y-[7vw]">
          <h1
           data-split="lines"
            className="text-[5.7vw] font-display font-medium capitalize leading-[1.15] heroAnim max-sm:text-[11.5vw] max-sm:leading-[1.2]"
          >
            <span className="text-primary">{primaryHeading}</span>
           {heading}
          </h1>
          <p
           data-split="lines"
            className="font-body w-[85%] mx-auto heroAnim max-sm:w-[95%]"
          >
            {content}
          </p>
          <div className=" flex gap-6 justify-center mt-[4vw] max-sm:flex-col max-sm:items-center max-sm:gap-5">
            <div className="heroFadeUp">
              <AppleStoreButton />
            </div>
            <div className="heroFadeUp">
              <PlayStoreButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
