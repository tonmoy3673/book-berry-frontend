import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      {/* ============ desktop view ========== */}
      <div className="container w-[80%] mx-auto hidden md:flex items-center justify-between p-4">
        <Link href="/" className="flex  items-center">
          <Image
            src="/images/webLogo.png"
            width={310}
            height={100}
            alt="webLogo"
            className="h-15 w-auto"
          />
        </Link>
        {/* =============== Search Field ============ */}
        <div className="flex flex-1 items-center max-w-xl px-4">
          <div className="relative w-full ">
            <Input
              type="text"
              
              className="w-full pr-10 "
              placeholder="Book Name / Author / Subject / Publisher"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-1/2 cursor-pointer right-0 -translate-y-1/2"
            >
              <Search />
            </Button>
          </div>
        </div>
        {/* ============= book sell ============ */}
        <div className="flex items-center gap-4">
        <Link href='/book-sell'>
        </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
