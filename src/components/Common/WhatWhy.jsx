"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Heading from "../Heading";
import Copy from "../Copy";
gsap.registerPlugin(ScrollTrigger);

const WhatWhy = ({ data, height }) => {
  useEffect(() => {
    const colors = document.querySelectorAll(".color");
    colors.forEach((color) => {
      gsap.to(color, {
        color: "#215CFF",
        scrollTrigger: {
          trigger: color,
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
          // markers:true
        },
      });
      gsap.to(".line-span", {
        height: "105%",
        ease: "none",
        scrollTrigger: {
          trigger: ".line-div",
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <section
      className="w-screen h-full px-[4vw] bg-[#FBFBFB] py-[7%] relative max-sm:px-[7vw] max-sm:py-[15%]"
      id="whatwhy"
    >
      <div className="w-full h-full flex flex-col gap-[10vw] items-center justify-center max-sm:items-start max-sm:justify-start">
        <div className="w-full flex flex-col items-center gap-[1.5vw] text-center max-sm:text-left max-sm:items-start max-sm:gap-[4vw] max-md:gap-[3vw]">
          <Heading>
            <h2
              className={`text-[5.7vw] font-display font-medium leading-[1.2] max-sm:text-[11vw] capitalize max-sm:w-full max-md:text-[7.5vw] ${data.headingWidth}`}
            >
              {data.heading}
            </h2>
          </Heading>
          <Copy>
            <p className={`${data.paraWidth} max-md:w-[80%]`}>{data.para}</p>
          </Copy>
        </div>
        <div className="w-full h-full flex flex-col gap-[9vw] items-center ">
          {data.content.map((item, index) => (
            <div
              key={index}
              className="w-[70%] flex justify-between max-sm:w-full max-sm:flex-col max-sm:gap-[5vw] max-md:w-[90%] max-md:justify-start max-md:gap-[6vw]"
            >
              <div className="w-[2.5vw] h-[2.5vw] flex justify-center items-center border rounded-full font-display mt-[1.5vw] color max-sm:w-[10vw] max-sm:h-[10vw] max-md:w-[7vw] max-md:h-[7vw]">
                {item.number}
              </div>
              <div className="flex flex-col gap-[1.5vw] w-[70%] max-sm:w-full max-sm:gap-[4vw] max-md:w-[80%]">
                <Heading>
                <h3 className="text-[3.4vw] font-display font-medium color max-sm:text-[7.5vw] max-md:text-[5.5vw] leading-[1.2]">
                  {item.title}
                </h3>

                </Heading>
                <Copy>
                <p className="w-[85%] max-sm:w-full">{item.para}</p>

                </Copy>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`absolute  left-[28%] w-[0.3px] bg-black/20 ${height} ${data.top} line-div max-sm:hidden max-md:hidden`}
        >
          <span
            className={`w-[3px] h-0 bg-primary absolute top-[-0.5%] line-span rounded-full `}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default WhatWhy;
