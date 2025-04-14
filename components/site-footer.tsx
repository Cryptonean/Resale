import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container px-4 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VacayExchange</h3>
            <p className="text-slate-400 mb-4 text-sm sm:text-base">
              The premier marketplace for buying and selling premium vacation
              memberships and holiday nights.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-base sm:text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/buy-membership"
                  className="text-slate-400 hover:text-white"
                >
                  Buy Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/sell-membership"
                  className="text-slate-400 hover:text-white"
                >
                  Sell Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/buy-holiday-night"
                  className="text-slate-400 hover:text-white"
                >
                  Buy Holiday Night
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-slate-400 hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-base sm:text-lg">Support</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-slate-400 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-base sm:text-lg">Contact</h3>
            <address className="not-italic text-slate-400 text-sm sm:text-base">
              <p>123 Vacation Lane</p>
              <p>Paradise City, PC 12345</p>
              <p className="mt-2">Email: info@vacayexchange.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} VacayExchange. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
