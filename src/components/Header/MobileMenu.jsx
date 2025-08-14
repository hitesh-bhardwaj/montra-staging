"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "../Buttons/icons";

export default function MobileMenu({
    openMobileMenu,
    setOpenMobileMenu,
    navigateTo,
    lenis,
    pathname,
}) {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection((prev) => (prev === section ? null : section));
    };

    useEffect(() => {
        if (openMobileMenu) {
            lenis && lenis.stop();
        } else {
            lenis && lenis.start();
            setOpenSection(null);
        }
    }, [openMobileMenu, lenis]);

    useEffect(() => {
        setOpenSection(null);
    }, [pathname]);

    return (
        <div
            className={`w-screen h-screen fixed top-0 left-0 bg-black/20 transition-all duration-500 ${openMobileMenu
                    ? "opacity-100 backdrop-blur-sm"
                    : "opacity-0 pointer-events-none"
                }`}
        >
            <div
                className={`max-sm:w-screen max-sm:h-dvh overflow-hidden !opacity-100 bg-[#FAFBFF] text-black flex flex-col max-sm:justify-between px-[7vw] font-display font-medium max-sm:text-[6vw] absolute top-0 z-[160] right-0 max-sm:pt-[30vw] max-sm:space-y-[5vw] max-sm:pb-[15vw] max-md:py-[8vw] transition-all duration-500 origin-top-right max-md:w-[60vw] max-md:h-screen max-md:text-[4vw] max-md:space-y-[7vw] ${openMobileMenu ? "translate-x-0" : "translate-x-[100%]"
                    }`}
            >
                <div className="flex flex-col max-sm:gap-[4vw] items-start max-md:gap-[3vw]">
                    <Link
                        href={"/"}
                        className="link-text"
                        onClick={(e) => {
                            e.preventDefault();
                            navigateTo("/");
                            setOpenMobileMenu(false);
                            setOpenSection(null);
                        }}
                    >
                        Home
                    </Link>
                    <span className="bg-black/25 h-[1px] w-full"></span>

                    <div className="w-full">
                        {[
                            {
                                title: "Personal",
                                link: "/personal",
                                links: [
                                    { href: "/personal/banking", text: "Banking" },
                                    { href: "/personal/payments", text: "Payments" },
                                    { href: "/personal/finance", text: "Finance" },
                                    { href: "/personal/chat", text: "Chat" },
                                    { href: "/personal/shop", text: "Shop" },
                                ],
                            },
                            {
                                title: "Business",
                                link: "/business",
                                links: [
                                    { href: "/business/banking", text: "Banking" },
                                    { href: "/business/payments", text: "Payments" },
                                    { href: "/business/agency-banking", text: "Agency Banking" },
                                    {
                                        href: "/business/inventory-management",
                                        text: "Inventory Management",
                                    },
                                    { href: "/business/montra-store", text: "Montra Store" },
                                    { href: "/business/payment-gateway", text: "Payment Gateway" },
                                    { href: "/business/tap-and-pay", text: "Tap & Pay" },
                                ],
                            },
                        ].map((section, index) => (
                            <div
                                key={index}
                                className={`flex w-full flex-col ${index % 3 >= 1 ? "mt-[4vw]" : "mt-[0.5vw]"
                                    }`}
                            >
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
                                            setOpenMobileMenu(false);
                                            setOpenSection(null);
                                        }}
                                    >
                                        {section.title}
                                    </a>
                                    <div
                                        className={`w-fit h-fit transition-transform duration-300 ${openSection === section.title ? "-rotate-90" : "rotate-0"
                                            }`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="max-sm:h-[5vw] max-sm:w-[5vw] text-primary max-md:w-[3vw] max-md:h-[3vw] group-hover:rotate-[-180deg] ease-in-out transition-all duration-700"
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
                                <div
                                    className={`overflow-hidden transition-all ease-none ${section.title === "Personal"
                                            ? "duration-700 mb-[4vw]"
                                            : "duration-700 mb-[1vw]"
                                        } ${openSection === section.title
                                            ? "max-h-[80vw] opacity-100"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <ul className="max-sm:text-[4.5vw] max-md:text-[3.5vw] py-[5vw] pl-4 flex flex-col items-start justify-center max-sm:gap-[1.5vw] max-md:gap-[1vw]">
                                        {section.links.map((link, idx) => (
                                            <li key={idx}>
                                                <Link
                                                    href={link.href}
                                                    className="link-line"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        navigateTo(link.href);
                                                        setOpenMobileMenu(false);
                                                        setOpenSection(null);
                                                    }}
                                                >
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div
                                    className={`w-full h-[1px] bg-black/25 ${section.title === "Business" ? "hidden" : ""
                                        }`}
                                ></div>
                            </div>
                        ))}
                    </div>
                    <span className="bg-black/25 h-[1px] w-full"></span>
                    <a
                        href="https://www.monielink.io"
                        target="_blank"
                        className="link-text "
                    >
                        <span>Platform</span>
                        <div className="overflow-hidden w-[3.5vw] h-[3.5vw] inline-block ml-3">
                            <Image
                                src="/assets/icons/diagonal-arrow.svg"
                                alt="diagonal-arrow"
                                width={40}
                                height={40}
                                className="w-full h-full brightness-[0] scale-[1] group-hover:-translate-y-full group-hover:translate-x-full group-hover:scale-[0] transition-all duration-300 ease-in-out"
                            />
                        </div>
                    </a>
                    <span className="bg-black/25 h-[1px] w-full"></span>
                    <Link
                        href={"/company"}
                        className="link-text"
                        onClick={(e) => {
                            e.preventDefault();
                            navigateTo("/company");
                            setOpenMobileMenu(false);
                            setOpenSection(null);
                        }}
                    >
                        Company
                    </Link>
                    <span className="bg-black/25 h-[1px] w-full"></span>
                </div>
                <div className="flex flex-col gap-[7vw]">
                    <div className="w-full flex gap-[2vw] items-center max-sm:text-[4.5vw] max-md:text-[2.5vw] fadeup-navpolicy">
                        <Link
                            href={"/privacy-policy"}
                            className="link-line text-black"
                            onClick={(e) => {
                                e.preventDefault();
                                navigateTo("/privacy-policy");
                                setOpenMobileMenu(false);
                                setOpenSection(null);
                            }}
                        >
                            Privacy Policy
                        </Link>
                        <span>
                            <Image
                                src={"/assets/icons/circle.svg"}
                                alt="circle"
                                width={40}
                                height={40}
                                className="max-sm:w-[2vw] max-sm:h-[2vw] brightness-[1] max-md:w-[1.5vw] max-md:h-[1.5vw] opacity-50"
                            />
                        </span>
                        <Link
                            href={"/terms-and-conditions"}
                            className="link-line text-black"
                            onClick={(e) => {
                                e.preventDefault();
                                navigateTo("/terms-and-conditions");
                                setOpenMobileMenu(false);
                                setOpenSection(null);
                            }}
                        >
                            Terms and Conditions
                        </Link>
                    </div>
                    <div className="flex items-start justify-start gap-[3vw]">
                        <Link
                            href={"#"}
                            aria-label="to facebook"
                            className="rounded-full border border-primary/50 max-sm:h-fit max-sm:w-fit max-md:w-[8vw] max-md:h-[8vw]"
                            onClick={() => {
                                setOpenMobileMenu(false);
                            }}
                        >
                            <Facebook
                                className="text-gray-600 transition-all duration-300 max-sm:w-full max-sm:h-full max-md:w-[8vw] max-md:h-[8vw]"
                            />
                        </Link>
                        <Link
                            href={"#"}
                            aria-label="to instagram"
                            className="h-fit w-fit rounded-full border border-primary/50 max-sm:h-fit max-sm:w-fit max-md:w-[8vw] max-md:h-[8vw]"
                            onClick={() => {
                                setOpenMobileMenu(false);
                            }}
                        >
                            <Instagram
                                className="text-gray-600 transition-all duration-300 max-sm:w-full max-sm:h-full max-md:w-[8vw] max-md:h-[8vw]"
                            />
                        </Link>
                        <Link
                            href={"#"}
                            aria-label="to Linkedin"
                            className="h-fit w-fit rounded-full border border-primary/50 max-sm:h-fit max-sm:w-fit max-md:w-[8vw] max-md:h-[8vw]"
                            onClick={() => {
                                setOpenMobileMenu(false);
                            }}
                        >
                            <Linkedin
                                className="text-gray-600 transition-all duration-300 max-sm:w-full max-sm:h-full max-md:w-[8vw] max-md:h-[8vw]"
                            />
                        </Link>
                        <Link
                            aria-label="to twitter"
                            href={"#"}
                            className="h-fit w-fit rounded-full border border-primary/50 max-sm:h-fit max-sm:w-fit max-md:w-[8vw] max-md:h-[8vw]"
                            onClick={() => {
                                setOpenMobileMenu(false);
                            }}
                        >
                            <Twitter
                                className="text-gray-600 transition-all duration-300 max-sm:w-full max-sm:h-full max-md:w-[8vw] max-md:h-[8vw]"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}