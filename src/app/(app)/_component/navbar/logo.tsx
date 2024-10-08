import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"]
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center mr-8 lg:mr-0 shrink-0 gap-x-4 hover:opacity-75 transition">
                <div className="h-10 w-10">
                    <Image
                        src="/vortex-white-logo.png"
                        alt="Vortex"
                        width={100}
                        height={108.6}
                        className="object-cover"
                    />
                </div>
                <p className={cn("hidden lg:block text-xl font-semibold", font.className)}>Vortex</p>
            </div>
        </Link>
    )
}