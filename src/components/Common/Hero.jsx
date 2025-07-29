"use client";
import { initSplitLines } from "@/utils/splitText";
import { AppleStoreButton, PlayStoreButton } from "../Buttons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import Copy from "../Copy";
import Heading from "../Heading";
import { useAnimatedNavigation } from "../NavigationContext";
import { fadeUpAnim } from "../gsapAnimations";
import { BreadcrumbsJSONLD } from "@/lib/json-ld";

export default function Hero({
  primaryHeading,
  heading,
  content,
  titleWidth,
  paraWidth,
}) {
  fadeUpAnim();
  const heroRef = useRef(null);
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter(Boolean);
  const { navigateTo } = useAnimatedNavigation();

  const createBreadcrumbName = (segment) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  useEffect(() => {
    initSplitLines();
    const ctx = gsap.context(() => {

      gsap.from(".header", {
        yPercent: -70,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".heroFadeUp", {
        yPercent: 70,
        opacity: 0,
        delay: 1,
        duration: 1,
        // stagger: 0.15,
      });
      gsap.from(".breadcrumbs",{
        yPercent:70,
        opacity:0,
        delay:1,
        duration:1
      })
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
    <section
      id="hero"
      ref={heroRef}
      className="w-screen h-screen  overflow-hidden relative"
    >
      <div className="h-full flex flex-col items-center justify-center text-center px-[4vw]">
        <div
          className={` mx-auto space-y-[1.5vw] py-[5vw] max-sm:w-full  max-sm:space-y-[7vw] max-md:space-y-[5vw] max-md:w-[90%] ${titleWidth ? titleWidth : "w-[90%]"
            } `}
        >
          <Heading delay={0.8}>

            <h1

              className="text-[5.7vw] font-display font-medium capitalize leading-[1.15] max-sm:text-[11vw] max-sm:leading-[1.2] max-md:text-[8vw] max-md:leading-[1.2]"
            >
              <span className="text-primary">{primaryHeading}</span>
              {heading}
            </h1>

          </Heading>
          <Copy delay={1}>
            <p
              className={`font-body mx-auto heroAnim max-sm:w-[95%] max-md:w-[90%] ${paraWidth ? paraWidth : "w-[75%]"
                }`}
            >
              {content}
            </p>
          </Copy>
          <div className=" flex gap-6 justify-center mt-[4vw] max-sm:flex-col max-sm:items-center max-sm:gap-5 max-md:mt-[7vw]">
            <div className="heroFadeUp">
              <AppleStoreButton />
            </div>
            <div className="heroFadeUp">
              <PlayStoreButton />
            </div>
          </div>
        </div>
        <div className="breadcrumbs w-full flex items-start justify-start text-[1.15vw] text-[#D2D2D2] !tracking-normal font-display max-sm:text-[4vw] absolute left-[5%] bottom-[8%] max-sm:bottom-[5%] max-md:text-[3vw] ">
          <div className="flex gap-3  ">
            <a onClick={(e) => {
              e.preventDefault();
              navigateTo('/')
            }} href="/" className="">
              Home
            </a>
            {pathArray.map((segment, index) => {
              const href = "/" + pathArray.slice(0, index + 1).join("/");
              const isLast = index === pathArray.length - 1;
              return (
                <div key={index} className="flex items-center gap-2 ">
                  <span>&gt;</span>
                  {isLast ? (
                    <span className="text-primary ">
                      {createBreadcrumbName(segment)}
                    </span>
                  ) : (
                    <a onClick={(e) => {
                      e.preventDefault();
                      navigateTo(href)
                    }} href={href} className="">
                      {createBreadcrumbName(segment)}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
