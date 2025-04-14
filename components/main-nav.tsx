"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Buy Membership",
    href: "/buy-membership",
    description:
      "Browse and purchase premium resort memberships at discounted rates.",
  },
  {
    title: "Sell Membership",
    href: "/sell-membership",
    description:
      "List your resort membership for sale and reach thousands of potential buyers.",
  },
  {
    title: "Buy Holiday Night",
    href: "/buy-holiday-night",
    description:
      "Find and book individual holiday nights at exclusive resorts worldwide.",
  },
  {
    title: "Your Holiday Sales",
    href: "/dashboard",
    description:
      "Track your listings, sales, and purchases in your personal dashboard.",
  },
];

// Improve the mobile navigation experience
export function MainNav() {
  return (
    <div className="flex justify-between items-center py-3 sm:py-4 px-4 sm:px-6 mx-auto max-w-6xl bg-white/80 backdrop-blur-md rounded-full border my-2">
      <Link href="/" className="flex items-center space-x-2 z-10">
        <span className="text-xl sm:text-2xl font-bold text-teal-600">
          VacayExchange
        </span>
      </Link>

      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Buy</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-teal-500 to-teal-700 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">
                          Featured Deals
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Discover our handpicked selection of premium
                          memberships and holiday nights at unbeatable prices.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/buy-membership"
                      >
                        <div className="text-sm font-medium leading-none">
                          Buy Membership
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Browse premium resort memberships at discounted rates.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/buy-holiday-night"
                      >
                        <div className="text-sm font-medium leading-none">
                          Buy Holiday Night
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Find individual holiday nights at exclusive resorts.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sell</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-amber-500 to-amber-700 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">
                          Why Sell With Us?
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Reach thousands of verified buyers and sell your
                          membership or holiday nights quickly and securely.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/sell-membership"
                      >
                        <div className="text-sm font-medium leading-none">
                          Sell Membership
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          List your resort membership for sale.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/sell-holiday-night"
                      >
                        <div className="text-sm font-medium leading-none">
                          Sell Holiday Night
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          List your unused holiday nights for others to enjoy.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Button variant="ghost">Sign In</Button>
        <Button className="bg-teal-600 hover:bg-teal-700">Sign Up</Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] sm:w-[350px] pt-10">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-xl font-bold text-teal-600">
                VacayExchange
              </span>
            </Link>
            <nav className="flex flex-col gap-5 mt-8">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Buy
                </h3>
                <Link
                  href="/buy-membership"
                  className="flex items-center text-base font-medium py-1"
                >
                  Buy Membership
                </Link>
                <Link
                  href="/buy-holiday-night"
                  className="flex items-center text-base font-medium py-1"
                >
                  Buy Holiday Night
                </Link>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Sell
                </h3>
                <Link
                  href="/sell-membership"
                  className="flex items-center text-base font-medium py-1"
                >
                  Sell Membership
                </Link>
                <Link
                  href="/sell-holiday-night"
                  className="flex items-center text-base font-medium py-1"
                >
                  Sell Holiday Night
                </Link>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Account
                </h3>
                <Link
                  href="/dashboard"
                  className="flex items-center text-base font-medium py-1"
                >
                  Dashboard
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center text-base font-medium py-1"
                >
                  Contact
                </Link>
              </div>

              <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                <Button variant="outline" className="w-full justify-center">
                  Sign In
                </Button>
                <Button className="bg-teal-600 hover:bg-teal-700 w-full justify-center">
                  Sign Up
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
