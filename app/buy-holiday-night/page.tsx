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
import { Calendar, MapPin, Search, Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

// Improve the buy holiday night page for better mobile responsiveness
export default function BuyHolidayNight() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Filters Sidebar - Mobile Drawer */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold tracking-tighter">
            Buy Holiday Night
          </h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[85vw] sm:w-[350px] overflow-y-auto"
            >
              <SheetHeader className="mb-5">
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>

              <div className="space-y-5">
                <div>
                  <h3 className="font-medium mb-2">Location</h3>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Any location" className="pl-10" />
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Check-in Date</h3>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Select date" className="pl-10" />
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Price Range (per night)</h3>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={[200, 800]}
                      min={0}
                      max={2000}
                      step={50}
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">$0</span>
                      <span className="text-sm text-muted-foreground">
                        $2,000+
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Resort Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-type-all" />
                      <label htmlFor="mobile-type-all" className="text-sm">
                        All Types
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-type-beach" />
                      <label htmlFor="mobile-type-beach" className="text-sm">
                        Beach Resort
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-type-ski" />
                      <label htmlFor="mobile-type-ski" className="text-sm">
                        Ski Resort
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-type-golf" />
                      <label htmlFor="mobile-type-golf" className="text-sm">
                        Golf Resort
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-type-spa" />
                      <label htmlFor="mobile-type-spa" className="text-sm">
                        Spa Resort
                      </label>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 mt-4">
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Filters Sidebar - Desktop */}
        <div className="hidden lg:block w-full lg:w-1/4 space-y-6 h-fit sticky top-20">
          <div className="bg-white p-5 rounded-xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Any location" className="pl-10" />
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Check-in Date</h3>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Select date" className="pl-10" />
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Price Range (per night)</h3>
                <div className="space-y-4">
                  <Slider
                    defaultValue={[200, 800]}
                    min={0}
                    max={2000}
                    step={50}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">$0</span>
                    <span className="text-sm text-muted-foreground">
                      $2,000+
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Resort Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-all" />
                    <label htmlFor="type-all" className="text-sm">
                      All Types
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-beach" />
                    <label htmlFor="type-beach" className="text-sm">
                      Beach Resort
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-ski" />
                    <label htmlFor="type-ski" className="text-sm">
                      Ski Resort
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-golf" />
                    <label htmlFor="type-golf" className="text-sm">
                      Golf Resort
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-spa" />
                    <label htmlFor="type-spa" className="text-sm">
                      Spa Resort
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Room Type</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any room type</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="1br">1 Bedroom</SelectItem>
                    <SelectItem value="2br">2 Bedroom</SelectItem>
                    <SelectItem value="3br">3 Bedroom</SelectItem>
                    <SelectItem value="4br">4+ Bedroom</SelectItem>
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
        <div className="w-full lg:w-3/4">
          <div className="hidden lg:flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-2">
                Buy Holiday Night
              </h1>
              <p className="text-muted-foreground">
                Find and book individual holiday nights at exclusive resorts
                worldwide
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 lg:mt-0">
              <div className="relative w-full lg:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search holiday nights"
                  className="pl-10 w-full lg:w-[200px]"
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
                  <SelectItem value="date">Check-in Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mobile search and sort */}
          <div className="lg:hidden mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search holiday nights" className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="date">Check-in Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-muted-foreground text-sm">
              Find and book individual holiday nights at exclusive resorts
              worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                    {item % 3 === 0 ? "Beach" : item % 3 === 1 ? "Ski" : "Golf"}
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-base sm:text-lg mb-1">
                    Luxury Resort Night {item}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-xs sm:text-sm mb-2">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span>
                      {item % 3 === 0
                        ? "Maldives"
                        : item % 3 === 1
                          ? "Aspen, Colorado"
                          : "Phuket, Thailand"}
                    </span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span>
                      {item % 4 === 0
                        ? "May 15-16, 2025"
                        : item % 4 === 1
                          ? "June 3-4, 2025"
                          : item % 4 === 2
                            ? "July 10-11, 2025"
                            : "August 22-23, 2025"}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 gap-1 sm:gap-2">
                    <span className="bg-slate-100 rounded-full px-2 py-0.5">
                      {item % 4 === 0
                        ? "2 Bedroom"
                        : item % 4 === 1
                          ? "Studio"
                          : item % 4 === 2
                            ? "1 Bedroom"
                            : "3 Bedroom"}
                    </span>
                    <span className="bg-slate-100 rounded-full px-2 py-0.5">
                      {item % 2 === 0 ? "Ocean View" : "Mountain View"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-3 sm:mt-4">
                    <div>
                      <span className="text-muted-foreground text-xs sm:text-sm">
                        Price per night
                      </span>
                      <p className="font-bold text-base sm:text-lg">
                        ${(item * 100 + 300).toLocaleString()}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-teal-600 hover:bg-teal-700 h-8 text-xs sm:text-sm px-3"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 sm:mt-10">
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <Button variant="outline" className="h-8 w-8 sm:h-10 sm:w-10 p-0">
                1
              </Button>
              <Button variant="outline" className="h-8 w-8 sm:h-10 sm:w-10 p-0">
                2
              </Button>
              <Button variant="outline" className="h-8 w-8 sm:h-10 sm:w-10 p-0">
                3
              </Button>
              <Button variant="outline" className="h-8 w-8 sm:h-10 sm:w-10 p-0">
                ...
              </Button>
              <Button variant="outline" className="h-8 w-8 sm:h-10 sm:w-10 p-0">
                10
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
