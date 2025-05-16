import Copy from "@/components/Copy"
import Heading from "@/components/Heading"
import Image from "next/image"

export const BottomContent = ({ img6 }) => {
    return (
        <div className=" w-screen p-[4vw] flex flex-col gap-[20vw] h-fit absolute bottom-0 text-white max-sm:p-[8vw] max-sm:gap-12 max-sm:static max-md:static max-md:gap-10 max-md:pb-[10vw] dark">
            <div className="h-[65vw] hidden max-sm:block mt-12 max-md:block" />
            <div className="w-[42%] self-end text-left space-y-[2vw] max-sm:w-full max-sm:space-y-[6vw] max-md:w-full max-md:space-y-[4vw]">
                <Heading>
                    <h2 className="text-[3.4vw] font-display font-medium leading-[1.2] max-sm:text-[7.2vw] max-md:text-[5.5vw]">
                        Boost Growth With Smart Payments & Tools
                    </h2>
                </Heading>
                <div className="space-y-[2vw] max-sm:space-y-[6vw] max-md:space-y-[4vw]">
                    <Copy>
                        <p>Montra enables you to Accept Payments easily from everyone, anywhere. Our Merchants can offer payment acceptance to their customers  using:</p>
                    </Copy>
                    <ul className="list-disc space-y-[2vw] pl-5 max-sm:space-y-[6vw] max-md:space-y-[4vw]">
                        <Copy>
                            <li>Interoperable QR Code - customers can simply scan QR Code using any Mobile Banking App to pay from their bank accounts digitally. Customers using their Montra App can pay from their Montra Account as well as from any Card they may have linked to Montra App.</li>
                        </Copy>
                        <Copy>
                            <li>Soft-POS (Tap & Pay) - open the Tap & Pay feature on your Montra App to enter payment amount. Customer can simply Tap any Card on your NFC enabled phone and complete the payment steps on your phone, similar to how they pay on POS.</li>
                        </Copy>
                        <Copy>
                            <li>POS - get a POS issued from Montra to start accepting card payments</li>
                        </Copy>
                    </ul>
                    <div className="space-y-[1.5vw] w-[78%] max-sm:space-y-[4vw] max-sm:w-full max-md:w-[80%] max-md:space-y-[4vw]">
                        <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-white text-black max-sm:px-[4vw] max-sm:py-[3vw] max-md:px-[5vw] max-md:py-[2vw]">
                            Accept cashless payments with ease
                        </div>
                        <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-[#FFEAEE] text-black max-sm:px-[4vw] max-sm:py-[3vw] max-md:px-[5vw] max-md:py-[2vw]">
                            Access working capital and credit
                        </div>
                        <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-[#EAF1FF] text-black max-sm:px-[4vw] max-sm:py-[3vw] max-md:px-[5vw] max-md:py-[2vw]">
                            Get business insights in real-time
                        </div>
                    </div>
                </div>
            </div>

            <div className="shadow-2xl fadeinanim relative z-10 w-full h-[70vw] rounded-[8vw] overflow-hidden border-[10px] border-black-1 bg-black-1 hidden flex-col justify-between max-sm:flex max-md:flex">
                <Image placeholder="blur" src={img6} alt="Main Business" className="w-full h-full object-cover absolute top-0 left-0" />
                <div className="relative top-0 left-0 w-full h-full flex flex-col justify-between p-[3vw]">
                    <span className="bg-primary text-white px-2 py-1 rounded-full self-end">
                        Business
                    </span>
                    <h3 className="text-white text-4xl font-bold font-display self-center">₦ 20,000</h3>
                    <div className="bg-white p-2 rounded-2xl flex items-center gap-2 w-full">
                        <span className="w-8 h-8 rounded-full bg-primary" />
                        <div className="text-black-1">
                            <div className="text-[14px]">Number of Payments Received</div>
                            <div className="text-sm font-display">10</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[42%] self-start text-left space-y-[2vw] max-sm:w-full max-sm:space-y-[6vw] max-md:w-full max-md:space-y-[4vw]">
                <Heading>
                    <h2 className="text-[3.4vw] font-display font-medium leading-[1.2] max-sm:text-[7.2vw] max-md:text-[5.5vw]">
                        Smart Business Management Tools for Smarter Businesses
                    </h2>
                </Heading>
                <div className="space-y-[2vw] max-sm:space-y-[6vw] max-md:space-y-[4vw]">
                    <Copy>
                        <p>Whether it's accepting digital payments, managing operations, or unlocking credit and insurance, Montra helps businesses grow with confidence—no matter their size or stage.</p>
                    </Copy>
                    <div className="space-y-[1.5vw] w-[95%] max-sm:space-y-[4vw] max-sm:w-full max-md:w-[80%] max-md:space-y-[4vw]">
                        <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-white text-black max-sm:px-[4vw] max-sm:py-[5vw] max-sm:rounded-[5vw] max-md:px-[5vw] max-md:py-[2vw]">
                            Track payment collections & Settlements
                        </div>
                        <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-[#FFEAEE] text-black max-sm:px-[4vw] max-sm:py-[5vw] max-sm:rounded-[5vw] max-md:px-[5vw] max-md:py-[2vw]">
                            Voice & Text notifications for payment confirmation
                        </div>
                        <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-[#EAF1FF] text-black max-sm:px-[4vw] max-sm:py-[5vw] max-sm:rounded-[5vw] max-md:px-[5vw] max-md:py-[2vw]">
                            Set up a Montra Store on Montra App & start selling your products & services virtually
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}