"use client"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { forwardRef, useEffect, useRef } from "react";
import Heading from "../Heading";

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
    const container = useRef(null);
    const section = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (globalThis.innerWidth > 1024) {
                initVisionMissionAnimations({
                    container: container.current,
                    section: section.current,
                    cardRefs: cardRefs.current,
                });
            } else {
                initVisionMissionMobileAnimations({
                    container: container.current,
                    section: section.current,
                    cardRefs: cardRefs.current,
                });
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={section} className="relative h-[300vh] bg-[#fbfbfb] max-sm:h-full max-sm:px-[7vw] max-sm:py-[15%] max-md:h-full max-md:px-[5vw] max-md:py-[10%]">
            <div className="w-full h-screen sticky top-0 flex items-center justify-center max-sm:h-fit max-sm:static max-sm:items-start max-sm:justify-start max-md:h-fit max-md:static max-md:items-center max-md:justify-center">
                <Heading>
                    <h2 className="text-[5.7vw] text-center font-display font-medium w-[80%] max-sm:text-[11vw] max-sm:text-left max-sm:leading-[1.2] max-md:text-[7.5vw] max-md:w-full ">
                        Building future of an Inclusive Financial Ecosystem
                    </h2>
                </Heading>
            </div>
            <div ref={container} className="sticky top-0 z-10 h-screen w-full max-sm:static max-sm:flex max-sm:flex-col max-sm:gap-[7vw] max-sm:h-full max-sm:pt-[5%] max-sm:pb-[15%] max-md:static max-md:flex max-md:flex-col max-md:gap-[5vw] max-md:items-center max-md:h-full max-md:pt-[10%]">
                {content.map((item, index) => (
                    <Card
                        key={index}
                        id={`card-${index + 1}`}
                        ref={(el) => (cardRefs.current[index] = el)}
                        title={item.title}
                        description={item.description}
                        children={item.children}
                    />
                ))}
            </div>
        </section>
    );
};

export default VisionMission;

function initVisionMissionAnimations({ container, section }) {
    if (!container || !section) return;

    const flipCard = (id, delay = 0) => {
        const inner = container.querySelector(`#${id} .flip-card-inner`);
        const card = container.querySelector(`#${id}`);
        if (!inner || !card) return;

        const tl = gsap.timeline();

        tl.to(card, { rotation: id === "card-1" ? -4 : 4, duration: 0.5 })
            .to(card, { left: id === "card-1" ? "34%" : "67%", duration: 1.5 })
            .to(inner, {
                rotateY: 180,
                duration: 3,
                ease: "none",
                delay,
            })
            .to(card, { rotation: 0, duration: 0.5 }, "<");

        ScrollTrigger.create({
            animation: tl,
            trigger: section,
            start: "40% center",
            end: "80% center",
            scrub: 0.25,
        });
    };

    flipCard("card-1");
    flipCard("card-2", 0.2);
}

function initVisionMissionMobileAnimations({ container, section }) {
    if (!container || !section) return;

    const flipCard = (id, delay = 0) => {
        const inner = container.querySelector(`#${id} .flip-card-inner`);
        if (!inner) return;

        gsap.to(inner, {
            rotateY: 180,
            duration: 1.2,
            delay,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: inner,
                start: "top 85%",
                toggleActions: "play none none reverse",
                // markers: false,
            },
        });
    };

    flipCard("card-1");
    flipCard("card-2", 0.2);
}


const Card = forwardRef(({ title, description, children, id, className = "" }, ref) => {
    return (
        <div className={`card absolute w-[32vw] h-[75vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 perspective-distant max-sm:w-[85vw] max-sm:h-[120vw] max-sm:relative max-sm:translate-y-0 max-sm:translate-x-0 max-sm:left-0 max-sm:top-0 max-md:w-[60vw] max-md:h-[75vw] max-md:relative max-md:translate-y-0 max-md:translate-x-0 max-md:left-0 max-md:top-0 ${className}`} id={id} ref={ref}>
            <div className="card-wrapper h-full w-full absolute left-1/2 -translate-x-1/2 perspective-distant max-sm:relative max-sm:left-0 max-sm:translate-x-0  max-md:relative max-md:left-0 max-md:translate-x-0">
                <div style={{ transformStyle: "preserve-3d" }} className="flip-card-inner w-full h-full relative perspective-distant max-sm:py-[10vw] ">
                    <div className="flip-card-front absolute perspective-distant w-full h-full backface-hidden rounded-4xl border border-gray-100 overflow-hidden bg-primary text-white p-[3vw] flex flex-col justify-between max-sm:p-[7vw] max-sm:pb-[10vw] max-md:p-[5vw] max-md:pb-[5vw]">
                        {children}
                        <h3 className="w-[50%] font-display font-medium leading-[1.2] text-[5.7vw] text-white max-sm:text-[7.5vw] max-md:text-[7.5vw]">{title}</h3>
                    </div>
                    <div className="flip-card-back absolute perspective-distant w-full h-full backface-hidden rounded-4xl border border-gray-100 overflow-hidden bg-white text-black-1 p-[3vw] flex flex-col justify-between items-start text-left -rotate-y-180 max-sm:py-[10vw] max-sm:px-[8vw] max-md:py-[5vw] max-md:px-[4vw]">
                        {children}
                        <div className="space-y-[2vw] text-black-1 max-sm:space-y-[5vw] max-md:space-y-[5vw]">
                            <h3 className="font-display font-medium leading-[1.2] text-[2.4vw] max-sm:text-[7.5vw] max-md:text-[7.5vw]">{title}</h3>
                            <p className="">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

const content = [
    {
        title: 'Our Vision',
        description: 'A financially inclusive world where everyone can participate, prosper, and progress. We imagine a future where digital finance is universal, intuitive, and trusted, where every person and every business has the tools, they need to build a better financial life',
        children: <svg width="105" height="87" viewBox="0 0 105 87" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M104.132 42.5726C93.2574 25.2241 74.4082 14.4848 53.9397 13.9757V0H50.4597V13.9757C29.9912 14.4848 11.142 25.2241 0.267688 42.5726C-0.0892294 43.1394 -0.0892294 43.8606 0.267688 44.4274C11.142 61.7759 29.9912 72.5152 50.4597 73.0243V87H53.9397V73.0243C74.4082 72.5152 93.2574 61.7759 104.132 44.4274C104.489 43.8606 104.489 43.1394 104.132 42.5726ZM3.80859 43.5C10.9124 32.6378 21.4768 24.4935 33.7888 20.3876C27.2262 25.6137 23.1972 33.3849 22.7085 41.76H8.69973V45.24H22.7085C23.1972 53.6151 27.2262 61.3863 33.7888 66.6124C21.4768 62.5065 10.9124 54.3622 3.80859 43.5ZM50.4597 59.16V69.5113C37.4391 68.6269 27.0728 58.2606 26.1885 45.24H36.5397V41.76H26.1885C27.0728 28.7394 37.4391 18.3731 50.4597 17.4887V27.84H53.9397V17.4887C66.9604 18.3731 77.3266 28.7391 78.211 41.76H67.8597V45.24H78.211C77.3266 58.2606 66.9604 68.6269 53.9397 69.5113V59.16H50.4597ZM100.591 43.5C93.4871 54.3622 82.9227 62.5065 70.6107 66.6124C77.1733 61.3863 81.2023 53.6151 81.691 45.24H95.6997V41.76H81.691C81.2023 33.3849 77.1733 25.6135 70.6107 20.3876C82.9229 24.4938 93.4871 32.6378 100.591 43.5Z" fill="currentColor" />
            <path d="M52.1998 31.3203C45.4729 31.3203 40.0198 36.7735 40.0198 43.5003C40.0274 50.2239 45.4762 55.6727 52.1998 55.6803C58.9266 55.6803 64.3798 50.2272 64.3798 43.5003C64.3798 36.7735 58.9266 31.3203 52.1998 31.3203ZM52.1998 52.2003C47.395 52.2003 43.4998 48.3051 43.4998 43.5003C43.5054 38.6979 47.3974 34.806 52.1998 34.8003C57.0046 34.8003 60.8998 38.6955 60.8998 43.5003C60.8998 48.3051 57.0048 52.2003 52.1998 52.2003Z" fill="currentColor" />
            <path d="M10.4398 0C9.47891 0 8.69983 0.779085 8.69983 1.74V15.66H12.1798V3.48H24.3598V0H10.4398Z" fill="currentColor" />
            <path d="M93.9597 0H80.0397V3.48H92.2197V15.66H95.6997V1.74C95.6997 0.779085 94.9206 0 93.9597 0Z" fill="currentColor" />
            <path d="M92.2197 71.3398V83.5198H80.0397V86.9998H93.9597C94.9206 86.9998 95.6997 86.2208 95.6997 85.2598V71.3398H92.2197Z" fill="currentColor" />
            <path d="M12.1798 83.5198V71.3398H8.69983V85.2598C8.69983 86.2208 9.47891 86.9998 10.4398 86.9998H24.3598V83.5198H12.1798Z" fill="currentColor" />
        </svg>
    },
    {
        title: 'Our Mission',
        description: 'Introduce innovative products & solutions that promote Financial Inclusion across emerging economies towards the transition from cash to digital payments & making accessibility to Credit easy for everyone.',
        children: <svg className="w-[7vw] h-[7vw] max-sm:w-[18vw] max-sm:h-[18vw] max-md:h-[12vw] max-md:w-[12vw]" width="101" height="98" viewBox="0 0 101 98" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90.4648 1.24121L90.4717 1.24219C90.8041 1.2917 91.1011 1.48362 91.2842 1.76465L91.3555 1.89062L91.3564 1.89355L93.8096 6.79883L93.8594 6.89844L93.958 6.95117L99.2627 9.7832L99.2656 9.78418C99.5636 9.9404 99.7756 10.2074 99.8623 10.5303L99.8916 10.6719C99.9415 11.0072 99.8476 11.3431 99.6426 11.6025L99.5479 11.708L91.1279 20.1289C90.9018 20.355 90.5924 20.4784 90.2715 20.4785C90.168 20.4785 90.0744 20.4694 89.9854 20.4482L89.8984 20.4229L89.8955 20.4219L84.0742 18.5381L83.8799 18.4746L83.7295 18.6123L80.3721 21.6758L80.1201 21.9053L80.3418 22.1631C87.0996 30.0699 91.1825 40.326 91.1826 51.5117C91.1826 76.4845 70.8673 96.7998 45.8945 96.7998C20.922 96.7996 0.607422 76.4843 0.607422 51.5117C0.60766 26.5393 20.9221 6.22486 45.8945 6.22461C58.5528 6.22461 70.0208 11.4568 78.252 19.876L78.4893 20.1182L78.7402 19.8896L82.0557 16.8584L82.2148 16.7129L82.1572 16.5049L80.6836 11.1797H80.6846C80.5845 10.8152 80.6592 10.4267 80.8867 10.1279L80.9941 10.0059L89.4141 1.58496C89.6594 1.33963 89.9902 1.21088 90.3223 1.22559L90.4648 1.24121ZM45.8945 8.64746C22.2603 8.64771 3.03051 27.8775 3.03027 51.5117C3.03027 75.1462 22.2601 94.3767 45.8945 94.377C69.5291 94.377 88.7598 75.1463 88.7598 51.5117C88.7597 40.9521 84.9168 31.2839 78.5605 23.8027L78.3252 23.5244L78.0557 23.7705L71.0986 30.1279L70.8506 30.3535L71.0654 30.6113C75.7834 36.2874 78.626 43.5669 78.626 51.502C78.6258 69.5487 63.9413 84.2324 45.8945 84.2324C27.8477 84.2322 13.1641 69.5583 13.1641 51.5117C13.1643 33.4652 27.848 18.7815 45.8945 18.7812C54.8916 18.7812 63.0562 22.4364 68.9824 28.3418L69.2197 28.5781L69.4668 28.3525L76.4355 21.9951L76.7041 21.749L76.4492 21.4893C68.6709 13.573 57.8449 8.64746 45.8945 8.64746ZM45.8945 21.2051C29.1861 21.2053 15.5881 34.8033 15.5879 51.5117C15.5879 68.2203 29.186 81.8191 45.8945 81.8193C62.6033 81.8193 76.2021 68.2205 76.2021 51.5117C76.202 44.2172 73.6143 37.5182 69.3018 32.2793L69.0664 31.9941L68.7939 32.2432L61.8047 38.6221L61.5635 38.8418L61.7646 39.0977C64.4553 42.5335 66.0683 46.8263 66.0684 51.5117C66.0684 62.6327 57.0155 71.6855 45.8945 71.6855C34.7737 71.6853 25.7217 62.6326 25.7217 51.5117C25.7219 40.3911 34.7739 31.3391 45.8945 31.3389C51.2315 31.3389 56.0835 33.4377 59.6953 36.832L59.9326 37.0547L60.1729 36.8359L67.1621 30.457L67.4355 30.207L67.1719 29.9473C61.6886 24.5492 54.1801 21.2051 45.8945 21.2051ZM45.8848 33.7725C36.1021 33.7725 28.1339 41.729 28.1338 51.5225C28.1338 61.3053 36.1019 69.2725 45.8848 69.2725C55.6674 69.2723 63.6348 61.3159 63.6348 51.5225C63.6347 47.4841 62.2698 43.779 59.9941 40.7949L59.7617 40.4893L59.4785 40.748L52.4678 47.1475L52.2549 47.3418L52.4043 47.5889C53.0996 48.7376 53.5116 50.0751 53.5117 51.5117C53.5117 55.7173 50.0903 59.1395 45.8848 59.1396C41.6791 59.1396 38.2578 55.7174 38.2578 51.5117C38.2581 47.3062 41.6792 43.8848 45.8848 43.8848C47.5729 43.8848 49.122 44.4474 50.3926 45.375L50.625 45.5449L50.8369 45.3516L57.8467 38.9619L58.1309 38.7031L57.8477 38.4434C54.692 35.556 50.4926 33.7725 45.8848 33.7725ZM45.8848 46.3086C43.0174 46.3086 40.6809 48.6444 40.6807 51.5117C40.6807 54.3793 43.0172 56.7158 45.8848 56.7158C48.7522 56.7157 51.0879 54.3792 51.0879 51.5117C51.0878 50.7665 50.9301 50.066 50.6484 49.4238L50.4512 48.9746L50.0898 49.3057L46.7002 52.4004L46.6982 52.4023C46.4719 52.6125 46.1795 52.7187 45.8848 52.7188C45.5877 52.7188 45.3024 52.6179 45.0791 52.4199L44.9873 52.3291C44.5643 51.8596 44.5692 51.156 44.9795 50.7021L45.0674 50.6152L45.0684 50.6143L48.4365 47.54L48.7969 47.2119L48.3721 46.9746C47.6308 46.559 46.7932 46.3086 45.8848 46.3086ZM89.5908 4.8252L83.3496 11.0771L83.2041 11.2217L83.2588 11.4189L84.5225 15.9766L84.5732 16.1592L84.7529 16.2168L89.7314 17.8271L89.9355 17.8936L90.0879 17.7422L96.3398 11.4893L96.6758 11.1543L96.2568 10.9316L92.373 8.85742C92.2052 8.76324 92.0639 8.6385 91.9561 8.4873L91.8594 8.32617L90.1533 4.91602L89.9355 4.47949L89.5908 4.8252Z" fill="currentColor" stroke="currentColor" strokeWidth="0.702671" />
        </svg>
    }
]
