'use client'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useEffect, useRef, useState } from "react";
import { LinkButton } from "../Buttons";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function PaymentTrial() {
    const [mode, setMode] = useState("personal");
      const sliderRef = useRef(null);
    
      const swapMode = (newMode) => {
        if (mode === newMode) return;
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        setMode(newMode);
        setTimeout(() => {
          const firstCard = document.querySelector('.useCase-item');
          if (firstCard) {
            gsap.to(window, {
              scrollTo: {
                y: firstCard,
                offsetY: 0, 
                autoKill: false,
              },
              duration: 0.8,
              ease: "power2.out",
              onComplete: () => {
                ScrollTrigger.refresh();
              }
            });
          }
        }, 100); 
      };
      
    
      useEffect(() => {
        const x = mode === "personal" ? "2%" : "98%";
        gsap.to(sliderRef.current, {
          xPercent: mode === "personal" ? 0 : 100,
          duration: 0.4,
          ease: "power2.out",
        });
      }, [mode]);

    if (globalThis.innerWidth > 1024) {
 useEffect(() => {
            let ctx = gsap.context(() => {
              const sectionLength = document.getElementsByClassName('useCase-item').length;
              const foc_container = document.querySelector('.useCases-items');
              const foc_sections = gsap.utils.toArray(".useCases-items .useCase-item");

              const totalHeight = sectionLength * window.innerHeight;
              foc_container.style.height = `${totalHeight}px`;
              const sections = gsap.utils.toArray('.useCase-item');
          
              const endScroll = (foc_sections.length - 1) * window.innerHeight;
              const scrollTween = gsap.timeline({
                scrollTrigger: {
                    trigger: "#use-cases",
                    pin: true,
                    scrub: 1,
                    start: 'top top',
                    end: `+=${endScroll}`,
                    snap: {
                      snapTo: 1 / (foc_sections.length - 1),
                      inertia: false,
                      duration: { min: 0.1, max: 0.5 }
                    },
                    markers: false,
                    invalidateOnRefresh: true,
                  }
                  
              });
          
              scrollTween.to(sections, {
                yPercent: -100 * (sections.length - 1),
                ease: 'none',
              });
            });
            return () => ctx.revert();
          }, [ mode]);
          

        useEffect(() => {
            let ctx = gsap.context(() => {
                const UseCaseList = document.querySelectorAll('.use-cases-list li')

                gsap.fromTo(UseCaseList, {
                    scrollTrigger: {
                        trigger: '.use-cases-list',
                        start: 'top 80%',
                    },
                    opacity: 0,
                }, {
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power2.out'
                });
            });
              
            return () => ctx.revert();
        }, []);


    useEffect(() => {
        if (window.innerWidth < 1024) return;
      
        const images = gsap.utils.toArray(".frame-image-wrapper");
        const cards = gsap.utils.toArray(".useCase-item");
        let currentIndex = -1;
      
        cards.forEach((card, idx) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top center",
            end: "bottom center",
            onEnter: () => showImage(idx),
            onEnterBack: () => showImage(idx),
          });
        });
      
        function showImage(index) {
          if (index === currentIndex) return;
      
          const newImage = images[index];
          const prevImage = images[currentIndex];
      
          if (prevImage) {
            gsap.to(prevImage, {
              opacity: 0,
              duration: 0.5,
              ease: "power2.out",
              zIndex: 10,
            });
          }
      
          if (newImage) {
            gsap.set(newImage, { x: 100, zIndex: 20 });
            gsap.to(newImage, {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
            });
          }
      
          currentIndex = index;
        }
      
        return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      }, [mode]); 
      
      
      useEffect(() => {
        if (window.innerWidth < 1024) return;
      
        const sections = gsap.utils.toArray(".useCase-item");
        const progressLine = document.getElementById("progress-line");
        const anchors = gsap.utils.toArray(".use-cases-list a");
      
        const circles = stepsData[mode].map((_, i) =>
          document.getElementById(`circle-${i}`)
        );
      
        const lineStart = 5.5;
        const lineEnd = 5.5 + (stepsData[mode].length - 1) * 63;
      
        gsap.to(progressLine, {
          attr: { y2: lineEnd },
          ease: "none",
          scrollTrigger: {
            trigger: "#use-cases",
            start: "top top",
            end: () => `+=${(sections.length - 1) * window.innerHeight}`,
            scrub: true,
          },
        });
      
        sections.forEach((section, i) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => activate(i),
            onEnterBack: () => activate(i),
          });
        });
      
        function activate(index) {
            const circleCount = stepsData[mode].length;
          
            for (let i = 0; i < 7; i++) {
              const circle = document.getElementById(`circle-${i}`);
              if (!circle) continue;
          
              if (i < circleCount) {
                circle.style.display = "block";
                gsap.to(circle, {
                  fill: i <= index ? "#215CFF" : "#C2C2C2",
                  stroke: i <= index ? "#215CFF" : "#C2C2C2",
                  duration: 0.3,
                });
              } else {
                circle.style.display = "none";
              }
            }
          
            anchors.forEach((anchor, i) => {
              anchor.classList.toggle("active", i === index);
              anchor.style.color = i === index ? "#215CFF" : "#C2C2C2";
            });
          }
          
      
        anchors.forEach((anchor, i) => {
          anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSection = sections[i];
            if (!targetSection) return;
            gsap.to(window, {
              scrollTo: {
                y: targetSection,
                offsetY: 50,
                autoKill: false,
              },
              duration: 1,
              ease: "power2.inOut",
            });
          });
        });
      
        return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      }, [mode]);     
    }

    const handleSkip = () => {
        const next = document.getElementById("section-break");
        if (next) next.scrollIntoView({ behavior: "smooth" });
      };
    return (
        <>
            <section id="use-cases" className="lg:block  h-screen overflow-hidden relative">
                <div className="content">

                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 flex gap-2 bg-white border border-[#E2EFFF] rounded-full p-0.5 z-[999] min-w-[220px]">
      <div
        ref={sliderRef}
        className="absolute top-[6%] left-0 w-1/2 h-[88%] rounded-full bg-primary"
      />
      <button
        onClick={() => swapMode("personal")}
        className={`relative z-10 px-[1.2vw] py-[0.5vw] rounded-full text-[1vw] transition-colors duration-200 ${mode === "personal" ? "text-white" : "text-black"
          }`}
      >
        Personal
      </button>
      <button
        onClick={() => swapMode("business")}
        className={`relative z-10 px-[1.2vw] py-[0.5vw] rounded-full text-[1vw] transition-colors duration-200 ${mode === "business" ? "text-white" : "text-black"
          }`}
      >
        Business
      </button>
    </div>

                    <div id="useCase-Scroll">
                        <div className="useCases-Container w-full overflow-hidden" id="panels">

                        <div className="useCases-items fadeUp flex w-full h-screen" id="panels-container">
                        <div className="sticky top-[5%] left-0 h-[20vw] w-[20%] flex gap-3 items-start justify-start p-6 z-10">
  {/* SVG timeline */}
  <div className="relative h-[20vw] w-[20px]">
    <svg
      className="absolute top-0 left-0 h-full w-full"
      viewBox="0 0 14 328"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="progress-svg"
    >
      <line x1="6.95801" y1="5.5" x2="6.95799" y2="315.5" stroke="#EEEEEE" strokeWidth="3" />
      <line
        id="progress-line"
        x1="6.95801"
        y1="5.5"
        x2="6.958"
        y2="5.5"
        stroke="#215CFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
    {stepsData[mode].map((_, i) => (
  <circle
    key={i}
    id={`circle-${i}`}
    cx="6.95801"
    cy={6 + i * 63}
    r="5.5"
    fill="white"
    stroke="#EEEEEE"
    strokeWidth="2"
    style={{ display: i < stepsData[mode].length ? 'block' : 'none' }} 
  />
))}

    </svg>
  </div>

  {/* List items aligned with circles */}
  <ul className="use-cases-list flex flex-col gap-[27px] h-full ">
  {stepsData[mode].map((item, index) => (
    <li key={index} >
      <a
        href={`#${item.id}`}
        className="anchor text-[1vw] !font-body  duration-300 text-[#D2D2D2]"
      >
        {item.navTitle}
      </a>
    </li>
  ))}
</ul>

</div>



  <div className="w-[80%]">
  <div
  className={`useCases-items flex flex-col pt-[10%] ${mode === "personal" ? "h-[500vh]" : "h-[700vh]"}`}
>
 {/* Use Cases Item 1 */}
 {stepsData[mode].map((item,index) => (
  <div className="useCase-item w-full h-screen pt-[10%]" id={item.id} key={index}>
    <div className="use_case_content max-w-[700px] mx-auto  py-[5vw] px-[3vw]">
      <div className="useCase-item-right w-full">
      <h2 className="text-[3.4vw] font-display font-medium leading-[1.2] w-[80%]">
                  {item.title}
                </h2>
        <div className="space-y-[1.5vw] py-[2vw]" dangerouslySetInnerHTML={{ __html: item.desc }} />
        <div>
                         <LinkButton text="Learn More" href={item.link} />
                       </div>
      </div>
    </div>
  </div>
))}

    </div>
    </div>

    <div className="sticky top-0 right-0 h-screen w-[60%] flex items-center justify-center z-10">
  <Image className="absolute inset-0 object-contain top-0 left-0 h-full w-full z-20" alt="mobile frame" src="/assets/animation/frame.png" width={500} height={800} quality={100} />
  {stepsData[mode].map((step, idx) => (
  <div
    key={idx}
    className="frame-image-wrapper absolute top-0 left-0 h-full w-full opacity-0 translate-x-full"
    data-index={idx}
  >
    <Image
      src={step.image}
      alt={step.title}
      width={415}
      height={750}
      quality={100}
      className="w-full h-full absolute top-0 left-0 object-contain"
    />
    {step.highlightImg && (
      <Image
        src={step.highlightImg}
        alt={step.title}
        width={415}
        height={750}
        quality={100}
        className="w-full h-full absolute top-0 left-0 object-contain z-30"
      />
    )}
  </div>
))}

  </div>

                               
                            </div>
                        </div>
                       
                    </div>
                    
                </div>


                //Skip Button 
                <button
          onClick={handleSkip}
          className="absolute bottom-10 right-10 z-30 text-[1vw] font-display flex items-center gap-1 group hover:text-primary cursor-pointer"
        >
          Skip
          <div className="w-[1.2vw] h-[1.2vw]">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              className="w-full h-full group-hover:fill-primary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00049 12.71C7.20932 12.71 7.41068 12.7828 7.5708 12.9141L7.63623 12.9736L11.9292 17.2666L12.0005 17.3369L16.3628 12.9746C16.5325 12.8108 16.7598 12.7207 16.9956 12.7227C17.2315 12.7247 17.4577 12.8186 17.6245 12.9854C17.7913 13.1522 17.8861 13.3783 17.8882 13.6143C17.8902 13.8497 17.7995 14.0765 17.6362 14.2461L12.6362 19.2461C12.4675 19.4147 12.239 19.5097 12.0005 19.5098C11.7917 19.5098 11.5903 19.4369 11.4302 19.3057L11.3638 19.2461L6.36377 14.2461C6.19526 14.0774 6.10021 13.8488 6.1001 13.6104C6.1001 13.4016 6.17315 13.2001 6.3042 13.04L6.36377 12.9736C6.53254 12.8049 6.76184 12.71 7.00049 12.71ZM17.0044 6.69727C17.1238 6.69623 17.2425 6.71948 17.353 6.76465C17.4636 6.80987 17.5645 6.87652 17.6489 6.96094C17.7123 7.02435 17.7662 7.09685 17.8081 7.17578L17.8452 7.25684C17.8792 7.33993 17.9006 7.42752 17.9087 7.5166L17.9126 7.60547C17.9116 7.72497 17.8865 7.84332 17.8394 7.95312C17.804 8.0354 17.7564 8.11164 17.6987 8.17969L17.6382 8.24512L17.6362 8.24609L12.6362 13.2461C12.4675 13.4147 12.239 13.5097 12.0005 13.5098C11.7917 13.5098 11.5903 13.4369 11.4302 13.3057L11.3638 13.2461L6.36377 8.24609C6.19526 8.07743 6.10021 7.84876 6.1001 7.61035C6.1001 7.40164 6.17315 7.20014 6.3042 7.04004L6.36377 6.97363C6.53254 6.80491 6.76184 6.70996 7.00049 6.70996C7.20932 6.71001 7.41068 6.78282 7.5708 6.91406L7.63623 6.97363L11.9292 11.2666L12.0005 11.3369L16.3647 6.97266C16.427 6.90821 16.4985 6.85277 16.5767 6.80957L16.6577 6.77051C16.74 6.73523 16.8269 6.71274 16.9155 6.70312L17.0044 6.69727Z"
                fill="#111111"
                className="w-full h-full group-hover:fill-primary"
                stroke="white"
                strokeWidth="0.2"
              />
            </svg>
          </div>
        </button>
            </section>
        </>
    );
}


const stepsData = {
    personal: [
      {
        title: "Secure way of accessing World of Banking",
        desc: "<p>Set-up your Montra Personal Account instantly for FREE. Secured with 2FA using Montra Soft Token, you can start making payments & transfers</p>",
        link: "/personal/banking",
        image: "/assets/animation/1-ss.png",
        highlightImg: "/assets/animation/1-pop.png",
        navTitle:"Banking"
      },
      {
        title: "Pay Your Way with Montra",
        desc: '<p>One app. Multiple payment options — all built for ease, speed, and control. With Montra, you can pay using your:</p><ul class="list-disc pl-[1vw] space-y-[0.3vw]"><li class="font-semibold">Montra Account</li><li><span class="font-semibold">Linked Bank Accounts – </span>Pay using your other bank accounts linked to Montra App.</li><li><span class="font-semibold">Linked Cards –  </span>Use your saved debit or credit cards on Montra App.</li><li><span class="font-semibold">Installments –  </span>Borrow instantly to Buy Now and pay overtime.</li></ul><p>Simple. Secure. Seamless.</p>',
        link: "/personal/payments",
        image: "/assets/animation/2-ss.png",
        highlightImg: "/assets/animation/2-pop.png",
         navTitle:"Payment"
      },
      {
        title: "Manage your Finance, on the Go",
        desc: '<p >Wherever life takes you, Montra’s got your back on your Finances.</p> <p>From unexpected expenses to future planning, we offer smart, secure solutions through all major Partner Institutions :</p><ul class="list-disc pl-[1vw] space-y-[0.3vw]"><li><span class="font-semibold">Loans </span></li><li><span class="font-semibold">Insurance Plans</span></li><li><span class="font-semibold">Investment Plans</span></li></ul><p>Because your money should move as smartly as you do.</p> ',
        link: "/personal/finance",
        image: "/assets/animation/3-ss.png",
        highlightImg: "/assets/animation/3-pop.png",
         navTitle:"Finance"
      },
      {
        title: "Send Messages. Send & Request Money. Same Chat.",
        desc: '<p>Introducing <span class="font-semibold">CHAT to PAY — </span>  Montra’s game-changing feature that lets you send or request money without ever leaving your conversation with other Montra users / Merchants.</p>',
        link: "/personal/chat",
        image: "/assets/animation/4-ss.png",
        highlightImg: "/assets/animation/4-pop.png",
         navTitle:"Chat"
      },
      {
        title: "Shopping Meets Simplicity",
        desc: '<p>With <span class="font-semibold">Montra Store</span>, sellers showcase. Buyers discover.</p><p>From local sellers to online brands— everyone gets a place to sell, share, chat, deliver and get paid.</p><p>Easy shopping. Instant payments. Real connections.</p>',
        link: "/personal/shop",
        image: "/assets/animation/5-ss.png",
        highlightImg: "/assets/animation/5-pop.png",
         navTitle:"Shop"
      },
    ],
    business: [
      {
        title: "All-in-One Banking. Built for Businesses",
        desc: '<p>From accepting payments and finance to operations and growth tools, <span class="font-semibold">Montra</span> is your complete ecosystem — designed to help your business grow smarter & faster</p>',
        link: "/business/banking",
        image: "/assets/animation/6-ss.png",
        highlightImg: "/assets/animation/6-pop.png",
          navTitle:"Banking"
      },
      {
        title: "Accept Payments. Expand Possibilities",
        desc: '<p>Open a Montra Business Account to start receiving payments from anyone — anytime, anywhere. Accept payments using<ul class="pl-[1vw] space-y-[0.3vw] list-disc"><li>QR codes </li> <li>Bank Transfers </li><li>Tap & Pay (Soft POS)</li><li>POS</li></ul></p>',
        link: "/business/payments",
        image: "/assets/animation/7-ss.png",
        highlightImg: "/assets/animation/7-pop.png",
          navTitle:"Payments"
      },
      {
        title: "Become a Montra Agent. Start Earning",
        desc: "<p>Offer Agency Banking services for offering Cash Deposit & Cahs withdrawal services and get paid for every transaction — it’s that simple.</p>",
        link: "/business/agency-banking",
        image: "/assets/animation/8-ss.png",
        highlightImg: "/assets/animation/8-pop.png",
          navTitle:"Agency Banking"
      },
      {
        title: "Sell Smarter. Restock Faster. Pay & Get Paid Instantly. ",
        desc: '<p>Manage orders, send invoices, and track stock. With Montra, every part of your business just flows.<ul class="pl-[1vw] list-disc space-y-[0.3vw]"><li>Send & receive Invoices</li><li>Track Inventory</li><li>Pay & Receive Instant & Credit based Payments</li></ul></p><p class="font-semibold">One flow. Zero friction!</p>',
        link: "/business/inventory-management",
        image: "/assets/animation/9-ss.png",
        highlightImg: "/assets/animation/9-pop.png",
          navTitle:"Inventory Management"
      },
      {
        title: "Start Selling Online — For Free",
        desc: '<p>No website? No problem.</p><p>Build your dream Virtual Store for free to start selling online.</p><ul class="pl-[1vw] list-disc space-y-[0.3vw]"><li>List your products</li><li>Send feeds to build awareness</li><li>Chat with those interested in buying</li><li>Build relationships with those who follow your store </li><li>Offer tailormade payment methods to boost your business</li><li>Track your Payments</li></ul><p class="font-semibold">Your ready-to-use shop at no cost.</p>',
        link: "/business/montra-store",
        image: "/assets/animation/10-ss.png",
          navTitle:"Montra Store"
      },
      {
        title: "One Gateway. Multiple Payment Options.",
        desc: '<p>Integrate <span class="font-semibold">Montra Payment Gateway</span> into your app or website and accept payments via:</p><ul class="pl-[1vw] list-disc space-y-[0.3vw]"><li>Debit & Credit Cards</li><li>Bank Transfers via QR</li><li>Montra App </li><li>USSD Payments </li></ul> <p class="font-semibold">More ways to get paid. Fast integration. Instant settlement.</p>',
        link: "/business/payment-gateway",
        image: "/assets/animation/11-ss.png",
        highlightImg: "/assets/animation/11-pop.png",
          navTitle:"Payment Gateway"
      },
      {
        title: "Tap. Accept. Get Paid.",
        desc: '<p>With Montra Tap to Pay, your phone becomes a payment terminal — no extra hardware, no limits.</p><p>Accept contactless payments from cards and grow your business with every tap. <span class="italic">(available on NFC enabled Android devices)*</span></p><p class="font-semibold">It’s fast. It’s secure. And it’s all in your hands.</p>',
        link: "/business/tap-and-pay",
        image: "/assets/animation/12-ss.png",
        highlightImg: "/assets/animation/12-pop.png",
          navTitle:"Tap & Pay"
      },
    ],
  };
  