"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Features = ({ featuresData }) => {

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#investors",
          start: "top 40%",
        },
      });
      tl.to(".icon ", {
        scale: 1,
        borderRadius: "3vw",
        ease: "elastic.inOut",
        duration: 1,
        stagger: {
          amount: 0.5,
          from: "random",
        },
      })
        .to(".icon-content", {
          duration: 1,
          opacity: 1,
          delay: 0.3,
          stagger: {
            amount: 0.5,
            from: "random",
          },
        }, "<");
    })
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="w-screen h-fit px-[4vw] py-[5%] pb-[10%] bg-white"
      id="investors"
    >
      <div className="w-full h-full flex flex-col items-center gap-[8vw]">
        <h3
          className={` font-display capitalize font-medium ${featuresData.headingSize}`}
        >
          {featuresData.heading}
        </h3>
        <div className="w-full flex items-center justify-center gap-[1.5vw] px-[4vw] text-white">
          {featuresData.features.map((item, index) => (
            <div
              key={index}
              className={`w-[13vw] h-[13vw]  rounded-[7vw] flex flex-col justify-center items-center  icon-1 scale-[0.3] icon ${item.color}`}
            >
              <div className="opacity-0 icon-content flex flex-col justify-center  gap-[0.5vw] items-center w-full">
                <div className="w-[6vw] h-[6vw]">
                  <Image
                    src={item.icon}
                    alt="investor-icon"
                    className="w-full h-full object-contain"
                    width={50}
                    height={50}
                  />
                </div>
                <p
                  className={`${featuresData.paraWidth} text-center font-medium leading-[1.2]`}
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
