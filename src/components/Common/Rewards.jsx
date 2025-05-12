"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Rewards = ({rewardsData}) => {
  const sectionRef = useRef(null);
  const cards = useRef([]);

  useEffect(() => {
    const lines = sectionRef.current.querySelectorAll(".lineDraw");

    gsap.set(cards.current, { opacity: 0, x: -100 });
    gsap.set(lines, { scaleX: 0, transformOrigin: "left center" });

    cards.current.forEach((card, i) => {
      gsap.to(card, {
        opacity: 1,
        x: 0,
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
      stagger: 0.5,
      delay: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
<section ref={sectionRef} className="h-full w-screen bg-white relative max-sm:px-[7vw] max-sm:py-[10%]">
  <div className="w-full text-center flex flex-col gap-[2vw] pb-[5%] items-center justify-center max-sm:items-start max-sm:text-left max-sm:gap-[4vw]">
    <h2
      className={`text-[5.7vw] font-display font-medium capitalize leading-[1.15] max-sm:leading-[1.2] max-sm:text-[11vw] max-sm:w-full ${rewardsData.headingWidth}`}
    >
      {rewardsData.heading}
    </h2>
    <div className={`px-[4vw] py-[4vw] grid  gap-[5vw] w-full max-sm:flex max-sm:flex-col max-sm:px-0 max-sm:gap-[10vw] max-sm:mt-[10vw] ${rewardsData.gridCols}`}>
      {rewardsData.cards.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cards.current[index] = el)}
          className="flex flex-col gap-[10vw]  group"
        >
          <div className="flex flex-col gap-[1.5vw] h-[15vw] max-sm:h-fit max-sm:gap-[6vw]">
          <Image
            src={item.icon}
            height={40}
            width={40}
            className="w-[3vw] h-[3vw] object-contain max-sm:w-[10vw] max-sm:h-[10vw]"
            alt="montra-account-statement"
          />
          <p className="font-medium text-start w-[80%] max-sm:text-[5vw]">{item.title}</p>
          <p className="text-start">{item.para}</p>
          </div>
          <div className="relative w-full h-[1px] bg-[#CBCBCB] overflow-hidden">
            <span className="absolute left-0 top-0 h-full w-full bg-primary origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Rewards;


