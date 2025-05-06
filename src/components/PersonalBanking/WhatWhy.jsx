import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const WhatWhy = () => {
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
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 90%",
          end: "bottom 90%",
          scrub: true,
          markers:true
        },
      });
    }, []);
  return (
    <section
      className="w-screen h-full px-[4vw] bg-[#FBFBFB] py-[7%] relative"
      id="whatwhy"
    >
      <div className="w-full h-full flex flex-col gap-[10vw] items-center justify-center">
        <h2 className="text-[5.7vw] font-display font-medium w-[85%]">
          Connect your bank accounts—everything in one Montra move.
        </h2>
        <div className="w-full h-full flex flex-col gap-[9vw] items-center">
          <div className="w-[70%] flex justify-between">
            <div className="w-[2.5vw] h-[2.5vw] flex justify-center items-center border rounded-full font-display mt-[1.5vw] ">
              01
            </div>
            <div className="flex flex-col gap-[1.5vw] w-[70%]">
              <h3 className="text-[3.5vw] font-display font-medium">
                Choose Your Bank Account
              </h3>
              <p className="w-[80%]">
                Select the bank account you'd like to use to add money to your
                Montra Wallet. This allows Montra to verify your details and
                request your consent for placing an eMandate.
              </p>
            </div>
          </div>
          <div className="w-[70%] flex justify-between">
            <div className="w-[2.5vw] h-[2.5vw] flex justify-center items-center border rounded-full font-display mt-[1.5vw] ">
              02
            </div>
            <div className="flex flex-col gap-[1.5vw] w-[70%]">
              <h3 className="text-[3.5vw] font-display font-medium">
                Verify Ownership with a Refundable Payment
              </h3>
              <p className="w-[80%]">
                Make a small, refundable payment from the selected account. This
                confirms you're the account owner and activates the eMandate for
                secure linking.
              </p>
            </div>
          </div>
          <div className="w-[70%] flex justify-between">
            <div className="w-[2.5vw] h-[2.5vw] flex justify-center items-center border rounded-full font-display mt-[1.5vw] ">
              03
            </div>
            <div className="flex flex-col gap-[1.5vw] w-[70%]">
              <h3 className="text-[3.5vw] font-display font-medium">
                Fund Your Montra Account
              </h3>
              <p className="w-[80%]">
                Once verified, use the same bank account to add money to your
                Montra Wallet. This final step confirms the link—and you're
                ready to make payment requests directly from the app!
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-[35%] left-[30%] h-[55vw]">
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
              y2="132.333"
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
