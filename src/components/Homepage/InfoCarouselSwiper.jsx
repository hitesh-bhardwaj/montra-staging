'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'

const content = [
    { img: '/assets/images/homepage/features-1.png', bgColor: '#F1FFE8', text: 'Pay anyone, anywhere with a click. Save up to 1 day per week with automated payments.' },
    { img: '/assets/images/homepage/features-2.png', bgColor: '#FFEAEE', text: 'Get paid faster. Boost cash flow and save time with automated accounts receivables.' },
    { img: '/assets/images/homepage/features-3.png', bgColor: '#EAF1FF', text: 'Access working capital. Access pre-approved credit instantly, in your workflow.' },
    { img: '/assets/images/homepage/features-1.png', bgColor: '#F1FFE8', text: 'Pay anyone, anywhere with a click. Save up to 1 day per week with automated payments.' },
    { img: '/assets/images/homepage/features-2.png', bgColor: '#FFEAEE', text: 'Get paid faster. Boost cash flow and save time with automated accounts receivables.' },
    { img: '/assets/images/homepage/features-3.png', bgColor: '#EAF1FF', text: 'Access working capital. Access pre-approved credit instantly, in your workflow.' },
]

export default function InfoCarouselSwiper() {
    return (
        <div className="bg-[#215CFF] text-white py-[3vw]">
                <h3 className='ml-[5vw] text-white font-display font-medium text-[2.85vw] w-1/3 capitalize leading-[1.3] pb-[3vw]'>All your payments and cash flow needs, sorted</h3>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={60}
                    speed={1000}
                    pagination={{ clickable: true }}
                    // autoplay={{
                    //     delay: 5000,
                    //     disableOnInteraction: false
                    // }}
                    breakpoints={{
                        768: { slidesPerView: 3 }
                    }}
                    className="!px-[5vw]"
                >
                    {content.map((c, index) => (
                        <SwiperSlide className='pb-16' key={index}>
                            <Card img={c.img} text={c.text} bgColor={c.bgColor} />
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    )
}

const Card = ({ img, bgColor, text }) => {
    return (
        <div style={{ background: bgColor }} className="overflow-hidden group rounded-[3vw] hover:scale-[0.99] duration-500 transition-transform">
            <div className='relative h-[27vw] w-full rounded-b-[3vw] overflow-hidden'>
                <Image src={img} alt='feature image' fill className='object-cover group-hover:scale-[1.05] duration-500' />
            </div>
            <p className='text-black-1 py-7 px-6'>{text}</p>
        </div>
    )
}