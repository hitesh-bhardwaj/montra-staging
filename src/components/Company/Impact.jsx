"use client"
import { NftIcon } from "../Buttons/icons";
import Copy from "../Copy";
import Heading from "../Heading";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Impact = () => {
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
    <section ref={sectionRef} className="px-[4vw] py-[6vw] w-full max-sm:px-[7vw] bg-white max-sm:py-[10vw]">
      <div className="flex flex-col items-start gap-[10vw] max-sm:gap-[15vw]">
        <Heading>
          <h2 className="font-display w-[65%] font-medium text-[5.7vw] text-left leading-[1.2] max-sm:text-[10.5vw] max-sm:text-left max-sm:w-[85%]">
            Simple Tools. Real Impact. Lasting Change.
          </h2>
        </Heading>
        <div className="grid grid-cols-3 gap-x-[6vw] max-sm:flex-col max-sm:gap-[10vw] max-sm:flex max-md:flex max-md:flex-wrap max-md:gap-[8vw] ">
          <div className="text-black-1 col-span-1 col-start-1 group max-md:w-[45%]  max-sm:w-full"  ref={(el) => (cards.current[0] = el)}>
            {/* <NftIcon className="w-[3vw] h-[3vw] mb-[1.5vw] max-sm:h-[12vw] max-sm:w-[12vw] max-sm:mb-[6vw]   max-md:h-[8vw] max-md:w-[8vw] max-md:mb-[3vw]" /> */}
            <div className="w-[4vw] h-[4vw] mb-[1.5vw] max-sm:h-[12vw] max-sm:w-[12vw] max-sm:mb-[6vw]   max-md:h-[8vw] max-md:w-[8vw] max-md:mb-[3vw] ml-[-0.7vw]">
              <Image src={"/assets/images/company/impact-logo-1.svg"} alt="" className="w-full h-full object-contain" width={100} height={100}/>

            </div>
            <Copy>
              <p className="mb-[3vw] max-sm:mb-[8vw] max-md:mb-[8vw]">
              We are a fintech company committed to bridging the gap between cash-based communities and the digital economy through simple, accessible, and inclusive financial tools.

              </p>
            </Copy>
            <div className="w-full h-[1.5px] bg-gray lineDraw overflow-hidden">
              <span className="block scale-x-0 bg-primary h-full origin-[100%] group-hover:scale-x-100 transition-transform duration-700 ease-link-line group-hover:origin-[0]" />
            </div>
          </div>
          <div className="text-black-1 col-span-1 col-start-2 group max-md:w-[45%]  max-sm:w-full"  ref={(el) => (cards.current[1] = el)}>
          <div className="w-[4vw] h-[4vw] mb-[1.5vw] max-sm:h-[12vw] max-sm:w-[12vw] max-sm:mb-[6vw]   max-md:h-[8vw] max-md:w-[8vw] max-md:mb-[3vw] ml-[-0.7vw]">
              <Image src={"/assets/images/company/impact-logo-2.svg"} alt="" className="w-full h-full object-contain" width={100} height={100}/>
            </div>
            <Copy>
              <p className="mb-[5vw] max-sm:mb-[8vw]  max-md:mb-[8vw]">
                We equip individuals and businesses—especially in underserved
                regions—with the tools to manage money, grow wealth, and thrive
                financially.
              </p>
            </Copy>
            <div className="w-full h-[1.5px] bg-gray lineDraw overflow-hidden">
              <span className="block scale-x-0 bg-primary h-full origin-[100%] group-hover:scale-x-100 transition-transform duration-700 ease-link-line group-hover:origin-[0]" />
            </div>
          </div>
          <div className="text-black-1 col-span-1 col-start-3 group max-md:w-[45%]  max-sm:w-full"  ref={(el) => (cards.current[2] = el)}>
          <div className="w-[4vw] h-[4vw] mb-[1.5vw] max-sm:h-[12vw] max-sm:w-[12vw] max-sm:mb-[6vw]   max-md:h-[8vw] max-md:w-[8vw] max-md:mb-[3vw] ml-[-0.7vw]">
              <Image src={"/assets/images/company/impact-logo-3.svg"} alt="" className="w-full h-full object-contain" width={100} height={100}/>
            </div>
            <Copy>
              <p className="mb-[3vw] max-sm:mb-[8vw]  max-md:mb-[8vw]">
              Our mission goes beyond access—we’re here to unlock opportunities, uphold dignity, and empower long-term financial growth for every individual and business we serve.

              </p>
            </Copy>
            <div className="w-full h-[1.5px] bg-gray lineDraw overflow-hidden">
              <span className="block scale-x-0 bg-primary h-full origin-[100%] group-hover:scale-x-100 transition-transform duration-700 ease-link-line group-hover:origin-[0]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
