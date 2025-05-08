"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Steps = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((img, i) => {
      gsap.set(img, { opacity: i === 0 ? 1 : 0 });
    });

    let index = 0;
    const interval = setInterval(() => {
      const current = imageRefs.current[index];
      const nextIndex = (index + 1) % stepData.steps.length;
      const next = imageRefs.current[nextIndex];

      gsap.to(current, { opacity: 0, duration: 1 });
      gsap.to(next, { opacity: 1, duration: 2, delay: 1 });

      index = nextIndex;
    }, 5800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const circles = document.querySelectorAll(".step-circle svg circle");

    gsap.fromTo(
      circles,
      { strokeDashoffset: 126 },
      {
        strokeDashoffset: 0,
        duration: 6,
        stagger: 6,
        repeat: -1,
        ease: "none",
      }
    );
  }, []);

  return (
    <section className="w-screen h-screen bg-primary px-[4vw] py-[5%]">
      <div className="w-full h-full flex justify-between text-white">
        <div className="w-[30%]">
          <h2 className="text-[5vw] leading-[1.1] font-display">
            {stepData.heading}
          </h2>
        </div>

        <div className="w-[70%] flex">
          <div className="w-[50%] relative h-[60vw] mt-[-5vw]">
            {stepData.steps.map((step, i) => (
              <Image
                key={i}
                ref={(el) => (imageRefs.current[i] = el)}
                src={step.img}
                alt={`steps-img-${i + 1}`}
                className="w-full h-full object-cover absolute top-0 left-0"
                width={800}
                height={1200}
                style={{ opacity: i === 0 ? 1 : 0 }}
              />
            ))}
          </div>

          <div className="w-[75%] flex flex-col justify-end h-full items-start gap-[10vw] pl-[5vw]">
            {stepData.steps.map((step, index) => (
              <div key={index} className="w-full flex flex-col gap-[1vw] h-fit">
                <h3 className="text-[3.4vw] capitalize font-display">{step.title}</h3>
                <p className="w-[70%]">{step.para}</p>
              </div>
            ))}

            <div className="flex gap-[0.5vw]">
              {stepData.steps.map((step, i) => (
                <div key={i} className="w-fit flex gap-[1vw] items-center">
                  <div className="step-circle w-[2.5vw] h-[2.5vw] rounded-full border border-white font-display flex justify-center items-center relative">
                    {step.number}
                    <svg className="absolute top-0 left-0 w-full h-full -rotate-[90deg]" viewBox="0 0 40 40">
                      <circle
                        cx="20"
                        cy="20"
                        r="20"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="126"
                        strokeDashoffset="126"
                      />
                    </svg>
                  </div>
                  <p className={`${i === 0 ? "mr-[2vw] text-[1vw]" : "w-0 overflow-hidden"} font-display`}>
                    {step.tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;

const stepData = {
  heading: "Get started in minutes",
  steps: [
    {
      number: "01",
      title: "Download Montra App",
      para: "You can download Montra App from Google & IOS App stores.",
      tag: "Download App",
      img: "/assets/images/personal-banking/steps-img-1.png",
    },
    {
      number: "02",
      title: "Create your account",
      para: "Set up your profile in a few easy steps.",
      tag: "Create Account",
      img: "/assets/images/personal-banking/steps-img-2.png",
    },
    {
      number: "03",
      title: "Verify your identity",
      para: "Complete verification quickly and securely.",
      tag: "Verify",
      img: "/assets/images/personal-banking/steps-img-3.png",
    },
    {
      number: "04",
      title: "Start banking",
      para: "Enjoy a seamless digital banking experience.",
      tag: "Start Now",
      img: "/assets/images/personal-banking/steps-img-4.png",
    },
  ],
};
