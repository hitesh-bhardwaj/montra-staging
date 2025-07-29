import Copy from "@/components/Copy";
import Heading from "@/components/Heading";
import Image from "next/image";

export const BottomContent = ({ img6, imgAmount }) => {
  return (
    <div className=" w-screen p-[4vw] flex flex-col gap-[60vh] h-fit absolute bottom-0 text-white max-sm:p-[8vw] max-sm:gap-12 max-sm:static max-md:static max-md:gap-10 max-md:pb-[10vw] dark">
      <div className="h-[65vw] hidden max-sm:block mt-12 max-md:block" />
      <div className="w-[42%] self-end text-left space-y-[2vw] max-sm:w-full max-sm:space-y-[6vw] max-md:w-full max-md:space-y-[4vw]">
        <Heading>
          <h2 className="text-[3.4vw] font-display font-medium leading-[1.2] max-sm:text-[7.2vw] max-md:text-[5.5vw]">
            Boost Growth By Accepting Payments & Using a variety of our Business
            Management Tools
          </h2>
        </Heading>
        <div className="space-y-[2vw] max-sm:space-y-[6vw] max-md:space-y-[4vw]">
          <Copy>
            <p>
              Montra makes it easy for merchants to accept digital payments
              using:
            </p>
          </Copy>
          <ul className="list-disc space-y-[2vw] pl-5 max-sm:space-y-[6vw] max-md:space-y-[4vw]">
            <Copy>
              <li>
                Interoperable QR Code - Customers scan your QR code using any
                mobile banking app to pay directly from their bank accounts or
                use the Montra App to pay from their Montra Account or linked
                cards
              </li>
            </Copy>
            <Copy>
              <li>
                Soft-POS (Tap & Pay) - Activate Tap & Pay in the Montra App,
                enter the payment amount, and customers simply tap any
                contactless card on your NFC-enabled android phone — just like a
                POS terminal.
              </li>
            </Copy>
            <Copy>
              <li>
                POS - Start accepting secure in-store card payments with a
                Montra POS device.
              </li>
            </Copy>
          </ul>
          <div className="space-y-[1.5vw] w-[85%] max-sm:space-y-[4vw] max-sm:w-full max-md:w-[80%] max-md:space-y-[4vw] max-sm:mt-[10vw]">
            <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-white text-black max-sm:px-[4vw] max-sm:rounded-[4vw] max-sm:py-[3vw] max-md:px-[5vw] max-md:py-[2vw]">
              Accept Payments from any Account/Card
            </div>
            <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-[#FFEAEE] text-black max-sm:px-[4vw] max-sm:rounded-[4vw] max-sm:py-[3vw] max-md:px-[5vw] max-md:py-[2vw]">
              Accept payments using Interoperable QR Code
            </div>
            <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-[#EAF1FF] text-black max-sm:px-[4vw] max-sm:rounded-[4vw] max-sm:py-[3vw] max-md:px-[5vw] max-md:py-[2vw]">
              Accept payments using your phone as a POS
            </div>
            <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-[#FFEAEE] text-black max-sm:px-[4vw] max-sm:rounded-[4vw] max-sm:py-[3vw] max-md:px-[5vw] max-md:py-[2vw]">
              Access working capital and credit
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-2xl fadeinanim relative z-10 w-full h-[70vw] rounded-[8vw] overflow-hidden border-[10px] border-black-1 bg-black-1 hidden flex-col justify-between max-sm:flex max-md:flex max-sm:mt-[5vw]">
        <Image
          placeholder="blur"
          src={img6}
          alt="Main Business"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="relative top-0 left-0 w-full h-full flex flex-col justify-between p-[3vw]">
          <span className="bg-primary text-white px-2 py-1 rounded-full self-end">
            Business
          </span>
          <h3 className="text-white text-4xl font-bold font-display self-center">
            {imgAmount}
          </h3>
          <div className="bg-white p-2 rounded-2xl flex items-center gap-2 w-full">
            <div className="w-[10vw] h-[10vw] rounded-full bg-primary p-[1vw]">
              <Image
                src={"/assets/images/business/business-total-amount.svg"}
                alt="amout svg"
                className="w-full h-full object-contain"
                width={100}
                height={100}
              />
            </div>
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
            <p>
              Whether it's accepting digital payments, managing operations, or
              unlocking credit and insurance, Montra helps businesses grow with
              confidence—no matter their size or stage.
            </p>
          </Copy>
          <div className="space-y-[1.5vw] w-[95%] max-sm:space-y-[4vw] max-sm:w-full max-md:w-[80%] max-md:space-y-[4vw]">
            <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-white text-black max-sm:px-[4vw] max-sm:py-[5vw] max-sm:rounded-[5vw] max-md:px-[5vw] max-md:py-[2vw]">
              Track payment collections & Settlements
            </div>
            <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-[#FFEAEE] text-black max-sm:px-[4vw] max-sm:py-[5vw] max-sm:rounded-[5vw] max-md:px-[5vw] max-md:py-[2vw]">
              Voice & Text notifications for payment confirmation
            </div>
            <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-[#EAF1FF] text-black max-sm:px-[4vw] max-sm:py-[5vw] max-sm:rounded-[5vw] max-md:px-[5vw] max-md:py-[2vw]">
              Integrate Payment Gateway on your website & mobile app for
              accepting payments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
