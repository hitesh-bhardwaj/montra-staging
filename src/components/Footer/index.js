'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/montra-white-logo.svg';
import { Facebook, Instagram, Linkedin, NftIcon, Twitter } from '../Buttons/icons'
import React from 'react'
import FooterCta from './FooterCta'

export default function Footer() {
    return (
        <>
            <FooterCta />
            <footer className="w-screen overflow-hidden">

                <div className='text-white bg-primary rounded-[4vw] w-[92vw] mx-auto px-[3vw] pt-[4vw] pb-[2vw] max-sm:w-screen max-sm:pt-[15vw] max-sm:rounded-bl-none max-sm:rounded-br-none max-sm:rounded-[10vw] max-sm:px-[7vw]'>
                    {/* Top Content */}
                    <div className="flex flex-row justify-between max-sm:flex-col">
                        {/* Logo */}
                        <div className="w-[45%] max-sm:w-full max-sm:flex max-sm:justify-center">
                            <Image className='w-1/2 max-sm:w-[85%]' src={logo} alt="Montra Logo" width={200} height={60} />
                        </div>

                        {/* Intro + Link Columns */}
                        <div className="w-[55%] space-y-[2.5vw] max-sm:w-full max-sm:text-center max-sm:mt-[10vw] max-sm:space-y-[7vw]">
                            <p>
                                Connect with us:{' '}
                                <a href="mailto:info@montra.org" className="">
                                    info@montra.org
                                </a>
                            </p>
                            <p className="">
                                Montra delivers innovative products and solutions that drive
                                financial inclusion in emerging economies—enabling a smooth shift
                                from cash to digital payments and making credit more accessible
                                for all.
                            </p>
                            <div className='flex justify-start gap-[8vw] max-sm:flex-col'>
                                <ul className="space-y-[0.5vw] max-sm:space-y-[2vw]">
                                    <li className="uppercase max-sm:text-[4.5vw] max-sm:mb-[4vw]"><Link href="#">Personal</Link></li>
                                    <li><Link href="#">Banking</Link></li>
                                    <li><Link href="#">Payments</Link></li>
                                    <li><Link href="#">Finance</Link></li>
                                    <li><Link href="#">Chat</Link></li>
                                    <li><Link href="#">Shop</Link></li>
                                    <li><Link href="#">Lend</Link></li>
                                </ul>
                                <ul className="space-y-[0.5vw] max-sm:space-y-[2vw]">
                                    <li className="uppercase max-sm:text-[4.5vw] max-sm:mb-[4vw]"><Link href="#">Business</Link></li>
                                    <li><Link href="#">Banking</Link></li>
                                    <li><Link href="#">Payments</Link></li>
                                    <li><Link href="#">Finance</Link></li>
                                    <li><Link href="#">Chat</Link></li>
                                    <li><Link href="#">Shop</Link></li>
                                    <li><Link href="#">Lend</Link></li>
                                </ul>
                                <ul className="space-y-[0.5vw] max-sm:space-y-[2vw]">
                                    <li className="uppercase">Platform</li>
                                    <li><Link href="#" className="uppercase">Company</Link></li>
                                </ul>
                            </div>
                            {/* Social Media Links */}
                            <div className="flex space-x-[1vw] max-sm:w-full max-sm:justify-center max-sm:gap-[3vw] max-sm:pt-[7vw]">
                                <a href="#" aria-label='Facebook'>
                                    <div className='border rounded-full'>
                                        <Facebook />
                                    </div>
                                </a>
                                <a href="#" aria-label='Linkedin'>
                                    <div className='border rounded-full'>
                                        <Linkedin />
                                    </div>
                                </a>
                                <a href="#" aria-label='Twitter'>
                                    <div className='border rounded-full'>
                                        <Twitter />
                                    </div>
                                </a>
                                <a href="#" aria-label='Instagram'>
                                    <div className='border rounded-full'>
                                        <Instagram />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Divider + Bottom Bar */}
                    <div className="mx-auto py-4 flex font-display items-center justify-between max-sm:py-[8vw]">
                        <span className="text-[1vw] max-sm:text-[3.8vw]">Copyright © Montra 2025</span>
                        <span className="text-[1vw] max-sm:text-[3.8vw]">By: <a href='https://weareenigma.com/'>Enigma Digital</a></span>
                    </div>
                </div>

                {/* Marquee */}
                <div className="overflow-hidden whitespace-nowrap text-nowrap max-sm:h-[20vw]">
                    <div className="py-[2vw] marquee whitespace-nowrap flex items-center text-[3.45vw] font-display font-bold text-primary gap-[2vw] w-max max-sm:text-[7vw] max-sm:py-[4.5vw]">
                        {['PAY', 'RECEIVE', 'SELL', 'PAY', 'RECEIVE', 'SELL', 'PAY', 'RECEIVE', 'SELL'].map((word, i) => (
                            <React.Fragment key={i}>
                                <span>{word}</span>
                                <NftIcon className='w-[3vw] h-[3vw]' />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    )
}