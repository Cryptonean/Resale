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
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter mb-2">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about buying or selling a membership? Our team is
            here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">
                Speak directly with our customer support team
              </p>
              <p className="font-medium">(123) 456-7890</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                Send us an email and we'll respond within 24 hours
              </p>
              <p className="font-medium">info@vacayexchange.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
              <p className="text-muted-foreground mb-4">
                We're available to assist you
              </p>
              <p className="font-medium">Mon-Fri: 9AM - 6PM EST</p>
              <p className="font-medium">Sat: 10AM - 4PM EST</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>

                <div className="space-y-2">
                  <Label />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger id="subject">
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
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <div className="rounded-lg overflow-hidden mb-6 h-[300px] bg-slate-200 flex items-center justify-center">
              <MapPin className="h-12 w-12 text-slate-400" />
              <span className="sr-only">Map</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-600 mt-0.5 mr-3" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <address className="not-italic text-muted-foreground">
                    <p>123 Vacation Lane</p>
                    <p>Paradise City, PC 12345</p>
                    <p>United States</p>
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-teal-600 mt-0.5 mr-3" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    info@vacayexchange.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-teal-600 mt-0.5 mr-3" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">How do I verify a membership?</h4>
                  <p className="text-sm text-muted-foreground">
                    All memberships are verified by our team before being
                    listed. We check ownership documents and contact the resort
                    directly.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">
                    Is there a fee to sell my membership?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, there is a small listing fee and a commission on
                    successful sales. See our pricing page for details.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">
                    How long does the transfer process take?
                  </h4>
                  <p className="text-sm text-muted-foreground">
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
