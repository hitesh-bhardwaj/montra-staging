'use client'

import { useEffect, useRef } from 'react'
import { initSplitLines } from '@/utils/splitText'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}
export default function SectionBreak() {
    const sectionRef = useRef(null)
    const iconsContainer = useRef(null)

    useEffect(() => {
        initSplitLines();
        const lines = sectionRef.current.querySelectorAll('.single-line')
        if (globalThis.innerWidth > 1024) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    end: 'bottom 60%',
                    scrub: 0.25,
                    // markers: true,
                }
            })
                .to(lines, {
                    maskPosition: "40% 100%",
                    stagger: 0.25,
                    ease: 'none'
                })
        }
        else{
            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.25,
                    // markers: true,
                }
            })
                .to(lines, {
                    maskPosition: "40% 100%",
                    stagger: 0.25,
                    ease: 'none'
                })
        }
      

        // — now the floating icons logic
        const iconPaths = [
            '/assets/images/homepage/pay.svg',
            '/assets/images/homepage/invest.svg',
            '/assets/images/homepage/borrow.svg',
            '/assets/images/homepage/receive.svg',
            '/assets/images/homepage/sell.svg',
            '/assets/images/homepage/insaurance.svg',
        ]

        let spawnTimeout

        function spawnIcon() {
            const container = iconsContainer.current
            // pick a random icon
            const src = iconPaths[Math.floor(Math.random() * iconPaths.length)]
            const img = document.createElement('img')
            img.src = src
            img.alt = 'image'
            img.className = 'floating-icon absolute bottom-0'
            // random horizontal position
            img.style.left = `${Math.random() * 100}%`
            // random size (20–60px)
            const size = gsap.utils.random(40, 80)
            img.style.width = `${size}px`
            // random starting opacity
            img.style.opacity = `${gsap.utils.random(0.8, 1)}`
            // allow transforms
            img.style.willChange = 'transform, opacity'

            container.appendChild(img)

            // **SET A RANDOM Z-ROTATION BETWEEN –15° AND +15°**
            gsap.set(img, {
                rotationZ: gsap.utils.random(-15, 15),
                transformOrigin: '50% 50%'  // ensure it rotates around its center
            });

            // animate it up (container height + a little extra)
            const dist = container.clientHeight * 1.2
            const duration = gsap.utils.random(3, 6)
            gsap.to(img, {
                y: -dist,
                opacity: 0,
                ease: 'none',
                duration,
                onComplete: () => img.remove(),
            })

            // schedule next spawn (0.3–1.5s later)
            const nextIn = gsap.utils.random(0.3, 1.5) * 1000
            spawnTimeout = window.setTimeout(spawnIcon, nextIn)
        }
        spawnIcon()
        return () => {
            clearTimeout(spawnTimeout)
            gsap.killTweensOf('*')
        }
    }, [])

    return (
        <section
            id='section-break'
            ref={sectionRef}
            className="relative h-screen w-screen overflow-hidden px-[4vw] bg-[#FBFBFB] max-md:h-[70vh] max-sm:h-screen"
        >
            <div
                ref={iconsContainer}
                className="absolute inset-0 pointer-events-none overflow-hidden"
            />
            <div className="h-full flex items-center justify-center relative text-center w-[88%] mx-auto max-sm:w-[95%]">
                <h2
                    data-split="lines"
                    className="text-[5.7vw] font-medium font-display leading-[1.2] text-break text-black-1 max-sm:text-[10.5vw] max-md:text-[7.5vw]"
                >
                    Montra helps users shift from cash to digital payments besides making credit,
                    insurance, and investments easily accessible.
                </h2>
               
            </div>
        </section>
    )
}

