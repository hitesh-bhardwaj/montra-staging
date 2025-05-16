"use client";
import Link from "next/link";
import montraLogo from "../../../public/montra-logo.png";
import Image from "next/image";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useAnimatedNavigation } from "../NavigationContext";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const { navigateTo } = useAnimatedNavigation();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isInverted, setIsInverted] = useState(false);
  const [openMenu, setopenMenu] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (openMenu) {
      lenis && lenis.stop();
    } else {
      lenis && lenis.start();
    }
  }, [openMenu, lenis]);
  useEffect(() => {
    const triggers = [];

    document.querySelectorAll(".dark").forEach((section) => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top", // Equivalent to threshold: 0.7
        end: "bottom top",
        onEnter: () => setIsInverted(true),
        onEnterBack: () => setIsInverted(true),
        onLeave: () => setIsInverted(false),
        onLeaveBack: () => setIsInverted(false),
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 100) {
        setHidden(true);
      } else if (currentY < lastY) {
        setHidden(false);
      }

      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transform transition-transform duration-300 w-screen   ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        id="header-container"
        className="px-[4vw] py-[1vw] header w-full max-sm:pt-[5vw] max-sm:px-[7vw] max-md:pt-[5vw]"
      >
        <div className="flex justify-between items-center w-full ">
          <a
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/");
            }}
            className="block relative z-[150]"
          >
            <Image
              src={montraLogo}
              alt="montra logo"
              className={`w-[10vw] max-sm:w-[30vw] logo max-md:w-[20vw] ${
                isInverted ? " brightness-[16]" : ""
              }`}
            />
          </a>
          <Navbar navigateTo={navigateTo} />
          <div
            className="hidden max-sm:flex max-sm:flex-col gap-[1.5vw] w-[8vw] relative z-[150] max-md:flex max-md:flex-col max-md:w-[4.5vw] max-md:gap-[1vw] max-sm:w-[7vw]"
            onClick={() => {
              setopenMenu((prev) => !prev);
            }}
          >
            <div
              className={`w-full h-[2.5px]  rounded-full line-1 transition-all duration-500 origin-center ${
                isInverted ? "bg-white" : "bg-primary"
              } ${
                openMenu
                  ? "rotate-45 max-sm:translate-y-[7px] max-md:translate-y-[10px]"
                  : ""
              }`}
            />
            <div
              className={`w-full h-[2.5px] bg-primary rounded-full line-2 transition-all duration-500 ${
                isInverted ? "bg-white" : "bg-primary"
              } ${openMenu ? "opacity-0" : ""}`}
            />
            <div
              className={`w-full h-[2.5px] bg-primary rounded-full line-3 transition-all duration-500 origin-center ${
                isInverted ? "bg-white" : "bg-primary"
              } ${
                openMenu
                  ? "-rotate-45 max-sm:-translate-y-[7px] max-md:-translate-y-[10px]"
                  : ""
              }`}
            />
          </div>

          <div
            className={`w-screen h-screen fixed top-0 left-0  bg-black/20 transition-all duration-500 ${
              openMenu
                ? "opacity-100 backdrop-blur-sm"
                : " opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={` w-[70vw] max-sm:h-fit overflow-hidden rounded-[7vw] bg-primary text-white flex flex-col gap-[3vw] px-[7vw] font-display font-medium text-[5.5vw] absolute top-[8%] z-[160] right-[10%]  max-sm:space-y-[5vw] max-sm:py-[8vw] max-md:py-[8vw] transition-all duration-500 origin-top-right max-md:w-[60vw] max-md:h-fit max-md:text-[4vw] max-md:space-y-[7vw] ${
                openMenu ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-[3vw] items-start">
                <Link
                  href={"/"}
                  className="link-text"
                  onClick={() => {
                    setopenMenu(false);
                  }}
                >
                  Home
                </Link>
                <span className="bg-white h-[1px] w-full"></span>
                <Link
                  href={"/personal"}
                  className="link-text"
                  onClick={() => {
                    setopenMenu(false);
                  }}
                >
                  Personal
                </Link>
                <span className="bg-white h-[1px] w-full"></span>
                <Link
                  href={"/business"}
                  className="link-text"
                  onClick={() => {
                    setopenMenu(false);
                  }}
                >
                  Business
                </Link>
                <span className="bg-white h-[1px] w-full"></span>
                <Link
                  href={"#"}
                  className="link-text"
                  onClick={() => {
                    setopenMenu(false);
                  }}
                >
                  Platform
                </Link>
                <span className="bg-white h-[1px] w-full"></span>
                <Link
                  href={"/company"}
                  className="link-text"
                  onClick={() => {
                    setopenMenu(false);
                  }}
                >
                  Company
                </Link>
                <span className="bg-white h-[1px] w-full"></span>
              </div>
              <div className="flex items-start justify-start gap-[3vw]">
                <Link
                  href={"/"}
                  className="h-fit w-fit rounded-full border border-white "
                  onClick={() => {
                    setopenMenu(false);
                  }}
                >
                  <Image
                    src={"/assets/icons/facebook-icon.svg"}
                    height={100}
                    width={100}
                    className="h-[8vw] w-[8vw]"
                    alt="facebook_icon"
                  />
                </Link>
                <Link
                  href={"/"}
                  className="h-fit w-fit rounded-full border border-white "
                  onClick={() => {
                    setopenMenu(false);
                  }}
                >
                  <Image
                    src={"/assets/icons/insta-icon.svg"}
                    height={100}
                    width={100}
                    className="h-[8vw] w-[8vw]"
                    alt="instagram_icon"
                  />
                </Link>
                <Link
                  href={"/"}
                  className="h-fit w-fit rounded-full border border-white "
                  onClick={() => {
                    setopenMenu(false);
                  }}
                >
                  <Image
                    src={"/assets/icons/linkedin-icon.svg"}
                    height={100}
                    width={100}
                    className="h-[8vw] w-[8vw]"
                    alt="linkedin_icon"
                  />
                </Link>
                <Link
                  href={"/"}
                  className="h-fit w-fit rounded-full border border-white "
                  onClick={() => {
                    setopenMenu(false);
                  }}
                >
                  <Image
                    src={"/assets/icons/x-icon.svg"}
                    height={100}
                    width={100}
                    className="h-[8vw] w-[8vw]"
                    alt="x_icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
