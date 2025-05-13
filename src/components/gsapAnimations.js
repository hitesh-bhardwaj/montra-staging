/* eslint-disable react-hooks/rules-of-hooks */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitInLineWord, SplitInLine } from "./splitTextUtils";
import { useEffect } from "react";
import { useRouter } from "next/router";


gsap.registerPlugin(ScrollTrigger);

// export function headingBlur() {
//     useEffect(()=>{
//         const ctx = gsap.context(()=>{
//             const headingAnim = document.querySelectorAll(".headinganim");
//             headingAnim.forEach((headingAnim)=>{
//                 SplitInLineWord(headingAnim);
//                 const headingWord = headingAnim.querySelectorAll(".word");
//                 gsap.from(headingWord,{
//                     scrollTrigger: {
//                         trigger: headingWord,
//                         start: 'top 90%', 


//                       },
//                       opacity: 0,
//                       yPercent:20,
//                       filter: 'blur(8px)',
//                       stagger:0.08,
//                       duration:1
//                 });
//             })
//         });

//         return () => ctx.revert();
//     },[]);

// }
export function headingAnim() {
  const router = useRouter();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const headingAnim = document.querySelectorAll(".headingAnim");
      headingAnim.forEach((headingAnim) => {
        SplitInLine(headingAnim);
        const headingWord = headingAnim.querySelectorAll(".line-internal");
        gsap.fromTo(headingWord, {
          maskPosition: "100% 100%",
        }, {
          maskPosition: "0% 100%",
          stagger: 0.2,
          duration: 5.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingWord,
            start: 'top 85%',
            lazy: true,
          },
        });
      })
    });
    return () => ctx.revert();
  }, [router.asPath]);

}

export function fadeUpAnim() {
  useEffect(() => {
    if (globalThis.innerWidth > 0) {
      const ctx = gsap.context(() => {
        const content = document.querySelectorAll(".fadeupanim");
        content.forEach((content) => {
          gsap.from(content, {
            scrollTrigger: {
              trigger: content,
              start: "top 75%",
            },
            opacity: 0,
            y: 50,
            ease: "power3.out",
            duration: 2,
          });
        });
      });
      return () => ctx.revert();
    }
  });
}

export function lineAnim() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lineanims = document.querySelectorAll(".lineanim");
      lineanims.forEach((lineanim) => {
        gsap.from(lineanim, {
          scrollTrigger: {
            trigger: lineanim,
            start: "top 80%",
          },
          scaleX: 0,
          transformOrigin: "left",
          duration: 1,
          yPercent: 100,
          stagger: 0.07,
          ease: "power3.out",
        });
      });
    })
    return () => ctx.revert()
  }, []);
}