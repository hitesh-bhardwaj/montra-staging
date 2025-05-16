"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: (
      <svg
        className="w-5 h-5"
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.47371 18.8195C5.17242 18.7062 5.75199 19.1115 5.8807 19.7991C6.03735 22.2299 5.69388 24.8762 5.88437 27.2805C6.02412 29.0464 7.4664 30.424 9.22275 30.5468C13.9277 30.877 19.0143 30.2908 23.7589 30.5468C25.3983 30.4174 26.8406 29.0655 27.0127 27.4166C27.2679 24.9689 26.8134 22.1637 27.0546 19.6793C27.454 18.3899 29.2508 18.5451 29.3736 19.9374C29.2294 22.4263 29.5553 25.1101 29.3736 27.5754C29.1728 30.3011 26.8148 32.6223 24.1141 32.8834C19.1658 32.6341 13.835 33.2482 8.93002 32.8959C6.17489 32.6981 3.74043 30.3482 3.53597 27.5754C3.35283 25.088 3.67865 22.3785 3.53891 19.8668C3.57642 19.3726 3.98829 18.8996 4.47371 18.8209V18.8195Z"
          fill="white"
        />
        <path
          d="M16.142 0.0322069C16.5119 -0.0442837 16.9091 0.00793585 17.1908 0.270504L32.6382 15.7179C33.5068 16.83 32.0947 18.2414 30.9833 17.3728L16.4825 2.88222L1.88823 17.4073C0.776915 18.2245 -0.59109 16.7844 0.272371 15.7179L15.683 0.306543C15.8029 0.194749 15.9816 0.0653038 16.142 0.0322069Z"
          fill="white"
        />
      </svg>
    ),
  },
  { name: "Personal", href: "/personal", svg: "/assets/icons/arrow-down.svg" },
  { name: "Business", href: "/business", svg: "/assets/icons/arrow-down.svg" },
  {
    name: "Platform",
    href: "#",
    svg: "/assets/icons/diagonal-arrow.svg",
    svgWidth: "w-[0.7vw]",
  },
  { name: "Company", href: "/company" },
];

export default function Navbar({ navigateTo }) {
  const pathname = usePathname();
  const navRef = useRef(null);
  const [highlight, setHighlight] = useState({ left: 0, width: 0 });

  const movePill = (el) => {
    if (!el || !navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setHighlight({
      left: rect.left - navRect.left,
      width: rect.width,
    });
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      const active = navRef.current.querySelector('a[data-active="true"]');
      movePill(active);
    });
  }, [pathname]);

  return (
    <nav className="bg-black rounded-full h-[4.1vw] max-sm:hidden max-md:hidden relative z-[52]">
      <div
        ref={navRef}
        className="relative w-full inline-flex h-full items-center overflow-hidden z-[54] bg-black rounded-full  px-[0.2vw]"
        onMouseLeave={() => {
          const active = navRef.current.querySelector('a[data-active="true"]');
          movePill(active);
        }}
      >
        <span
          className="absolute bg-primary rounded-full h-[85%] w-[90%] transition-all duration-300"
          style={{
            transform: `translateX(${highlight.left}px)`,
            width: highlight.width - 5,
          }}
        ></span>

        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <a
              onClick={(e) => {
                e.preventDefault();
                navigateTo(link.href);
              }}
              key={link.href}
              href={link.href}
              data-active={isActive ? "true" : undefined}
              aria-label={link.name}
              className="relative z-10 flex text-[1.05vw] min-w-[8vw] h-full items-center px-5 justify-center text-white whitespace-nowrap font-display gap-[0.5vw]"
              onMouseEnter={(e) => movePill(e.currentTarget)}
            >
              {link.icon || link.name}

              <span>
                {link.svg ? (
                  <Image
                    src={link.svg}
                    alt="svg"
                    className={` h-[1.2vw] ${
                      link.svgWidth ? link.svgWidth : "w-[1.2vw]"
                    }`}
                    width={50}
                    height={50}
                  />
                ) : (
                  <></>
                )}
              </span>
            </a>
          );
        })}
      </div>
      <div className="w-full h-[0vw] absolute top-0 left-0 rounded-[2vw] bg-primary z-[51] flex justify-end overflow-hidden pt-[4.2vw]">
        <div className="w-[78%] flex gap-[1vw] h-full font-display text-white">
          <div className="w-[60%] h-full py-[2vw] flex flex-col justify-between">
            <div className="flex flex-col gap-[0.7vw] text-[1.1vw]">
              <div className="w-full flex gap-[0.5vw] items-center ">
                <Link href={"/"} className="link-line">
                  Banking
                </Link>
                <span>
                  <Image
                    src={"/assets/icons/diagonal-arrow.svg"}
                    alt=""
                    width={40}
                    height={40}
                    className="w-[0.7vw] h-[0.7vw]"
                  />
                </span>
              </div>
              <div className="w-full flex gap-[0.5vw] items-center">
                <Link href={"/"} className="link-line">
                  Payments
                </Link>
                <span>
                  <Image
                    src={"/assets/icons/diagonal-arrow.svg"}
                    alt=""
                    width={40}
                    height={40}
                    className="w-[0.7vw] h-[0.7vw]"
                  />
                </span>
              </div>
              <div className="w-full flex gap-[0.5vw] items-center">
                <Link href={"/"} className="link-line">
                  Agency Banking
                </Link>
                <span>
                  <Image
                    src={"/assets/icons/diagonal-arrow.svg"}
                    alt=""
                    width={40}
                    height={40}
                    className="w-[0.7vw] h-[0.7vw]"
                  />
                </span>
              </div>
              <div className="w-full flex gap-[0.5vw] items-center">
                <Link href={"/"} className="link-line">
                  Inventory Management
                </Link>
                <span>
                  <Image
                    src={"/assets/icons/diagonal-arrow.svg"}
                    alt=""
                    width={40}
                    height={40}
                    className="w-[0.7vw] h-[0.7vw]"
                  />
                </span>
              </div>
              <div className="w-full flex gap-[0.5vw] items-center">
                <Link href={"/"} className="link-line">
                  Montra Store
                </Link>
                <span>
                  <Image
                    src={"/assets/icons/diagonal-arrow.svg"}
                    alt=""
                    width={40}
                    height={40}
                    className="w-[0.7vw] h-[0.7vw]"
                  />
                </span>
              </div>
              <div className="w-full flex gap-[0.5vw] items-center">
                <Link href={"/"} className="link-line">
                Payment Gateway
                </Link>
                <span>
                  <Image
                    src={"/assets/icons/diagonal-arrow.svg"}
                    alt=""
                    width={40}
                    height={40}
                    className="w-[0.7vw] h-[0.7vw]"
                  />
                </span>
              </div>
              <div className="w-full flex gap-[0.5vw] items-center">
                <Link href={"/"} className="link-line">
                Tap & Pay
                </Link>
                <span>
                  <Image
                    src={"/assets/icons/diagonal-arrow.svg"}
                    alt=""
                    width={40}
                    height={40}
                    className="w-[0.7vw] h-[0.7vw]"
                  />
                </span>
              </div>
            </div>
            <div className="w-full flex gap-[0.5vw]">
            <div className="w-full flex gap-[1vw] items-center text-[1.1vw] ">
                <Link href={"/"} className="link-line">
                  Privacy Policy
                </Link>
                <span>
                  <Image
                    src={"/assets/icons/circle.svg"}
                    alt=""
                    width={40}
                    height={40}
                    className="w-[0.4vw] h-[0.4vw]"
                  />
                </span>
                <Link href={"/"} className="link-line">
                  Cookie Policy
                </Link>
              </div>

            </div>
          </div>
          <div className="w-[55%] bg-red-500 h-full flex flex-col py-[2vw] justify-between">
            <div className="w-[90%] h-[70%] rounded-[2vw] overflow-hidden">
              <Image src={"/assets/images/header/business-nav.png"} alt="" width={300} height={400} className="w-full h-full object-cover"/>
            </div>
            <div className="w-full flex gap-[0.8vw]">
            <div>

            </div>

            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
