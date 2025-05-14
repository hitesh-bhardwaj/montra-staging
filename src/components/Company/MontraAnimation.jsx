"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const lettersData = [
  {
    left: "left-[38%]",
    top: "top-[20%]",
    width:"w-[24vw]",
    innerWidth:"w-[26vw]",
    z:"z-[7]",
    alphaz:"z-[8]",
    key: "m",
    char: "M",
    color: "bg-[#D9F7C5]",
    title: "Make Things Easier",
    content:
      "We strive for highest standards of quality & service delivery through consistent focus on improvements for achieving Operational Excellence",
    endPos: { top: "40%", left: "5%" },
  },
  {
    left: "left-[42%]",
    top: "top-[20%]",
    width:"w-[27vw]",
    innerWidth:"w-[29vw]",
    key: "o",
    char: "O",
    color: "bg-[#FFEAEE]",
    title: "Operational Excellence",
    content: "Your “O” content goes here.",
    endPos: { top: "60%", left: "15%" },
  },
  {
    left: "left-[46%]",
    top: "top-[20%]",
    width:"w-[20vw]",
    innerWidth:"w-[22vw]",
    key: "n",
    char: "N",
    z:"z-[6]",
    alphaz:"z-[7]",
    x:"translate-x-[-2%]",
    color: "bg-[#EAF1FF]",
    title: "Never Settle",
    content: "Your “N” content goes here.",
    endPos: { top: "30%", left: "35%" },
  },
  {
    left: "left-[50%]",
    top: "top-[20%]",
    width:"w-[20vw]",
    innerWidth:"w-[22vw]",
    key: "t",
    x:"translate-x-[-3%]",
    char: "T",
    z:"z-[4]",
    alphaz:"z-[5]",
    color: "bg-[#CAC5F7]",
    title: "Trustworthiness",
    content: "Your “T” content goes here.",
    endPos: { top: "50%", left: "43%" },
  },
  {
    left: "left-[53%]",
    top: "top-[20%]",
    width:"w-[17vw]",
    innerWidth:"w-[19vw]",
    x:"translate-x-[-2%]",
    key: "r",
    char: "R",
    color: "bg-[#FFD7CB]",
    title: "Respect",
    content: "Your “R” content goes here.",
    endPos: { top: "65%", left: "70%" },
  },
  {
    left: "left-[56.5%]",
    top: "top-[20%]",
    width:"w-[20vw]",
    innerWidth:"w-[22vw]",
    key: "a",
    char: "A",
    z:"z-[5]",
    alphaz:"z-[6]",
    x:"translate-x-[-2%]",
    color: "bg-[#FEFFA7]",
    title: "Accountability",
    content: "Your “A” content goes here.",
    endPos: { top: "40%", left: "75%" },
  },
];

const MontraAnimation = () => {
  const [pointer, setPointer] = useState(false);
  // Will hold one hover-tl per letter
  const hoverTims = useRef({});

  // Build hover timelines
  useEffect(() => {
    const ctx = gsap.context(() => {
      lettersData.forEach(({ key }) => {
        const tl = gsap.timeline({ paused: true });
        tl.to(`.${key}-container`, {
          x: "-5vw",
          ease: "power3.inOut",
        })
        .to(`.${key}-cross`,{
            opacity:1,
            delay:-0.3,
        })
          .to(`.${key}-alpha`, { x: "-5vw", delay: -0.7, ease: "power3.inOut" })
          .to(`.${key}-circle`, {
            height: "17vw",
            // borderRadius: "2.5vw",
            ease: "power3.inOut",
            delay: -0.4,
          })
          .from(`.${key}-content`, {
            opacity: 0,
            delay: -0.3,
            ease: "power3.inOut",
          });
        hoverTims.current[key] = tl;
      });
    });
    return () => ctx.revert();
  }, []);

  // Build scroll timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#montraanimation",
          start: "top top",
          end: "70% top",
          scrub: true,
        },
      });

      // scatter each letter
      lettersData.forEach(({ key, endPos }, i) => {
        tl.to(`.${key}`, {
          ...endPos,
          delay: i === 0 ? 0 : -0.5 + i * 0.01, // same staggering you had
        });
      });
      tl.from(".value-heading",{
        opacity:0,
        duration:0.5,
        
      })
      // scale down all “-alpha”s together
      tl.to(
        lettersData.map((l) => `.${l.key}-alpha`),
        { scale: 0.5, delay: -1 }
      )
        .to(".circle", {
          opacity: 1,
          delay: -0.5,
          duration: 0.2,
          onComplete: () => {
            setPointer(true);
          },
          onReverseComplete: () => setPointer(false),
        })
        
    });
    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (key) => {
    hoverTims.current[key]?.play();
  };
  const handleMouseLeave = (key) => {
    hoverTims.current[key]?.reverse();
  };

  return (
    <section className="w-screen h-[400vh] bg-[#fbfbfb] max-sm:hidden max-md:hidden" id="montraanimation">
      <div className="w-full h-screen px-[4vw] sticky top-0">
        <div className="w-full flex justify-center pt-[5%]">
          <h2 className="text-[5.7vw] font-display font-medium capitalize value-heading">
            our core values

          </h2>
        </div>
        {lettersData.map(({ key, char, title, content, left, top, color,width ,x , innerWidth,z,alphaz}) => (
          <div
            key={key}
            className={`absolute ${top} ${left} ${key} ${
              pointer ? "pointer-events-auto" : "pointer-events-none"
            }`}
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={() => handleMouseLeave(key)}
          >
            {/* Letter face */}
            <div className={`absolute ${alphaz?alphaz:"z-[6]"}  overflow-hidden ${pointer?"rounded-[3vw]":""}`}>
              <div
                className={`capitalize text-[5vw] font-display font-medium ${key}-alpha translate-y-[-20%]`}
              >
                {char}
              </div>
            </div>

            {/* Hidden circle + content */}
            <div className={`w-fit h-fit relative ${x} ${z}`}>
              <div
                className={`${width} h-[4vw] border-[1.5px] relative  border-black overflow-hidden rounded-[3vw] circle ${key}-circle opacity-0`}
              >
                <div
                  className={`w-fit bg-black rounded-[3vw] flex h-full z-[-1] ${key}-container`}
                >
                  <span
                    className={`h-[3.8vw] w-[3.8vw] rounded-full flex justify-center items-center ${color}`}
                  />
                  <div
                    className={`h-full rounded-[3vw] ${innerWidth} px-[3vw] flex flex-col justify-start py-[1vw] capitalize text-[1.4vw] font-medium gap-[2vw] ${color}`}
                  >
                    <div className="w-full flex gap-[4vw]">
                    <div className="h-[4vw]">{title}</div> <div className={`absolute right-[8%] cursor-pointer opacity-0 ${key}-cross`} >
                                    <Image className='w-[2vw] h-[2vw] object-contain invert' alt='cross' src="/assets/icons/cross-icon.svg" width={50} height={50} onClick={() => handleMouseLeave(key)} />
                                  </div>
                        </div>
                    <div className={`text-[1.2vw] ${key}-content w-full`}>
                      {content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MontraAnimation;
