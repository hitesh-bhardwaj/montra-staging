"use client";
import Copy from "@/components/Copy";
import { fadeUpAnim, lineAnim } from "@/components/gsapAnimations";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import blog3 from "../../../../public/assets/images/homepage/blog-3.png";


const Hero = () => {
  fadeUpAnim();
  lineAnim();
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter(Boolean);
  const createBreadcrumbName = (segment) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  return (
    <section className="w-screen h-fit " id="hero">
      <div className="px-[5vw]  w-full h-full flex flex-col max-md:pt-[22%] pt-[15%] gap-[3vw] max-sm:pt-[30%]">
        <Copy>
        <h1 className="text-[4.5rem] font-display font-medium w-[80%] capitalize leading-[1.15] heroAnim max-sm:text-[11.5vw] max-sm:leading-[1.2] max-sm:w-full max-md:text-[8vw] max-md:w-[80%] ">
        A Guide to Complex International Pension Transfers 
        </h1>
        </Copy>
        <div className="breadcrumbs w-full flex items-start justify-start text-content-20 text-gray-4 max-sm:mt-[8vw] ">
          <div className="flex gap-3  ">
            <a
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
              }}
              href="/"
              className=" text-[#636363]"
            >
              Home
            </a>
            {pathArray.map((segment, index) => {
              const href = "/" + pathArray.slice(0, index + 1).join("/");
              const isLast = index === pathArray.length - 1;
              return (
                <div key={index} className="flex items-center gap-2 ">
                  <span>
                   /
                  </span>
                  {isLast ? (
                    <span className="text-gray-1">
                      {createBreadcrumbName(segment)}
                    </span>
                  ) : (
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(href);
                      }}
                      href={href}
                      className=" text-[#636363]"
                    >
                      {createBreadcrumbName(segment)}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex justify-center">
        <div className="w-full h-[80vh] rounded-[0.8vw] mt-[3vw] overflow-hidden relative z-[10] max-sm:mt-[30vw] max-sm:h-[55vh] max-sm:w-[94%] max-sm:rounded-[2.5vw] max-md:rounded-[3vw] fadeupanim">
          <Image src={blog3} alt="blog-detail-hero" width={1920} height={1080} className="w-full h-full object-cover"/>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
