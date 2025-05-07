import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const WhatWhy = ({data,height}) => {
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
        <h2 className="text-[5.7vw] font-display font-medium w-[85%]">
         {data.heading}
        </h2>
        <div className="w-full h-full flex flex-col gap-[9vw] items-center">
          {data.content.map((item,index)=>(
   <div key={index} className="w-[70%] flex justify-between">
   <div className="w-[2.5vw] h-[2.5vw] flex justify-center items-center border rounded-full font-display mt-[1.5vw] color">
    {item.number}
   </div>
   <div className="flex flex-col gap-[1.5vw] w-[70%]">
     <h3 className="text-[3.4vw] font-display font-medium color">
      {item.title}
     </h3>
     <p className="w-[85%]">
      {item.para}
     </p>
   </div>
 </div>
          ))}
       
          
        </div>
        <div className={`absolute top-[34%] left-[28%] ${height}`}>
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

export default WhatWhy;


