"use client";
import Link from "next/link";
import montraLogo from "../../../public/montra-logo.png";
import Image from "next/image";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useTransitionRouter } from "next-view-transitions";

export default function Header() {
  const router = useTransitionRouter();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [openMenu, setopenMenu] = useState(false);

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

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "scale(1)",
          borderRadius: "0"
        },
        {
          opacity: 0.2,
          transform: "scale(0.95)",
          borderRadius: "20px",
        },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const getExactPath = () => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return currentPath;
  };

  const isExactPath = (path) => {
    const exactCurrentPath = getExactPath();
    return exactCurrentPath === path;
  };

  const navigateTo = (path) => {
    if (isAnimating) return;

    if (isExactPath(path)) {
      return;
    }

    router.push(path, {
      onTransitionReady: slideInOut,
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transform transition-transform duration-300 w-screen   ${hidden ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <div id="header-container" className="px-[4vw] py-[1vw] header w-full max-sm:pt-[5vw] max-sm:px-[7vw] max-md:pt-[5vw]">
        <div className="flex justify-between items-center w-full ">
          <a onClick={(e) => {
            e.preventDefault();
            navigateTo("/");
          }} className="block relative z-[150]">
            <Image
              src={montraLogo}
              alt="montra logo"
              className={`w-[10vw] max-sm:w-[30vw] logo max-md:w-[20vw]`}
            />
          </a>
          <Navbar navigateTo={navigateTo} />
          <div
            className="hidden  max-sm:flex max-sm:flex-col gap-[1.5vw] w-[8vw] relative z-[150] max-md:flex max-md:flex-col max-md:w-[6.5vw] max-md:gap-[1vw]"
            onClick={() => {
              setopenMenu((prev) => !prev);
            }}
          >
            <div className="w-full h-[2.5px] bg-primary rounded-full line-1" />
            <div className="w-full h-[2.5px] bg-primary rounded-full line-2" />
            <div className="w-full h-[2.5px] bg-primary rounded-full line-3" />
          </div>
          <div
            className={`w-screen h-screen fixed top-0 left-0  bg-black/20 transition-all duration-300 ${openMenu
              ? "opacity-100 backdrop-blur-sm"
              : " opacity-0 pointer-events-none"
              }`}
          >
            <div
              className={` w-[70vw] h-[110vw] py-[10%] overflow-hidden rounded-[7vw] bg-primary text-white flex flex-col gap-[3vw] px-[7vw] font-display font-medium text-[5.5vw] absolute top-[8%] z-[160] right-[10%] transition-all duration-300 origin-top-right max-md:w-[60vw] max-md:h-[80vw] max-md:text-[4vw] ${openMenu ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
            >
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
          </div>
        </div>
      </div>
    </header>
  );
}
