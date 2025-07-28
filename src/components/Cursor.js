import React, { useEffect } from 'react'
import gsap from 'gsap'

function Cursor() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const cursor = document.getElementById("cursor")
            const swipe = document.querySelectorAll(".swipe")
            const text = document.querySelector(".cursor-text")
            let currentX = 0
            let currentY = 0

            const lerp = (start, end, amt) => (1 - amt) * start + amt * end

            let targetX = 0
            let targetY = 0

            const onmousemove = (e) => {
                targetX = e.clientX + 35
                targetY = e.clientY
            }
            const animate = () => {
                currentX = lerp(currentX, targetX, 0.15)
                currentY = lerp(currentY, targetY, 0.15)
                gsap.set(cursor, { x: currentX, y: currentY })
                requestAnimationFrame(animate)
            }
            animate()


            const onmouseenter = (e) => {
                const slide = e.target
                if (slide.classList.contains('swipe')) {
                    gsap.to(cursor, {
                        scale: 1,
                        duration: 0.5,
                        ease: "power4.inout"
                    })
                    text.style.display = 'block'
                }
            }
            const onmouseleave = (e) => {
                gsap.to(cursor, {
                    scale: 0
                })
                text.style.display = 'none'
            }
            document.addEventListener("mousemove", onmousemove)
            swipe.forEach((swiper) => {
                swiper.addEventListener("mouseenter", onmouseenter)
                swiper.addEventListener("mouseleave", onmouseleave)
            })

        })
        return () => ctx.revert()

    }, [])
    return (
        <>
            <div id='cursor' className='cursor fixed top-[-2%] left-[-2%] scale-0 h-[3vw] w-[8vw] rounded-[2vw] pointer-events-none z-[999] flex justify-center items-center bg-white'>
                <span className='cursor-text tracking-wider text-[1.2vw] font-display text-black bg-transparent font-semibold drop-shadow-2xl'>Drag</span>
            </div>
        </>
    )
}

export default Cursor
