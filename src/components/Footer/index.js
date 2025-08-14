"use client"
import Image from 'next/image'
import logo from '../../../public/montra-white-logo.svg';
import { ArrowRight, NftIcon, SellIcon, PayIcon } from '../Buttons/icons'
import React, { useEffect } from 'react'
import { useAnimatedNavigation } from '../NavigationContext';
import gsap from 'gsap';
import Link from 'next/link';

const iconMap = {
    PAY: PayIcon,
    RECEIVE: NftIcon,
    SELL: SellIcon,
};

export default function Footer() {
    const { navigateTo } = useAnimatedNavigation();
    const words = ['PAY', 'RECEIVE', 'SELL', 'PAY', 'RECEIVE', 'SELL', 'PAY', 'RECEIVE',];
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (globalThis.innerWidth < 541) {
                gsap.to(".montra-logo", {
                    scrollTrigger: {
                        trigger: "#footer",
                        start: "top top",
                        onLeaveBack: () => {
                            gsap.to(".montra-logo", {
                                filter: "brightness(1)",
                                duration: 0,
                            });
                        },
                        onEnter: () => {
                            gsap.to(".montra-logo", {
                                filter: "brightness(16)",
                                duration: 0,
                            });
                        },
                        onLeave: () => {
                            gsap.to(".montra-logo", {
                                filter: "brightness(1)",
                                duration: 0,
                            });
                        },
                        onEnterBack: () => {
                            gsap.to(".montra-logo", {
                                filter: "brightness(16)",
                                duration: 0,
                            });
                        },
                    },
                });
                gsap.to(".ham-mobile", {
                    backgroundColor: "#215CFF",
                    duration: 0,
                    scrollTrigger: {
                        trigger: "#footer",
                        start: "top top",
                        //   markers: true,
                        onEnter: () => {
                            gsap.to(".ham-mobile", {
                                backgroundColor: "white",
                                duration: 0,
                            });
                        },
                        onLeaveBack: () => {
                            gsap.to(".ham-mobile", {
                                backgroundColor: "#215CFF",
                                duration: 0,
                            });
                        },
                        onLeave: () => {
                            gsap.to(".ham-mobile", {
                                backgroundColor: "#215CFF",
                                duration: 0,
                            });
                        },
                        onEnterBack: () => {
                            gsap.to(".ham-mobile", {
                                backgroundColor: "white",
                                duration: 0,
                            });
                        },
                    },
                })
            }
        })
        return () => ctx.revert()
    }, [])

    return (
        <>
            <footer
                id='footer'
                className="w-screen h-[46vw] max-sm:h-full max-sm:rounded-t-[10vw] max-sm:overflow-hidden max-md:h-[130vw] "
                style={{ clipPath: 'rect(0px 100% 100% 0px)' }}
            >
                <div className='text-white fixed bottom-0 bg-primary flex flex-col justify-end w-screen h-[50vw] mx-auto pt-[4vw] pb-[1vw] max-sm:w-screen max-sm:pt-[15vw] font-display text-[1.1vw] max-sm:text-lg z-0 max-sm:h-full max-sm:static max-sm:pb-[0vw] max-md:h-[130vw]' >
                    {/* Top Content */}
                    <div className="flex flex-row mb-[4vw] justify-between max-sm:flex-col px-[4vw] max-sm:px-[7vw]  max-md:flex-col max-md:gap-[10vw] max-md:px-[7vw]">
                        {/* Logo */}
                        <div className="w-fit max-sm:w-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-[7vw] max-md:w-full max-md:justify-center max-md:flex max-md:flex-col max-md:gap-[3vw] ">
                            <Image className='w-[30vw] max-sm:w-[85%] mb-[2vw]' src={logo} alt="Montra Logo" width={600} height={126} />
                            <p className="w-[30vw] mb-[1vw] text-[1vw] max-sm:text-lg max-sm:w-full max-sm:text-center max-md:text-[2.5vw] max-md:w-[100%]">
                                Montra delivers innovative products and solutions that drive
                                financial inclusion in emerging economies - enabling a smooth shift
                                from cash to digital payments and making credit more accessible
                                for all.
                            </p>
                            <p className='font-semibold max-sm:font-medium max-md:text-[2.5vw] max-sm:text-[4.5vw] mb-[1.5vw]'>
                                Connect with us:{' '}
                                <a target='_blank' href="mailto:info@montra.org" className="">
                                    <span className='link-line inline-block'>
                                        info@montra.org
                                    </span>
                                </a>
                            </p>
                            <div className='flex gap-6 items-end mb-[1vw] max-md:mb-0'>
                                <Image className='h-[5vw] w-auto aspect-auto max-md:h-[10vw] max-sm:h-[18vw]' width={100} height={100} src={"/assets/images/cbn-logo.svg"} alt='CBN Logo' />
                                <Image className='h-[3.3vw] w-auto max-md:h-[7vw] max-sm:h-[12vw]' width={100} height={100} src={"/assets/images/ndic-logo.svg"} alt='NDIC Logo' />
                            </div>
                            <p className='text-[1vw] max-sm:text-lg max-md:text-[2.5vw]'>Licensed by CBN, Insured by NDIC</p>
                        </div>

                        {/* Intro + Link Columns */}
                        <div className="w-fit space-y-[2.5vw] max-sm:w-full max-sm:text-center max-sm:mt-[10vw] max-sm:space-y-[7vw] max-md:w-full ">

                            <div className='flex justify-start gap-[8vw] max-sm:flex-col max-sm:items-center max-sm:text-[4.5vw] max-md:text-[2.5vw] '>

                                {/* Personal Links */}
                                <ul className="space-y-[0.5vw] max-sm:space-y-[2vw]">
                                    {personalLinks.map((link, index) => (
                                        <li key={index} className='first:uppercase first:font-medium'>
                                            <a
                                                href={link.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    navigateTo(link.href);
                                                }}
                                                className='link-line'
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                {/* Business Links */}
                                <ul className="space-y-[0.5vw] max-sm:space-y-[2vw]">
                                    {businessLinks.map((link, index) => (
                                        <li key={index} className='first:uppercase first:font-medium'>
                                            <a
                                                href={link.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    navigateTo(link.href);
                                                }}
                                                className='link-line'
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-col justify-between items-start">
                                    <div className='space-y-[0.5vw] max-sm:space-y-[2vw] mb-[2vw]'>
                                        <a
                                            href="https://www.monielink.io/"
                                            target='_blank'
                                            className="font-medium block w-fit group relative">
                                            <span className='link-line'>PLATFORM</span>
                                            <div className='h-[0.8vw] absolute top-1/2 -translate-y-1/2 right-[-22%] -rotate-45 w-[1vw] overflow-hidden flex items-center justify-end  max-sm:!w-[3.5vw] max-sm:!h-[3.5vw] max-md:w-[2.2vw] max-md:h-[2.2vw] '>
                                                    <span className='inline-flex w-[200%] h-full duration-300 group-hover:translate-x-1/2'>
                                                        <ArrowRight className='h-[0.8vw] w-[1vw] inline-block scale-0 group-hover:scale-100 duration-300 max-sm:!w-[3.5vw] max-sm:!h-[3.5vw] max-md:w-[2.2vw] max-md:h-[2.2vw]' />
                                                        <ArrowRight className='h-[0.8vw] w-[1vw] inline-block group-hover:scale-0 duration-300  max-sm:!w-[3.5vw] max-sm:!h-[3.5vw] max-md:w-[2.2vw] max-md:h-[2.2vw]' />
                                                    </span>
                                            </div>
                                        </a>
                                        <Link
                                            href="/company"
                                            scroll={false}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigateTo("/company");
                                            }}
                                            className=" font-medium block w-fit link-line">COMPANY</Link>
                                    </div>

                                    {/* Social Media Links */}
                                    <div className='space-y-[0.5vw] max-sm:space-y-[2vw] max-sm:mt-[10vw] '>
                                        {socialLinks.map((link, index) => (
                                            <a key={index} href={link.href} target='_blank' aria-label='Facebook' className='flex items-center gap-1 group max-sm:gap-3 max-sm:w-fit max-sm:mx-auto'>
                                                <span className='link-line'>{link.name}</span>
                                                <div className='h-[0.8vw] -rotate-45 w-[1vw] overflow-hidden flex items-center justify-end  max-sm:!w-[3.5vw] max-sm:!h-[3.5vw] max-md:w-[2.2vw] max-md:h-[2.2vw] '>
                                                    <span className='inline-flex w-[200%] h-full duration-300 group-hover:translate-x-1/2'>
                                                        <ArrowRight className='h-[0.8vw] w-[1vw] inline-block scale-0 group-hover:scale-100 duration-300 max-sm:!w-[3.5vw] max-sm:!h-[3.5vw] max-md:w-[2.2vw] max-md:h-[2.2vw]' />
                                                        <ArrowRight className='h-[0.8vw] w-[1vw] inline-block group-hover:scale-0 duration-300  max-sm:!w-[3.5vw] max-sm:!h-[3.5vw] max-md:w-[2.2vw] max-md:h-[2.2vw]' />
                                                    </span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Marquee */}
                    <div className="overflow-hidden whitespace-nowrap text-nowrap max-sm:h-[20vw] bg-primary max-sm:hidden max-md:py-[5vw]">
                        <div className="py-[2vw] marquee whitespace-nowrap flex items-center text-[6vw] leading-0 font-semibold text-white gap-[4vw] w-max max-sm:text-[7vw] max-sm:py-[4.5vw]">
                            {words.map((word, i) => {
                                const IconComponent = iconMap[word];
                                return (
                                    <React.Fragment key={i}>
                                        <span>{word}</span>
                                        <IconComponent className="w-[5vw] h-[5vw] mt-2" />
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>

                    {/* Copyright Statement */}
                    <div className="px-[4vw] py-4 flex items-center justify-between max-sm:py-[8vw] ">
                        <span className="text-[1vw] max-sm:text-[3.8vw] max-md:text-[2vw] ">Copyright © Montra 2025</span>
                        <span className="text-[1vw] max-sm:text-[3.8vw] max-md:text-[2vw]">By: <a target='_blank' className='link-line pb-1' href='https://weareenigma.com/'><span>Enigma Digital</span></a></span>
                    </div>
                </div>
            </footer>
        </>
    )
}

const socialLinks = [
    {
        name: "Facebook",
        href: "#",
    },
    {
        name: "Twitter",
        href: "#",
    },
    {
        name: "LinkedIn",
        href: "#",
    },
    {
        name: "Instagram",
        href: "#",
    },
]

const personalLinks = [
    {
        name: "Personal",
        href: "/personal"
    },
    {
        name: "Banking",
        href: "/personal/banking",
    },
    {
        name: "Payments",
        href: "/personal/payments",
    },
    {
        name: "Finance",
        href: "/personal/finance",
    },
    {
        name: "Chat",
        href: "/personal/chat",
    },
    {
        name: "Shop",
        href: "/personal/shop",
    },
]

const businessLinks = [
    {
        name: "Business",
        href: "/business"
    },
    {
        name: "Banking",
        href: "/business/banking",
    },
    {
        name: "Payments",
        href: "/business/payments",
    },
    {
        name: "Agency Banking",
        href: "/business/agency-banking",
    },
    {
        name: "Inventory Management",
        href: "/business/inventory-management",
    },
    {
        name: "Montra Store",
        href: "/business/montra-store",
    },
    {
        name: "Payment Gateway",
        href: "/business/payment-gateway",
    },
    {
        name: "Tap & Pay",
        href: "/business/tap-and-pay",
    },
]