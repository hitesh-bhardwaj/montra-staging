"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Heading from "../Heading";
import Copy from "../Copy";

gsap.registerPlugin(ScrollTrigger);

const Rewards = ({ rewardsData }) => {
  const sectionRef = useRef(null);
  const cards = useRef([]);

  useEffect(() => {
    const lines = sectionRef.current.querySelectorAll(".lineDraw");

    gsap.set(cards.current, { opacity: 0, y: 100 });
    gsap.set(lines, { scaleX: 0, transformOrigin: "left center" });

    cards.current.forEach((card, i) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          // markers:true,
        },
      });
      card.style.zIndex = cards.length - i;
    });
    gsap.to(lines, {
      scaleX: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-full w-screen bg-white relative max-sm:px-[7vw] max-sm:py-[10%] max-md:py-[7%] pb-[7%] pt-[5%]"
    >
      <div className="w-full text-center flex flex-col gap-[2vw] items-center justify-center max-sm:items-start max-sm:text-left max-sm:gap-[4vw] max-md:gap-[7vw]">
        <Heading>
          <h2
            className={`text-[5.7vw] font-display font-medium capitalize leading-[1.15] max-sm:leading-[1.2] max-sm:text-[11vw] max-sm:w-full max-md:text-[7.5vw] ${rewardsData.headingWidth} ${rewardsData.para?"pb-0":"pb-[5vw]"}`}
          >
            {rewardsData.heading}
          </h2>
        </Heading>
        {rewardsData.para ? (
          <Copy>
            <p className="w-[50%] max-sm:w-[80%]">{rewardsData.para}</p>
          </Copy>
        ) : (
          <></>
        )}
        <div
          className={`px-[4vw] py-[4vw] grid  gap-[5vw] w-full max-sm:flex max-sm:flex-col max-sm:px-0 max-sm:gap-[10vw] max-sm:mt-[10vw] max-md:flex max-md:flex-wrap max-md:justify-between max-md:gap-y-[7vw] max-md:px-[5vw] ${rewardsData.gridCols}`}
        >
          {rewardsData.cards.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cards.current[index] = el)}
              className="flex flex-col gap-[7vw]  group max-md:w-[45%] max-md:gap-[6vw] max-sm:w-full"
            >
              <div className="flex flex-col gap-[1.5vw] h-[19vw] max-sm:h-fit max-sm:gap-[6vw] max-md:h-full max-md:gap-[3vw]">
                <Image
                  src={item.icon}
                  height={40}
                  width={40}
                  className="w-[3vw] h-[3vw] object-contain max-sm:w-[10vw] max-sm:h-[10vw] max-md:w-[7vw] max-md:h-[7vw]"
                  alt="montra-account-statement"
                />
                <p className="font-medium text-start w-[80%] max-sm:text-[5vw] max-md:text-[3vw]">
                  {item.title}
                </p>
                <p className="text-start">{item.para}</p>
              </div>
              <div className="w-full h-[1.5px] bg-gray lineDraw overflow-hidden">
                <span className="block scale-x-0 bg-primary h-full origin-[100%] group-hover:scale-x-100 transition-transform duration-700 ease-link-line group-hover:origin-[0]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rewards;
