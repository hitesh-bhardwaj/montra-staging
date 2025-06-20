import InteractiveBackground from "@/components/Background";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <>
            <div id="hero" className=" h-screen w-screen">
                <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-primary font-medium text-[20vw] max-sm:text-[40vw] max-md:text-[25vw] leading-[1.1]">
                            404
                        </h1>
                        <p>Go back to <Link href="/" className="link-line">Homepage!!!</Link></p>
                    </div>
                </div>
                
            </div>
        </>
    )
}