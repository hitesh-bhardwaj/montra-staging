'use client'
import Link from 'next/link';
import montraLogo from '../../../public/montra-logo.png';
import Image from 'next/image';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';


export default function Header() {
    const [hidden, setHidden] = useState(false);
    const [lastY, setLastY] = useState(0);

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

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastY]);

  

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transform transition-transform duration-300 w-screen  overflow-hidden ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className='px-[4vw] py-[1vw] header  w-full max-sm:pt-[5vw] max-sm:px-[7vw]'>
                <div className='flex justify-between items-center w-full'>
                    <Link href="/" className='block'>
                        <Image src={montraLogo} alt='montra logo' className='w-[10vw] max-sm:w-[30vw]' />
                    </Link>
                    <Navbar />
                    <div className='hidden  max-sm:flex max-sm:flex-col gap-[1.5vw] w-[8vw]'>
                        <div className='w-full h-[2.5px] bg-primary rounded-full'/>
                        <div className='w-full h-[2.5px] bg-primary rounded-full'/>
                        <div className='w-full h-[2.5px] bg-primary rounded-full'/>
                    </div>
                </div>
            </div>
        </header>
    );
}
