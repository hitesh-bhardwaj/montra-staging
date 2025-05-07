'use client'
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const letters = [
  { letter: "M", classPrefix: "m", left: "left-[32%]", top: "top-[28.9%]", color: "bg-[#D9F7C5]", content: "", title: "make things easier", z: "z-[5]" },
  { letter: "O", classPrefix: "o", left: "left-[37%]", top: "top-[28.9%]", color: "bg-[#FFEAEE]", content: "", title: "Operational Excellence " },
  { letter: "N", classPrefix: "n", left: "left-[43%]", top: "top-[28.9%]", color: "bg-[#EAF1FF]", content: "", title: "Never Settle", z: "z-[5]" },
  { letter: "T", classPrefix: "t", left: "left-[48%]", top: "top-[28.9%]", color: "bg-[#CAC5F7]", content: "", title: "Trustworthiness", z: "z-[4]" },
  { letter: "R", classPrefix: "r", left: "left-[52%]", top: "top-[28.9%]", color: "bg-[#FFD7CB]", content: "", title: "Respect" },
  { letter: "A", classPrefix: "a", left: "left-[57%]", top: "top-[28.9%]", color: "bg-[#FEFFA7]", content: "", title: "Accountability" },
];
const MontraAnim = () => {

  const [pointer, setPointer] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#montraAnim",
          start: "top top",
          end: "70% top",
          //   markers: true,
          scrub: true,
        },
      });
      tl.to(".m", {
        top: "10%",
        left: "5%",
        scale: 0.35,
      })
        .to(".o", {
          top: "40%",
          left: "15%",
          scale: 0.35,
          delay: -0.49,
        })
        .to(".n", {
          top: "0%",
          left: "35%",
          scale: 0.35,
          delay: -0.48,
        })
        .to(".t", {
          scale: 0.35,
          delay: -0.47,
        })

        .to(".r", {
          top: "60%",
          left: "65%",
          scale: 0.35,
          delay: -0.46,
        })
        .to(".a", {
          top: "40%",
          left: "75%",
          scale: 0.35,
          delay: -0.45,
          onComplete: () => {
            setPointer(true);
          },
        })
        .to(".circle", {
          opacity: 1,
          delay: -0.3,
          duration: 0.2,

          onReverseComplete: () => {
            setPointer(false);
          },
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="w-screen h-[400vh] !bg-[#fbfbfb] relative"
      id="montraAnim"
    >
      <div className="w-full flex justify-center items-center h-[50vw] sticky top-[15%]">
        <div
          className={`flex w-full h-full relative text-[6vw] font-display font-medium ${pointer ? "pointer-events-auto" : "pointer-events-none"
            }`}
        >
          {letters.map(({ letter, classPrefix, left, top, color, title, z }) => (
            <AnimatedLetter key={classPrefix} letter={letter} classPrefix={classPrefix} left={left} top={top} color={color} title={title} z={z} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MontraAnim;



const AnimatedLetter = ({ letter, classPrefix, left, top, color, title, z }) => {
  const tlRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      tl.to(`.${classPrefix}-container`, {
        x: "-10vw",
        ease: "power3.inOut"
      })
        .to(`.${classPrefix}-alpha`, {
          x: "-10vw",
          delay: -0.5,
          ease: "power3.inOut"
        })
        .to(`.${classPrefix}-circle`, {
          height: "50vw",
          ease: "power3.inOut",
          delay: -0.4,
        })
        .from(`.${classPrefix}-content`, {
          opacity: 0,
          delay: -0.3,
          ease: "power3.inOut"
        })

      tlRef.current = tl;
    });

    return () => ctx.revert();
  }, [classPrefix]);

  const handleMouseEnter = () => {
    tlRef.current?.play();
  };

  const handleMouseLeave = () => {
    tlRef.current?.reverse();
  };

  return (
    <span className={`absolute ${left} ${top} ${classPrefix} ${z}`}>
      <div
        className={`w-[60.5vw] rounded-[5vw] absolute overflow-hidden`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`w-[60.5vw] h-[10.5vw] border-[4px] relative border-black overflow-hidden rounded-[6vw] opacity-0 circle ${classPrefix}-circle`}>
          <div className={`w-fit bg-black rounded-[6vw] flex h-full z-[-1] ${classPrefix}-container`}>
            <span className={` h-[10.5vw] w-[10vw] rounded-full flex justify-center items-center ${color}`}></span>
            <div className={`h-full rounded-[6vw] w-[60vw] px-[7vw]  flex flex-col justify-start py-[2vw] capitalize text-[4vw] gap-[5vw] ${color}`}>
              <div className="h-[10vw]">
                {title}
              </div>
              <div className={`text-[3vw] ${classPrefix}-content`}>
                We strive for highest standards of quality & service delivery through consistent focus on improvements for achieving Operational Excellence
              </div>
            </div>
          </div>
        </div>
        <div className={`absolute top-[5%] left-[5%] ${classPrefix}-alpha`}>{letter}</div>
      </div>
    </span>
  );
};
