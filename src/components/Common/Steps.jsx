"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const stepData = {
  heading: "Get started in minutes",
  steps: [
    {
      number: "01",
      title: "Download Montra App",
      para: "You can download Montra App from Google & iOS App stores.",
      img: "/assets/images/personal-banking/steps-img-1.png",
    },
    {
      number: "02",
      title: "Register",
      para: "Quickly register with your email or phone number.",
      img: "/assets/images/personal-banking/steps-img-1.png",
    },
    {
      number: "03",
      title: "Approve KYC",
      para: "Submit your documents for KYC approval.",
      img: "/assets/images/personal-banking/steps-img-1.png",
    },
    {
      number: "04",
      title: "Ready to use",
      para: "You’re all set—start managing your money!",
      img: "/assets/images/personal-banking/steps-img-1.png",
    },
  ],
};

const Steps = () => {
  const circleRefs = useRef([]);
  const tagRefs = useRef([]);
  const imageRefs = useRef([]);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const tlRef = useRef(null);
  const restartRef = useRef(null);

  const len = stepData.steps.length;

  const playStep = (idx) => {
    if (tlRef.current) tlRef.current.kill();
    gsap.set(restartRef.current, { autoAlpha: 0 }); // Hide restart button initially

    const step = stepData.steps[idx];

    const tl = gsap.timeline();

    // a) Fade out everything
    tl.to(
      [titleRef.current, paraRef.current, ...imageRefs.current],
      {
        autoAlpha: 0,
        duration: 0.4,
        onStart: () => {
          // Reset tags, circles
          tagRefs.current.forEach((el) => gsap.set(el, { width: 0, autoAlpha: 0 }));
          circleRefs.current.forEach((c) => gsap.set(c, { strokeDashoffset: 126 }));
          imageRefs.current.forEach((img) => gsap.set(img, { zIndex: 0 }));
        },
      }
    );

    // b) Set new content
    tl.call(() => {
      titleRef.current.textContent = step.title;
      paraRef.current.textContent = step.para;
      gsap.to(tagRefs.current,{width:0,duration:0.5,delay:6.2})
      gsap.set(imageRefs.current[idx], { zIndex: 1 });
    });

    // c) Expand tag
    tl.to(tagRefs.current[idx], {
      width: "auto",
      autoAlpha: 1,
      duration: 0.4,
    });

    // d) Fade in new text and image
    tl.to(
      [titleRef.current, paraRef.current],
      {
        autoAlpha: 1,
        duration: 1,
      },
      "-=0.2"
    )
    .to(imageRefs.current[idx],{
      autoAlpha:1,
      duration:1,
      // ease:"power4.out",
      // delay:1,
    },
    ""
  )

    // e) Fill the circle
    tl.to(
      circleRefs.current[idx],
      {
        strokeDashoffset: 0,
        duration: 6,
        ease: "none",
        onComplete: () => {
          if (idx + 1 < len) {
            playStep(idx + 1); // Continue to next step
          } else {
            // Last step: show restart
            gsap.to(restartRef.current, { autoAlpha: 1, duration: 0.5 });
          }
        },
      },
      "-=0.5"
    );

    tlRef.current = tl;
  };

  useEffect(() => {
    playStep(0);
  }, []);

  return (
    <section className="w-screen h-screen bg-primary px-[4vw] py-[5%] text-white max-sm:py-[15%] max-sm:px-[7vw] relative max-sm:h-fit overflow-hidden">
      <div className="flex h-full items-start max-sm:flex-col">
        {/* Left: Heading */}
        <div className="w-2/5 flex items-center max-sm:w-[70%]">
          <h2 className="text-[5vw] font-display leading-[1.1] max-sm:text-[11vw] max-sm:font-medium">
            {stepData.heading}
          </h2>
        </div>

        {/* Center: Images */}
        <div className="w-2/5 relative h-[60vw] mt-[-5vw] max-sm:w-[120vw] max-sm:h-[150vw] max-sm:left-[-25%] max-sm:mt-[10vw]">
          {stepData.steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (imageRefs.current[i] = el)}
              className="absolute inset-0 transition-opacity duration-500 max-sm:h-full"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <Image
                src={step.img}
                alt={step.title}
                layout="fill"
                className="max-sm:w-full max-sm:h-full max-sm:object-cover"
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        {/* Right: Text + Circles + Tags */}
        <div className="w-3/5 flex flex-col h-full justify-end items-start gap-[10vw] pl-[5vw] pb-[3vw] max-sm:w-full max-sm:pl-0 max-sm:justify-center max-sm:h-fit">
          {/* Title & Paragraph */}
          <div>
            <h3 ref={titleRef} className="text-[3.4vw] font-display mb-2 max-sm:text-[8.5vw] max-sm:font-medium" />
            <p ref={paraRef} className="w-[70%] max-sm:w-[90%]" />
          </div>

          {/* Steps + Restart */}
          <div className="flex items-center gap-[1vw] max-sm:absolute max-sm:top-[22%] max-sm:z-[10]">
            {stepData.steps.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-[1vw] cursor-pointer max-sm:gap-[3vw]"
                onClick={() => playStep(i)}
              >
                <div className="relative w-[2.5vw] h-[2.5vw] border border-white rounded-full max-sm:w-[10vw] max-sm:h-[10vw]">
                  <span className="absolute inset-0 flex justify-center items-center font-display">
                    {step.number}
                  </span>
                  <svg
                    className="absolute inset-0 -rotate-[90deg]"
                    viewBox="0 0 40 40"
                  >
                    <circle
                      ref={(el) => (circleRefs.current[i] = el)}
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
                <div
                  ref={(el) => (tagRefs.current[i] = el)}
                  className="inline-block overflow-hidden whitespace-nowrap font-display"
                  style={{ width: 0, opacity: 0 }}
                >
                  {step.title}
                </div>
              </div>
            ))}

            {/* Restart Button (Initially Hidden) */}
            <div
              ref={restartRef}
              className="ml-4 font-display cursor-pointer opacity-0"
              onClick={() => playStep(0)}
            >
              restart
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
