import Link from "next/link"
import { AppleIcon, ArrowRight, GooglePlay } from "./icons"

export const AppleStoreButton = () => {
    return (
        <button aria-label="Download from Apple Store" className="font-display text-white flex w-[15vw] justify-start items-center gap-4 py-[0.6vw] px-[2vw] rounded-full overflow-hidden bg-primary border border-primary max-sm:min-w-[70vw] max-sm:w-fit max-sm:px-[7vw] max-sm:py-[3vw]">
            <div>
                <AppleIcon className="w-[2.2vw] h-[2.2vw] max-sm:w-[10vw] max-sm:h-[10vw]" />
            </div>
            <div className="text-left flex flex-col">
                <span className="text-[0.83vw] h-[1vw] max-sm:text-[3.5vw] max-sm:h-auto">Download on the</span>
                <p className="text-[1.5vw] leading-8 max-sm:text-[7vw] max-sm:leading-[1.2]">App Store</p>
            </div>
        </button>
    )
}

export const PlayStoreButton = () => {
    return (
        <button aria-label="Download from Play Store" className="font-display text-black-1 flex w-[15vw] justify-start items-center gap-4 py-[0.6vw] px-[2vw] rounded-full overflow-hidden bg-white border border-gray-100 max-sm:min-w-[70vw] max-sm:w-fit max-sm:px-[7vw] max-sm:py-[3vw]">
            <div>
                <GooglePlay className="w-[2.2vw] h-[2.2vw] max-sm:w-[10vw] max-sm:h-[10vw]" />
            </div>
            <div className="text-left flex flex-col">
                <span className="text-[0.83vw] h-[1vw] max-sm:text-[3.5vw] max-sm:h-auto">Get it on</span>
                <p className="text-[1.5vw] leading-8 max-sm:text-[7vw] max-sm:leading-[1.2]">Google Play</p>
            </div>
        </button>
    )
}

export const LinkButton = ({ text, href, className = "", ...props }) => {
    return (
        <Link className={`group w-fit hover:text-primary duration-300 ${className}`} href={href}>
            <div className="flex items-center justify-start gap-2">
                <span>{text}</span>
                <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300"/>
            </div>
        </Link>
    )
}