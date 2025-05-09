"use client";
import Link from "next/link";
import montraLogo from "../../../public/montra-logo.png";
import Image from "next/image";
import Navbar from "./Navbar";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// import {useLenis} from 

export default function Header() {
  const tlRef = useRef();

  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isInverted, setIsInverted] = useState(false);

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

      // const darkSections = document.querySelectorAll(".dark");
      // let found = false;
      // darkSections.forEach((section) => {
      //   const rect = section.getBoundingClientRect();
      //   if (rect.top <= 0 && rect.bottom > 0) {
      //     found = true;
      //   }
      // });
      // setIsInverted(found);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);


//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ paused: true });
//       tl.to(".line-1", {
//         yPercent: 340,
//         duration: 0.2,
//         ease: "none",
//       })
//         .to(".line-3", {
//           yPercent: -340,
//           delay: -0.2,
//           duration: 0.2,
//           ease: "none",
//         })
//         .to(".line-2", {
//           opacity: 0,
//           duration: 0.5,
//           delay: -0.2,
//         })
//         .to(".line-1", {
//           rotateZ: 45,
//           delay: -0.3,
//           duration: 0.2,
//           ease: "none",
//         })
//         .to(".line-3", {
//           rotateZ: -45,
//           delay: -0.3,
//           duration: 0.2,
//           ease: "none",
//         });
//       tlRef.current = tl;
//     });

//     return () => ctx.revert();
//   }, []);

//   useEffect(() => {
//     if (tlRef.current) {
//       if (openMenu) {
//         tlRef.current.play();
//       } else {
//         tlRef.current.reverse();
//       }
//     }
//   }, [openMenu]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transform transition-transform duration-300 w-screen   ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div id="header-container" className="px-[4vw] py-[1vw] header w-full max-sm:pt-[5vw] max-sm:px-[7vw]">
        <div className="flex justify-between items-center w-full ">
          <Link href="/" className="block relative z-[150]">
            <Image
              src={montraLogo}
              alt="montra logo"
              className={`w-[10vw] max-sm:w-[30vw] logo`}
            />
          </Link>
          <Navbar />
          <div
            className="hidden  max-sm:flex max-sm:flex-col gap-[1.5vw] w-[8vw] relative z-[150]"
            onClick={() => {
              setopenMenu((prev) => !prev);
            }}
          >
            <div className="w-full h-[2.5px] bg-primary rounded-full line-1" />
            <div className="w-full h-[2.5px] bg-primary rounded-full line-2" />
            <div className="w-full h-[2.5px] bg-primary rounded-full line-3" />
          </div>
          <div
            className={`w-screen h-screen fixed top-0 left-0  bg-black/20 transition-all duration-300 ${
              openMenu
                ? "opacity-100 backdrop-blur-sm"
                : " opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={` w-[70vw] h-[110vw] py-[10%] overflow-hidden rounded-[7vw] bg-primary text-white flex flex-col gap-[3vw] px-[7vw] font-display font-medium text-[5.5vw] absolute top-[8%] z-[160] right-[10%] transition-all duration-300 origin-top-right ${
                openMenu ? "scale-100 opacity-100" : "scale-0 opacity-0"
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
                href={"/Business"}
                className="link-text"
                onClick={() => {
                  setopenMenu(false);
                }}
              >
                Business
              </Link>
              <span className="bg-white h-[1px] w-full"></span>
              <Link
                href={"/"}
                className="link-text"
                onClick={() => {
                  setopenMenu(false);
                }}
              >
                Platform
              </Link>
              <span className="bg-white h-[1px] w-full"></span>
              <Link
                href={"/"}
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
