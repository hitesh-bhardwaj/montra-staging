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
import { Facebook, Instagram, Linkedin, Twitter } from "../Buttons/icons";
import { usePathname } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const { navigateTo } = useAnimatedNavigation();
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname()
  const [lastY, setLastY] = useState(0);
  const [isInverted, setIsInverted] = useState(false);
  const [openMenu, setopenMenu] = useState(false);
  const lenis = useLenis();
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

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
      className={`fixed top-0 left-0 right-0 z-[9999] transform transition-transform duration-300 w-screen   ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        id="header-container"
        className="px-[4vw] pt-[1%] header w-full max-sm:pt-[5vw] max-sm:px-[7vw] max-md:pt-[5vw]"
      >
        <div className="flex justify-between items-center w-full ">
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
              className={`w-[10vw] max-sm:w-[30vw] logo max-md:w-[20vw] montra-logo ${pathname==='/'?"opacity-0":""}  ${
                openMenu ? "!brightness-[1]" : ""
              } ${isInverted ? " brightness-[16]" : ""} `}
            />
          </button>
          <Navbar navigateTo={navigateTo} hidden={hidden} />
          <div
            className="hidden max-sm:flex max-sm:flex-col gap-[1.5vw] w-[8vw] relative z-[150] max-md:flex max-md:flex-col max-md:w-[4.5vw] max-md:gap-[1vw] max-sm:w-[7vw]"
            onClick={() => {
              setopenMenu((prev) => !prev);
            }}
          >
            <div
              className={`w-full h-[2.5px]  rounded-full line-1 transition-all duration-500 origin-center ham-mobile ${
                isInverted ? "bg-white" : "bg-primary"
              } ${
                openMenu
                  ? "rotate-45 max-sm:translate-y-[7px] max-md:translate-y-[10px] !bg-primary "
                  : "bg-primary"
              }`}
            />
            <div
              className={`w-full h-[2.5px] bg-primary rounded-full line-2 transition-all duration-500 ham-mobile ${
                isInverted ? "bg-white" : "bg-primary"
              } ${openMenu ? "opacity-0 bg-white " : "bg-primary"}`}
            />
            <div
              className={`w-full h-[2.5px] bg-primary rounded-full line-3 transition-all duration-500 origin-center ham-mobile ${
                isInverted ? "bg-white" : "bg-primary"
              } ${
                openMenu
                  ? "-rotate-45 max-sm:-translate-y-[6px] max-md:-translate-y-[10px] !bg-primary"
                  : "bg-primary"
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
              className={`max-sm:w-screen max-sm:h-screen overflow-hidden !opacity-100 bg-[#FAFBFF] text-primary flex flex-col max-sm:justify-between px-[7vw] font-display font-medium max-sm:text-[6vw] absolute top-0 z-[160] right-0 max-sm:pt-[30vw]  max-sm:space-y-[5vw] max-sm:pb-[15vw] max-md:py-[8vw] transition-all duration-500 origin-top-right max-md:w-[60vw] max-md:h-screen max-md:text-[4vw] max-md:space-y-[7vw] ${
                openMenu ? "translate-x-0 " : "translate-x-[100%]"
              }`}
            >
              <div className="flex flex-col max-sm:gap-[4vw] items-start max-md:gap-[3vw]">
                <Link
                  href={"/"}
                  className="link-text"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/");
                    setopenMenu(false);
                    setIsInverted(false);
                  }}
                >
                  Home
                </Link>
                <span className="bg-primary h-[1px] w-full"></span>

                <div className="w-full">
                  {/* Sections */}
                  {[
                    {
                      title: "Personal",
                      link: "/personal",
                      links: [
                        {
                          href: "/personal/banking",
                          text: "Banking",
                        },
                        {
                          href: "/personal/payments",
                          text: "Payments",
                        },
                        {
                          href: "/personal/finance",
                          text: "Finance",
                        },
                        {
                          href: "/personal/chat",
                          text: "Chat",
                        },
                        {
                          href: "/personal/shop",
                          text: "Shop",
                        },
                      ],
                    },
                    {
                      title: "Business",
                      link: "/business",
                      links: [
                        {
                          href: "/business/banking",
                          text: "Banking",
                        },
                        {
                          href: "/business/payments",
                          text: "Payments",
                        },
                        {
                          href: "/business/agency-banking",
                          text: "Agency Banking",
                        },
                        {
                          href: "/business/inventory-management",
                          text: "Inventory Management",
                        },
                        {
                          href: "/business/montra-store",
                          text: "Montra Store",
                        },
                        {
                          href: "/business/payment-gateway",
                          text: "Payment Gateway",
                        },
                        {
                          href: "/business/tap-and-pay",
                          text: "Tap & Pay",
                        },
                      ],
                    },
                  ].map((section, index) => (
                    <div
                      key={index}
                      className={`flex w-full flex-col ${
                        index % 3 >= 1 ? "mt-[4vw]" : "mt-[0.5vw] "
                      }`}
                    >
                      {/* Title */}
                      <div
                        className="flex justify-between w-full list-title cursor-pointer items-center"
                        onClick={() => toggleSection(section.title)}
                      >
                        <a
                          href={section.link}
                          className=""
                          onClick={(e) => {
                            e.preventDefault();
                            navigateTo(section.link);
                            setopenMenu(false);
                            setIsInverted(false);
                          }}
                        >
                          {section.title}
                        </a>

                        {/* Icon with Rotation */}

                        <div
                          className={` w-fit h-fit transition-transform duration-300  ${
                            openSection === section.title
                              ? "-rotate-90"
                              : "rotate-0"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="max-sm:h-[5vw] max-sm:w-[5vw] max-md:w-[3vw] max-md:h-[3vw] group-hover:rotate-[-180deg] ease-in-out transition-all duration-700 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Sublist (Expands on Click) */}
                      <div
                        className={` overflow-hidden transition-all ease-none  ${
                          section.title == "Personal"
                            ? "duration-700 mb-[4vw]"
                            : "duration-700 mb-[1vw]"
                        } ${
                          openSection === section.title
                            ? "max-h-[80vw] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="max-sm:text-[4.5vw] max-md:text-[3.5vw] pt-[7vw]  pb-[7vw] flex flex-col items-start justify-center max-sm:gap-[1.5vw] max-md:gap-[1vw]">
                          {section.links.map((link, idx) => (
                            <li key={idx}>
                              <Link
                                href={link.href}
                                className="link-line "
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigateTo(link.href);
                                  setopenMenu(false);
                                  setIsInverted(false);
                                }}
                              >
                                {link.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Separator Line */}
                      <div
                        className={`w-full h-[1.1px] bg-primary  ${
                          section.title == "Business" ? "hidden" : ""
                        }`}
                      ></div>
                    </div>
                  ))}
                </div>
                <span className="bg-primary h-[1px] w-full"></span>
                <Link
                  href={"#"}
                  className="link-text"
                  onClick={() => {
                    setopenMenu(false);
                    setIsInverted(false);
                  }}
                >
                  Platform
                </Link>
                <span className="bg-primary h-[1px] w-full"></span>
                <Link
                  href={"/company"}
                  className="link-text"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/company");
                    setopenMenu(false);
                    setIsInverted(false);
                  }}
                >
                  Company
                </Link>
                <span className="bg-primary h-[1px] w-full"></span>
                
              </div>
              <div className="flex flex-col gap-[7vw]">
              <div className="w-full flex gap-[2vw] items-center max-sm:text-[4.5vw] max-md:text-[3vw] fadeup-navpolicy">
                  <Link href={"/"} className="link-line text-primary">
                    Privacy Policy
                  </Link>
                  <span>
                    <Image
                      src={"/assets/icons/circle.svg"}
                      alt="circle"
                      width={40}
                      height={40}
                      className="max-sm:w-[2vw] max-sm:h-[2vw] brightness-[1] max-md:w-[1.5vw] max-md:h-[1.5vw]"
                    />
                  </span>
                  <Link href={"/"} className="link-line text-primary">
                    Cookie Policy
                  </Link>
                </div>
              <div className="flex items-start justify-start gap-[3vw]">
                <Link
                  href={"/"}
                  aria-label="to facebook"
                  className=" rounded-full border border-primary max-sm:h-fit max-sm:w-fit max-md:w-[8vw] max-md:h-[8vw] "
                  onClick={() => {
                    setopenMenu(false);
                  }}
                >
                  <Facebook
                    className={"text-primary  transition-all duration-300 max-sm:w-full max-sm:h-full max-md:w-[8vw] max-md:h-[8vw]"}
                  />
                </Link>
                <Link
                  href={"/"}
                  aria-label="to instagram"
                  className="h-fit w-fit rounded-full border border-primary max-sm:h-fit max-sm:w-fit max-md:w-[8vw] max-md:h-[8vw]"
                  onClick={() => {
                    setopenMenu(false);
                  }}
                >
                  <Instagram
                    className={"text-primary  transition-all duration-300 max-sm:w-full max-sm:h-full max-md:w-[8vw] max-md:h-[8vw]"}
                  />
                </Link>
                <Link
                  href={"/"}
                  aria-label="to Linkedin"
                  className="h-fit w-fit rounded-full border border-primary  max-sm:h-fit max-sm:w-fit max-md:w-[8vw] max-md:h-[8vw]"
                  onClick={() => {
                    setopenMenu(false);
                  }}
                >
                  <Linkedin
                    className={"text-primary  transition-all duration-300 max-sm:w-full max-sm:h-full max-md:w-[8vw] max-md:h-[8vw]"}
                  />
                </Link>
                <Link
                  aria-label="to twitter"
                  href={"/"}
                  className="h-fit w-fit rounded-full border border-primary max-sm:h-fit max-sm:w-fit max-md:w-[8vw] max-md:h-[8vw]"
                  onClick={() => {
                    setopenMenu(false);
                  }}
                >
                  <Twitter
                    className={"text-primary  transition-all duration-300 max-sm:w-full max-sm:h-full max-md:w-[8vw] max-md:h-[8vw]"}
                  />
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
