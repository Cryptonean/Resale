import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  DollarSign,
  Package,
  ShoppingCart,
  Tag,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";

// Improve dashboard responsiveness
export default function Dashboard() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-8 lg:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 lg:mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-2">
            Your Holiday Sales
          </h1>
          <p className="text-muted-foreground">
            Manage your listings, sales, and purchases
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 md:mt-0">
          <Button
            variant="outline"
            size="sm"
            className="h-9 text-xs sm:text-sm"
          >
            <Calendar className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> View
            Calendar
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700 h-9 text-xs sm:text-sm">
            <Tag className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Create New
            Listing
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Listings
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">3 active, 2 pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">$24,500</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="sm:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Purchases
            </CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              1 membership, 1 holiday night
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="listings" className="w-full">
        <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-6 h-auto">
          <TabsTrigger value="listings" className="py-2 text-xs sm:text-sm">
            My Listings
          </TabsTrigger>
          <TabsTrigger value="sales" className="py-2 text-xs sm:text-sm">
            My Sales
          </TabsTrigger>
          <TabsTrigger value="purchases" className="py-2 text-xs sm:text-sm">
            My Purchases
          </TabsTrigger>
          <TabsTrigger value="messages" className="py-2 text-xs sm:text-sm">
            Messages
          </TabsTrigger>
        </TabsList>

        <TabsContent value="listings">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0">
                Your Listings
              </h2>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="h-8 text-xs">
                  <Clock className="mr-1 h-3 w-3" /> Sort by Date
                </Button>
                <Button variant="outline" size="sm" className="h-8 text-xs">
                  <DollarSign className="mr-1 h-3 w-3" /> Sort by Price
                </Button>
              </div>
            </div>

            {[
              {
                title: "Luxury Beach Resort Membership",
                location: "Bali, Indonesia",
                price: "$15,000",
                type: "Membership",
                status: "Active",
                views: 124,
                inquiries: 5,
              },
              {
                title: "Mountain Lodge Holiday Night",
                location: "Aspen, Colorado",
                price: "$850",
                type: "Holiday Night",
                status: "Pending",
                views: 45,
                inquiries: 2,
              },
              {
                title: "Golf Club Membership",
                location: "Scottsdale, Arizona",
                price: "$22,500",
                type: "Membership",
                status: "Active",
                views: 89,
                inquiries: 3,
              },
            ].map((listing, index) => (
              <Card key={index}>
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/4">
                    <div className="aspect-video sm:h-full relative">
                      <Image
                        src={`/placeholder.svg?height=200&width=300&text=Listing%20${index + 1}`}
                        alt={listing.title}
                        fill
                        className="object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                      />
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6 w-full sm:w-3/4">
                    <div className="flex flex-col sm:flex-row justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="font-semibold text-base sm:text-lg">
                            {listing.title}
                          </h3>
                          <Badge
                            variant={
                              listing.status === "Active"
                                ? "default"
                                : "outline"
                            }
                            className="text-xs"
                          >
                            {listing.status}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 gap-2">
                          <span>{listing.location}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{listing.type}</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="font-medium text-foreground">
                            {listing.price}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3 sm:mt-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 text-xs px-2 sm:px-3"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 text-xs px-2 sm:px-3"
                        >
                          Pause
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="h-8 text-xs px-2 sm:px-3"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm">
                      <div className="flex items-center">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-muted-foreground" />
                        <span>{listing.views} views</span>
                      </div>
                      <div className="flex items-center">
                        <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-muted-foreground" />
                        <span>{listing.inquiries} inquiries</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-muted-foreground" />
                        <span>Listed on Apr 2, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sales">
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold">Your Sales</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Completed Sales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">
                    Total value: $32,500
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Pending Sales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">
                    Total value: $8,750
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Canceled Sales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground">
                    Total value: $0
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg border overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="flex items-center p-3 sm:p-4 border-b bg-muted/50">
                  <div className="w-1/3 md:w-1/5 font-medium text-xs sm:text-sm">
                    Listing
                  </div>
                  <div className="w-1/3 md:w-1/5 font-medium text-xs sm:text-sm">
                    Buyer
                  </div>
                  <div className="hidden md:block w-1/5 font-medium text-xs sm:text-sm">
                    Date
                  </div>
                  <div className="w-1/6 md:w-1/5 font-medium text-xs sm:text-sm">
                    Price
                  </div>
                  <div className="w-1/6 md:w-1/5 font-medium text-xs sm:text-sm">
                    Status
                  </div>
                </div>

                {[
                  {
                    title: "Beach Resort Membership",
                    buyer: "John Smith",
                    date: "Mar 15, 2025",
                    price: "$15,000",
                    status: "Completed",
                  },
                  {
                    title: "Ski Lodge Week",
                    buyer: "Emma Johnson",
                    date: "Feb 28, 2025",
                    price: "$3,200",
                    status: "Completed",
                  },
                  {
                    title: "Golf Club Membership",
                    buyer: "Michael Chen",
                    date: "Jan 10, 2025",
                    price: "$14,300",
                    status: "Completed",
                  },
                  {
                    title: "Beachfront Villa Points",
                    buyer: "Sarah Williams",
                    date: "Apr 5, 2025",
                    price: "$8,750",
                    status: "Pending",
                  },
                ].map((sale, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 sm:p-4 border-b last:border-0"
                  >
                    <div className="w-1/3 md:w-1/5 truncate text-xs sm:text-sm">
                      {sale.title}
                    </div>
                    <div className="w-1/3 md:w-1/5 truncate text-xs sm:text-sm">
                      {sale.buyer}
                    </div>
                    <div className="hidden md:block w-1/5 text-xs sm:text-sm">
                      {sale.date}
                    </div>
                    <div className="w-1/6 md:w-1/5 font-medium text-xs sm:text-sm">
                      {sale.price}
                    </div>
                    <div className="w-1/6 md:w-1/5 text-xs sm:text-sm">
                      <Badge
                        variant={
                          sale.status === "Completed"
                            ? "default"
                            : sale.status === "Pending"
                              ? "outline"
                              : "destructive"
                        }
                        className="text-xs"
                      >
                        {sale.status === "Completed" && (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        )}
                        {sale.status === "Pending" && (
                          <Clock className="h-3 w-3 mr-1" />
                        )}
                        {sale.status === "Canceled" && (
                          <AlertCircle className="h-3 w-3 mr-1" />
                        )}
                        {sale.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="purchases">
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold">Your Purchases</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: "Luxury Resort Membership",
                  location: "Maldives",
                  price: "$18,500",
                  type: "Membership",
                  status: "Completed",
                  date: "Jan 5, 2025",
                  seller: "Robert Johnson",
                },
                {
                  title: "Beach Villa Holiday Night",
                  location: "Phuket, Thailand",
                  price: "$950",
                  type: "Holiday Night",
                  status: "Completed",
                  date: "Mar 20, 2025",
                  seller: "Lisa Chen",
                },
              ].map((purchase, index) => (
                <Card key={index}>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/3">
                      <div className="aspect-video sm:h-full relative">
                        <Image
                          src={`/placeholder.svg?height=200&width=300&text=Purchase%20${index + 1}`}
                          alt={purchase.title}
                          fill
                          className="object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                        />
                      </div>
                    </div>
                    <div className="p-3 sm:p-4 md:p-6 w-full sm:w-2/3">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-base sm:text-lg">
                          {purchase.title}
                        </h3>
                        <Badge variant="default" className="text-xs">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {purchase.status}
                        </Badge>
                      </div>
                      <div className="flex items-center text-muted-foreground text-xs sm:text-sm mb-2">
                        <span className="mr-2 sm:mr-4">
                          {purchase.location}
                        </span>
                        <span className="mr-2 sm:mr-4">{purchase.type}</span>
                      </div>
                      <div className="text-xs sm:text-sm space-y-1 mb-3 sm:mb-4">
                        <div className="flex">
                          <span className="w-16 sm:w-20 text-muted-foreground">
                            Price:
                          </span>
                          <span className="font-medium">{purchase.price}</span>
                        </div>
                        <div className="flex">
                          <span className="w-16 sm:w-20 text-muted-foreground">
                            Date:
                          </span>
                          <span>{purchase.date}</span>
                        </div>
                        <div className="flex">
                          <span className="w-16 sm:w-20 text-muted-foreground">
                            Seller:
                          </span>
                          <span>{purchase.seller}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 text-xs px-2 sm:px-3"
                        >
                          View Details
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 text-xs px-2 sm:px-3"
                        >
                          Contact Seller
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="messages">
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold">Your Messages</h2>

            <div className="rounded-lg border overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="flex items-center p-3 sm:p-4 border-b bg-muted/50">
                  <div className="w-1/3 font-medium text-xs sm:text-sm">
                    From
                  </div>
                  <div className="w-1/2 font-medium text-xs sm:text-sm">
                    Subject
                  </div>
                  <div className="w-1/6 font-medium text-xs sm:text-sm">
                    Date
                  </div>
                </div>

                {[
                  {
                    from: "John Smith",
                    subject: "Question about Beach Resort Membership",
                    date: "Apr 10, 2025",
                    unread: true,
                  },
                  {
                    from: "VacayExchange Support",
                    subject: "Your listing has been approved",
                    date: "Apr 8, 2025",
                    unread: false,
                  },
                  {
                    from: "Sarah Williams",
                    subject: "Interested in Beachfront Villa Points",
                    date: "Apr 5, 2025",
                    unread: true,
                  },
                  {
                    from: "Michael Chen",
                    subject: "Payment confirmation for Golf Club Membership",
                    date: "Jan 10, 2025",
                    unread: false,
                  },
                ].map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 sm:p-4 border-b last:border-0 ${message.unread ? "bg-slate-50" : ""}`}
                  >
                    <div className="w-1/3 truncate font-medium text-xs sm:text-sm">
                      {message.unread && (
                        <span className="inline-block w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      )}
                      {message.from}
                    </div>
                    <div className="w-1/2 truncate text-xs sm:text-sm">
                      {message.subject}
                    </div>
                    <div className="w-1/6 text-muted-foreground text-xs sm:text-sm">
                      {message.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
