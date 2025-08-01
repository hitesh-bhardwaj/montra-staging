"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Heading from "../Heading";
gsap.registerPlugin(ScrollTrigger);

const Features = ({ featuresData }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (globalThis.innerWidth > 1024) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#investors",
            start: "top 60%",
          },
        });
        tl.from(".icon", {
          scale: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "elastic.out(1,0.3)"
        }).to(".icon ", {
          scale: 1,
          borderRadius: "3vw",
          ease: "elastic.inOut",
          duration: 1,
          delay: -0.5,
          stagger: {
            amount: 0.5,
            from: "random",
          },
        }).to(
          ".icon-content",
          {
            duration: 1,
            opacity: 1,
            delay: 0.3,
            stagger: {
              amount: 0.5,
              from: "random",
            },
          },
          "<"
        );
      } 
      if(globalThis.innerWidth>541&&globalThis.innerWidth<1024){
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#investors",
            start: "top 80%",
          },
        });
        tl.to(".icon ", {
          scale: 1,
          borderRadius: "4vw",
          ease: "elastic.inOut",
          duration: 1,
          stagger: {
            amount: 0.5,
            from: "random",
          },
        }).to(
          ".icon-content",
          {
            duration: 1,
            opacity: 1,
            delay: 0.3,
            stagger: {
              amount: 0.5,
              from: "random",
            },
          },
          "<"
        );
      }
      if(globalThis.innerWidth<541) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#investors",
            start: "top 80%",
          },
        });
        tl.to(".icon ", {
          scale: 1,
          borderRadius: "9vw",
          ease: "elastic.inOut",
          duration: 1,
          stagger: {
            amount: 0.2,
            from: "random",
          },
        }).to(
          ".icon-content",
          {
            duration: 1,
            opacity: 1,
            delay: 0.3,
            stagger: {
              amount: 0.5,
              from: "random",
            },
          },
          "<"
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="w-screen h-fit px-[4vw] py-[5%] pb-[10%] bg-white max-sm:px-[7vw] max-sm:py-[10%] max-md:py-[7%]"
      id="investors"
    >
      <div className="w-full h-full flex flex-col items-center gap-[8vw] max-sm:gap-[12vw]">
        <Heading>
          <h3
            className={` font-display capitalize font-medium max-sm:text-[11vw] max-md:text-[7.5vw] max-md:text-center max-md:w-[90%] max-sm:w-full max-sm:text-left ${featuresData.headingSize}`}
          >
            {featuresData.heading}
          </h3>
        </Heading>
        <div className="w-full flex items-center justify-center gap-[1.5vw] px-[4vw] text-white max-sm:flex-wrap max-sm:px-0 max-sm:justify-between max-sm:gap-y-[5vw] max-md:flex-wrap">
          {featuresData.features.map((item, index) => (
            <div
              key={index}
              className={`w-[13vw] h-[13vw]  rounded-[7vw] flex flex-col justify-center items-center  icon-1 scale-[0.3] icon max-sm:w-[40vw] max-sm:h-[40vw] max-sm:rounded-[20vw] max-md:w-[25vw] max-md:h-[25vw] max-md:rounded-[12vw]  ${item.color}`}
            >
              <div className="opacity-0 icon-content flex flex-col justify-center  gap-[0.5vw] items-center w-full max-sm:gap-[2.5vw] max-md:gap-[2vw]">
                <div className="w-[6vw] h-[6vw] max-sm:w-[15vw] max-sm:h-[15vw] max-md:w-[10vw] max-md:h-[10vw]">
                  <Image
                    src={item.icon}
                    alt="investor-icon"
                    className="w-full h-full object-contain"
                    width={50}
                    height={50}
                  />
                </div>
                <p
                  className={`${featuresData.paraWidth} text-center font-medium leading-[1.2] max-md:w-full`}
                >
                  {" "}
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
