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
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-8 lg:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 lg:mb-10">
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-2">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Have questions about buying or selling a membership? Our team is
            here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 lg:mb-12">
          <Card>
            <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Call Us
              </h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">
                Speak directly with our customer support team
              </p>
              <p className="font-medium text-sm sm:text-base">(123) 456-7890</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Email Us
              </h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">
                Send us an email and we'll respond within 24 hours
              </p>
              <p className="font-medium text-sm sm:text-base">
                info@vacayexchange.com
              </p>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-1">
            <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Business Hours
              </h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">
                We're available to assist you
              </p>
              <p className="font-medium text-sm sm:text-base">
                Mon-Fri: 9AM - 6PM EST
              </p>
              <p className="font-medium text-sm sm:text-base">
                Sat: 10AM - 4PM EST
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 sm:mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="h-9 sm:h-10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-9 sm:h-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm sm:text-base">
                  Subject
                </Label>
                <Select>
                  <SelectTrigger id="subject" className="h-9 sm:h-10">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="membership">
                      Membership Question
                    </SelectItem>
                    <SelectItem value="holiday">
                      Holiday Night Question
                    </SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 h-9 sm:h-10"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 sm:mb-6">Our Location</h2>
            <div className="rounded-lg overflow-hidden mb-4 sm:mb-6 h-[200px] sm:h-[300px] bg-slate-200 flex items-center justify-center">
              <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-slate-400" />
              <span className="sr-only">Map</span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm sm:text-base">Address</h3>
                  <address className="not-italic text-muted-foreground text-xs sm:text-sm">
                    <p>123 Vacation Lane</p>
                    <p>Paradise City, PC 12345</p>
                    <p>United States</p>
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm sm:text-base">Email</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    info@vacayexchange.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm sm:text-base">Phone</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    (123) 456-7890
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-slate-50 rounded-lg">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="font-medium text-sm sm:text-base">
                    How do I verify a membership?
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    All memberships are verified by our team before being
                    listed. We check ownership documents and contact the resort
                    directly.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">
                    Is there a fee to sell my membership?
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Yes, there is a small listing fee and a commission on
                    successful sales. See our pricing page for details.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">
                    How long does the transfer process take?
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    The transfer process typically takes 2-4 weeks, depending on
                    the resort and the complexity of the membership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
