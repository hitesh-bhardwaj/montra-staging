"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Heading from "../Heading";
import Copy from "../Copy";

const Overview = ({ content }) => {
  const block1 = useRef(null);
  const block2 = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const target = { x: 0, y: 0 };
    const current = { x1: 0, y1: 0, x2: 0, y2: 0 };

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2;
      const y = ((e.clientY - top) / height - 0.5) * 2;

      target.x = x;
      target.y = y;
    };

    const lerp = (start, end, alpha) => start + (end - start) * alpha;

    const animate = () => {
      current.x1 = lerp(current.x1, target.x * 10, 0.1);
      current.y1 = lerp(current.y1, target.y * 10, 0.1);
      current.x2 = lerp(current.x2, -target.x * 8, 0.1);
      current.y2 = lerp(current.y2, -target.y * 8, 0.1);

      if (block1.current) {
        block1.current.style.transform = `translate(${current.x1}px, ${current.y1}px)`;
      }
      if (block2.current) {
        block2.current.style.transform = `translate(${current.x2}px, ${current.y2}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      animate();
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <section
        className="w-screen h-full bg-[#fbfbfb] overflow-hidden max-sm:pb-[15%] max-md:pb-[10%]"
        id="overview"
      >
        <div className="w-full h-full flex items-center justify-between px-[4vw] max-sm:flex-col max-sm:px-[7vw] max-md:flex-col">
          <div ref={containerRef} className="w-[40%] relative max-sm:w-full fadeupanim max-md:w-full">
            <Image
              src={content.mainImg}
              alt="overview-phone-image"
              className="object-cover w-auto h-[43vw] z-[2] my-auto relative max-sm:h-[120vw] max-sm:left-[0%] max-md:h-[120vw] max-md:left-[-5%]"
              width={700}
              height={1080}
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-[10%] w-full h-auto max-sm:left-0 max-md:left-0 max-md:top-[15%]">
              <Image
                src={content.bgImg}
                alt="overview-banking-image"
                className="w-full h-[31vw] object-cover max-sm:h-[100vw] max-md:h-[80vw] max-md:object-contain"
                width={400}
                height={800}
              />
            </div>
            <div
              ref={block1}
              className="!w-fit h-fit rounded-xl shadow-md drop-shadow-md p-3 bg-[#F1FFE8] absolute top-[75%] left-[10%] z-[7] flex gap-[1vw] max-sm:p-2 max-sm:gap-[2vw] max-sm:rounded-[3vw] max-sm:top-[70%] max-sm:right-[10%] max-md:px-[3vw] max-md:py-[2vw] max-md:rounded-[3vw] items-center"
            >
              <div className="w-[2vw] h-[2vw] max-sm:w-6 max-sm:h-6 max-md:w-[5vw] max-md:h-[5vw]">
                <Image
                  src={content.icon2}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                  alt="overview-icon"
                />
              </div>
              <div className="capitalize text-xs leading-[1.1] max-sm:text-sm max-w-48">{content.subcontent1}</div>
            </div>
            <div
              ref={block2}
              className="w-fit h-fit rounded-xl shadow-md drop-shadow-md p-3 bg-[#FFEAEE] absolute top-[25%] left-[60%] z-[7] flex gap-[1vw] max-sm:p-2 max-sm:gap-[2vw] max-sm:rounded-[3vw] items-center max-sm:left-[35%] max-sm:top-[20%] max-md:px-[3vw] max-md:py-[2vw] max-md:rounded-[3vw]"
            >
              <div className="w-[2vw] h-[2vw] max-sm:w-6 max-sm:h-6 max-md:w-[5vw] max-md:h-[5vw]">
                <Image 
                  src={content.icon1}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                  alt="overview-icon"
                />
              </div>
              <div className="capitalize text-xs leading-[1.1] max-sm:text-sm max-w-48">{content.subcontent2}</div>
            </div>
          </div>
          <div className="w-[45%] h-[60vw] justify-center flex flex-col  space-y-[3vw] max-sm:w-full max-sm:h-full max-sm:gap-[10vw] max-sm:items-start max-md:w-full max-md:h-full max-md:space-y-[7vw]">
            <div className="w-full flex flex-col gap-[2vw] pr-[3vw] max-sm:gap-[7vw] max-md:gap-[4vw]">
              <Heading>
                <h2 className="text-[3.2vw] leading-[1.2] font-display font-medium capitalize max-sm:text-[7.5vw] max-sm:leading-[1.4] max-md:text-[5.5vw]">
                  {content.title}
                </h2>
              </Heading>
              {content.content.map((item, index) => (
                <Copy  key={index}>
                  <p
                   
                    className="text-[1.2vw] w-[90%] max-sm:text-[4.1vw] max-sm:w-full max-md:text-[2.5vw]"
                  >
                    {item}
                  </p>
                </Copy>
              ))}
            </div>
            {content.cards?.length > 0 && (
              <div className="flex items-start gap-[1vw] max-sm:flex-wrap max-sm:justify-between max-sm:gap-y-[6vw] max-sm:gap-0  max-sm:w-full fadeupanim max-md:gap-[2vw]">
                {content.cards.map((item, index) => (
                  <div
                    key={index}
                    className={`h-[9vw] w-[9vw] p-[1vw] px-[1.5vw] rounded-[1.5vw] flex flex-col gap-[0.5vw] items-center justify-center max-sm:w-[27vw] max-sm:h-[27vw] max-sm:rounded-[6vw] max-sm:gap-[2vw] max-md:w-[25vw] max-md:h-[25vw] max-md:gap-[2vw] max-md:rounded-[4vw] ${item.color}`}
                  >
                    <Image
                      src={item.icon}
                      height={90}
                      width={90}
                      alt={item.text}
                      className="h-[5vw] w-[5vw] max-sm:w-[10vw] max-sm:h-[10vw] max-md:w-[8vw] max-md:h-[8vw]"
                    />
                    <p className="text-white font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
