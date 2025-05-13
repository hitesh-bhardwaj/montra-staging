import { NftIcon } from "../Buttons/icons";

const Impact = () => {
    return (
        <section className="px-[4vw] py-[6vw] w-full max-sm:px-[7vw] bg-white">
            <div className="flex flex-col items-start gap-[10vw] max-sm:gap-[10vw]">
                <h2 className="font-display w-[65%] font-medium text-[5.7vw] text-left leading-[1.2] max-sm:text-[10.5vw] max-sm:text-left max-sm:w-[85%]">
                    Simple Tools. Real Impact. Lasting Change.
                </h2>
                <div className="flex justify-between gap-[5vw] max-sm:flex-col max-sm:gap-[10vw]">
                    <div className="text-black-1">
                        <NftIcon className="w-[3vw] h-[3vw] mb-[1.5vw] max-sm:h-[12vw] max-sm:w-[12vw] max-sm:mb-[6vw]" />
                        <p className="mb-[3vw] max-sm:mb-[8vw]">We are a fintech company dedicated to connecting cash-based communities with the digital economy through simple, accessible financial tools.</p>
                        <div className="w-full h-[1.5px] bg-gray ">
                            <span className="block w-1/2 bg-primary h-full origin-left" />
                        </div>
                    </div>
                    <div className="text-black-1">
                        <NftIcon className="w-[3vw] h-[3vw] mb-[1.5vw] max-sm:h-[12vw] max-sm:w-[12vw] max-sm:mb-[6vw]" />
                        <p className="mb-[3vw] max-sm:mb-[8vw]">We equip individuals and businesses—especially in underserved regions—with the tools to manage money, grow wealth, and thrive financially.</p>
                        <div className="w-full h-[1.5px] bg-gray ">
                            <span className="block w-1/2 bg-primary h-full origin-left" />
                        </div>
                    </div>
                    <div className="text-black-1">
                        <NftIcon className="w-[3vw] h-[3vw] mb-[1.5vw] max-sm:h-[12vw] max-sm:w-[12vw] max-sm:mb-[6vw]" />
                        <p className="mb-[3vw] max-sm:mb-[8vw]">Our mission goes beyond access—we focus on unlocking opportunity, enabling dignity, and fostering long-term financial growth.</p>
                        <div className="w-full h-[1.5px] bg-gray ">
                            <span className="block w-1/2 bg-primary h-full origin-left" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Impact;