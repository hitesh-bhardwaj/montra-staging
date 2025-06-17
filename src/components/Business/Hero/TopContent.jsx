import Copy from "@/components/Copy";
import Heading from "@/components/Heading";

export const TopContent = () => {
    return (
        <div className="text-center flex items-center justify-center pt-[14vw] px-[4vw] max-sm:pt-[35vw] max-md:pt-[30vw]">
            <div className="space-y-[1.2vw] max-sm:space-y-[7vw] max-md:space-y-[3vw]">
                <Heading delay={0.7}>
                    <h1 className="text-[5.7vw] font-display font-medium capitalize leading-[1.15] max-sm:text-[11.5vw] max-md:text-[7.5vw]">
                        <span className="text-primary">Montra Business Account: </span> Go for Smarter Finance & Bigger Growth.

                    </h1>
                </Heading>
                <div className="w-[70%] mx-auto max-sm:w-[85%] max-md:w-[85%]">
                <Copy delay={1}>
                    <p className="font-body w-full ">
                    Access essential banking tools, streamline your operations, and manage money with ease - so you can focus on growing your business every day.

                    </p>
                </Copy>

                </div>
            </div>
        </div>
    )
}