import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomEase from "gsap/dist/CustomEase";
gsap.registerPlugin(CustomEase);

// Create your custom ease (only once, globally safe)
CustomEase.create("myBezier", "0.86,0,0.07,1");

const LoaderCopy = () => {
    const [hidden ,setHidden] = useState(false)
    useEffect(()=>{
      const ctx = gsap.context(()=>{
        if(globalThis.innerWidth>1024){
            
            const tl = gsap.timeline()
            tl.fromTo(".svg-arrow",{
            xPercent:-100  
            },{
                delay:1,
                opacity:1,
              xPercent:-80
            })
    
            .fromTo(".montra-logo",{
                opacity:0,
                y:"44vh"
            },{
                opacity:1,
                delay:-0.3,
            })
            .to(".svg-arrow",{
              xPercent:0,
            //   delay:0.3,
              duration:1.2,
              ease:"myBezier"
            })
            
            .to(".upper-overlay",{
                duration:1.2,
                delay:-0.5,
                ease:"myBezier",
                clipPath: "inset(0% 0% 100% 0%)",
            })
            .to(".lower-overlay",{
                duration:1.2,
                delay:-1.2,
                ease:"myBezier",
                clipPath: "inset(100% 0% 0% 0%)",
            })
            .to(".montra-logo",{
                y:"0vh",
                duration: 0.9,
                delay:-0.3,
                ease:"power3.inOut",
            }, '-=0.72')
            .to(".svg-arrow",{
                opacity:0,
                delay:-0.5,
                onComplete : () => {
                    gsap.set("#loader-copy", {
                        opacity: 0,
                    });
                    setHidden(true)
                }
            })
            .to("#loader-copy",{
                opacity:0,
                    onComplete:()=>{
                    setHidden(true)
                 }
            })
        }
        if(globalThis.innerWidth<1024&&globalThis.innerWidth>541){
                 
            const tl = gsap.timeline()
            tl.fromTo(".svg-arrow",{
            xPercent:-150  
            },{
                delay:1,
                opacity:1,
              xPercent:-80
            })
    
            .fromTo(".montra-logo",{
                opacity:0,
                y:"45vh"
            },{
                opacity:1,
                delay:-0.3,
            })
            .to(".svg-arrow",{
              xPercent:0,
            //   delay:0.3,
              duration:1.2,
              ease:"myBezier"
            })
            
            .to(".upper-overlay",{
                duration:1.2,
                delay:-0.5,
                ease:"myBezier",
                clipPath: "inset(0% 0% 100% 0%)",
            })
            .to(".lower-overlay",{
                duration:1.2,
                delay:-1.2,
                ease:"myBezier",
                clipPath: "inset(100% 0% 0% 0%)",
            })
            .to(".montra-logo",{
                y:"0vh",
                duration: 0.9,
                delay:-0.3,
                ease:"power3.inOut",
            }, '-=0.72')
            .to(".svg-arrow",{
                opacity:0,
                delay:-0.5,
                onComplete : () => {
                    gsap.set("#loader-copy", {
                        opacity: 0,
                    });
                    setHidden(true)
                }
            })
            .to("#loader-copy",{
                opacity:0,
                    onComplete:()=>{
                    setHidden(true)
                 }
            })
        }
        if(globalThis.innerWidth<541){
            const tl = gsap.timeline()
            tl.fromTo(".svg-arrow",{
            xPercent:-150  
            },{
                delay:1,
                opacity:1,
              xPercent:-100
            })
    
            .fromTo(".montra-logo",{
                opacity:0,
                y:"46vh"
            },{
                opacity:1,
                delay:-0.3,
            })
            .to(".svg-arrow",{
              xPercent:-50,
            //   delay:0.3,
              duration:1.2,
              ease:"myBezier"
            })
            
            .to(".upper-overlay",{
                duration:1.2,
                delay:-0.5,
                ease:"myBezier",
                clipPath: "inset(0% 0% 100% 0%)",
            })
            .to(".lower-overlay",{
                duration:1.2,
                delay:-1.2,
                ease:"myBezier",
                clipPath: "inset(100% 0% 0% 0%)",
            })
            .to(".montra-logo",{
                y:"0vh",
                duration: 0.9,
                delay:-0.3,
                ease:"power3.inOut",
            }, '-=0.72')
            .to(".svg-arrow",{
                opacity:0,
                delay:-0.5,
                onComplete : () => {
                    gsap.set("#loader-copy", {
                        opacity: 0,
                    });
                    setHidden(true)
                }
            })
            .to("#loader-copy",{
                opacity:0,
                    onComplete:()=>{
                    setHidden(true)
                 }
            })
        }
      })
      return()=>ctx.revert()
    },[])
  return (
    <section
      className={`w-screen h-screen  fixed top-0 left-0 z-[999]  ${hidden?"hidden":""}`}
      id="loader-copy"
    >
        {/* <div className="w-screen h-screen absolute top-0 left-0 bg-primary bg-overlay"/> */}
        <div className="w-screen h-[50vh] bg-primary absolute top-0 left-0 upper-overlay"/>
        <div className="w-screen h-[50vh] bg-primary absolute bottom-0 left-0 lower-overlay"/>

       
      <div className="w-[120vw] h-full flex justify-center items-center">
        <div className="absolute top-[50%]  w-[10vw] z-[2] translate-y-[-50%] ml-[4vw] left-0 logo-container">
            <Image src={"/montra-logo.svg"} alt="montra-logo" width={300} height={200} className="w-full h-full object-contain montra-loader-logo opacity-0"/>
        </div>
        
        <svg
          width="2419"
          height="261"
          className=" svg-arrow opacity-0 max-sm:scale-[2] max-md:scale-[1.4]"
          viewBox="0 0 1919 161"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1918.91 80.9268L1806.67 160.977L1813.9 119.399H-390.45V40.5957H1827.61L1834.64 0.132812L1918.91 80.9268Z"
            fill="white"
          />
        </svg>
      </div>

      
    </section>
  );
};

export default LoaderCopy;
