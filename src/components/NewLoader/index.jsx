import Image from "next/image";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const NewLoader = () => {
  const [hidden ,setHidden] = useState(false)
  useEffect(()=>{
   const ctx = gsap.context(()=>{
    if(globalThis.innerWidth>1024){
      const tl = gsap.timeline()
  
       tl.to(".loader-phonemockup",{
        scale:1,
        opacity:1,
        duration:1.5,
        ease:"power3.inOut"
       })
       .to(".loader-phonemockup",{
        yPercent:104.5,
        zIndex:100,
        duration:1.5,
        ease:"power3.inOut"
       })
       .to(".mockup-container",{
        zIndex:100,
        delay:-0.5
       })
       .to(".overlay",{
        opacity:0,
        delay:-1.2,
       onComplete:()=>{
        setHidden(true)
       }
       })

    }
    if(globalThis.innerWidth<1024&&globalThis.innerWidth>541){
      const tl = gsap.timeline()
  
      tl.to(".loader-phonemockup",{
       scale:1,
       opacity:1,
       duration:1.5,
       ease:"power3.inOut"
      })
      .to(".loader-phonemockup",{
       yPercent:150.5,
       zIndex:100,
       duration:1.5,
       ease:"power3.inOut"
      })
      
      .to(".mockup-container",{
       zIndex:100,
       delay:-0.5
      })
      .to(".overlay",{
       opacity:0,
       delay:-1.2,
      onComplete:()=>{
       setHidden(true)
      }
      })
    }
    if(globalThis.innerWidth<541){
      const tl = gsap.timeline()
  
      tl.to(".loader-phonemockup",{
       scale:0.9,
       opacity:1,
       duration:1.5,
       ease:"power3.inOut"
      })
      .to(".loader-phonemockup",{
       yPercent:180,
       zIndex:100,
       duration:1.5,
       ease:"power3.inOut"
      })
      .to(".loader-phonemockup",{
        opacity:0,
      })
      .to(".mockup-container",{
       zIndex:100,
       delay:-0.5
      })
      .to(".overlay",{
       opacity:0,
       delay:-1.2,
      onComplete:()=>{
       setHidden(true)
      }
      })
    }
   })
   return()=>ctx.revert()
  },[])
  return (
    <div className={`w-screen h-screen bg-transparent fixed top-0 left-0 z-[999] flex justify-center ${hidden?"hidden":""}`} id="loader">
      <div className="w-screen h-screen absolute top-0 left-0 bg-white overlay"/>

  
      <div className="relative  z-10 w-[20.3vw] h-[30vw] translate-y-[20%] max-sm:translate-y-[30%] max-sm:w-[40vw] max-sm:h-[120vw] max-md:w-[80vw] max-md:h-[80vw]">
        {/* <Image
          // id="hero-phone-image"
          src="/assets/images/montra-loader-mockup.png"
          alt="App mockup"
          width={1200}
          height={1400}
          className="w-full loader-phonemockup h-auto block max-sm:translate-x-0 scale-[1.4] opacity-0 max-sm:object-contain max-sm:w-[80vw] max-sm:h-[130vw]"
        /> */}
      </div>
    </div>
  );
};

export default NewLoader;
