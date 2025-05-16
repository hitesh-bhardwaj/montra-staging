"use client"
import Image from 'next/image'
import logo from '../../../public/montra-white-logo.svg';
import { ArrowRight, NftIcon } from '../Buttons/icons'
import React from 'react'
import { useAnimatedNavigation } from '../NavigationContext';

export default function Footer() {
    const { navigateTo } = useAnimatedNavigation();

    return (
        <>
            <footer
                className="w-screen h-[43vw] max-sm:h-full max-sm:rounded-t-4xl max-sm:overflow-hidden max-md:h-[115vw] "
                style={{ clipPath: 'rect(0px 100% 100% 0px)' }}
            >
                <div className='text-white fixed bottom-0 bg-primary flex flex-col justify-end w-screen h-[45vw] mx-auto pt-[4vw] pb-[1vw] max-sm:w-screen max-sm:pt-[15vw] font-display text-[1.1vw] max-sm:text-lg z-0 max-sm:h-full max-sm:static max-sm:pb-[0vw] max-md:h-[115vw]' >
                    {/* Top Content */}
                    <div className="flex flex-row mb-[5vw] justify-between max-sm:flex-col px-[4vw] max-sm:px-[7vw]  max-md:flex-col max-md:gap-[10vw] max-md:px-[7vw]">
                        {/* Logo */}
                        <div className="w-fit max-sm:w-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-[7vw] max-md:w-full max-md:justify-center max-md:flex max-md:flex-col max-md:gap-[3vw] ">
                            <Image className='w-[30vw] max-sm:w-[85%] mb-[2vw]' src={logo} alt="Montra Logo" width={600} height={126} />
                            <p className="w-[30vw] mb-[2vw] text-[1vw] max-sm:text-lg max-sm:w-full max-sm:text-center max-md:text-[2.5vw] max-md:w-[80%]">
                                Montra delivers innovative products and solutions that drive
                                financial inclusion in emerging economies - enabling a smooth shift
                                from cash to digital payments and making credit more accessible
                                for all.
                            </p>
                            <p className='font-semibold max-sm:font-medium max-md:text-[2.5vw] max-sm:text-[4.5vw]'>
                                Connect with us:{' '}
                                <a target='_blank' href="mailto:info@montra.org" className="">
                                    info@montra.org
                                </a>
                            </p>
                        </div>

                        {/* Intro + Link Columns */}
                        <div className="w-fit space-y-[2.5vw] max-sm:w-full max-sm:text-center max-sm:mt-[10vw] max-sm:space-y-[7vw] max-md:w-full ">

                            <div className='flex justify-start gap-[8vw] max-sm:flex-col max-sm:items-center max-sm:text-[4.5vw] max-md:text-[2.5vw] '>

                                {/* Personal Links */}
                                <ul className="space-y-[0.5vw] max-sm:space-y-[2vw]">
                                    {personalLinks.map((link, index) => (
                                        <li key={index} className='first:uppercase'>
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
                                        <li key={index} className='first:uppercase'>
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

                                <div className="flex flex-col justify-between items-center">
                                    <div className='space-y-[0.5vw] max-sm:space-y-[2vw]'>
                                        <a
                                            href="/platform"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigateTo("/platform");
                                            }}
                                            className="uppercase block w-fit link-line" >Platform</a>
                                        <a 
                                            href="/company" 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigateTo("/company");
                                            }}
                                            className="uppercase block w-fit link-line">Company</a>
                                    </div>

                                    {/* Social Media Links */}
                                    <div className='space-y-[0.5vw] max-sm:space-y-[2vw] max-sm:mt-[10vw]'>
                                        {socialLinks.map((link, index) => (
                                            <a key={index} href={link.href} target='_blank' aria-label='Facebook' className='flex items-center gap-1 group max-sm:gap-3 '>
                                                <span className='link-line'>{link.name}</span>
                                                <div className='h-[0.8vw] -rotate-45 w-[1vw] overflow-hidden flex items-center justify-end  max-sm:!w-[3.5vw] max-sm:!h-[3.5vw]'>
                                                    <span className='inline-flex w-[200%] h-full duration-300 group-hover:translate-x-1/2'>
                                                        <ArrowRight className='h-[0.8vw] w-[1vw] inline-block scale-0 group-hover:scale-100 duration-300 max-sm:!w-[3.5vw] max-sm:!h-[3.5vw]' />
                                                        <ArrowRight className='h-[0.8vw] w-[1vw] inline-block group-hover:scale-0 duration-300  max-sm:!w-[3.5vw] max-sm:!h-[3.5vw]' />
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
                        <div className="py-[2vw] marquee whitespace-nowrap flex items-center text-[10vw] leading-0 font-bold text-white gap-[5vw] w-max max-sm:text-[7vw] max-sm:py-[4.5vw]">
                            {['PAY', 'RECEIVE', 'SELL', 'PAY', 'RECEIVE', 'SELL'].map((word, i) => (
                                <React.Fragment key={i}>
                                    <span>{word}</span>
                                    <NftIcon className='w-[8vw] h-[8vw] mt-2' />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Copyright Statement */}
                    <div className="px-[4vw] py-4 flex items-center justify-between max-sm:py-[8vw] ">
                        <span className="text-[1vw] max-sm:text-[3.8vw] max-md:text-[2vw] ">Copyright © Montra 2025</span>
                        <span className="text-[1vw] max-sm:text-[3.8vw] max-md:text-[2vw]">By: <a target='_blank' href='https://weareenigma.com/'>Enigma Digital</a></span>
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
        name: "Instagram",
        href: "#",
    },
    {
        name: "Youtube",
        href: "#"
    }
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