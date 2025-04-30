import { useEffect, useRef } from "react";
import { AppleStoreButton, PlayStoreButton } from "../Buttons";
import gsap from "gsap";
// import { SplitInLine } from "../splitTextUtils";
import { initSplitLines } from "@/utils/splitText";
import {useLenis} from "lenis/react"


export default function Hero() {
  const heroRef = useRef(null)
  const lenis = useLenis()
  useEffect(()=>{
     initSplitLines();
    const ctx = gsap.context(()=>{
      const heroLines = heroRef.current.querySelectorAll('.single-line')
          gsap.to(heroLines, {
              maskPosition: "0% 100%",
              stagger: 0.2,
              duration:2,
              delay:4.2,
              ease: 'none'
          })

          gsap.from(".heroFadeUp",{
            yPercent:70,
            opacity:0,
            delay:4.5,
            duration:1,
            stagger:0.15
          })
    });
    return () => ctx.revert();
},[]);
useEffect(() => {
  lenis && lenis.stop();

  const timeout = setTimeout(() => {
    lenis && lenis.start();
  }, 5000);

  return()=>clearTimeout(timeout)
}, [lenis]);

  return (
    <section id="hero" ref={heroRef}>
      <div className="h-full flex items-center justify-center text-center px-[4vw]">
        <div className="w-3/5 mx-auto space-y-[1.2vw] pt-[14vw] py-[5vw]">
          <h1 data-split="lines" className="text-[5.7vw] font-display font-medium capitalize leading-[1.15] heroAnim"><span className="text-primary">One app</span> to manage all your  finances</h1>
          <p data-split="lines" className="font-body w-5/6 mx-auto heroAnim">Simply download Montra app to set-up your Montra Personal Account to access Marketplaces for multi-party payments & Lending Products.</p>
          <div className=" flex gap-10 justify-center mt-[4vw]">
            <div className="heroFadeUp">

            <AppleStoreButton />
            </div>
            <div className="heroFadeUp">

            <PlayStoreButton />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}