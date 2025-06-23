import Image from "next/image";
import Heading from "../Heading";
import Copy from "../Copy";

const Network = () => {
    return (
        <section className="px-[4vw] py-[6vw] w-full max-sm:px-[7vw] bg-[#FBFBFB] overflow-hidden max-sm:py-[15vw]">
            <div className="flex flex-col items-center gap-[10vw] max-sm:gap-[10vw] ">
                <Heading>
                <h2 className="font-display w-[65%] font-medium text-[5.7vw] text-center leading-[1.2] max-sm:text-[10.5vw] max-sm:text-left max-sm:w-full max-sm:mb-[5vw] max-md:text-[7.5vw] max-md:w-full ">
                Join our Strong Network of Partners 
                </h2>

                </Heading>
                <div className="max-sm:w-[100vw] max-sm:overflow-scroll  max-sm:pb-[5vw] ">
                <div className="grid grid-cols-5 gap-[1vw] max-sm:flex max-sm:gap-[4vw] max-sm:flex-nowrap max-sm:w-fit max-sm:px-[5vw] max-md:flex max-md:flex-wrap max-md:justify-center max-md:gap-[3vw]">
                    {logos.map((logo, index) => (
                        <div
                            style={{ '--hover-color': logo.color }}
                            data-v-color={logo.color}
                            key={index}
                            className={`rounded-4xl w-[13.35vw] h-[13.35vw] first:col-start-2 nth-4:col-start-1 border border-black-1 group hover:bg-[var(--hover-color)] hover:border-[var(--hover-color)] duration-300 ease-out max-sm:h-[35vw] max-sm:w-[35vw] max-sm:bg-[var(--hover-color)] max-sm:border-[var(--hover-color)] max-md:bg-[var(--hover-color)] max-md:border-[var(--hover-color)] max-md:h-[20vw] max-md:w-[20vw]`}>
                            <Image src={logo.src} alt="montra network" width={200} height={200} className="w-full h-full duration-300 group-hover:invert-100 group-hover:brightness-0 max-sm:invert-0 max-md:invert-100 invert" />
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}

export default Network;

const logos = [
    {
        color: "#FF8303",
        src: "/assets/images/company/network-logo-1.svg",
    },
    {
        color: "#215CFF",
        src: "/assets/images/company/network-logo-2.svg",
    },
    {
        color: "#35C771",
        src: "/assets/images/company/network-logo-3.svg",
    },
    {
        color: "#FB2F55",
        src: "/assets/images/company/network-logo-4.svg",
    },
    {
        color: "#7A78FF",
        src: "/assets/images/company/network-logo-5.svg",
    },
    {
        color: "#FF8303",
        src: "/assets/images/company/network-logo-6.svg",
    },
    {
        color: "#35C771",
        src: "/assets/images/company/network-logo-7.svg",
    },
    {
        color: "#FB2F55",
        src: "/assets/images/company/network-logo-8.svg",
    }
]