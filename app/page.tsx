import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Luxury resort"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4 sm:mb-6 max-w-4xl">
            Your Dream Vacation Awaits
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 max-w-[800px]">
            Buy and sell premium memberships and holiday nights at exclusive
            resorts worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 h-12 text-base"
            >
              Buy Membership
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 px-6 sm:px-8 h-12 text-base"
            >
              Sell Membership
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[1]"></div>
      </section>

      {/* Featured Listings */}
      <section className="container px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-2">
              Featured Listings
            </h2>
            <p className="text-muted-foreground">
              Discover our most popular memberships and holiday nights
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group rounded-xl overflow-hidden border bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Resort%20${item}`}
                  alt={`Resort ${item}`}
                  width={600}
                  height={400}
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-medium">
                  {item % 2 === 0 ? "Membership" : "Holiday Night"}
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                  <span className="text-xs text-muted-foreground ml-1">
                    (48 reviews)
                  </span>
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">
                  Luxury Resort {item}
                </h3>
                <div className="flex items-center text-muted-foreground text-xs sm:text-sm mb-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span>Bali, Indonesia</span>
                </div>
                <div className="flex justify-between items-center mt-3 sm:mt-4">
                  <div>
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      From
                    </span>
                    <p className="font-bold text-base sm:text-lg">
                      ${(499 + item * 100).toLocaleString()}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700 h-8 text-xs sm:text-sm px-3"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outline" className="mr-4">
            View All Listings
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700">
            Sell Your Membership
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-2">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide a secure and transparent marketplace for buying and
              selling premium vacation experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Secure Transactions
              </h3>
              <p className="text-muted-foreground">
                Our escrow system ensures your payment is protected until your
                membership or booking is confirmed
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Members</h3>
              <p className="text-muted-foreground">
                All sellers and memberships are verified to ensure authenticity
                and prevent fraud
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-600"
                >
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="m4.93 4.93 2.83 2.83" />
                  <path d="m16.24 16.24 2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="m4.93 19.07 2.83-2.83" />
                  <path d="m16.24 7.76 2.83-2.83" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our dedicated support team is available around the clock to
                assist with any questions or issues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our community of buyers and sellers
          </p>
        </div>

        <TestimonialsCarousel />
      </section>

      {/* CTA */}
      <section className="bg-teal-600 py-10 sm:py-12 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-3 sm:mb-4 text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of members who buy and sell premium vacation
            experiences every day
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-white/90 h-11 sm:h-12"
            >
              Buy Membership
            </Button>
            <Button
              size="lg"
              className="bg-teal-700 text-white hover:bg-teal-800 h-11 sm:h-12"
            >
              Sell Membership
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 h-11 sm:h-12"
            >
              Browse Holiday Nights
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
