import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      className="w-screen px-[4vw] py-[5%] h-full bg-[#fbfbfb]"
      id="about"
    >
      <div className="flex w-full flex-col items-center gap-[5vw]">
        <h2 className="text-[5.7vw] font-display font-medium w-[55%] leading-[1.3] text-center">
          Simple, Transparent & Fair Pricing
        </h2>
        <div className="w-[68vw] h-[28vw] relative">
          <Image
            src={"/assets/images/business-tapnpay/about-ticket.png"}
            alt=""
            width={700}
            height={400}
            className="w-full h-full object-contain drop-shadow-xl"
          />
          <div className="w-full h-full absolute top-0 left-0 flex  ">
            <div className="w-[33%] h-full flex flex-col items-center justify-center text-primary font-display">
              <h3 className="text-[5.7vw] leading-[1.2] font-medium">0.5%</h3>
              <p className="text-[2vw] font-medium ">Per Transaction</p>
            </div>
            <div className="w-[67%] flex flex-col h-full items-center gap-[2.5vw] pt-[5vw] pl-[3vw]">
              <div className="w-full h-fit flex flex-col gap-[1vw]">
                <div className="w-fit px-[2vw] rounded-[3vw] py-[1vw] pr-[5vw] bg-[#FFEAEE]">
                  No Setup Fees
                </div>
                <p className="text-white w-[70%] pl-[1.5vw]">
                Start accepting payments with MasterCard, Visa, and Verve—no setup cost required.  
                </p>
              </div>
              <div className="w-full h-fit flex flex-col gap-[1vw]">
                <div className="w-fit px-[2vw] rounded-[3vw] py-[1vw] pr-[5vw] bg-[#EAF1FF]">
                Low Transaction Fee
                </div>
                <p className="text-white w-[70%] pl-[1.5vw]">
                Just 0.5% per transaction, capped at ₦2,000—no hidden charges. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
