'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import bgImage from '../../../public/assets/images/homepage/testimonial-image.png'
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import Heading from '../Heading'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}
const useIsMobile = (breakpoint = 1024) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, [breakpoint]);

    return isMobile;
};

export default function Testimonials() {
    const isMobile = useIsMobile();
    const sectionRef = useRef(null)
    const cardsRef = useRef(null)

    useEffect(() => {
        const cards = cardsRef.current.querySelectorAll('.testimonial-card')

        // set each card staggered up & scaled down
        gsap.set(cards, {
            zIndex: (i) => 10 - i,
            yPercent: (i) => -i * 99, // each one 60px higher than the next
            scale: (i) => 1 - i * 0.05 // each one 5% smaller
        })

        const tl = gsap.timeline({
            defaults: {
                ease: 'none',
            },
            scrollTrigger: {
                trigger: sectionRef.current,
                start: '40% bottom',   // when top of section hits bottom of viewport
                end: 'bottom bottom',     // until bottom hits top
                scrub: true,
            },
        })

        tl.to(cards[1], {
            yPercent: 0,
            scale: 1,
        })
            .to(cards[2], {
                yPercent: -100,
                scale: 0.95,
            }, '=-')
            .to(cards[3], {
                yPercent: -200,
                scale: 0.9,
            }, '=-')
        tl.to(cards[2], {
            yPercent: 0,
            scale: 1,
        }, '0.5')
            .to(cards[3], {
                yPercent: -100,
                scale: 0.95,
            }, '0.5')
        tl.to(cards[3], {
            yPercent: 0,
            scale: 1,
        }, '1')
    }, [])

    return (
        <section
            ref={sectionRef}
            className="w-screen h-full relative overflow-hidden py-[4vw] max-sm:py-[15%] dark max-md:py-[7%] max-sm:h-[90vh]"
        >
            <Image
                src={bgImage}
                placeholder="blur"
                alt="testimonial background"
                fill
                className="z-0 object-cover object-top"
            />

            <div className="w-full px-[4vw] flex flex-col items-center justify-center gap-[4vw] relative z-[2] max-sm:px-[0vw] max-sm:gap-[25vw] max-md:gap-[10vw] max-sm:items-start">
                <Heading>
                    <h3 className="text-white font-display font-medium text-[5.7vw] text-center leading-[1.2] max-sm:px-[7vw] max-sm:text-[10vw]  max-sm:text-left max-md:text-[7.5vw]">
                        Better Reviews, Happier Choices
                    </h3>
                </Heading>

                {/* Wrap all cards here */}
                {!isMobile ?
                    <div
                        ref={cardsRef}
                        className="flex flex-col h-full gap-[1vw]"
                    >
                        {content.map((c, i) => (
                            <Card
                                key={i}
                                img={c.img}
                                text={c.text}
                                name={c.name}
                                rating={+c.rating}
                                className="testimonial-card"
                            />
                        ))}
                    </div> :

                    <div className='w-full h-fit'>

                        <Swiper
                            modules={[Pagination, FreeMode]}
                            slidesPerView={1.05}
                            spaceBetween={20}
                            breakpoints={{
                                768: { slidesPerView: 2, spaceBetween: 30 },
                                1024:{slidesPerView:3,spaceBetween:30}
                            }}
                            freeMode={true}
                            speed={500}
                            pagination={{ clickable: true }}
                            className="max-sm:!px-[7vw]"
                        >
                            {content.map((c, index) => (
                                <SwiperSlide className='pb-16' key={index}>
                                    <Card
                                        img={c.img}
                                        text={c.text}
                                        name={c.name}
                                        rating={+c.rating}
                                        className="testimonial-card"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                }
            </div>
        </section>
    )
}

const Card = ({ img, text, name, rating, className = "" }) => {
    return (
        <div
            className={
                `${className} border text-white font-display border-[#939393] 
         rounded-[1vw] overflow-hidden backdrop-blur-2xl bg-[#99999940] 
         px-[2vw] py-[2vw] w-[25vw] space-y-[1.5vw] max-sm:w-full  max-sm:h-[110vw] max-sm:rounded-[6vw] max-sm:py-[10vw] max-sm:px-[7vw] max-sm:flex max-sm:flex-col max-sm:justify-between max-md:w-full max-md:rounded-[3vw] max-md:p-[3vw] max-md:h-[60vw] max-md:justify-between max-md:flex max-md:flex-col`
            }
        >
            {/* stars */}
            <div className="flex gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                    <svg
                        key={i}
                        className="w-[1.5vw] h-[1.5vw] max-sm:w-[6vw] max-sm:h-[6vw] max-md:w-[3.5vw] max-md:h-[3.5vw]"
                        viewBox="0 0 23 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.8926 7.5156L8.1200 6.2141C8.4145 6.0027 10.3352 1.4588 10.8891 0.6231C11.4429
                 -0.2127 11.6997 -0.2026 12.2484 0.6231C12.7972 1.4488 14.7230 6.0027 15.0175
                 6.2141C16.0371 6.6270 22.0586 6.8636 22.2449 7.6440L17.2580
                 12.9179C17.3713 14.8814 18.0409 16.9004 18.2222 18.8388C18.2675
                 19.3171 18.4739 19.9867 17.8471 19.9590C16.4952 19.9011 13.1925
                 17.2503 11.5713 16.9834C10.4913 17.1269 5.4012 20.4247 4.9153
                 19.9514L5.8820
                 12.9179L0.8926 8.0115V7.5156Z"
                            fill="#FFDD1C"
                        />
                    </svg>
                ))}
            </div>

            <p className='h-[7vw] max-sm:h-fit max-sm:text-[4.5vw] max-md:h-fit max-md:text-[2.8vw]'>{text}</p>

            <div className="flex items-center gap-[1vw] max-sm:gap-[4vw] max-md:gap-[2vw]">
                <Image
                    src={img}
                    alt={name}
                    width={64}
                    height={64}
                    className="w-[3.3vw] h-[3.3vw] rounded-full max-sm:w-[15vw] max-sm:h-[15vw] max-md:w-[7vw] max-md:h-[7vw]"
                />
                <p className="text-[1.05vw] max-sm:text-[6.5vw] max-md:text-[3vw]">{name}</p>
            </div>
        </div>
    )
}

const content = [
    {
        text: "Loving the experience Sohil Karia. Been using the app past 40 Days.",
        name: "Adebayo",
        img: '/assets/images/homepage/c1.png',
        rating: '5',
    },
    {
        text: "Great to manage and monitor personal finance, my favourite feature is the investment portfolio where I can view my diverse investment at one place.",
        name: "Danjuma",
        img: '/assets/images/homepage/c2.png',
        rating: '4',
    },
    {
        text: "Loving the experience Sohil Karia. Been using the app past 40 Days.",
        name: "Adebayo",
        img: '/assets/images/homepage/c1.png',
        rating: '4',
    },
    {
        text: "Great to manage and monitor personal finance, my favourite feature is the investment portfolio where I can view my diverse investment at one place.",
        name: "Danjuma",
        img: '/assets/images/homepage/c2.png',
        rating: '5',
    },
]
