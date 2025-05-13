export default function MarqueeBackground({ year }) {
    const repeatedText = Array(5).fill(year);

    return (
        <div className="absolute -translate-y-1/2 top-1/2 left-0 w-full overflow-hidden z-0 pointer-events-none max-sm:hidden">
            <div className="whitespace-nowrap flex justify-between w-[300%] font-display text-[17.5vw] font-medium text-white/10 animate-marquee">
               {repeatedText.map((text, index) => (
                <span className="w-[15%]" key={index}>{text}</span>
               ))}
            </div>
        </div>
    );
}