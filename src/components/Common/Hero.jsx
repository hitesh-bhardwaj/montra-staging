"use client"
import { initSplitLines } from "@/utils/splitText";
import { AppleStoreButton, PlayStoreButton } from "../Buttons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from 'next/navigation'
import Link from "next/link";



export default function Hero({primaryHeading, heading, content,titleWidth,paraWidth}) {
    const heroRef = useRef(null);
    const pathname = usePathname()
  const pathArray = pathname.split('/').filter(Boolean)

  const createBreadcrumbName = (segment) =>
    segment.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
    useEffect(() => {
        initSplitLines();
        const ctx = gsap.context(() => {
          const heroLines = heroRef.current.querySelectorAll(".single-line");
          gsap.to(heroLines, {
            maskPosition: "0% 100%",
            stagger: 0.2,
            duration: 2,
            // delay:4.2,
            ease: "none",
          });
          gsap.from(".header", {
            yPercent: -70,
            opacity: 0,
            duration: 1,
          });
    
          gsap.from(".heroFadeUp", {
            yPercent: 70,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
          });
        });
        return () => ctx.revert();
      }, []);

  return (
    <section id="hero" ref={heroRef} className="w-screen h-screen  overflow-hidden">
      <div className="h-full flex flex-col items-center justify-center text-center px-[4vw]">
        <div className={` mx-auto space-y-[1.2vw] py-[5vw] max-sm:w-full max-sm:pt-[30vw] max-sm:space-y-[7vw] ${titleWidth?titleWidth:"w-[90%]"} `}>
          <h1
           data-split="lines"
            className="text-[5.7vw] font-display font-medium capitalize leading-[1.15] heroAnim max-sm:text-[11.5vw] max-sm:leading-[1.2]"
          >
            <span className="text-primary">{primaryHeading}</span>
           {heading}
          </h1>
          <p
           data-split="lines"
            className={`font-body mx-auto heroAnim max-sm:w-[95%] ${paraWidth?paraWidth:"w-[75%]"}`}
          >
            {content}
          </p>
          <div className=" flex gap-6 justify-center mt-[4vw] max-sm:flex-col max-sm:items-center max-sm:gap-5">
            <div className="heroFadeUp">
              <AppleStoreButton />
            </div>
            <div className="heroFadeUp">
              <PlayStoreButton />
            </div>
          </div>
        </div>
        <div className="breadcrumbs w-full flex items-start justify-start text-[1.15vw] text-[#D2D2D2] !tracking-normal font-display">
      <div className="flex gap-3  ">
        <Link href="/" className="">Home</Link>
        {pathArray.map((segment, index) => {
          const href = '/' + pathArray.slice(0, index + 1).join('/')
          const isLast = index === pathArray.length - 1
          return (
            <div key={index} className="flex items-center gap-2 ">
              <span>&gt;</span>
              {isLast ? (
                <span className="text-primary">{createBreadcrumbName(segment)}</span>
              ) : (
                <Link href={href} className="">
                  {createBreadcrumbName(segment)}
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </div>
      </div>
      
    </section>
  );
}
