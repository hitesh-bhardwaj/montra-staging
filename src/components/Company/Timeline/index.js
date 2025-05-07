'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import TimelineSlide from './TimelineSlide';
import MarqueeBackground from './MarqueeBackground';
import { timelineData } from './TimelineData';
import { ArrowRight } from '@/components/Buttons/icons';

const years = [2019, 2020, 2021, 2022, 2023, 2024];

export default function Timeline() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const nextSlide = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % years.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + years.length) % years.length);
    };

    const goToSlide = (index) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    return (
        <section className="relative w-full h-screen overflow-hidden bg-primary text-white">
            <div className='absolute top-[5%] text-center left-1/2 -translate-x-1/2 w-full'>
                <h3 className='leading-[1.2] font-medium font-display text-[5.7vw]'>Our Story from Vision to Impact</h3>
            </div>
            <div className='absolute z-[100] bottom-[7%] left-1/2 -translate-x-1/2 flex space-x-[2vw]'>
                <button onClick={prevSlide} className="border w-[3.2vw] h-[3.2vw] flex items-center justify-center border-white hover:bg-white hover:text-primary text-white duration-300 rounded-full" aria-label='previous slide'>
                    <ArrowRight className='w-4 h-4 rotate-180' />
                </button>
                {/* Year Selector */}
                <div
                    className="transform flex gap-2 bg-white/20 rounded-full "
                    onMouseLeave={() => setHoveredIndex(null)} // Reset on leave
                >
                    {years.map((year, index) => {
                        const isActive = activeIndex === index;
                        const isHovered = hoveredIndex === index;
                        const shouldShowPill = hoveredIndex !== null ? isHovered : isActive;

                        return (
                            <div
                                key={year}
                                className="relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                            >
                                {shouldShowPill && (
                                    <motion.div
                                        layoutId="pill"
                                        className="absolute inset-0 bg-primary rounded-full z-0"
                                        transition={{ type: 'ease', stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <button
                                    onClick={() => goToSlide(index)}
                                    className={`relative z-10 px-[1.5vw] font-display text-[1vw] py-[0.8vw] rounded-full transition-colors duration-300`}
                                >
                                    {year}
                                </button>
                            </div>
                        );
                    })}
                </div>
                <button onClick={nextSlide} className="border w-[3.2vw] h-[3.2vw] flex items-center justify-center border-white hover:bg-white hover:text-primary text-white duration-300 rounded-full" aria-label='next slide'>
                    <ArrowRight className='w-4 h-4' />
                </button>
            </div>

            {/* Slide Content */}
            <MarqueeBackground year={years[activeIndex]} />
            <AnimatePresence custom={direction} mode="wait">
                <TimelineSlide
                    key={years[activeIndex]}
                    year={years[activeIndex]}
                    direction={direction}
                    data={timelineData[activeIndex]}
                />
            </AnimatePresence>
        </section>
    );
}
