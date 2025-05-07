"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Investors = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#investors",
                start:"top 40%",
            }
        })
        tl.from(".icon",{
            scale:0.2,
            duration:0.4,
            ease:"elastic.inOut",
            stagger:0.08,
        })
        tl.to(".icon-1",{
            scale:1,
            borderRadius:"3vw",
            duration:0.4,
            
            ease:"elastic.inOut"
        })
        tl.to(".icon-3",{
            scale:1,
            borderRadius:"3vw",
            duration:0.4,
            delay:-0.3,
             ease:"elastic.inOut"
        })
        tl.to(".icon-4",{
            scale:1,
            borderRadius:"3vw",
            duration:0.4,
            delay:-0.3,
             ease:"elastic.inOut"
        })
        
        tl.to(".icon-2",{
            scale:1,
            borderRadius:"3vw",
            duration:0.4,
            delay:-0.3,
             ease:"elastic.inOut"
        })
        tl.to(".icon-5",{
            scale:1,
            borderRadius:"3vw",
            duration:0.4,
            delay:-0.3,
             ease:"elastic.inOut"
        })
        tl.to(".icon-6",{
            scale:1,
            borderRadius:"3vw",
            duration:0.4,
            delay:-0.3,
             ease:"elastic.inOut"
        })
       tl.to(".icon-content",{
        opacity:1,
        duration:1,
        stagger:0.04,
       })

    });
    return () => ctx.revert();
  }, []);
  return (
    <section
      className="w-screen h-fit px-[4vw] py-[5%] pb-[10%] bg-white"
      id="investors"
    >
      <div className="w-full h-full flex flex-col items-center gap-[8vw]">
        <h3 className="text-[3.4vw] font-display capitalize font-medium">
          What You Can Do with Montra Chat
        </h3>
        <div className="w-full flex justify-between px-[5vw] text-white">
          <div className="w-[13vw] h-[13vw]  rounded-[7vw] flex flex-col justify-center items-center bg-[#FF8303] icon-1 scale-[0.3] icon">
            <div className="opacity-0 icon-content flex flex-col justify-center items-center w-full">
              <div className="w-[7vw] h-[7vw]">
                <Image
                  src={"/assets/images/personal-chat/investor-icon-1.svg"}
                  alt="investor-icon"
                  className="w-full h-full object-contain"
                  width={50}
                  height={50}
                />
              </div>
              <p>Messaging</p>
            </div>
          </div>
          <div className="w-[13vw] h-[13vw]  rounded-[7vw] flex flex-col justify-center items-center  bg-[#7A78FF] icon-2 scale-[0.3] icon">
            <div className="opacity-0 icon-content flex flex-col justify-center items-center w-full">
              <div className="w-[7vw] h-[7vw]">
                <Image
                  src={"/assets/images/personal-chat/investor-icon-2.svg"}
                  alt="investor-icon"
                  className="w-full h-full object-contain"
                  width={50}
                  height={50}
                />
              </div>
              <p>Group Messaging</p>
            </div>
          </div>
          <div className="w-[13vw] h-[13vw]  rounded-[7vw] flex flex-col justify-center items-center bg-[#35C771] icon-3 scale-[0.3] icon">
            <div className="opacity-0 icon-content flex flex-col justify-center items-center w-full">
              <div className="w-[7vw] h-[7vw]">
                <Image
                  src={"/assets/images/personal-chat/investor-icon-3.svg"}
                  alt="investor-icon"
                  className="w-full h-full object-contain"
                  width={50}
                  height={50}
                />
              </div>
              <p>Voice Calls</p>
            </div>
          </div>
          <div className="w-[13vw] h-[13vw]  rounded-[7vw] flex flex-col justify-center items-center bg-[#111111] icon-4 scale-[0.3] icon">
            <div className="opacity-0 icon-content flex flex-col justify-center items-center w-full">
              <div className="w-[7vw] h-[7vw]">
                <Image
                  src={"/assets/images/personal-chat/investor-icon-4.svg"}
                  alt="investor-icon"
                  className="w-full h-full object-contain"
                  width={50}
                  height={50}
                />
              </div>
              <p>Video Calls</p>
            </div>
          </div>
          <div className="w-[13vw] h-[13vw]  rounded-[7vw] flex flex-col justify-center items-center bg-[#FB2F55] icon-5 scale-[0.3] icon">
            <div className="opacity-0 icon-content flex flex-col justify-center items-center w-full">
              <div className="w-[7vw] h-[7vw]">
                <Image
                  src={"/assets/images/personal-chat/investor-icon-5.svg"}
                  alt="investor-icon"
                  className="w-full h-full object-contain"
                  width={50}
                  height={50}
                />
              </div>
              <p>Make Payments</p>
            </div>
          </div>
          <div className="w-[13vw] h-[13vw]  rounded-[7vw] flex flex-col justify-center items-center bg-[#215CFF] icon-6 scale-[0.3] icon">
            <div className="opacity-0 icon-content flex flex-col justify-center items-center w-full">
              <div className="w-[7vw] h-[7vw]">
                <Image
                  src={"/assets/images/personal-chat/investor-icon-6.svg"}
                  alt="investor-icon"
                  className="w-full h-full object-contain"
                  width={50}
                  height={50}
                />
              </div>
              <p>Request Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
