import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-[#222222] text-white relative overflow-hidden ">
      <div className="bg-gradient-to-r from-[#8B3E29]/80 via-[#8B3E29]/20  to-transparent z-0 w-full">
        <header className="relative container mx-auto px-4 py-6 flex justify-between items-center top-0 z-50">
          <div className="text-[#F26D51] text-2xl font-bold">Resale World</div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="hover:text-[#F26D51] transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-[#F26D51] transition-colors">
              About
            </Link>
            <Link href="#" className="hover:text-[#F26D51] transition-colors">
              Service
            </Link>
            <Link href="#" className="hover:text-[#F26D51] transition-colors">
              Tour
            </Link>
            <Link href="#" className="hover:text-[#F26D51] transition-colors">
              Contact
            </Link>
            <Link href="#" className="hover:text-[#F26D51] transition-colors">
              Blogs
            </Link>
            <Link
              href="#"
              className="bg-[#F26D51] hover:bg-[#e05a3e] text-white px-6 py-2 rounded-md transition-colors"
            >
              Book Now
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
}
