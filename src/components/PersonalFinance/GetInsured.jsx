"use client"
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const GetInsured = () => {
    const svgRef = useRef(null);
    const lineRef = useRef(null);
  
    useEffect(() => {
      const line = lineRef.current;
      const length = line.getTotalLength();
  
      // Initial styles
      gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
  
      gsap.to(line, {
        strokeDashoffset: 0,
        ease:"none",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
        //   markers:true
        },
      });
      const colors = document.querySelectorAll(".color")
      colors.forEach((color)=>{
        gsap.to(color,{
            color:"#215CFF",
            scrollTrigger:{
                trigger:color,
                start:"top 70%",
                end:"bottom 70%",
                scrub:true,
                // markers:true
            }
        })

      })
     
    }, []);
  return (
    <section
      className="w-screen h-full px-[4vw] bg-[#FBFBFB] py-[7%] relative"
      id="whatwhy"
    >
      <div className="w-full h-full flex flex-col gap-[10vw] items-center justify-center">
        <div className="flex flex-col items-center gap-[1.5vw]">
        <h2 className="text-[5.7vw] font-display font-medium w-[85%] text-center">
        Get Insured in Minutes on the Montra App
        </h2>
        <p>Secure the right coverage quickly and easily—just follow these simple steps:</p>
        </div>
        <div className="w-full h-full flex flex-col gap-[9vw] items-center">
          <div className="w-[70%] flex justify-between">
            <div className="w-[2.5vw] h-[2.5vw] flex justify-center items-center border rounded-full font-display mt-[1.5vw] color">
              01
            </div>
            <div className="flex flex-col gap-[1.5vw] w-[70%]">
              <h3 className="text-[3.4vw] font-display font-medium color">
              Pick a Plan
              </h3>
              <p className="w-[80%]">
              Browse available insurance products and select one that fits your needs.
              </p>
            </div>
          </div>
          <div className="w-[70%] flex justify-between">
            <div className="w-[2.5vw] h-[2.5vw] flex justify-center items-center border rounded-full font-display mt-[1.5vw] color">
              02
            </div>
            <div className="flex flex-col gap-[1.5vw] w-[70%]">
              <h3 className="text-[3.4vw] font-display font-medium color">
              Compare Offers Instantly
              </h3>
              <p className="w-[80%]">
              Montra instantly compares premiums and features from multiple insurance partners—so you can make an informed choice.
              </p>
            </div>
          </div>
          <div className="w-[70%] flex justify-between">
            <div className="w-[2.5vw] h-[2.5vw] flex justify-center items-center border rounded-full font-display mt-[1.5vw] color">
              03
            </div>
            <div className="flex flex-col gap-[1.5vw] w-[70%]">
              <h3 className="text-[3.4vw] font-display font-medium color">
              Buy Your Policy
              </h3>
              <p className="w-[80%]">
              Choose your preferred plan and pay securely using any of the flexible payment options on Montra.
              </p>
            </div>
          </div>
          <div className="w-[70%] flex justify-between">
            <div className="w-[2.5vw] h-[2.5vw] flex justify-center items-center border rounded-full font-display mt-[1.5vw] color">
              04
            </div>
            <div className="flex flex-col gap-[1.5vw] w-[70%]">
              <h3 className="text-[3.4vw] font-display font-medium color">
              Get Instant Confirmation
              </h3>
              <p className="w-[80%]">
              Once payment is complete, your policy is issued and confirmed right on the app.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-[33%] left-[28%] h-[65vw]">
          <svg
            width="5"
            height="992"
            viewBox="0 0 5 992"
            fill="none"
            className="h-full"
            xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
          >
            <line
              x1="1.32227"
              y1="-2.18557e-08"
              x2="1.32231"
              y2="992"
              stroke="#D2D2D2"
            />
            <line
            ref={lineRef}
              x1="2.82227"
              y1="3.68164"
              x2="2.82226"
              y2="1032.333"
              stroke="#215CFF"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default GetInsured;
