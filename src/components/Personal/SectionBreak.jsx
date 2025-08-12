"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function SectionBreak() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionBreakSplit = SplitText.create(textRef.current, {
        type: "words chars",
        aria: false,
        tag: 'span',
        charsClass: 'split-chars'
      });
      const t = Array.from(textRef.current.querySelectorAll(".split-chars"));

      if (globalThis.innerWidth > 1024) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 0.25,
            },
          })
          .to(t, {
            className: "split-chars show",
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.inOut"
          }, 0)
      }
      if (globalThis.innerWidth > 541 && globalThis.innerWidth < 1024) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "center center",
              scrub: 0.25,
            },
          })
          .to(t, {
            className: "split-chars show",
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.inOut"
          }, 0)
      }
      if (globalThis.innerWidth < 541) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 0.15,
            },
          })
          .to(t, {
            className: "split-chars show",
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.inOut"
          }, 0)
      }
    })
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen mt-[-20vw] w-screen  px-[4vw] overflow-hidden max-sm:py-[25%] max-sm:mt-[15vw] bg-[#FBFBFB] max-md:mt-0 max-md:h-[80vh] max-sm:h-screen"
    >
      <div className="split__wrapper h-full flex items-center justify-center relative text-center w-[88%] mx-auto">
        <h2
          ref={textRef}
          className="text-[5.7vw] font-medium font-display leading-[1.2] text-break text-black-1 max-sm:text-[10.5vw] max-md:text-[7.5vw]"
        >
          With Montra Personal, you're in Charge.
          Send, spend, and manage your finances right from your phone.
        </h2>
      </div>
    </section>
  );
}
