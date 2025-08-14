"use client";
import montraLogo from "../../../public/montra-logo.png";
import Image from "next/image";
import Navbar from "./Navbar";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useAnimatedNavigation } from "../NavigationContext";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const { navigateTo } = useAnimatedNavigation();
  const [hidden, setHidden] = useState(false);
  const [isInverted, setIsInverted] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis, pathname]);

  useEffect(() => {
    const triggers = [];

    document.querySelectorAll(".dark").forEach((section) => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
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
      if (openMenu) return;
      const currentY = window.pageYOffset;
      const scrollDelta = currentY - prevScrollY.current;
      if (scrollDelta > 0) {
        setHidden(true);
      } else if (scrollDelta < -10 && currentY > 10) {
        setHidden(false);
      }
      prevScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [openMenu]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transform transition-transform duration-300 w-screen ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        id="header-container"
        className="px-[4vw] pt-[1%] header w-full max-sm:pt-[5vw] max-sm:px-[7vw] max-md:pt-[5vw]"
      >
        <div className="flex justify-between items-center w-full">
          <button
            aria-label="Go to homepage"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/");
            }}
            className="block relative z-[150]"
          >
            <Image
              src={montraLogo}
              alt="montra logo"
              className={`w-[10vw] max-sm:w-[30vw] logo max-md:w-[20vw] montra-logo ${
                openMobileMenu ? "!brightness-[1]" : ""
              } ${isInverted ? "brightness-[16]" : ""}`}
            />
          </button>
          <Navbar
            navigateTo={navigateTo}
            hidden={hidden}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
          <div
            className="hidden max-sm:flex max-sm:flex-col gap-[1.5vw] w-[8vw] relative z-[150] max-md:flex max-md:flex-col max-md:w-[4.5vw] max-md:gap-[1vw] max-sm:w-[7vw]"
            onClick={() => {
              setOpenMobileMenu((prev) => !prev);
            }}
          >
            <div
              className={`w-full h-[2.5px] rounded-full line-1 transition-all duration-500 origin-center ham-mobile ${
                isInverted ? "bg-white" : "bg-primary"
              } ${
                openMobileMenu
                  ? "rotate-45 max-sm:translate-y-[7px] max-md:translate-y-[10px] !bg-primary"
                  : "bg-primary"
              }`}
            />
            <div
              className={`w-full h-[2.5px] bg-primary rounded-full line-2 transition-all duration-500 ham-mobile ${
                isInverted ? "bg-white" : "bg-primary"
              } ${openMobileMenu ? "opacity-0 bg-white" : "bg-primary"}`}
            />
            <div
              className={`w-full h-[2.5px] bg-primary rounded-full line-3 transition-all duration-500 origin-center ham-mobile ${
                isInverted ? "bg-white" : "bg-primary"
              } ${
                openMobileMenu
                  ? "-rotate-45 max-sm:-translate-y-[6px] max-md:-translate-y-[10px] !bg-primary"
                  : "bg-primary"
              }`}
            />
          </div>
          <MobileMenu
            openMobileMenu={openMobileMenu}
            setOpenMobileMenu={setOpenMobileMenu}
            navigateTo={navigateTo}
            lenis={lenis}
            pathname={pathname}
          />
        </div>
      </div>
    </header>
  );
}