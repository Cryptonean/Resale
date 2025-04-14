"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Membership Buyer",
    content:
      "I was able to find a premium resort membership at half the retail price. The verification process gave me confidence in my purchase.",
  },
  {
    name: "Michael Chen",
    role: "Holiday Night Seller",
    content:
      "When I couldn't use my holiday booking, this platform helped me sell it quickly and securely. The process was smooth and straightforward.",
  },
  {
    name: "Emma Williams",
    role: "Regular User",
    content:
      "I've both bought and sold on this platform. The user dashboard makes it easy to track all my transactions and upcoming holidays.",
  },
  {
    name: "David Rodriguez",
    role: "Membership Seller",
    content:
      "I was able to sell my resort membership within two weeks of listing it. The platform connected me with serious buyers and handled all the verification.",
  },
  {
    name: "Jennifer Lee",
    role: "Holiday Night Buyer",
    content:
      "Found an amazing deal on a luxury resort night that would have cost twice as much through regular booking channels. Highly recommend!",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Calculate indices for visible testimonials (show 3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <div className="relative">
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {getVisibleTestimonials().map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center gap-1 mb-4">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            </div>
            <p className="text-muted-foreground mb-4">
              "{testimonial.content}"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-slate-200 mr-3 flex items-center justify-center">
                <span className="text-slate-600 font-medium">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view - show only one testimonial */}
      <div className="md:hidden">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center gap-1 mb-4">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          </div>
          <p className="text-muted-foreground mb-4">
            "{testimonials[currentIndex].content}"
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-slate-200 mr-3 flex items-center justify-center">
              <span className="text-slate-600 font-medium">
                {testimonials[currentIndex].name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-8 md:justify-end md:mt-4">
        <Button
          variant="outline"
          size="icon"
          className="mr-2 rounded-full"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dots indicator for mobile */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-teal-600" : "bg-slate-300"
            } transition-colors`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
