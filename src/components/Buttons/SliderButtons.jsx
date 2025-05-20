import { ArrowRight } from "./icons";

export function PreviousButton({ onClick }) {
  return (
    <button
      aria-label="previous slide"
      onClick={onClick}
      className="h-[3.5vw] w-[3.5vw] px-[1.2vw] group rounded-full text-white hover:text-primary relative border border-white hover:border-transparent duration-400 hover:scale-95 cursor-pointer"
    >
      <span className="block h-full w-full absolute bg-white group-hover:scale-100 scale-0 duration-400 rounded-full left-0 top-0" />
      <div className="w-fit h-fit justify-center flex items-center">
        <ArrowRight className="rotate-180 relative z-10" />
      </div>
    </button>
  );
}

export function NextButton({ onClick }) {
  return (
    <button
      aria-label="next slide"
      onClick={onClick}
      className="h-[3.5vw] w-[3.5vw] px-[1.2vw] group rounded-full text-white hover:text-primary relative border border-white hover:border-transparent duration-400 hover:scale-95 cursor-pointer"
    >
      <span className="block w-full h-full absolute bg-white group-hover:scale-100 scale-0 duration-400 rounded-full left-0 top-0" />
      <div className="w-fit h-fit justify-center flex items-center">
        <ArrowRight className="relative z-10" />
      </div>
    </button>
  );
}
