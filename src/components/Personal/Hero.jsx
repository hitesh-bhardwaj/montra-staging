"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Heading from "../Heading";
import Copy from "../Copy";
import { useLenis } from "lenis/react";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const lenis = useLenis();
  useEffect(() => {
    lenis && lenis.stop();

    const timeout = setTimeout(() => {
      lenis && lenis.start();
    }, 2000);

    return () => clearTimeout(timeout)
  }, [lenis]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (globalThis.innerWidth > 1024) {
        gsap.from(".fadeUpHero", {
          opacity: 0,
          duration: 0.7,
          y: 30,
          delay: 1.2,
        })
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero",
            pin: ".hero-image-container",
            start: "17% top",
            end: "60% top",
            scrub: 0.5,
          },
        });
        tl.to(".hero-left-card", {
          left: "-3%",
          opacity: 0,

          duration: 0.5,
        });
        tl.to(".hero-right-card", {
          left: "80%",
          opacity: 0,
          delay: -0.5,
          duration: 0.5,
        })
          .to(".hero-image-anim", {
            width: "105vw",
            height: "108vh",
            ease: "none",
            left: "-2.5%",
            top: "-15vw",
            delay: -0.5,
            borderRadius: "0vw",
          })
          .to(".hero-main-card", {
            height: "38vw",
            yPercent: -10,
            delay: -0.4,
          })
          .to(".hero-main-border", {
            height: "38vw",
            top: "0%",
            delay: -0.6,
            opacity: 1,
          })
          .to(".hero-main-content", {
            opacity: 1,
            duration: 0.3,
            delay: -0.3,
            ease: "none",

          })
      }
      if(globalThis.innerWidth>541&&globalThis.innerWidth<1024){
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero",
            pin: ".hero-image-container",
            start: "5% top",
            end: "+1300 top",
            // markers: true,
            scrub: 0.5,
          },
        });
       
          tl.to(".hero-image-anim", {
            width: "105vw",
            height: "150vw",
            ease: "none",
            left: "-2.5%",
            top: "-204%",
            delay: -0.5,
            borderRadius: "0vw",
          })
          .to(".hero-main-card", {
            height: "60vw",
            yPercent: -10,
            delay: -0.4,
          })
          .to(".hero-main-border", {
            height: "60vw",
            top: "0%",
            delay: -0.5,
            opacity: 1,
          })
          .to(".hero-main-content", {
            opacity: 1,
            duration: 0.3,
            delay: -0.3,
            ease: "none",
          });
      }
      if(globalThis.innerWidth<541) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero",
            pin: ".hero-image-container",
            start: "12% top",
            end: "+1300 top",
            scrub: 0.5,
          },
        });
        tl.to(".hero-image-anim", {
          width: "105vw",
          height: "220vw",
          ease: "none",
          left: "-2.5%",
          top: "-54%",
          delay: -0.5,
          borderRadius: "0vw",
        })
          .to(".hero-main-card", {
            height: "90vw",
            yPercent: -10,
            delay: -0.4,
          })
          .to(".hero-main-border", {
            height: "90vw",
            top: "0%",
            delay: -0.5,
            opacity: 1,
          })
          .to(".hero-main-content", {
            opacity: 1,
            duration: 0.3,
            delay: -0.3,
            ease: "none",
          });
      }
    });
    return () => ctx.revert();
  }, []);
  
  return (
    <section className="w-screen h-[270vh] max-sm:h-[560vw] overflow-hidden max-md:h-[215vh]" id="hero">
      <div className="w-full h-full flex flex-col gap-[2vw] max-sm:gap-[12vw]">
        <div className="w-full mx-auto space-y-[1.2vw] pt-[14vw] py-[5vw] text-center px-[4vw] max-sm:pt-[35vw] max-sm:space-y-[7vw] max-md:pt-[30vw] max-md:space-y-[3vw]">
          <Heading delay={0.5}>
            <h1 className="text-[5.7vw] font-display font-medium capitalize leading-[1.15] max-sm:text-[11.5vw] max-md:text-[8vw]">
              <span className="text-primary">Montra Personal Account:</span>{" "}
              <br />
              Your All-in-One Digital Account
            </h1>
          </Heading>
          <Copy delay={1}>
            <p className="font-body w-3/6 mx-auto  max-sm:w-[90%] max-md:w-[85%]">
              Get your Montra Personal Account to start saving & spending in
              minutes, right from your phone
            </p>
          </Copy>
        </div>
        <div className="w-full flex px-[10vw] h-[30vw] items-center justify-between text-white hero-image-container relative max-sm:h-[120vw]">
          
          <div className="fadeUpHero w-[23vw] h-[27vw] rounded-[3vw] border border-black/10 overflow-hidden absolute left-[12%] top-[10%] hero-left-card max-sm:hidden max-md:hidden">
            <div className="relative w-full h-full">
              <div className="absolute top-[5%] right-[5%] w-fit px-[1.2vw] py-[0.5vw] bg-primary rounded-full z-[2]">
                Account
              </div>
              <Image
                src={"/assets/images/personal/personal-hero-1.png"}
                alt="personal-hero-1"
                className="object-cover h-full w-full brightness-80"
                width={1920}
                height={1080}
              />
              <div className="w-[85%] absolute bottom-[5%] left-[7.5%] flex flex-col gap-[0.5vw] items-center">
                <span className="text-[3.4vw] font-bold font-display">
                  N 10,000
                </span>

                <div className="w-full  bg-white rounded-[1.2vw] h-fit py-[0.8vw]  text-black ">
                  <div className="w-full flex justify-between px-[0.5vw] pr-[1vw]">
                    <div className="w-fit flex gap-[0.5vw] ">
                      <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-orange-400" />
                      <div className="flex flex-col">
                        <p className="text-[1.2vw] leading-[1]">Coffee</p>
                        <p className="text-[1vw] font-light">Yesterday, 9:10</p>
                      </div>
                    </div>
                    <p className="text-[1vw] font-light">-N20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fadeUpHero w-[27vw] h-[31vw] absolute rounded-[3vw] left-[36%] top-0 z-[5] hero-main-card max-sm:w-[80vw] max-sm:h-[110vw] max-sm:left-[10%] max-sm:rounded-[7vw] max-md:w-[45vw] max-md:h-[55vw] max-md:left-[27%]">
            <div className="w-[27vw] h-[31vw] absolute bg-white/10 rounded-[3vw] left-0 top-0 z-[5] border opacity-0 border-white hero-main-border max-sm:w-[80vw] max-sm:h-[110vw] max-sm:rounded-[9vw] max-md:w-[45vw] max-md:h-[55vw] max-md:rounded-[4vw]"></div>
            <div className="relative w-full h-full  ">
              <div className="absolute top-[5%] right-[5%] w-fit px-[1.2vw] py-[0.5vw] bg-primary rounded-full max-sm:px-[4.5vw] max-sm:py-[1.5vw] max-sm:text-[4.1vw] max-md:px-[2.5vw] max-md:py-[1.5vw] ">
                Account
              </div>
              <span className="text-[3.4vw] font-bold font-display absolute bottom-[30%] left-[22%] max-sm:text-[14vw] max-sm:left-[12%] max-sm:bottom-[25%] max-md:text-[7.5vw] max-md:left-[15%]">
                N 50,000
              </span>
              <div className="w-[85%] absolute bottom-[5%] left-[7.5%] flex flex-col gap-[0.5vw] items-center">
                <div className="w-full  bg-white rounded-[1.2vw] h-fit py-[0.8vw]  text-black max-sm:py-[2vw] max-sm:px-[1vw] max-sm:rounded-[4.5vw] max-md:py-[2vw] max-md:px-[2vw] max-md:rounded-[3vw] ">
                  <div className="w-full flex justify-between px-[0.5vw] pr-[1vw] max-sm:px-[2vw]">
                    <div className="w-fit flex gap-[0.5vw] max-sm:gap-[2vw] max-md:gap-[1.5vw]">
                      <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-primary max-sm:w-[10vw] max-sm:h-[10vw] max-md:w-[5.5vw] max-md:h-[5.5vw]" />
                      <div className="flex flex-col">
                        <p className="text-[1.2vw] leading-[1] max-sm:text-[4.7vw] max-md:text-[3vw]">House Bill</p>
                        <p className="text-[1vw] font-light max-sm:text-[3.4vw] max-md:text-[2vw]">Due Today</p>
                      </div>
                    </div>
                    <p className="text-[1vw] font-light max-sm:text-[3.4vw] max-md:text-[2.2vw]">-N 500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fadeUpHero w-[27vw] h-[31vw] overflow-hidden rounded-[3vw] absolute z-[4] left-[36%] hero-image-anim top-0 max-sm:w-[80vw] max-sm:h-[110vw] max-sm:left-[10%] max-sm:rounded-[7vw] max-md:w-[45vw] max-md:h-[55vw] max-md:left-[27%]">
            <Image
              src={"/assets/images/personal/personal-hero-2.png"}
              alt="personal-hero-1"
              className="object-cover h-full w-full brightness-75"
              width={1920}
              height={1080}
            />
          </div>

          <div className="fadeUpHero w-[23vw] h-[27vw] rounded-[3vw] border border-black/10 overflow-hidden absolute left-[64%] top-[10%] hero-right-card max-sm:hidden max-md:hidden">
            <div className="absolute top-[5%] right-[5%] w-fit px-[1.2vw] py-[0.5vw] bg-primary rounded-full z-[2]">
              Account
            </div>

            <Image
              src={"/assets/images/personal/personal-hero-3.png"}
              alt="personal-hero-1"
              className="object-cover h-full w-full brightness-75"
              width={1920}
              height={1080}
            />
            <div className="w-[85%] absolute bottom-[5%] left-[7.5%] flex flex-col gap-[0.5vw] items-center">
              <span className="text-[3.4vw] font-bold font-display">
                N 35,000
              </span>

              <div className="w-full  bg-white rounded-[1.2vw] h-fit py-[0.8vw]  text-black ">
                <div className="w-full flex justify-between px-[0.5vw] pr-[1vw]">
                  <div className="w-fit flex gap-[0.5vw] ">
                    <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-[#FB2F55]" />
                    <div className="flex flex-col">
                      <p className="text-[1.2vw] leading-[1]">Salary</p>
                      <p className="text-[1vw] font-light">Today, 12:03</p>
                    </div>
                  </div>
                  <p className="text-[1vw] font-light">+N 5000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-screen h-screen absolute top-0 left-0 hero-main-content opacity-0 z-[10]">
            <div className="text-[3.2vw] font-medium w-[25%] z-[10] absolute top-[-10%] left-[5%] capitalize font-display max-sm:w-[80%] max-sm:top-[-23%] max-sm:text-[8vw] max-md:top-[-28%] max-md:text-[5.5vw] max-md:w-[50%]">
              Empower your financial journey with Montra
            </div>
            <div className="flex flex-col gap-[1vw] absolute right-[5%] bottom-[35%] z-[10] max-sm:text-[4.1vw] max-sm:gap-[4vw] max-sm:bottom-[35%] max-md:bottom-[43%] max-md:gap-[2vw]">
              <div className="w-[21vw] rounded-full border border-white/40 backdrop-blur-lg bg-white/20 py-[0.7vw] px-[1.5vw] max-sm:w-[90vw] max-sm:py-[3vw] max-sm:px-[7vw] max-md:w-[45vw] max-md:py-[1.5vw] max-md:px-[3.5vw]">
                Go cashless with ease
              </div>
              <div className="w-[21vw] rounded-full border border-white/40  backdrop-blur-lg bg-white/20 py-[0.7vw] px-[1.5vw] max-sm:w-[90vw] max-sm:py-[3vw] max-sm:px-[7vw] max-md:w-[45vw] max-md:py-[1.5vw] max-md:px-[3.5vw]">
                Save smarter, spend better
              </div>
              <div className="w-[21vw] rounded-full border border-white/40  backdrop-blur-lg bg-white/20 py-[0.7vw] px-[1.5vw] max-sm:w-[90vw] max-sm:py-[3vw] max-sm:px-[7vw] max-md:w-[45vw] max-md:py-[1.5vw] max-md:px-[3.5vw]">
                Get credit, insurance & more
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
