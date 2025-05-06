"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Ways = () => {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current];
  
      gsap.set(cards, {
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        // rotate: -15,
      });
      const moveTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "70% center",
          scrub: true,
          stagger:0.1
        }
      });
  
      moveTimeline
        .to(card1Ref.current, { x: "-36vw",rotate:0,  ease: "none" }, 0)
        .to(card2Ref.current, { x: "-12vw", rotate:0, ease: "none" }, 0)
        .to(card3Ref.current, { x: "12vw",rotate:0,  ease: "none" }, 0)
        .to(card4Ref.current, { x: "36vw",rotate:0,  ease: "none" }, 0);

        // moveTimeline
        // .fromTo(card1Ref.current, {  rotate: -10, ease: "none" },{rotate:0}, 0)
        // .fromTo(card2Ref.current, {rotate: -10, ease: "none" },{rotate:0} ,0)
        // .fromTo(card3Ref.current, {  rotate: -10, ease: "none" },{rotate:0}, 0)
        // .fromTo(card4Ref.current, { rotate: -10, ease: "none" },{rotate:0}, 0);

  
      const flipTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "40% top",
          end: "+=30% center",
          scrub: true,
        }
      });
  
      flipTimeline
        .to(card1Ref.current.querySelector(".card-inner"), { rotateY: 180, ease: "none" }, 0)
        .to(card2Ref.current.querySelector(".card-inner"), { rotateY: 180, ease: "none" }, 0)
        .to(card3Ref.current.querySelector(".card-inner"), { rotateY: 180, ease: "none" }, 0)
        .to(card4Ref.current.querySelector(".card-inner"), { rotateY: 180, ease: "none" }, 0);
  
    }, containerRef);
  
    return () => ctx.revert();
  }, []);
  
  

  return (
    <section ref={containerRef} className="h-[300vh] w-screen pb-[15%] bg-white relative">
     
        <div className="w-full text-center flex flex-col gap-[2vw] pb-[5%] items-center justify-center">
          <h2 className="text-[5.7vw] font-display font-medium w-[70%] capitalize leading-[1.15]">
            Send Money Your Way—Fast, Easy & Secure
          </h2>
          <p className="w-[45%]">
            The Montra App gives you multiple simple and reliable ways to send money—anytime, anywhere.
          </p>
        </div>

        <div className=" h-fit w-full sticky top-[20%] pb-[10%] pt-[20%]">
        <div
  ref={card1Ref}
  className="card w-[22.5vw] h-[35vw] absolute"
>
  <div className="card-inner">
    <div className="card-front bg-primary text-white border-[1.5px] border-white">
      <Image src="/assets/images/personal-payments/montra-account.svg"  height={50}
              width={50}
              alt="montra-account" />
      <h3 className="text-[2.4vw] leading-[1] font-display font-medium" >Montra Account</h3>
    </div>
    <div className="card-back bg-white text-black border border-[#D2D2D2] shadow-lg">
    <h3 className="text-[2.4vw] leading-[1] font-display font-medium" >Montra Account</h3>
    <p>Use your saved debit or credit cards for quick, hassle-free transactions.</p>

      
    </div>
  </div>
</div>
<div
  ref={card2Ref}
  className="card w-[22.5vw] h-[35vw] absolute"
>
  <div className="card-inner">
    <div className="card-front bg-primary text-white border-[1.5px] border-white">
      <Image src="/assets/images/personal-payments/montra-account.svg"  height={50}
              width={50}
              alt="montra-account" />
      <h3 className="text-[2.4vw] leading-[1] font-display font-medium" >Montra Account</h3>
    </div>
    <div className="card-back bg-white text-black border border-[#D2D2D2] shadow-lg ">
    <h3 className="text-[2.4vw] leading-[1] font-display font-medium" >Montra Account</h3>
    <p>Use your saved debit or credit cards for quick, hassle-free transactions.</p>

      
    </div>
  </div>
</div>
<div
  ref={card3Ref}
  className="card w-[22.5vw] h-[35vw] absolute"
>
  <div className="card-inner">
    <div className="card-front bg-primary text-white border-[1.5px] border-white">
      <Image src="/assets/images/personal-payments/montra-account.svg"  height={50}
              width={50}
              alt="montra-account" />
      <h3 className="text-[2.4vw] leading-[1] font-display font-medium" >Montra Account</h3>
    </div>
    <div className="card-back bg-white text-black border border-[#D2D2D2] shadow-lg ">
    <h3 className="text-[2.4vw] leading-[1] font-display font-medium" >Montra Account</h3>
    <p>Use your saved debit or credit cards for quick, hassle-free transactions.</p>

      
    </div>
  </div>
</div>
<div
  ref={card4Ref}
  className="card w-[22.5vw] h-[35vw] absolute"
>
  <div className="card-inner">
    <div className="card-front bg-primary text-white border-[1.5px] border-white">
      <Image src="/assets/images/personal-payments/montra-account.svg"  height={50}
              width={50}
              alt="montra-account" />
      <h3 className="text-[2.4vw] leading-[1] font-display font-medium" >Montra Account</h3>
    </div>
    <div className="card-back bg-white text-black border border-[#D2D2D2] shadow-lg">
    <h3 className="text-[2.4vw] leading-[1] font-display font-medium" >Montra Account</h3>
    <p>Use your saved debit or credit cards for quick, hassle-free transactions.</p>

      
    </div>
  </div>
</div>
        </div>
      
    </section>
  );
};

export default Ways;
