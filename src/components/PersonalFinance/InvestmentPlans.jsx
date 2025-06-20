"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import Heading from "../Heading";
import Copy from "../Copy";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const InvestmentPlans = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (globalThis.innerWidth > 1024) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#investmentplan",
            start: "top 40%",
          },
        });
        tl.to(".icon-plan ", {
          scale: 1,
          borderRadius: "3vw",
          ease: "elastic.inOut",
          duration: 1,
          stagger: {
            amount: 0.5,
            from: "random",
          },
        }).to(
          ".icon-content-plan",
          {
            duration: 1,
            opacity: 1,
            delay: 0.3,
            stagger: {
              amount: 0.5,
              from: "random",
            },
          },
          "<"
        );
      } 
      if(globalThis.innerWidth>541&&globalThis.innerWidth<1024){
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#investmentplan",
            start: "top 80%",
          },
        });
        tl.to(".icon-plan ", {
          scale: 1,
          borderRadius: "4vw",
          ease: "elastic.inOut",
          duration: 1,
          stagger: {
            amount: 0.5,
            from: "random",
          },
        }).to(
          ".icon-content-plan",
          {
            duration: 1,
            opacity: 1,
            delay: 0.3,
            stagger: {
              amount: 0.5,
              from: "random",
            },
          },
          "<"
        );
      }
      if(globalThis.innerWidth<541) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#investmentplan",
            start: "top 80%",
          },
        });
        tl.to(".icon-plan ", {
          scale: 1,
          borderRadius: "9vw",
          ease: "elastic.inOut",
          duration: 1,
          stagger: {
            amount: 0.5,
            from: "random",
          },
        }).to(
          ".icon-content-plan",
          {
            duration: 1,
            opacity: 1,
            delay: 0.3,
            stagger: {
              amount: 0.5,
              from: "random",
            },
          },
          "<"
        );
      }
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="w-screen h-full bg-white p-[4vw] max-sm:px-[7vw] max-sm:py-[15%] max-md:py-[10%]" id="investmentplan">
      <div className="w-full h-full flex flex-col gap-[1.2vw] text-center max-sm:text-left max-sm:gap-[10vw] max-md:gap-[7vw]">
        <div className="w-full flex flex-col gap-[1.5vw] items-center max-sm:items-start max-sm:gap-[7vw] max-md:gap-[3vw]">
          <Heading>
            <h2
              className={`text-[5.7vw] font-display font-medium w-[85%] capitalize max-sm:text-[11vw] max-sm:w-full leading-[1.2] max-md:text-[7.5vw] max-md:w-[95%]`}
            >
              Compare Best <span className="text-primary">Investment</span> Plans Available
              Towards Maximizing Your Returns
            </h2>
          </Heading>
          <Copy>
            <p className="w-[50%] max-sm:w-full max-md:w-[80%]">
              Explore the best investment options and find the plan that helps
              you grow your wealth faster.
            </p>
          </Copy>
        </div>

        <div className="w-full flex items-center justify-center gap-[2vw] pt-[4vw] px-[4vw] text-white max-sm:px-0 max-sm:justify-between">
          <div
            className={`w-[13vw] h-[13vw]  rounded-[7vw] flex flex-col justify-center items-center  icon-1 scale-[0.3] icon-plan bg-[#35C771] max-sm:rounded-[20vw] max-sm:w-[40vw] max-sm:h-[40vw] max-md:w-[25vw] max-md:h-[25vw] max-md:gap-[2vw] max-md:rounded-[12vw]`}
          >
            <div className="opacity-0 icon-content-plan flex flex-col justify-center  gap-[0.5vw] items-center w-full  max-sm:gap-[3vw]">
              <div className="w-[6vw] h-[6vw] max-sm:w-[15vw] max-sm:h-[15vw] max-md:w-[10vw] max-md:h-[10vw] ">
                <Image
                  src="/assets/images/personal-finance/fixed-deposits.svg"
                  alt="investor-icon"
                  className="w-full h-full object-contain"
                  width={50}
                  height={50}
                />
              </div>
              <p className="w-[50%] text-center font-medium leading-[1.2]">
                Fix Deposits
              </p>
            </div>
          </div>
          <div
            className={`w-[13vw] h-[13vw]  rounded-[7vw] flex flex-col justify-center items-center  icon-1 scale-[0.3] icon-plan bg-[#FB2F55] max-sm:w-[40vw] max-sm:rounded-[20vw] max-sm:h-[40vw]  max-md:w-[25vw] max-md:h-[25vw] max-md:rounded-[12vw]  max-md:gap-[2vw]`}
          >
            <div className="opacity-0 icon-content-plan flex flex-col justify-center  gap-[0.5vw] items-center w-full max-sm:gap-[3vw]">
              <div className="w-[6vw] h-[6vw] max-sm:w-[20vw] max-sm:h-[20vw] max-md:w-[10vw] max-md:h-[10vw]">
                <Image
                  src="/assets/images/personal-finance/mutual-funds.svg"
                  alt="investor-icon"
                  className="w-full h-full object-contain"
                  width={50}
                  height={50}
                />
              </div>
              <p className="w-[50%] text-center font-medium leading-[1.2]">
                Mutual Funds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
