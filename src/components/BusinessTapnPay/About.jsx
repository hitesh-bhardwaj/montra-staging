import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      className="w-screen px-[4vw] py-[5%] h-full bg-[#fbfbfb] max-sm:px-[7vw] overflow-hidden relative max-sm:h-[270vw]"
      id="about"
    >
      <div className="flex w-full flex-col items-center gap-[5vw] max-sm:items-start max-sm:gap-[7vw]">
        <h2 className="text-[5.7vw] font-display font-medium w-[55%] leading-[1.3] text-center max-sm:w-[90%] max-sm:text-left max-sm:text-[11vw]">
          Simple, Transparent & Fair Pricing
        </h2>
        <div className="w-[68vw] h-[28vw] relative max-sm:h-[200vw] max-sm:w-[200vw] max-sm:left-[-50%] max-sm:absolute max-sm:top-[22%]">
          <Image
            src={"/assets/images/business-tapnpay/about-ticket.png"}
            alt=""
            width={700}
            height={400}
            className="w-full h-full object-contain drop-shadow-xl max-sm:rotate-[90deg]"
          />
          <div className="w-full h-full absolute top-0 left-0 flex max-sm:flex-col max-sm:left-[30%]   ">
            <div className="w-[33%] h-full flex flex-col items-center justify-center text-primary font-display max-sm:w-[40%] max-sm:h-[60vw] max-sm:gap-[6vw]">
              <h3 className="text-[5.7vw] leading-[1.2] font-medium max-sm:text-[13vw]">0.5%</h3>
              <p className="text-[2vw] font-medium max-sm:text-[7.5vw]">Per Transaction</p>
            </div>
            <div className="w-[67%] flex flex-col h-full items-center gap-[2.5vw] pt-[5vw] pl-[3vw] max-sm:w-[40%] max-sm:h-[140vw] max-sm:px-[7vw] max-sm:pt-[20vw] max-sm:gap-[12vw]">
              <div className="w-full h-fit flex flex-col gap-[1vw] max-sm:gap-[4vw]">
                <div className="w-fit px-[2vw] rounded-[3vw] py-[1vw] pr-[5vw] bg-[#FFEAEE] max-sm:w-full max-sm:pl-[7vw] max-sm:py-[4vw] max-sm:rounded-full">
                  No Setup Fees
                </div>
                <p className="text-white w-[70%] pl-[1.5vw] max-sm:w-full">
                Start accepting payments with MasterCard, Visa, and Verve—no setup cost required.  
                </p>
              </div>
              <div className="w-full h-fit flex flex-col gap-[1vw] max-sm:gap-[4vw]">
                <div className="w-fit px-[2vw] rounded-[3vw] py-[1vw] pr-[5vw] bg-[#EAF1FF] max-sm:w-full max-sm:pl-[7vw] max-sm:py-[4vw] max-sm:rounded-full">
                Low Transaction Fee
                </div>
                <p className="text-white w-[70%] pl-[1.5vw] max-sm:w-full">
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
