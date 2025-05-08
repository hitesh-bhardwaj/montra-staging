"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Track = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = [
      card1Ref.current,
      card2Ref.current,
      card3Ref.current,
      card4Ref.current,
    ];
    const lines = sectionRef.current.querySelectorAll(".lineDraw");

    gsap.set(cards, { opacity: 0, x: -100 });
    gsap.set(lines, { scaleX: 0, transformOrigin: "left center" });

    cards.forEach((card, i) => {
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
    <section ref={sectionRef} className="h-full w-screen  bg-white relative">
      <div className="w-full text-center flex flex-col gap-[2vw] pb-[5%] items-center justify-center">
        <h2 className="text-[5.7vw] font-display font-medium w-[70%] capitalize leading-[1.15]">
          Track Your & Rewards—All in One Place
        </h2>
        <div className="px-[4vw] py-[4vw] flex items-center justify-between">
          <div
            ref={card1Ref}
            className="flex flex-col w-[20%] items-start gap-[1.5vw] group"
          >
            <Image
              src="/assets/images/personal-payments/montra-account-statement.svg"
              height={40}
              width={40}
              className="w-[3vw] h-[3vw] object-contain"
              alt="montra-account-statement"
            />
            <p className="font-medium text-start">Montra Account Statement</p>
            <p className="text-start">
              View all your payments in real-time with your Montra Account
              Statement—clarity made simple.
            </p>
            <div className="relative w-full h-[1px] bg-[#CBCBCB] mt-[5vw] overflow-hidden">
              <span className="absolute left-0 top-0 h-full w-full bg-primary origin-left scale-x-0  transition-transform duration-500 group-hover:scale-x-100"></span>
            </div>
          </div>
          <div
            ref={card2Ref}
            className="flex flex-col w-[20%] items-start gap-[1.5vw] group"
          >
            <Image
              src={"/assets/images/personal-payments/instant-alerts.svg"}
              height={50}
              width={50}
               className="w-[3vw] h-[3vw] object-contain"
              alt="montra-account-statement"
            />
            <p className="font-medium text-start">Instant Alerts</p>
            <p className="text-start">
              Get voice and text notifications on your Montra App every time you
              receive a payment—so you’re always in the loop.
            </p>
            <div className="relative w-full h-[1px] bg-[#CBCBCB] mt-[3vw] overflow-hidden">
              <span className="absolute left-0 top-0 h-full w-full bg-primary origin-left scale-x-0  transition-transform duration-500 group-hover:scale-x-100"></span>
            </div>
          </div>
          <div
            ref={card3Ref}
            className="flex flex-col w-[20%] items-start gap-[1.5vw] group"
          >
            <Image
              src={"/assets/images/personal-payments/reward-points.svg"}
              height={50}
              width={50}
               className="w-[3vw] h-[3vw] object-contain"
              alt="montra-account-statement"
            />
            <p className="font-medium text-start">Reward Points Tracker</p>
            <p className="text-start">
              Keep tabs on every reward point earned with a dedicated Reward
              Point Account Statement—no surprises, just benefits.
            </p>
            <div className="relative w-full h-[1px] bg-[#CBCBCB] mt-[3vw] overflow-hidden">
              <span className="absolute left-0 top-0 h-full w-full bg-primary origin-left scale-x-0  transition-transform duration-500 group-hover:scale-x-100"></span>
            </div>
          </div>
          <div
            ref={card4Ref}
            className="flex flex-col w-[20%] items-start gap-[1.5vw] group"
          >
            <Image
              src={"/assets/images/personal-payments/easy-reward.svg"}
              height={50}
              width={50}
               className="w-[3vw] h-[3vw] object-contain"
              alt="montra-account-statement"
            />
            <p className="font-medium text-start">Easy Reward Redemption</p>
            <p className="text-start">
              Redeem your points anytime and monitor it all through your Reward
              Point Redemption Account—track your perks with ease.
            </p>
            <div className="relative w-full h-[1px] bg-[#CBCBCB] mt-[3vw] overflow-hidden">
              <span className="absolute left-0 top-0 h-full w-full bg-primary origin-left scale-x-0  transition-transform duration-500 group-hover:scale-x-100"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;
