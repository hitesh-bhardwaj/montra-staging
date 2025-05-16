import { useEffect, useRef } from "react";
import { AppleStoreButton, PlayStoreButton } from "../Buttons";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import Copy from "../Copy";
import Heading from "../Heading";

export default function Hero() {
  const heroRef = useRef(null);
  const lenis = useLenis();
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
          ease: 'power2.out',
          duration: 1,
        }, "<")
        .from("#hero-phone-image", {
          duration: 1.5,
          y: 20,
          opacity: 0,
        }, "<")
    })
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
          delay: 3,
          onComplete: () => {
            current = (current + 1) % phrases.length;
            textRef.current.innerText = phrases[current];
          }
        });
        tl.to(textRef.current, {
          duration: 0.5,
          yPercent: 0,
          opacity: 1,
          onComplete: fadeInOut,
        });
      };
      fadeInOut();
    })
    return () => ctx.revert();
  }, []);


  useEffect(() => {
    lenis && lenis.stop();

    const timeout = setTimeout(() => {
      lenis && lenis.start();
    }, 5000);

    return () => clearTimeout(timeout)
  }, [lenis]);

  return (
    <section id="hero" ref={heroRef} className="w-screen overflow-hidden h-screen">
      <div className="h-full flex items-start justify-center text-center px-[4vw] max-sm:pt-[30vw] max-md:pt-[20vw]">
        <div className="w-[70%] mx-auto space-y-[1.5vw] pt-[14vw] py-[5vw] max-sm:w-full  max-sm:space-y-[7vw] relative z-[50] max-sm:pt-0 max-md:space-y-[5vw] max-md:w-[85%]">
          <Heading delay={4}>
            <h1
              className="text-[5.7vw] font-display font-medium capitalize leading-[1.2] heroAnim max-sm:text-[11.5vw] max-sm:leading-[1.2] max-md:text-[8vw]"
            >
              <span className="text-primary">One app</span> to manage all your{" "}
              <span className="text-primary leading-[1] w-[22vw] max-sm:w-[44.5vw] max-sm:mb-[-1.2vw] h-full mb-[-0.75vw] inline-block overflow-hidden max-md:w-[31vw]">
                <span style={{ display: "inline-block" }} ref={textRef}>Personal</span>
              </span>{" "}
              finances
            </h1>
          </Heading>
          <Copy delay={4.8}>
            <p className="font-body w-[70%] mx-auto heroAnim max-sm:w-[95%] max-md:w-[90%]">
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