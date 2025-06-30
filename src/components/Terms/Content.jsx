"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const contentBlocks = [
  {
    id: "first-block",
    title: "Use of the Montra Platform /Montra Services",
    type: "paragraph",
    tag:"Use of the Montra....",
    content: (
      <>
        Please read the following terms and conditions carefully before
        registering on, accessing, browsing, downloading or using the
        Montra website located at{" "}
        <Link href="montra.org" className="text-primary underline">
          Montra.org
        </Link>
        , and all associated sites linked to{" "}
        <Link href="montra.org" className="text-primary underline">
          Montra.org
        </Link>
        , or the Montra mobile application or any similar platform
        (hereinafter collectively referred to as the Montra Platform)
        run by Montra Technology Solutions Limited (formerly Artha
        Fintech Limited), having its registered office at Plot 20 The
        Quad, Layi Yusuf Crescent, Off Admiralty Way, Lagos, Nigeria
        (hereinafter referred to as “MONTRA”) on any device and/or
        before availing any services offered by Montra on the Montra
        Platform which may include services such as funds transfer, cash
        transactions, recharge or bill payment, digital products,
        semi-closed wallet service, and marketplace service or any other
        service that may be offered by Montra on the Montra Platform
        (hereinafter individually, and collectively, referred to as
        Montra Services). For the avoidance of doubt, it is clarified
        that these terms and conditions shall apply to all Montra
        Services, whether offered by MONTRA or its affiliates.
      </>
    ),
  },
  {
    id: "second-block",
    title: "Acceptance",
    type: "list",
    tag:"Acceptance",
    content: [
      "By registering on, accessing, browsing, downloading or using the Montra Platform for any general purpose or for the specific purpose of availing any Montra Service, you agree to be bound by the Single-Sign-On ID (SSOID) terms and conditions as well as by the service-specific terms and conditions applicable to each Montra Service (collectively, the T&Cs).",
      "These T&Cs also include any additional or modified service-specific terms for any future services offered by Montra.",
      "If you disagree with the T&Cs at any time, you must stop using the platform and Montra Services immediately.",
      "By accepting the T&Cs, you form a legal contract with Montra, affirming you're 18+ and legally capable, or a registered corporate entity.",
      "All services rendered under the brand 'Montra' accrue their benefits and liabilities to Montra accordingly.",
      "Use of Montra Services is conditional on your compliance with the T&Cs. If accepted, you receive a limited, revocable license to use the platform."
    ],
  },
  {
    id: "third-block",
    title: "Eligibility",
    tag:"Eligibility",
    type: "list",
    content: [
      "By registering on, accessing, browsing, downloading or using the Montra Platform for any general purpose or for the specific purpose of availing any Montra Service, you agree to be bound by the Single-Sign-On ID (SSOID) terms and conditions as well as by the service-specific terms and conditions applicable to each Montra Service (collectively, the T&Cs).",
      "These T&Cs also include any additional or modified service-specific terms for any future services offered by Montra.",
      "If you disagree with the T&Cs at any time, you must stop using the platform and Montra Services immediately.",
      "By accepting the T&Cs, you form a legal contract with Montra, affirming you're 18+ and legally capable, or a registered corporate entity.",
      "All services rendered under the brand 'Montra' accrue their benefits and liabilities to Montra accordingly.",
      "Use of Montra Services is conditional on your compliance with the T&Cs. If accepted, you receive a limited, revocable license to use the platform."
    ],
  },
];


const Content = () => {
  const sectionRefs = useRef([]);
  const lineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);

const handleClick = (index) => {
  isScrolling.current = true;

  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: sectionRefs.current[index],
      offsetY: 80,
    },
    ease: "power2.inOut",
    onComplete: () => {
      isScrolling.current = false;
      setActiveIndex(index);     // ensures text-primary works on click
      animateLine(index);        // keep progress line in sync
    },
  });
};

  const animateLine = (index) => {
    const percent = (index / (contentBlocks.length - 1)) * 100;
    gsap.to(lineRef.current, {
      height: `${percent}%`,
      duration: 0.5,
      ease: "power1.out",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const scrollY = window.scrollY;
      const offsets = sectionRefs.current.map((ref) =>
        ref ? ref.offsetTop - 150 : 0
      );

      const current = offsets.findIndex((offset, i) => {
        const nextOffset = offsets[i + 1] || Infinity;
        return scrollY >= offset && scrollY < nextOffset;
      });

      if (current !== -1 && current !== activeIndex) {
        setActiveIndex(current);
        animateLine(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <section className="w-screen h-fit py-[10%] pt-[15%] bg-[#FBFBFB] px-[4vw]" id="content">
      <div className="w-full flex justify-between">
        {/* Navigation */}
        <div className="w-[20%] sticky top-[20%] h-fit">
          <div className="flex">
            {/* Circles and Progress Line */}
            <div className="flex gap-3 w-[3vw] h-fit relative z-[5]">
              <div className="w-[1vw] flex flex-col gap-[2vw] items-center relative">
                <div className="w-[1.5px] h-full bg-black/20 absolute top-0 left-1/2 -translate-x-1/2">
                  <div
                    ref={lineRef}
                    className="w-full bg-primary absolute top-0 left-0"
                    style={{ height: "0%" }}
                  />
                </div>
                {contentBlocks.map((_, i) => (
                  <div
                    key={i}
                    className={`w-[0.8vw] h-[0.8vw] rounded-full border relative z-[2] transition-all duration-300 ${
                      i <= activeIndex ? "bg-primary border-primary" : "bg-white border-black/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-col w-[70%] text-[1vw] gap-[1.5vw] -mt-[0.5vw] font-display">
              {contentBlocks.map((item, index) => (
                <span
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer transition-colors duration-500 ${
                    index === activeIndex ? "text-primary font-medium" : "text-[#D2D2D2]"
                  }`}
                >
                  {item.tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-[80%]">
          <div className="flex flex-col gap-[4vw]">
            {contentBlocks.map((block, index) => (
              <div
                key={block.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="space-y-[2vw] w-[85%]"
                id={block.id}
              >
                <h2 className="text-[3.4vw] font-display font-medium leading-[1.2] w-[70%]">
                  {block.title}
                </h2>
                {block.type === "paragraph" ? (
                  <p>{block.content}</p>
                ) : (
                  <ul className="pl-[2vw] space-y-[1vw] list-disc">
                    {block.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
