import { AppleStoreButton, PlayStoreButton } from "../Buttons";

export default function Hero() {
  return (
    <section id="hero">
      <div className="h-full flex items-center justify-center text-center px-[4vw]">
        <div className="w-3/5 mx-auto space-y-[1.2vw] pt-[14vw] py-[5vw]">
          <h1 className="text-[5.7vw] font-display font-medium capitalize leading-[1.15]"><span className="text-primary">One app</span> to manage all your  finances</h1>
          <p className="font-body w-5/6 mx-auto">Simply download Montra app to set-up your Montra Personal Account to access Marketplaces for multi-party payments & Lending Products.</p>
          <div className=" flex gap-10 justify-center mt-[4vw]">
            <AppleStoreButton />
            <PlayStoreButton />
          </div>
        </div>
      </div>
    </section>
  )
}