"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Heading from "../Heading";
import { fadeUpAnim } from "../gsapAnimations";
import Copy from "../Copy";
import { LinkButton } from "../Buttons";
import PrimaryButton from "../Buttons/PrimaryButton";



gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  fadeUpAnim();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fadeup", {
        y: 30,
        opacity: 0,
        delay: 1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="w-screen h-[90vh] overflow-hidden relative">
      <div className="h-full flex items-center justify-center text-center px-[4vw] max-md:flex-col">
        <div className="w-[80%] mx-auto space-y-[1.2vw] pt-[8%] py-[5vw] max-sm:w-full max-sm:pt-[30vw] max-sm:space-y-[7vw] max-md:pt-[30vw] max-md:w-full max-md:space-y-[5vw]">
          <Heading delay={0.7}>
            <h1 className="text-[5.7vw] font-display font-medium capitalize leading-[1.15] heroAnim max-sm:text-[11.5vw] max-sm:leading-[1.2] max-sm:w-full max-md:text-[8vw] max-md:w-[80%] max-md:mx-auto">
              <span className="text-primary">Montra: </span>Building future of
              an Inclusive Financial Ecosystem
            </h1>
          </Heading>
          <Copy delay={1}>
            <p className="font-body w-[95%] mx-auto heroAnim max-sm:w-[95%] max-md:w-[70%]">
              Montra is reimagining how people and businesses in emerging
              markets access, manage, and grow their money without the
              complexity of traditional banks. We make finance simple,
              inclusive, and built for real life.
            </p>
          </Copy>
          <div className=" flex gap-10 justify-center mt-[4vw] max-sm:flex-col max-sm:items-center max-sm:gap-5 fadeup">
            <div className="">
            <PrimaryButton href={"/blog"} text={"View all blogs"}/>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
