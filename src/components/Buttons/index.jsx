import Link from "next/link";
import { AppleIcon, ArrowRight, GooglePlay } from "./icons";
import { useAnimatedNavigation } from "../NavigationContext";

export const AppleStoreButton = () => {
  return (
    <button
      aria-label="Download from Apple Store"
      className="font-display text-white flex w-[16vw] justify-start items-center gap-4 py-[0.6vw] px-[2vw] rounded-full overflow-hidden bg-primary border border-primary max-sm:min-w-[65vw] max-sm:w-fit max-sm:px-[10vw] max-sm:py-[3vw] max-md:min-w-[30vw] max-md:py-[1.5vw] max-md:px-[4vw] cursor-pointer group hover:scale-[0.95] transition-all duration-300 ease"
    >
      <div>
        <AppleIcon className="w-[2.2vw] h-[2.4vw] mt-[-0.5vw] max-sm:w-[8vw] max-sm:h-[8vw] max-md:w-[4.5vw] max-md:h-[4.5vw]" />
      </div>
      <div className="text-left flex flex-col">
        <span className="text-[0.83vw] h-[0.8vw] font-medium max-sm:text-[3vw] max-sm:h-auto max-md:text-[2vw] max-md:h-[2.5vw]">
          Download on the
        </span>
        <p className="text-[1.5vw] font-semibold leading-8 max-sm:text-[6vw] max-sm:leading-[1.2] max-md:text-[3.2vw] max-md:leading-[1.2]">
          App Store
        </p>
      </div>
    </button>
  );
};

export const PlayStoreButton = () => {
  return (
    <button
      aria-label="Download from Play Store"
      className="font-display text-black-1 flex relative z-[9999] w-[16vw] justify-start items-center gap-4 py-[0.6vw] px-[2vw] rounded-full overflow-hidden bg-white border border-gray-100 max-sm:min-w-[65vw] max-sm:w-fit max-sm:px-[10vw] max-sm:py-[3vw] max-md:min-w-[30vw] max-md:w-fit max-md:py-[1.5vw] max-md:px-[4vw] cursor-pointer group hover:scale-[0.95] transition-all duration-300 ease"
    >
      <div>
        <GooglePlay className="w-[2.2vw] h-[2.2vw] max-sm:w-[8vw] max-sm:h-[8vw] max-md:w-[4.5vw] max-md:h-[4.5vw]" />
      </div>
      <div className="text-left flex flex-col">
        <span className="text-[0.83vw] h-[0.8vw] font-medium max-sm:text-[3vw] max-sm:h-auto max-md:text-[2vw] max-md:h-[2.5vw]">
          Get it on
        </span>
        <p className="text-[1.5vw] font-semibold leading-8 max-sm:text-[6vw] max-sm:leading-[1.2] max-md:text-[3.2vw] max-md:leading-[1.2]">
          Google Play
        </p>
      </div>
    </button>
  );
};

export const LinkButton = ({ text, href, className = "", ...props }) => {
  const { navigateTo } = useAnimatedNavigation();

  return (
    <Link
      {...props}
      className={`group w-fit hover:text-primary block duration-300  ${className}`}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        navigateTo(href);
      }}
    >
      <div className="flex items-center justify-start gap-2 max-sm:gap-1">
        <span className="link-line">{text}</span>
        <span className="h-[1px] w-[1px] inline-block overflow-hidden"> About {href}</span>
        <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300 w-[1vw] h-[1vw] max-sm:w-[4vw] max-sm:h-[4vw] max-md:w-[2.5vw] max-md:h-[2.5vw]" />
      </div>
    </Link>
  );
};
