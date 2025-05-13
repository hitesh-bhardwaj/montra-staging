"use client";
import { AppleStoreButton, PlayStoreButton } from "../Buttons";
import Image from "next/image";
import bgImage from "../../../public/assets/images/company/company-bg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
import Heading from "../Heading";
import Copy from "../Copy";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top 80%",
          end: "70% 80%",
          scrub: 0.25,
        },
      });

      tl.to(bgRef.current, {
        clipPath: "ellipse(70vw 90vh at 50% 80%)",
        duration: 2,
        ease: "none",
      }).to(bgRef.current, {
        clipPath: "ellipse(100vw 100vh at 50% 80%)",
        duration: 1,
        ease: "none",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fadeup", {
        opacity: 0,
        y: 30,
        delay: 1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="w-screen overflow-hidden relative">
      <div className="h-full flex items-center justify-center text-center px-[4vw]">
        <div className="w-[80%] mx-auto space-y-[1.2vw] pt-[14vw] py-[5vw] max-sm:w-full max-sm:pt-[30vw] max-sm:space-y-[7vw]">
          <Heading delay={0.5}>
            <h1 className="text-[5.7vw] font-display font-medium capitalize leading-[1.15] heroAnim max-sm:text-[11.5vw] max-sm:leading-[1.2]">
              <span className="text-primary">Montra: </span>Building future of
              an Inclusive Financial Ecosystem
            </h1>
          </Heading>
          <Copy delay={1}>
            <p className="font-body w-[95%] mx-auto heroAnim max-sm:w-[95%]">
              Montra is reimagining how people and businesses in emerging
              markets access, manage, and grow their money—without the
              complexity of traditional banks. We make finance simple,
              inclusive, and built for real life.
            </p>
          </Copy>
          <div className=" flex gap-10 justify-center mt-[4vw] max-sm:flex-col max-sm:items-center max-sm:gap-5 fadeup">
            <div className="">
              <AppleStoreButton />
            </div>
            <div className="">
              <PlayStoreButton />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[120vh] flex items-end px-[4vw] py-[5vw] relative z-10  max-sm:pb-[15vw] max-sm:px-[6vw]">
        <div className="w-full text-white flex h-auto items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-[10vw]">
          <Heading>
            <h2 className="text-[2.85vw] font-medium leading-[1.3] w-[26%] font-display max-sm:w-full max-sm:text-[10vw]">
              How We&apos;re Changing the Game
            </h2>
          </Heading>
          <Copy>
            <p className="w-1/2 max-sm:w-full ">
              Montra offers a comprehensive suite of digital products and
              platforms that serve both individuals and businesses. From
              easy-to-use apps for payments & account management to powerful
              tools for accessing credit, making investment, and buying
              insurance, we help users benefit the transition they make from
              Cash to instant & secure Digital Payments
            </p>
          </Copy>
        </div>
      </div>

      <div
        ref={bgRef}
        style={{ clipPath: "ellipse(20vw 20vw at 50% 35%)" }}
        className="w-screen h-[120vh] absolute bottom-0 left-0"
      >
        <Image
          ref={imgRef}
          src={bgImage}
          alt="background-image"
          placeholder="blur"
          quality={90}
          className="w-full h-full object-cover absolute"
        />
      </div>
    </section>
  );
};

export default Hero;
