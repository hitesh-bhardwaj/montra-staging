'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useState } from 'react'
import Cursor from '../Cursor'
gsap.registerPlugin(ScrollTrigger)


const content = [
    { img: '/assets/images/homepage/features-1.png', bgColor: '#F1FFE8', text: 'Pay anyone, anywhere with a click. Save up to 1 day per week with automated payments.' },
    { img: '/assets/images/homepage/features-2.png', bgColor: '#FFEAEE', text: 'Get paid faster. Boost cash flow and save time with automated accounts receivables.' },
    { img: '/assets/images/homepage/features-3.png', bgColor: '#EAF1FF', text: 'Access working capital. Access pre-approved credit instantly, in your workflow.' },
    { img: '/assets/images/homepage/features-1.png', bgColor: '#F1FFE8', text: 'Pay anyone, anywhere with a click. Save up to 1 day per week with automated payments.' },
    { img: '/assets/images/homepage/features-2.png', bgColor: '#FFEAEE', text: 'Get paid faster. Boost cash flow and save time with automated accounts receivables.' },
    { img: '/assets/images/homepage/features-3.png', bgColor: '#EAF1FF', text: 'Access working capital. Access pre-approved credit instantly, in your workflow.' },
]

export default function InfoCarouselSwiper() {
      
    
    useEffect(()=>{
        const ctx = gsap.context(()=>{
            gsap.to(".logo",{
                scrollTrigger:{
                    trigger:"#feature-text",
                    start:"64% top",
                    end:"bottom top",
                    // markers:true,

                    onEnter:()=>{
                        gsap.to(".logo",{
                            filter:"brightness(20)",
                            duration:0,
                        })
                    },
                    onEnterBack:()=>{
                        gsap.to(".logo",{
                            filter:"brightness(20)",
                            duration:0,
                        })
                    },
                    onLeave:()=>{
                        gsap.to(".logo",{
                            filter:"brightness(1)",
                            duration:0,
                        })
                    },
                    onLeaveBack:()=>{
                        gsap.to(".logo",{
                            filter:"brightness(1)",
                            duration:0,
                        })
                    }
                }
                
            })
        })
        return()=>ctx.revert()

    },[])
    useEffect(()=>{

    },[])

    return (
        <div className="bg-[#215CFF] text-white py-[3vw]" id='infocarousel'>
                <h3 className='ml-[5vw] text-white font-display font-medium text-[3vw] w-[30%] capitalize leading-[1.3] pb-[3vw] max-sm:text-[7.5vw] max-sm:w-[85%] max-sm:pb-[10vw]'>Sort All Your Payments And Cash Flow Needs</h3>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={70}
                    speed={1000}
                    pagination={{ clickable: true }}
                    // autoplay={{
                    //     delay: 5000,
                    //     disableOnInteraction: false
                    // }}
                    breakpoints={{
                        768: { slidesPerView: 3 }
                    }}
                    className="!px-[5vw] swipe"
                >
                    {content.map((c, index) => (
                        <SwiperSlide className='pb-16' key={index}>
                            <Card img={c.img} text={c.text} bgColor={c.bgColor} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Cursor/>
        </div>
    )
}

const Card = ({ img, bgColor, text }) => {
    return (
        <div style={{ background: bgColor }} className="overflow-hidden group rounded-[3vw] hover:scale-[0.99] duration-500 transition-transform max-sm:rounded-[9vw]">
            <div className='relative h-[27vw] w-full rounded-b-[3vw] overflow-hidden max-sm:h-[110vw] max-sm:rounded-[9vw]'>
                <Image src={img} alt='feature image' fill className='object-cover group-hover:scale-[1.05] duration-500' />
            </div>
            <p className='text-black-1 py-7 px-6'>{text}</p>
        </div>
    )
}