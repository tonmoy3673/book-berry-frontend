import Image from "next/image";
import Link from "next/link";

const Header =()=>{
    return (
        <header className="border-b bg-white sticky top-0 z-50">
            
            {/* ============ desktop view ========== */}
            <div className="container w-[80%] mx-auto hidden md:flex items-center justify-between p-4">
                <Link href='/' className="flex  items-center">
                <Image
                src='/images/webLogo.png'
                width={310}
                height={100}
                alt="webLogo"

                />
                </Link>
            </div>
        </header>
    )
};

export default Header;