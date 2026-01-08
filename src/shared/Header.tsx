import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  FolderLock,
  Heart,
  HelpCircle,
  Lock,
  LogOut,
  Package,
  PiggyBank,
  Search,
  ShoppingCart,
  User,
  User2,
  Users2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const handleLoginClick = () => {};
  const handleProtectionNavigation = (href: string) => {
    console.log(href);
  };
  const handleLogout =()=>{
    
  }
  const user: any = {
    profilePicture: "",
    name: "",
    email: "",
  };

  const userPlaceholder = "";
  // ========== menuItems ===========//
  const menuItems = [
    ...(user && user
      ? [
          {
            href: "account/profile",
            content: (
              <div className="flex space-x-4 items-center p-2 border-b">
                <Avatar className="w-12 h-12 -ml-2 rounded-full">
                  {user?.profilePicture ? (
                    <AvatarImage alt="user_image"></AvatarImage>
                  ) : (
                    <AvatarFallback>Tonmoy</AvatarFallback>
                  )}
                </Avatar>
                {/* =========== name and email ============ */}
                <div className="flex flex-col">
                  <span className="font-semibold text-base">{user.name}</span>
                  <span className="font-semibold text-xs text-gray-500">
                    {user.email}
                  </span>
                </div>
              </div>
            ),
          },
        ]
      : [
          {
            icon: <User className="h-5 w-5" />,
            label: "My Profile",
            onClick: () => handleProtectionNavigation("account/profile"),
          },
        ]),
    {
      icon: <Package className="h-5 w-5" />,
      label: "My Orders",
      onClick: () => handleProtectionNavigation("/account/orders"),
    },
    {
      icon: <PiggyBank className="h-5 w-5" />,
      label: "My Selling Orders",
      onClick: () => handleProtectionNavigation("/account/selling-products"),
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      label: "Cart",
      onClick: () => handleProtectionNavigation("/checkout/cart"),
    },
    {
      icon: <Heart className="h-5 w-5" />,
      label: "My Wishlist",
     onClick:()=>handleProtectionNavigation("account/wishlist")
    },
    {
      icon: <User2 className="h-5 w-5" />,
      label: "About Us",
      href:'/about'},
    {
      icon: <Lock className="h-5 w-5" />,
      label: "Terms & Use",
      href:'/terms-of-use'
    },
    {
      icon: <FolderLock className="h-5 w-5" />,
      label: "Privacy-Policy",
      href:'/privacy-policy'
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      label: "Help",
       href:'/how-it-works'
    },
    ...(user && [
      {
      icon: <LogOut className="h-5 w-5" />,
      label: "Logout",
      onClick:handleLogout
    },
    ])
  ];
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
        {/* ============= book sell button ============ */}
        <div className="flex items-center gap-4">
          <Link href="/book-sell">
            <Button className="bg-[#00897b] cursor-pointer text-white hover:bg-[#00695C] transition-colors duration-200">
              Sell Used Book
            </Button>
          </Link>
        </div>
        {/* ================= dropdown ============= */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Avatar className="w-8 h-8 rounded-full">
                {user?.profilePicture ? (
                  <AvatarImage alt="user_image"></AvatarImage>
                ) : userPlaceholder ? (
                  <AvatarFallback>Tonmoy</AvatarFallback>
                ) : (
                  <User className="ml-2 mt-2" />
                )}
              </Avatar>
              My Account
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80 p-2"></DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
