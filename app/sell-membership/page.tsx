import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload, Info, Check } from "lucide-react";

export default function SellMembership() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter mb-2">
            Sell Your Membership
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            List your resort membership for sale and reach thousands of
            potential buyers
          </p>
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="details">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center mr-2">
                  1
                </div>
                Membership Details
              </div>
            </TabsTrigger>
            <TabsTrigger value="pricing">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center mr-2">
                  2
                </div>
                Pricing & Photos
              </div>
            </TabsTrigger>
            <TabsTrigger value="review">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center mr-2">
                  3
                </div>
                Review & Submit
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Membership Details</CardTitle>
                <CardDescription>
                  Provide information about your membership to help buyers make
                  an informed decision.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="membership-type">Membership Type</Label>
                    <Select>
                      <SelectTrigger id="membership-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="resort">Resort</SelectItem>
                        <SelectItem value="club">Club</SelectItem>
                        <SelectItem value="points">Points</SelectItem>
                        <SelectItem value="fractional">Fractional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resort-name">Resort/Club Name</Label>
                    <Input
                      id="resort-name"
                      placeholder="Enter resort or club name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City, Country" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Select>
                      <SelectTrigger id="duration">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="annual">Annual</SelectItem>
                        <SelectItem value="biennial">Biennial</SelectItem>
                        <SelectItem value="triennial">Triennial</SelectItem>
                        <SelectItem value="lifetime">Lifetime</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="unit-size">Unit Size</Label>
                    <Select>
                      <SelectTrigger id="unit-size">
                        <SelectValue placeholder="Select unit size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="1br">1 Bedroom</SelectItem>
                        <SelectItem value="2br">2 Bedroom</SelectItem>
                        <SelectItem value="3br">3 Bedroom</SelectItem>
                        <SelectItem value="4br">4+ Bedroom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="usage">Usage</Label>
                    <Select>
                      <SelectTrigger id="usage">
                        <SelectValue placeholder="Select usage type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fixed">Fixed Week</SelectItem>
                        <SelectItem value="floating">Floating Week</SelectItem>
                        <SelectItem value="points">Points Based</SelectItem>
                        <SelectItem value="rci">RCI Exchange</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your membership in detail. Include information about amenities, usage rights, and any other relevant details."
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amenities">Amenities</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="amenity-pool"
                        className="rounded border-gray-300"
                      />
                      <label htmlFor="amenity-pool">Swimming Pool</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="amenity-spa"
                        className="rounded border-gray-300"
                      />
                      <label htmlFor="amenity-spa">Spa</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="amenity-golf"
                        className="rounded border-gray-300"
                      />
                      <label htmlFor="amenity-golf">Golf Course</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="amenity-beach"
                        className="rounded border-gray-300"
                      />
                      <label htmlFor="amenity-beach">Beach Access</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="amenity-ski"
                        className="rounded border-gray-300"
                      />
                      <label htmlFor="amenity-ski">Ski Access</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="amenity-restaurant"
                        className="rounded border-gray-300"
                      />
                      <label htmlFor="amenity-restaurant">Restaurant</label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Continue to Pricing & Photos
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="pricing">
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Photos</CardTitle>
                <CardDescription>
                  Set your price and upload photos to showcase your membership.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="asking-price">Asking Price ($)</Label>
                    <Input
                      id="asking-price"
                      type="number"
                      placeholder="Enter your asking price"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="annual-dues">
                      Annual Maintenance Fees ($)
                    </Label>
                    <Input
                      id="annual-dues"
                      type="number"
                      placeholder="Enter annual fees"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Upload Photos</Label>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop your photos here, or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                      Upload up to 10 photos (max 5MB each) in JPG, PNG format
                    </p>
                    <Button variant="outline" size="sm">
                      Browse Files
                    </Button>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg flex items-start">
                  <Info className="h-5 w-5 text-slate-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-slate-600">
                    <p className="font-medium mb-1">Tips for great photos:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Include photos of the resort, amenities, and unit (if
                        possible)
                      </li>
                      <li>Use high-quality, well-lit images</li>
                      <li>Show different angles and features</li>
                      <li>
                        Avoid using stock photos - authentic images build trust
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Back to Details</Button>
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Continue to Review
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="review">
            <Card>
              <CardHeader>
                <CardTitle>Review & Submit</CardTitle>
                <CardDescription>
                  Review your listing details before submitting.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Membership Type
                      </h3>
                      <p>Resort</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Resort/Club Name
                      </h3>
                      <p>Luxury Beach Resort</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Location
                      </h3>
                      <p>Bali, Indonesia</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Duration
                      </h3>
                      <p>Annual</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Unit Size
                      </h3>
                      <p>2 Bedroom</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Usage
                      </h3>
                      <p>Floating Week</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Asking Price
                      </h3>
                      <p className="font-bold">$15,000</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Annual Maintenance Fees
                      </h3>
                      <p>$1,200</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Description
                    </h3>
                    <p className="text-sm">
                      Beautiful 2-bedroom membership at Luxury Beach Resort in
                      Bali. This membership includes access to all resort
                      amenities including the private beach, multiple swimming
                      pools, spa, and fine dining restaurants. Usage is flexible
                      with floating weeks that can be booked throughout the
                      year.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Amenities
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="bg-slate-200 text-slate-700 text-xs rounded-full px-2 py-1">
                        Swimming Pool
                      </span>
                      <span className="bg-slate-200 text-slate-700 text-xs rounded-full px-2 py-1">
                        Spa
                      </span>
                      <span className="bg-slate-200 text-slate-700 text-xs rounded-full px-2 py-1">
                        Beach Access
                      </span>
                      <span className="bg-slate-200 text-slate-700 text-xs rounded-full px-2 py-1">
                        Restaurant
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Photos
                    </h3>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      <div className="aspect-video bg-slate-200 rounded-md"></div>
                      <div className="aspect-video bg-slate-200 rounded-md"></div>
                      <div className="aspect-video bg-slate-200 rounded-md"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-teal-800">Listing Fee</h3>
                      <p className="text-sm text-teal-700 mt-1">
                        A listing fee of $99 will be charged when you submit
                        your listing. This fee covers verification of your
                        membership and listing for 6 months.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 rounded border-gray-300"
                  />
                  <label htmlFor="terms" className="text-sm">
                    I confirm that all information provided is accurate and I
                    have the legal right to sell this membership. I agree to the{" "}
                    <a href="/terms" className="text-teal-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="text-teal-600 hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Back to Pricing & Photos</Button>
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Submit Listing
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
