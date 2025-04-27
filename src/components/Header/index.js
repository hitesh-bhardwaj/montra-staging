'use client'
import Link from 'next/link';
import montraLogo from '../../../public/montra-logo.png';
import Image from 'next/image';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';

export default function Header() {
    const [hidden, setHidden] = useState(false)
    const [lastY, setLastY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY

            if (currentY > lastY && currentY > 100) {
                // scrolling down past 100px
                setHidden(true)
            } else if (currentY < lastY) {
                // scrolling up
                setHidden(false)
            }

            setLastY(currentY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastY]);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-[100] transform transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
                <div className='px-[4vw] py-[1vw]'>
                    <div className='flex justify-between items-center'>
                        <Link href="/" className='block'>
                            <Image src={montraLogo} alt='montra logo' className='w-[10vw]' />
                        </Link>
                        <div>
                            <Navbar />
                        </div>
                    </div>  
                </div>
            </header>
        </>
    )
}