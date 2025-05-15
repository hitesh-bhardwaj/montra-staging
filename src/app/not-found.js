import Link from "next/link";

export default function NotFoundPage() {
    return (
        <>
            <div id="hero" className="bg-white h-screen w-screen">
                <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-primary font-medium text-[10vw] leading-[1.1]">
                            404
                        </h1>
                        <p>Go back to <Link href="/">Homepage!!!</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}