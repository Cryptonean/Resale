import { Shield, Clock, MapPin, Award, Users, Headphones } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-[#F26D51]" />,
      title: "100% Financial Protection",
      description: "Your money is safe with us. All bookings are financially protected for your peace of mind.",
    },
    {
      icon: <Clock className="w-12 h-12 text-[#F26D51]" />,
      title: "24/7 Customer Support",
      description: "Our dedicated team is available around the clock to assist you with any questions or concerns.",
    },
    {
      icon: <MapPin className="w-12 h-12 text-[#F26D51]" />,
      title: "Handpicked Hotels",
      description: "We carefully select accommodations that meet our high standards of quality and comfort.",
    },
    {
      icon: <Award className="w-12 h-12 text-[#F26D51]" />,
      title: "Best Price Guarantee",
      description: "We promise you'll get the best rates available for all our tours and destinations.",
    },
    {
      icon: <Users className="w-12 h-12 text-[#F26D51]" />,
      title: "Experienced Tour Guides",
      description: "Our professional guides have extensive knowledge and passion for the destinations they cover.",
    },
    {
      icon: <Headphones className="w-12 h-12 text-[#F26D51]" />,
      title: "Hassle-Free Booking",
      description: "Our simple booking process makes planning your trip quick and easy.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're dedicated to making your travel experience exceptional from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
