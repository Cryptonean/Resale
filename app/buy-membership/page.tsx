import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { MapPin, Search, Filter } from "lucide-react";
import Image from "next/image";

export default function BuyMembership() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-1/4 space-y-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Any location" className="pl-10" />
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="space-y-4">
                  <Slider
                    defaultValue={[5000, 25000]}
                    min={0}
                    max={50000}
                    step={1000}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">$0</span>
                    <span className="text-sm text-muted-foreground">
                      $50,000+
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Membership Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-all" />
                    <label htmlFor="type-all" className="text-sm">
                      All Types
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-resort" />
                    <label htmlFor="type-resort" className="text-sm">
                      Resort
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-club" />
                    <label htmlFor="type-club" className="text-sm">
                      Club
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-points" />
                    <label htmlFor="type-points" className="text-sm">
                      Points
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-fractional" />
                    <label htmlFor="type-fractional" className="text-sm">
                      Fractional
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Duration</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any duration</SelectItem>
                    <SelectItem value="annual">Annual</SelectItem>
                    <SelectItem value="biennial">Biennial</SelectItem>
                    <SelectItem value="triennial">Triennial</SelectItem>
                    <SelectItem value="lifetime">Lifetime</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="font-medium mb-2">Amenities</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="amenity-pool" />
                    <label htmlFor="amenity-pool" className="text-sm">
                      Swimming Pool
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="amenity-spa" />
                    <label htmlFor="amenity-spa" className="text-sm">
                      Spa
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="amenity-golf" />
                    <label htmlFor="amenity-golf" className="text-sm">
                      Golf Course
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="amenity-beach" />
                    <label htmlFor="amenity-beach" className="text-sm">
                      Beach Access
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="amenity-ski" />
                    <label htmlFor="amenity-ski" className="text-sm">
                      Ski Access
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter mb-2">
                Buy Membership
              </h1>
              <p className="text-muted-foreground">
                Browse and purchase premium resort memberships at discounted
                rates
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search memberships"
                  className="pl-10 w-full md:w-[200px]"
                />
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by: Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="md:hidden">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
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
                    {item % 3 === 0
                      ? "Club"
                      : item % 3 === 1
                        ? "Resort"
                        : "Points"}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">
                    Luxury Resort Membership {item}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>
                      {item % 3 === 0
                        ? "Maldives"
                        : item % 3 === 1
                          ? "Bali, Indonesia"
                          : "Aspen, Colorado"}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <span className="bg-slate-100 rounded-full px-2 py-0.5 mr-2">
                      {item % 2 === 0 ? "Annual" : "Lifetime"}
                    </span>
                    <span className="bg-slate-100 rounded-full px-2 py-0.5">
                      {item % 4 === 0
                        ? "2 Bedroom"
                        : item % 4 === 1
                          ? "Studio"
                          : item % 4 === 2
                            ? "1 Bedroom"
                            : "3 Bedroom"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <span className="text-muted-foreground text-sm">
                        Price
                      </span>
                      <p className="font-bold text-lg">
                        ${(item * 5000 + 10000).toLocaleString()}
                      </p>
                    </div>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="mx-1">
              ...
            </Button>
            <Button variant="outline" className="mx-1">
              10
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
