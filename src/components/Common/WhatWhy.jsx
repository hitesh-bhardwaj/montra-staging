"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
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
      gsap.to(".line-span",{
        height:"105%",
        ease:"none",
        scrollTrigger:{
          trigger:".line-div",
          start:"top 70%",
          end:"bottom 70%",
          scrub:true,
        }
      })
    });
  }, []);
  return (
    <section
      className="w-screen h-full px-[4vw] bg-[#FBFBFB] py-[7%] relative"
      id="whatwhy"
    >
      <div className="w-full h-full flex flex-col gap-[10vw] items-center justify-center">
        <div className="w-full flex flex-col items-center gap-[1.5vw] text-center">
          <h2
            className={`text-[5.7vw] font-display font-medium leading-[1.2] ${data.headingWidth}`}
          >
            {data.heading}
          </h2>
          <p>{data.para}</p>
        </div>
        <div className="w-full h-full flex flex-col gap-[9vw] items-center">
          {data.content.map((item, index) => (
            <div key={index} className="w-[70%] flex justify-between">
              <div className="w-[2.5vw] h-[2.5vw] flex justify-center items-center border rounded-full font-display mt-[1.5vw] color">
                {item.number}
              </div>
              <div className="flex flex-col gap-[1.5vw] w-[70%]">
                <h3 className="text-[3.4vw] font-display font-medium color">
                  {item.title}
                </h3>
                <p className="w-[85%]">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`absolute  left-[28%] w-[0.3px] bg-black/20 ${height} ${data.top} line-div`}>
          <span className={`w-[3px] h-0 bg-primary absolute top-[-0.5%] line-span rounded-full `}>

          </span>
        </div>
      </div>
    </section>
  );
};

export default WhatWhy;
