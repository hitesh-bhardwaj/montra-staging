'use client'
import Link from 'next/link';
import montraLogo from '../../../public/montra-logo.png';
import Image from 'next/image';
// import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import Navbar from '../Header/Navbar';

export default function HomepageHeader() {
    const [hidden, setHidden] = useState(false);
    const [lastY, setLastY] = useState(0);
    const pathname = usePathname();

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

    useEffect(() => {
        // const delay = pathname === '/' ? 5 : 0;
   
        const ctx = gsap.context(() => {
          
            gsap.from(".header", {
                yPercent: -50,
                opacity: 0,
                duration: 1,
                delay: 5,
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transform transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className='px-[4vw] py-[1vw] header'>
                <div className='flex justify-between items-center'>
                    <Link href="/" className='block'>
                        <Image src={montraLogo} alt='montra logo' className='w-[10vw]' />
                    </Link>
                    <Navbar />
                </div>
            </div>
        </header>
    );
}
