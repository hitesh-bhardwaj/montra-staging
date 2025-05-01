import Image from "next/image";
import mockupImage from "../../../public/assets/images/footer-cta-mockup.png";
import { AppleStoreButton, PlayStoreButton } from "../Buttons";

const FooterCta = () => {
    return (
        <>
            <div className="py-[4vw] px-[4vw] max-sm:px-[7vw] max-sm:py-[15%]">
                <div className="flex items-start justify-center max-sm:flex-col">
                    <div className="w-[30%] max-sm:w-full">
                        <Image src={mockupImage} alt="phone mockup" className="w-full h-full object-contain" />
                    </div>
                    <div className="w-[65%] flex flex-col items-center text-center max-sm:w-full">
                        <h6 className="text-[5.7vw] font-medium leading-[1.2] font-display max-sm:text-[11.5vw]">Take charge of your financial future</h6>
                        <p className="mt-[2vw] max-sm:mt-[4vw]">It only takes few seconds to get started.</p>
                        <div className=" flex gap-10 justify-center mt-[3vw] max-sm:flex-col max-sm:gap-4 max-sm:mt-[10vw]">
                            <AppleStoreButton />
                            <PlayStoreButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterCta