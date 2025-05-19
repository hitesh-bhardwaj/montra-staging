'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import Image from 'next/image'
import Cursor from '../Cursor'
import Copy from '../Copy'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { NextButton, PreviousButton } from '../Buttons/SliderButtons'

gsap.registerPlugin(ScrollTrigger);

const content = [
    { img: '/assets/images/homepage/features-1.png', bgColor: '#F1FFE8', text: 'Pay anyone, anywhere with a click. Save up to 1 day per week with automated payments.' },
    { img: '/assets/images/homepage/features-2.png', bgColor: '#FFEAEE', text: 'Get paid faster. Boost cash flow and save time with automated accounts receivables.' },
    { img: '/assets/images/homepage/features-3.png', bgColor: '#EAF1FF', text: 'Access working capital. Access pre-approved credit instantly, in your workflow.' },
    { img: '/assets/images/homepage/features-1.png', bgColor: '#F1FFE8', text: 'Pay anyone, anywhere with a click. Save up to 1 day per week with automated payments.' },
    { img: '/assets/images/homepage/features-2.png', bgColor: '#FFEAEE', text: 'Get paid faster. Boost cash flow and save time with automated accounts receivables.' },
    { img: '/assets/images/homepage/features-3.png', bgColor: '#EAF1FF', text: 'Access working capital. Access pre-approved credit instantly, in your workflow.' },
]

export default function InfoCarouselSwiper() {
    const swiperRef = useRef(null); 
  
    const handleNext = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext(); 
      }
    };
  
    const handlePrev = () => {
      if (swiperRef.current) {
        swiperRef.current.slidePrev(); 
      }
    };

    useEffect(() => {
        const ctx = gsap.context(() => { 
            gsap.fromTo(".featureSwipeSlide", {
                opacity: 0, y: 50
            }, {
                opacity: 1, y: 0, duration: 1.5, stagger: 0.1, scrollTrigger: { trigger: "#infocarousel", start: 'top 80%', markers: false }
            })
        })
        return () => ctx.revert();
    });

    return (
        <div className="text-white py-[3vw] bg-primary dark relative" id='infocarousel'>
            <div className='max-md:w-full max-md:flex max-md:justify-center max-sm:justify-start'>
            <Copy>
                <h3 className='ml-[5vw] text-white font-display font-medium text-[3vw] w-[40%] capitalize leading-[1.3] pb-[3vw] max-sm:text-[7.5vw] max-sm:w-[85%] max-sm:pb-[10vw] max-md:text-[7.5vw] max-md:w-[80%] max-md:pb-[6vw] max-md:text-center max-sm:text-left'>Sort All Your Payments And Cash Flow Needs</h3>
            </Copy>

            </div>
            <Swiper
                modules={[Pagination, FreeMode]}
                slidesPerView={1.05}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={20}
                speed={1000}
                freeMode={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024:{slidesPerView:3,spaceBetween:30}
                }}
                className="!px-[5vw] swipe"
            >
                {content.map((c, index) => (
                    <SwiperSlide className='pb-16 featureSwipeSlide' key={index}>
                        <Card img={c.img} text={c.text} bgColor={c.bgColor} />
                    </SwiperSlide>
                ))}
                 <Cursor />
            </Swiper>
            <div className='w-fit flex gap-4 absolute right-[5%] top-[10%] max-md:hidden'>

            <PreviousButton onClick={handlePrev} />
            <NextButton onClick={handleNext} />
            </div>
        </div>
    )
}

const Card = ({ img, bgColor, text }) => {
    return (
        <div style={{ background: bgColor }} className="overflow-hidden group rounded-[3vw] hover:scale-[0.99] duration-500 transition-transform max-sm:rounded-[9vw] max-md:h-[65vw] max-sm:h-fit max-md:rounded-[5vw]">
            <div className='relative h-[27vw] w-full rounded-b-[3vw] overflow-hidden max-sm:h-[100vw] max-sm:rounded-[9vw] max-md:h-[40vw]'>
                <Image src={img} alt='feature image' fill className='object-cover group-hover:scale-[1.05] duration-500' />
            </div>
            <p className='text-black-1 py-7 px-6'>{text}</p>
        </div>
    )
}