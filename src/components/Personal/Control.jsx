"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { LinkButton } from "../Buttons";
gsap.registerPlugin(ScrollTrigger);

const Control = () => {
  const [active, setActive] = useState("Banking");
  const [pointer, setPointer] = useState(true);
  const [pointerevent, setPointerEvent] = useState(false);
  // const [enter, setEnter] = useState(false);
  // const [tick, setTick] = useState(false);
  const prevActiveRef = useRef(active);
  const sectionRefs = useRef({});

  const sections = ["Banking", "Payments", "Finance", "Chat", "Shop"];

  useEffect(() => {
    // Initialize hidden
    sections.forEach((sec) => {
      gsap.set(sectionRefs.current[sec], { opacity: 0, yPercent: 30 });
    });

    gsap.set(sectionRefs.current[active], { opacity: 1, yPercent: 0 });
  }, []);

  useEffect(() => {
    if (prevActiveRef.current === active) return;

    const prev = sectionRefs.current[prevActiveRef.current];
    const next = sectionRefs.current[active];

    const tl = gsap.timeline();

    tl.to(prev, {
      yPercent: -5,
      opacity: 0,
      duration: 0.7,
      ease: "power1.inOut",
    })
      .set(prev, { yPercent: -5 }) // Reset offscreen for next time
      .set(next, { yPercent: 5, opacity: 0 })
      .to(next, {
        yPercent: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power1.inOut",
      });

    prevActiveRef.current = active;
  }, [active]);

  // useEffect(() => {
  //   if (!enter) {
  //     const interval = setInterval(() => {
  //       setTick((prev) => !prev); // flip true <-> false
  //     }, 2700); // every 2 seconds

  //     return () => clearInterval(interval); // cleanup on unmount
  //   }
  // }, [enter]);

  // useEffect(()=>{
  //   const ctx = gsap.context(()=>{

  //     gsap.to(".icon-container",{
  //       scrollTrigger:{
  //         trigger:".icon-container",
  //         start:"top 30%",
  //         end:"90% 30%",
  //         markers:true,
  //       },
  //       onComplete:()=>{
  //       setEnter(true)
  //       },
  //       onReverseComplete:()=>{
  //         setEnter(false)
  //       }
  //     })

  //   })
  //   return()=>ctx.revert()

  // },[])
  // useEffect(()=>{
  //   if(!enter){
  //     const ctx = gsap.context(()=>{
  //       gsap.to(".control-icon", {
  //         scale:0,
  //       //  repeatDelay:2,
  //        stagger: {
  //         amount: 0.5, // total time
  //         from: "random"
  //       },
  //        ease: "power1.out",
  //        onComplete:()=>{
  //          gsap.from(".control-icon",{
  //            scale:0,
  //            delay:0.5,
  //            stagger: {
  //             amount: 0.5, // total time
  //             from: "random"
  //           },
  //            ease: "power1.out",
  //            scrollTrigger: {
  //              trigger: "#control",
  //              start: "10% bottom",
  //              end: "35% bottom",

  //            },
  //          })

  //        }

  //      });

  //     })
  //     return()=>ctx.revert()

  //   }
  // },[tick])
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".control-icon", {
        yPercent: 150,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#control",
          start: "5% 90%",
          end: "20% 90%",
          // markers:true,
          scrub: true,
        },
      });

      const pl = gsap.timeline({
        scrollTrigger: {
          trigger: "#control",
          pin: ".icon-container",
          start: "+150 top",
          // end: "+3750 top",
          end: "80% top",
          // markers:true,
          scrub: true,
        },
      });
      pl.to(".icon-container", {
        scale: 0.5,
      })
        .to(".icon-5", {
          left: "70%",
          top: "20%",
          delay: -0.5,
        })
        .to(".icon-1", {
          left: "70%",
          top: "-70%",
          delay: -0.5,
        })
        .to(".icon-3", {
          left: "70%",
          top: "290%",
          delay: -0.5,
        })
        .to(".icon-4", {
          left: "70%",
          top: "200%",
          delay: -0.5,
        })
        .to(".icon-2", {
          left: "70%",
          top: "110%",
          delay: -0.51,
        })
        .to(".icon-1", {
          left: "-65%",
          delay: 0,
        })
        .to(".icon-5", {
          left: "-65%",
          delay: -0.45,
        })
        .to(".icon-2", {
          left: "-65%",
          delay: -0.44,
        })
        .to(".icon-4", {
          left: "-65%",
          delay: -0.435,
        })
        .to(".icon-3", {
          left: "-65%",
          delay: -0.43,
        })
        .to(".icon-1", {
          top: "-10%",
          scale: active == "Banking" ? 0.65 : 0.5,
          opacity: active == "Banking" ? 1 : 0.3,
          delay: 0,
        })
        .to(".icon-5", {
          top: "60%",
          delay: -0.5,
          scale: active == "Payments" ? 0.65 : 0.5,
          opacity: active == "Payments" ? 1 : 0.3,
        })
        .to(".icon-2", {
          top: "120%",
          scale: active == "Finance" ? 0.65 : 0.5,
          opacity: active == "Finance" ? 1 : 0.3,
          delay: -0.5,
        })
        .to(".icon-4", {
          top: "180%",
          scale: active == "Chat" ? 0.65 : 0.5,
          opacity: active == "Chat" ? 1 : 0.3,
          delay: -0.5,
        })
        .to(".icon-3", {
          top: "240%",
          scale: active == "Shop" ? 0.65 : 0.5,
          opacity: active == "Shop" ? 1 : 0.3,
          delay: -0.5,
        })
        .to(".icon-content", {
          opacity: 1,
          duration: 0.2,
          delay: -1.35,
        })
        .to(".control-content", {
          opacity: 1,
          delay: -1.7,
        })
        .to(".control-content", {
          opacity: 0,
          delay: -1.2,
          duration: 0.2,
          onStart: () => {
            setPointerEvent(true);
          },
          onReverseComplete: () => {
            setPointerEvent(false);
          },
        });
      const bl = gsap.timeline({
        scrollTrigger: {
          trigger: "#control",
          start: "61% top",
          end: "85% top",
          scrub: true,
        },
      });
      bl.to(".bottom-content", {
        opacity: 1,
        duration: 0.7,
        delay:1,
      });
     
    });
    return () => ctx.revert();
  }, [active]);
  // console.log(pointer)
  return (
    <div
      className="w-screen h-[310vw] px-[4vw] py-[5%] relative overflow-hidden bg-[#fbfbfb]"
      id="control"
    >
      
      <div className="w-full h-[60vh] flex flex-col justify-between relative z-[28]">
        <h2 className="text-[5.7vw] font-display font-medium capitalize leading-[1.15] text-center">
          Take Control of Your Money. Effortlessly.
        </h2>
        <div className="w-full flex justify-between px-[6.5vw] h-[30vw]">
          <div className={`icon-container w-full h-full ${pointerevent?"pointer-events-auto":"pointer-events-none"}`}>
            <div className="w-[15vw] h-[15vw] control-icon icon-1 absolute top-[65%] z-[10]">
              <div
                className={`relative w-full h-full ${
                  pointer ? "cursor-pointer" : "pointer-events-none"
                } `}
                onClick={() => {
                  setPointer(false); // disable pointer
                     setTimeout(() => {
                   setPointer(true); // re-enable after 2 seconds
                  }, 1000);
                  setActive("Banking");
                }}
              >
                <Image
                  src="/assets/images/personal/personal-icon-1.png"
                  alt="perosnal-icons"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
                <div className="absolute left-[130%] top-[-5%] opacity-0 icon-content text-[10.5vw] font-bold font-display uppercase">
                  <div className="text-[#FF8100]">Banking</div>
                </div>
              </div>
            </div>
            <div className="w-[15vw] h-[15vw] control-icon icon-2 absolute top-[65%] left-[21%] z-[10]">
              <div
                className={`relative w-full h-full ${
                  pointer ? "cursor-pointer" : "pointer-events-none"
                }`}
                onClick={() => {
                  setPointer(false); // disable pointer
                     setTimeout(() => {
                   setPointer(true); // re-enable after 2 seconds
                  }, 1000);
                  setActive("Finance");
                }}
              >
                <Image
                  src="/assets/images/personal/personal-icon-2.png"
                  alt="perosnal-icons"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
                <div className="absolute left-[130%] top-[-5%] opacity-0 icon-content text-[10.5vw] font-bold font-display uppercase">
                  <div className="text-[#35C771]">Finance</div>
                </div>
              </div>
            </div>
            <div className="w-[15vw] h-[15vw] control-icon icon-3 absolute top-[65%] left-[42%] z-[10]">
              <div
                className={`relative w-full h-full ${
                  pointer ? "cursor-pointer" : "pointer-events-none"
                }`}
                onClick={() => {
                  setPointer(false); // disable pointer
                     setTimeout(() => {
                   setPointer(true); // re-enable after 2 seconds
                  }, 1000);
                  setActive("Shop");
                }}
              >
                <Image
                  src="/assets/images/personal/personal-icon-3.png"
                  alt="perosnal-icons"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
                <div className="absolute left-[130%] top-[-5%] opacity-0 icon-content text-[10.5vw] font-bold font-display uppercase">
                  <div className="text-[#111111]">shop</div>
                </div>
              </div>
            </div>
            <div className="w-[15vw] h-[15vw] control-icon icon-4 absolute top-[65%] left-[63%] z-[10]">
              <div
                className={`relative w-full h-full ${
                  pointer ? "cursor-pointer" : "pointer-events-none"
                }`}
                onClick={() => {
                  setPointer(false); // disable pointer
                     setTimeout(() => {
                   setPointer(true); // re-enable after 2 seconds
                  }, 1000);
                  setActive("Chat");
                }}
              >
                <Image
                  src="/assets/images/personal/personal-icon-4.png"
                  alt="perosnal-icons"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
                <div className="absolute left-[130%] top-[-5%] opacity-0 icon-content text-[10.5vw] font-bold font-display uppercase">
                  <div className="text-[#FB2F55]">Chat</div>
                </div>
              </div>
            </div>
            <div className="w-[15vw] h-[15vw] control-icon icon-5 absolute top-[65%] left-[84%] z-[10]">
              <div
                className={`relative w-full h-full ${
                  pointer ? "cursor-pointer" : "pointer-events-none"
                }`}
                onClick={() => {
                  setPointer(false); // disable pointer
                     setTimeout(() => {
                   setPointer(true); // re-enable after 2 seconds
                  }, 1000);
                  setActive("Payments");
                }}
              >
                <Image
                  src="/assets/images/personal/personal-icon-5.png"
                  alt="perosnal-icons"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
                <div className="absolute left-[130%] top-[-5%] opacity-0 icon-content text-[10.5vw] font-bold font-display uppercase">
                  <div className="text-primary">Payments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-[40vw] flex flex-col flex-nowrap overflow-hidden absolute bottom-[4%] right-0 ">
        <div className="w-full h-full relative flex justify-end ">
          <div className="w-[75%] h-[40vw] relative bottom-content flex justify-end opacity-0 pr-[4vw]">
            {sections.map((sectionKey) => (
              <div
                key={sectionKey}
                ref={(el) => (sectionRefs.current[sectionKey] = el)}
                className={`w-full h-[40vw] flex justify-between absolute top-0 left-0 pr-[4vw] ${
                  active === sectionKey ? "z-20" : "z-10"
                }`}
              >
                <div className="w-[35%]">
                  <Image
                    src={"/assets/images/personal/personal-control-img-1.png"}
                    alt=""
                    className="w-full h-full object-contain"
                    width={500}
                    height={900}
                  />
                </div>
                <div className="w-[55%] flex flex-col gap-[3vw] h-full justify-center">
                  <h3 className="text-[3.4vw] leading-[1.3] font-display capitalize font-medium">
                    Do More with your money. Spend & earn rewards
                  </h3>
                  <ul className="list-disc ml-[1vw] w-[60%]">
                    <li>
                      Open a Montra Account and get a virtual Montra Card issued
                      instantly.
                    </li>
                    <li>
                      You can also link your existing Bank accounts on Montra
                      App.
                    </li>
                    <li>
                      Now you can start making payments using your Montra or
                      Linked Bank accounts and earn exciting rewards.
                    </li>
                  </ul>
                  <LinkButton text={"Learn More"} href={"/"} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-screen h-[310vw] absolute top-0 left-0">

      </div>

      <p className="w-[30%] h-fit fixed bottom-[10%] left-[5%] text-[3vw] font-display font-medium control-content opacity-0">
        Effortless
        <br /> Money Management, Designed Around You.
      </p>
    </div>
  );
};

export default Control;
