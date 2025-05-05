import { useEffect, useRef } from "react";
import { AppleStoreButton, PlayStoreButton } from "../Buttons";
import gsap from "gsap";
// import { SplitInLine } from "../splitTextUtils";
import { initSplitLines } from "@/utils/splitText";
import { useLenis } from "lenis/react";

export default function Hero() {
  const heroRef = useRef(null);
  const lenis = useLenis();
  const textRef = useRef(null);

  useEffect(() => {
    const phrases = ["personal", "business"];
    let current = 0;
    const ctx = gsap.context(() => {
      const fadeInOut = () => {
        gsap.to(textRef.current, {
          opacity: 0,
          duration: 0.5,
          delay: 2,
          onComplete: () => {
            current = (current + 1) % phrases.length;
            textRef.current.innerText = phrases[current];
            gsap.to(textRef.current, {
              opacity: 1,
              duration: 1,

              delay: 0.5,
              onComplete: fadeInOut,
            });
          },
        });
      };
      fadeInOut();
    });

    return () => ctx.revert();
  }, []);
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
        // delay:5,
        duration: 1,
      });

      gsap.from(".heroFadeUp", {
        yPercent: 70,
        opacity: 0,
        // delay:5,
        duration: 1,
        stagger: 0.15,
      });
    });
    return () => ctx.revert();
  }, []);
  // useEffect(() => {
  //   lenis && lenis.stop();

  //   const timeout = setTimeout(() => {
  //     lenis && lenis.start();
  //   }, 5000);

  //   return()=>clearTimeout(timeout)
  // }, [lenis]);

  return (
    <section id="hero" ref={heroRef} className="w-screen overflow-hidden">
      <div className="h-full flex items-center justify-center text-center px-[4vw]">
        <div className="w-3/4 mx-auto space-y-[1.2vw] pt-[14vw] py-[5vw] max-sm:w-full max-sm:pt-[30vw] max-sm:space-y-[7vw]">
          <h1
            data-split="lines"
            className="text-[5.7vw] font-display font-medium capitalize leading-[1.15] heroAnim max-sm:text-[11.5vw] max-sm:leading-[1.2]"
          >
            <span className="text-primary">One app</span> to manage all your{" "}
            <span className="text-primary overflow-hidden leading-[1] w-[22vw] max-sm:w-[44.5vw] max-sm:mb-[-1.2vw] h-full mb-[-0.75vw]">
              <span ref={textRef}>Personal</span>
            </span>{" "}
            finances
          </h1>
          <p
            data-split="lines"
            className="font-body w-[70%] mx-auto heroAnim max-sm:w-[95%]"
          >
            Simply download Montra app to set-up your Montra Personal Account to
            access Marketplaces for multi-party payments & Lending Products.
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
