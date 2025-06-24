'use client'
import { useEffect, useRef } from "react";
import { AppleStoreButton, PlayStoreButton } from "../Buttons";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import Copy from "../Copy";
import Heading from "../Heading";
import { fadeUpAnim, lineAnim } from "@/components/gsapAnimations";

export default function Hero() {
  const heroRef = useRef(null);
  const lenis = useLenis();
  const textRef = useRef(null);

  lineAnim();
  fadeUpAnim();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#nav-container", {
        yPercent: -140,
        duration: 1,
        // opacity:1,
        ease: "power2.out",
        delay: 3.5,
      })
        .to("#nav-container", {
          opacity: 1,
          delay: -0.5
        })
        .from(
          "#hero-btn-container",
          {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            duration: 1,
          },
          "<"
        )
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const phrases = ["personal", "business"];
      let current = 0;

      const fadeInOut = () => {
        const tl = gsap.timeline();
        tl.to(textRef.current, {
          duration: 0.5,
          yPercent: 100,
          delay: 6,
          onComplete: () => {
            current = (current + 1) % phrases.length;
            textRef.current.innerText = phrases[current];
          },
        });
        tl.to(textRef.current, {
          duration: 0.5,
          yPercent: 0,
          opacity: 1,
          onComplete: fadeInOut,
        });
      };
      fadeInOut();
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    lenis && lenis.stop();

    const timeout = setTimeout(() => {
      lenis && lenis.start();
    }, 4300);

    return () => clearTimeout(timeout);
  }, [lenis]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="w-screen overflow-hidden h-full max-sm:h-screen max-md:h-screen"
    >
      <div className="h-full flex items-start justify-center text-center px-[4vw] max-sm:pt-[40vw] max-md:pt-[20vw]">
        <div className="w-[70%] mx-auto space-y-[1.5vw] py-[14%]  max-sm:w-full  max-sm:space-y-[7vw] relative z-[50] max-sm:pt-0 max-md:space-y-[5vw] max-md:w-[85%]">
          <Heading delay={3.2}>
            <h1 className="text-[5.7vw] font-display font-medium capitalize leading-[1.2] heroAnim max-sm:text-[11.5vw] max-sm:leading-[1.2] max-md:text-[8vw]">
              <span className="text-primary">One app</span> to manage all your{" "}
              <span className="text-primary leading-[1] w-[22vw] max-sm:w-[44.5vw] max-sm:mb-[-1.2vw] h-full mb-[-0.75vw] inline-block overflow-hidden max-md:w-[31vw]">
                <span style={{ display: "inline-block" }} ref={textRef}>
                  Personal
                </span>
              </span>{" "}
              finances
            </h1>
          </Heading>
          <Copy delay={3.5}>
            <p className="font-body w-[70%] mx-auto heroAnim max-sm:w-[95%] max-md:w-[90%]">
              Simply download Montra App to set-up your Personal & Business
              accounts to send money, accept payments, shop in marketplaces and
              access financial products— all in one place.
            </p>
          </Copy>
          <div
            id="hero-btn-container"
            className="flex gap-6 justify-center mt-[4vw] max-sm:flex-col max-sm:items-center max-sm:gap-5"
          >
            <AppleStoreButton />
            <PlayStoreButton />
          </div>
        </div>
      </div>
    </section>
  );
}
