import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Travel Holiday Spots</h3>
            <p className="text-gray-400 mb-6">
              We specialize in creating unforgettable travel experiences around the world. Our expert team crafts
              perfect itineraries for every type of traveler.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-[#F26D51] mt-1" size={18} />
                <span className="text-gray-400">123 Travel Street, New York, NY 10001, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-[#F26D51]" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-[#F26D51]" size={18} />
                <span className="text-gray-400">info@travelholidayspots.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                  Tour Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#F26D51] transition-colors">
                  Booking Tips
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Travel Holiday Spots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
