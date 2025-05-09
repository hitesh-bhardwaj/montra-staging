'use client'
import { useEffect, useRef } from "react";
import { AppleStoreButton, PlayStoreButton } from "../Buttons";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import { initSplitLines } from "@/utils/splitText";
import Copy from "../Copy";

export default function Hero() {
  const heroRef = useRef(null);
  const lenis = useLenis();
  const headingRef = useRef(null);
  const textRef = useRef(null);

  // useEffect(() => {
  //   const phrases = ["personal", "business"];
  //   let current = 0;
  //   const ctx = gsap.context(() => {
  //     const fadeInOut = () => {
  //       gsap.to(textRef.current, {
  //         opacity: 0,
  //         duration: 0.5,
  //         delay: 2,
  //         onComplete: () => {
  //           current = (current + 1) % phrases.length;
  //           textRef.current.innerText = phrases[current];
  //           gsap.to(textRef.current, {
  //             opacity: 1,
  //             duration: 1,
  //             delay: 0.5,
  //             onComplete: fadeInOut,
  //           });
  //         },
  //       });
  //     };
  //     fadeInOut();
  //   });
  //   return () => ctx.revert();
  // }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('#header-container', {
      yPercent: -100,
      duration: 1,
      ease: 'power2.out',
      delay: 4.8,
    })
      .from("#hero-btn-container", {
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        duration: 1,
      }, "<")
      .from("#hero-phone-image", {
        duration: 1.5,
        y: 20,
        opacity: 0,
      }, "<")
  })

  useEffect(() => {
    lenis && lenis.stop();

    const timeout = setTimeout(() => {
      lenis && lenis.start();
    }, 5000);

    return () => clearTimeout(timeout)
  }, [lenis]);

  return (
    <section id="hero" ref={heroRef} className="w-screen h-screen overflow-hidden">
      <div className="h-full flex items-start justify-center text-center px-[4vw]">
        <div className="w-[90%] mx-auto space-y-[1.5vw] pt-[14vw] py-[5vw] max-sm:w-full max-sm:pt-[30vw] max-sm:space-y-[7vw]">
          <Copy delay={4.5}>
            <h1
              ref={headingRef}
              className="text-[5.7vw] heroHeading font-display font-medium capitalize leading-[1.15] heroAnim max-sm:text-[11.5vw] max-sm:leading-[1.2]"
            >
              <span className="text-primary">One app</span> to manage all your{" "}
              <span className="text-primary overflow-hidden leading-[1] w-[22vw] max-sm:w-[44.5vw] max-sm:mb-[-1.2vw] h-full mb-[-0.75vw]">
                <span ref={textRef}>Personal</span>
              </span>{" "}
              finances
            </h1>
          </Copy>

          <Copy delay={4.8}>
            <p
              className="font-body w-[55%] mx-auto heroAnim max-sm:w-[95%]"
            >
              Simply download Montra app to set-up your Montra Personal Account to
              access Marketplaces for multi-party payments & Lending Products.
            </p>
          </Copy>

          <div id="hero-btn-container" className="flex gap-6 justify-center mt-[4vw] max-sm:flex-col max-sm:items-center max-sm:gap-5">
            <AppleStoreButton />
            <PlayStoreButton />
          </div>
        </div>
      </div>
    </section>
  );
}
