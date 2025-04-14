import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

export default function PopularDestinations() {
  const destinations = [
    {
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
      tours: 15,
    },
    {
      name: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=2076&auto=format&fit=crop",
      tours: 12,
    },
    {
      name: "London, UK",
      image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop",
      tours: 9,
    },
    {
      name: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070&auto=format&fit=crop",
      tours: 7,
    },
    {
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop",
      tours: 10,
    },
    {
      name: "New York, USA",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
      tours: 14,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular destinations around the world. Find the perfect place for your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Link href="#" key={index} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg h-[300px]">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-white text-xl font-bold mb-2">{destination.name}</h3>
                  <div className="flex items-center text-white">
                    <MapPin size={16} className="mr-2" />
                    <span>{destination.tours} Tours</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
