import Link from "next/link";
import { AppleIcon, ArrowRight, GooglePlay } from "./icons";
import { useState } from "react";
import { useTransitionRouter } from "next-view-transitions";

export const AppleStoreButton = () => {
  return (
    <button
      aria-label="Download from Apple Store"
      className="font-display text-white flex w-[16vw] justify-start items-center gap-4 py-[0.6vw] px-[2vw] rounded-full overflow-hidden bg-primary border border-primary max-sm:min-w-[65vw] max-sm:w-fit max-sm:px-[10vw] max-sm:py-[3vw] max-md:min-w-[30vw] max-md:py-[1.5vw] max-md:px-[4vw]"
    >
      <div>
        <AppleIcon className="w-[2.2vw] h-[2.4vw] mt-[-0.5vw] max-sm:w-[8vw] max-sm:h-[8vw] max-md:w-[4.5vw] max-md:h-[4.5vw]" />
      </div>
      <div className="text-left flex flex-col">
        <span className="text-[0.83vw] h-[0.8vw] max-sm:text-[3vw] max-sm:h-auto max-md:text-[2vw] max-md:h-[2.5vw]">
          Download on the
        </span>
        <p className="text-[1.5vw] leading-8 max-sm:text-[6vw] max-sm:leading-[1.2] max-md:text-[3.2vw] max-md:leading-[1.2]">
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
      className="font-display text-black-1 flex w-[16vw] justify-start items-center gap-4 py-[0.6vw] px-[2vw] rounded-full overflow-hidden bg-white border border-gray-100 max-sm:min-w-[65vw] max-sm:w-fit max-sm:px-[10vw] max-sm:py-[3vw] max-md:min-w-[30vw] max-md:w-fit max-md:py-[1.5vw] max-md:px-[4vw]"
    >
      <div>
        <GooglePlay className="w-[2.2vw] h-[2.2vw] max-sm:w-[8vw] max-sm:h-[8vw] max-md:w-[4.5vw] max-md:h-[4.5vw]" />
      </div>
      <div className="text-left flex flex-col">
        <span className="text-[0.83vw] h-[0.8vw] max-sm:text-[3vw] max-sm:h-auto max-md:text-[2vw] max-md:h-[2.5vw]">
          Get it on
        </span>
        <p className="text-[1.5vw] leading-8 max-sm:text-[6vw] max-sm:leading-[1.2] max-md:text-[3.2vw] max-md:leading-[1.2]">
          Google Play
        </p>
      </div>
    </button>
  );
};

export const LinkButton = ({ text, href, className = "", ...props }) => {
  const router = useTransitionRouter();

  const [isAnimating, setIsAnimating] = useState(false);

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "scale(1)",
          borderRadius: "0"
        },
        {
          opacity: 0.2,
          transform: "scale(0.95)",
          borderRadius: "20px",
        },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }
  const getExactPath = () => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return currentPath;
  };

  const isExactPath = (path) => {
    const exactCurrentPath = getExactPath();
    return exactCurrentPath === path;
  };

  const navigateTo = (path) => {
    if (isAnimating) return;

    if (isExactPath(path)) {
      return;
    }

    router.push(path, {
      onTransitionReady: slideInOut,
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };
  return (
    <Link
      className={`group w-fit hover:text-primary duration-300 ${className}`}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        navigateTo(href);
      }}
    >
      <div className="flex items-center justify-start gap-2">
        <span>{text}</span>
        <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300 w-[1vw] h-[1vw] max-sm:w-[4vw] max-sm:h-[4vw] max-md:w-[2.5vw] max-md:h-[2.5vw]" />
      </div>
    </Link>
  );
};
