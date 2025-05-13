"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const MontraAnimationMobile = () => {
  return (
    <section
      className="w-screen h-full px-[4vw] py-[7%] bg-white max-sm:px-[7vw] max-sm:py-[15%] max-sm:h-full "
      id="benefits"
    >
      <div className="w-full h-full flex flex-col gap-[1.2vw] text-center max-sm:text-left max-sm:gap-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1.5vw] max-sm:gap-[4vw] max-sm:items-start">
          <h2
            className={`text-[5.7vw] font-display font-medium leading-[1.3] capitalize max-sm:text-[11vw] max-sm:w-full max-sm:leading-[1.2] `}>Our Core Values</h2>
        </div>
        <div
          className={`flex w-full h-full relative text-[1.2vw] font-medium max-sm:flex-col max-sm:gap-[6vw] `}
        >
          {data.map((item) => (
            <AnimatedOpeners
              key={item.classPrefix}
              classPrefix={item.classPrefix}
              left={item.left}
              top={item.top}
              color={item.color}
              title={item.title}
              z={item.z}
              width={item.width}
              content={item.content}
              height={item.height}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MontraAnimationMobile

const AnimatedOpeners = ({
  classPrefix,
  color,
  title,
  content,
}) => {
  const tlRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (globalThis.innerWidth > 1024) {
        const tl = gsap.timeline({ paused: true });

        tl.to(`.${classPrefix}-container`, {
          x: "-4vw",
          ease: "power3.inOut",
        })
          .to(`.${classPrefix}-alpha`, {
            x: "-4vw",
            delay: -0.5,
            ease: "power3.inOut",
          })
          .to(`.${classPrefix}-circle`, {
            height: height,
            ease: "power3.inOut",
            delay: -0.3,
          })
          .to(`.${classPrefix}-content`, {
            opacity: 1,
            delay: -0.3,
            ease: "power3.inOut",
          });

        tlRef.current = tl;
      } else {
        const tl = gsap.timeline({ paused: true });

        tl.to(`.${classPrefix}-container`, {
          x: "-15vw",
          ease: "power3.inOut",
        })
          .to(`.${classPrefix}-alpha`, {
            x: "-15vw",
            delay: -0.5,
            ease: "power3.inOut",
          })
          .to(`.${classPrefix}-circle`, {
            height: "80vw",
            ease: "power3.inOut",
            delay: -0.3,
          })
          .to(`.${classPrefix}-content`, {
            opacity: 1,
            delay: -0.3,
            ease: "power3.inOut",
          });

        tlRef.current = tl;
      }
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
    <span
      className={`absolute  ${classPrefix}  max-sm:static ${classPrefix}-circle max-sm:h-[15vw]`}
    >
      <div
        className={`rounded-[3vw] absolute overflow-hidden max-sm:w-[90vw]  `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={` h-[4.2vw] border-[1.5px] relative border-black overflow-hidden rounded-[3vw]  circle ${classPrefix}-circle max-sm:w-[85vw] max-sm:h-[15vw] max-sm:rounded-[9vw]`}
        >
          <div
            className={`w-fit bg-black rounded-[3vw] flex h-full z-[-1] ${classPrefix}-container`}
          >
            <span
              className={`rounded-full flex justify-center max-sm:text-[4.5vw] capitalize font-medium items-center ${color} max-sm:w-[14.5vw] max-sm:h-[14.5vw]`}
            >
            {classPrefix}
            </span>
            <div
              className={`h-full rounded-[3vw] px-[2vw] flex flex-col items-start py-[1vw] capitalize relative max-sm:py-[4vw] max-sm:px-[4vw] max-sm:gap-[10vw]  ${color} max-sm:w-[85vw] max-sm:rounded-[9vw] `}
            >
              <div className="h-[4vw] mt-[0.1vw] max-sm:text-[4.5vw] max-sm:h-fit  !font-medium">
                {title}
              </div>
              <div className="absolute right-[8%] cursor-pointer">
                <Image
                  className="w-[2vw] h-[2vw] object-contain invert max-sm:w-[7vw] max-sm:h-[7vw]"
                  alt="cross"
                  src="/assets/icons/cross-icon.svg"
                  width={50}
                  height={50}
                  onClick={handleMouseLeave}
                />
              </div>
              <div
                className={`text-[1.2vw] ${classPrefix}-content font-normal text-left opacity-0 max-sm:text-[4.5vw]`}
              >
                {content}
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </span>
  );
};

const  data= [
      { classPrefix: "m", color: "bg-[#D9F7C5]", content: "We strive for highest standards of quality & service delivery through consistent focus on improvements for achieving Operational Excellence", title: "Make Things Easier"},
      { classPrefix: "o", color: "bg-[#FFEAEE]", content: "We strive for highest standards of quality & service delivery through consistent focus on improvements for achieving Operational Excellence", title: "Operational Excellence" },
      { classPrefix: "n",color: "bg-[#EAF1FF]", content: "We strive for highest standards of quality & service delivery through consistent focus on improvements for achieving Operational Excellence", title: "Never Settle" },
      { classPrefix: "t",  color: "bg-[#CAC5F7]", content: "We strive for highest standards of quality & service delivery through consistent focus on improvements for achieving Operational Excellence", title: "Trustworthiness",  },
      { classPrefix: "r",  color: "bg-[#FFD7CB]", content: "We strive for highest standards of quality & service delivery through consistent focus on improvements for achieving Operational Excellence", title: "Respect",  },
      { classPrefix: "a",  color: "bg-[#FEFFA7]", content: "We strive for highest standards of quality & service delivery through consistent focus on improvements for achieving Operational Excellence", title: "Accountability",  },
    ]