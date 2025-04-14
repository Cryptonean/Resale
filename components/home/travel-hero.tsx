import Link from "next/link";
import Image from "next/image";
import { CircleDot } from "lucide-react";

export default function TravelHero() {
  return (
    <div className="min-h-screen bg-[#222222] text-white relative overflow-hidden">
      {/* Left side diagonal overlay - improved gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#8B3E29]/80 via-[#8B3E29]/20 to-transparent z-0"></div>

      {/* Hero Content */}
      <main className="container mx-auto px-4 pt-16 pb-24 grid md:grid-cols-2 gap-8 relative z-10">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <CircleDot className="text-[#F26D51]" size={20} />
            <span>Get To Know</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Travel, Enjoy And Live A{" "}
            <span className="text-[#F26D51] block mt-2">New Full Life</span>
          </h1>

          <p className="text-gray-300 mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div>
            <Link
              href="#"
              className="bg-[#F26D51] hover:bg-[#e05a3e] text-white px-6 py-3 rounded-md inline-block transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Improved Polaroid Images Layout */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Rome - Colosseum */}
            <div className="absolute top-0 right-[5%] bg-white p-2 rounded-md rotate-6 shadow-lg transform transition-transform hover:scale-105 hover:rotate-3 z-20">
              <div
                className="overflow-hidden"
                style={{ width: "160px", height: "200px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop"
                  width={160}
                  height={200}
                  alt="Rome"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-black text-center mt-2 font-medium">Rome</p>
            </div>

            {/* Paris - Eiffel Tower */}
            <div className="absolute top-[15%] right-[35%] bg-white p-2 rounded-md -rotate-3 shadow-lg transform transition-transform hover:scale-105 hover:rotate-0 z-30">
              <div
                className="overflow-hidden"
                style={{ width: "160px", height: "200px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1974&auto=format&fit=crop"
                  width={160}
                  height={200}
                  alt="Paris"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-black text-center mt-2 font-medium">Paris</p>
            </div>

            {/* London - Tower Bridge */}
            <div className="absolute top-[45%] right-[10%] bg-white p-2 rounded-md rotate-12 shadow-lg transform transition-transform hover:scale-105 hover:rotate-6 z-10">
              <div
                className="overflow-hidden"
                style={{ width: "160px", height: "200px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
                  width={160}
                  height={200}
                  alt="London"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-black text-center mt-2 font-medium">London</p>
            </div>

            {/* Thailand - Beach */}
            <div className="absolute bottom-[5%] right-[25%] bg-white p-2 rounded-md -rotate-6 shadow-lg transform transition-transform hover:scale-105 hover:-rotate-3 z-20">
              <div
                className="overflow-hidden"
                style={{ width: "160px", height: "200px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1939&auto=format&fit=crop"
                  width={160}
                  height={200}
                  alt="Thailand"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-black text-center mt-2 font-medium">
                Thailand
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
