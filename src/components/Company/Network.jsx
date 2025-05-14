import Image from "next/image";
import Heading from "../Heading";
import Copy from "../Copy";

const Network = () => {
    return (
        <section className="px-[4vw] py-[6vw] w-full max-sm:px-[7vw] bg-[#FBFBFB] overflow-hidden max-sm:py-[15vw]">
            <div className="flex flex-col items-center gap-[10vw] max-sm:gap-[10vw] ">
                <Heading>
                <h2 className="font-display w-[65%] font-medium text-[5.7vw] text-center leading-[1.2] max-sm:text-[10.5vw] max-sm:text-left max-sm:w-full max-sm:mb-[5vw] ">
                Stronger Together: Join the Montra Network
                </h2>

                </Heading>
                <div className="max-sm:w-[100vw] max-sm:overflow-scroll  max-sm:pb-[5vw] ">
                <div className="grid grid-cols-5 gap-[1vw] max-sm:flex max-sm:gap-[4vw] max-sm:w-fit max-sm:px-[5vw]">
                    {logos.map((logo, index) => (
                        <div
                            style={{ '--hover-color': logo.color }}
                            data-v-color={logo.color}
                            key={index}
                            className={`rounded-4xl w-[13.35vw] h-[13.35vw] first:col-start-2 nth-4:col-start-1 border border-black-1 group hover:bg-[var(--hover-color)] hover:border-[var(--hover-color)] duration-300 ease-out fadeupanim max-sm:h-[30vw] max-sm:w-[30vw] max-sm:bg-[var(--hover-color)] max-sm:border-[var(--hover-color)] fadeupanim`}>
                            <Image src={logo.src} alt="montra network" width={200} height={200} className="w-full h-full duration-300 group-hover:invert-100 group-hover:brightness-0 max-sm:invert-100" />
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
        src: "/assets/images/company/global-investor.png",
    },
    {
        color: "#215CFF",
        src: "/assets/images/company/qed-investor.png",
    },
    {
        color: "#35C771",
        src: "/assets/images/company/nib.png",
    },
    {
        color: "#FB2F55",
        src: "/assets/images/company/investor.png",
    },
    {
        color: "#7A78FF",
        src: "/assets/images/company/qed-investor.png",
    },
    {
        color: "#FF8303",
        src: "/assets/images/company/global-investor.png",
    },
    {
        color: "#35C771",
        src: "/assets/images/company/qed-investor.png",
    },
    {
        color: "#FB2F55",
        src: "/assets/images/company/nib.png",
    }
]