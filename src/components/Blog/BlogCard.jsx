"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "../Buttons/icons";
import { useAnimatedNavigation } from "../NavigationContext";

export default function BlogCard({
  title,
  date,
  href = "/blog/blog-detail",
  image,
  imageAlt = "article image",
  active = false,
  onMouseEnter,
  className = "",
}) {
  const { navigateTo } = useAnimatedNavigation();

  return (
    <div
      className={`fadeupanim rounded-[1.5vw] group/card overflow-hidden border border-gray   max-sm:flex-col max-sm:w-full max-sm:rounded-[5.5vw] max-md:flex-col w-full col-span-1 flex flex-col justify-between max-md:w-[44vw] ${className}`}
    >
      <div
        className={`overflow-hidden w-full h-[20vw] max-sm:w-full max-sm:h-[55vw] max-md:h-[30vw]`}
      >
        <Image
          src={image}
          alt={imageAlt}
          placeholder="blur"
          className="w-full h-full object-cover scale-105 group-hover/card:scale-100 duration-300"
        />
      </div>
      <div
        className={`flex flex-col items-start justify-between px-[1.5vw] py-[1.5vw] max-sm:w-full max-sm:py-[4vw] max-sm:px-[4vw] max-md:px-[3vw] max-md:py-[3vw]`}
      >
        <div>
          <h4
            className={`mb-[1vw] text-[1.5vw] max-sm:text-[4.5vw] max-sm:mb-[3vw] max-md:text-[3.2vw] text-balance `}
          >
            {title}
          </h4>
          <span
            className={`block max-sm:text-[3.4vw] max-md:text-[2.2vw] text-[1vw] mb-[2vw] font-display group w-fit hover:text-primary duration-300`}
          >
            {date}
          </span>
        </div>
        <Link
          className="group w-fit block duration-100 hover:text-primary"
          href={href}
          onClick={(e) => {
        e.preventDefault();
        navigateTo(href);
      }}
        >
          <div className="flex items-center justify-start gap-2">
              <span className="link-line">Read More</span>
            <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300 w-[1vw] h-[1vw] max-sm:w-[4vw] max-sm:h-[4vw] max-md:w-[2.5vw] max-md:h-[2.5vw]" />
          </div>
        </Link>
      </div>
    </div>
  );
}
