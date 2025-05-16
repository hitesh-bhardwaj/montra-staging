import React, {  useEffect } from 'react'
import gsap from 'gsap'


function Cursor() {
    useEffect(()=>{
        const ctx = gsap.context(()=>{

            const cursor = document.getElementById("cursor")
            const swipe = document.querySelectorAll(".swipe")
            const text = document.querySelector(".cursor-text")
            const onmousemove =(e)=>{
             const{clientX,clientY} = e
             gsap.to(cursor,{
                x:clientX+35,
                y:clientY
             })
                
             
            }
            const onmouseenter =(e)=>{
                const slide = e.target
                if(slide.classList.contains('swipe')){
                    gsap.to(cursor,{scale:1,
                        duration:0.5,
                        ease:"power4.inout"
                    })
                    text.style.display='block'
                }else{
                    gsap.to(cursor,{scale:1})
                }
            }
            const onmouseleave = (e)=>{
                gsap.to(cursor,{
                    scale:0
                })
                text.style.display='none'
            }
            document.addEventListener("mousemove",onmousemove)
            swipe.forEach((swiper)=>{
                swiper.addEventListener("mouseenter",onmouseenter)
                swiper.addEventListener("mouseleave",onmouseleave)
            })

        })
        return()=>ctx.revert()
         
    },[])
  return (
    <>
    <div id='cursor' className='cursor fixed top-[-2%] left-[-2%] scale-0 h-[3vw] w-[8vw] rounded-[2vw] pointer-events-none z-[999]  flex justify-center items-center bg-white/60 backdrop-blur-sm'>
        <span className='cursor-text tracking-wider text-[1.2vw] font-display text-primary bg-transparent
         font-semibold drop-shadow-2xl' >Drag</span>
    </div>
    </>
  )
}

export default Cursor
