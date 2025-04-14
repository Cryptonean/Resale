import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Star, Calendar, Users } from "lucide-react"

export default function FeaturedTours() {
  const tours = [
    {
      title: "Romantic Paris: 5 Days Tour",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop",
      price: 1299,
      duration: "5 Days",
      location: "Paris, France",
      rating: 4.8,
      reviews: 124,
      date: "Available from June 15",
      groupSize: "10 People",
    },
    {
      title: "Discover Ancient Rome",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=2070&auto=format&fit=crop",
      price: 1499,
      duration: "7 Days",
      location: "Rome, Italy",
      rating: 4.9,
      reviews: 89,
      date: "Available year-round",
      groupSize: "12 People",
    },
    {
      title: "Santorini Island Escape",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2012&auto=format&fit=crop",
      price: 1899,
      duration: "8 Days",
      location: "Santorini, Greece",
      rating: 5.0,
      reviews: 156,
      date: "May to October",
      groupSize: "8 People",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Tours</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium tours designed to create unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm font-bold text-[#F26D51]">
                  ${tour.price}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock size={16} className="mr-1" />
                  <span className="mr-4">{tour.duration}</span>
                  <MapPin size={16} className="mr-1" />
                  <span>{tour.location}</span>
                </div>

                <h3 className="text-xl font-bold mb-3">{tour.title}</h3>

                <div className="flex items-center mb-4">
                  <div className="flex items-center text-yellow-400 mr-2">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-gray-800 font-medium">{tour.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({tour.reviews} reviews)</span>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{tour.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users size={16} className="mr-2" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                <Link
                  href="#"
                  className="mt-6 block w-full bg-[#F26D51] hover:bg-[#e05a3e] text-white text-center py-3 rounded-md transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center justify-center border-2 border-[#F26D51] text-[#F26D51] hover:bg-[#F26D51] hover:text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  )
}
