import Image from "next/image";
import mockupImage from "../../../public/assets/images/footer-cta-mockup.png";
import { AppleStoreButton, PlayStoreButton } from "../Buttons";

const FooterCta = () => {
    return (
        <>
            <div className="py-[4vw] px-[4vw]">
                <div className="flex items-start justify-center">
                    <div className="w-[30%]">
                        <Image src={mockupImage} alt="phone mockup" className="w-full h-full object-contain" />
                    </div>
                    <div className="w-[65%] flex flex-col items-center text-center">
                        <h6 className="text-[5.7vw] font-medium leading-[1.2] font-display">Take charge of your financial future</h6>
                        <p className="mt-[2vw]">It only takes few seconds to get started.</p>
                        <div className=" flex gap-10 justify-center mt-[3vw]">
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