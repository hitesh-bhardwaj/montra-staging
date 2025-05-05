import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const MontraAnim = () => {
    useEffect(()=>{
      const ctx = gsap.context(()=>{
        const tl = gsap.timeline({scrollTrigger:{
            trigger:"#montraAnim",
            start:"top top",
            end:"bottom top",
            markers:true,
            scrub:true
        }})
        tl.to(".m",{
            top:"10%",
            left:"5%",
            scale:0.35,
        })
        .to(".o",{
            top:"40%",
            left:"15%",
            scale:0.35,
            delay:-0.5
        })
        .to(".n",{
            top:"0%",
            left:"35%",
            scale:0.35,
            delay:-0.5
        })
        .to(".t",{
            scale:0.35,
            delay:-0.5
        })
      
        .to(".r",{
            top:"60%",
            left:"65%",
            scale:0.35,
            delay:-0.5
        })
        .to(".a",{
            top:"40%",
            left:"80%",
            scale:0.35,
            delay:-0.5
        })
        .to(".circle",{
            opacity:1,
            delay:-0.5
        })
      })
      return()=>ctx.revert()
    },[])
  return (
  <section className='w-screen h-[400vh] bg-[#fbfbfb] relative' id='montraAnim'>
    <div className='w-full flex justify-center items-center h-[50vw] sticky top-[15%]'>
    <div className='flex w-full h-full relative text-[6vw] font-display font-medium'>
        <span className='absolute left-[35%] top-[30%] m'> <span className='bg-[#D9F7C5] p-[5vw] rounded-full absolute top-[-8%] border-black border-[3px] left-[-55%] z-[-1] circle opacity-0' ></span>M</span>
        <span className='absolute left-[40%] top-[30%] o'><span className='bg-[#FFEAEE] p-[5vw] rounded-full absolute top-[-8%]  left-[-60%] z-[-1] circle opacity-0'></span>O</span>
        <span className='absolute left-[44.5%] top-[30%] n'><span className='bg-[#EAF1FF] p-[5vw] rounded-full absolute top-[-8%]  left-[-75%] z-[-1] circle opacity-0'></span>N</span>
        <span className='absolute left-[49%] top-[30%] t'><span className='bg-[#CAC5F7] p-[5vw] rounded-full absolute top-[-8%]  left-[-95%] z-[-1] circle opacity-0'></span>T</span>
        <span className='absolute left-[52.5%] top-[30%] r'><span className='bg-[#FFD7CB] p-[5vw] rounded-full absolute top-[-8%]  left-[-85%] z-[-1] circle opacity-0'></span>R</span>
        <span className='absolute left-[56.5%] top-[30%] a'><span className='bg-[#FEFFA7] p-[5vw] rounded-full absolute top-[-8%]  left-[-85%] z-[-1] circle opacity-0'></span>A</span>

    </div>

    </div>


  </section>
  )
}

export default MontraAnim