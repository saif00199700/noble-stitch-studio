import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Shop No. 12, Fashion Plaza", "Ratnagiri, Maharashtra 415612"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@customdesignerstudio.com", "orders@customdesignerstudio.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: By Appointment"],
    },
  ];

  return (
    <section className="bg-luxury-dark py-20 text-luxury-cream">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-luxury-cream/80">
            Ready to create your perfect outfit? Reach out to us
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-luxury-charcoal p-8">
            <h3 className="font-display mb-6 text-2xl font-semibold">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="border-luxury-gold/20 bg-luxury-dark text-luxury-cream placeholder:text-luxury-cream/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="border-luxury-gold/20 bg-luxury-dark text-luxury-cream placeholder:text-luxury-cream/50"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="border-luxury-gold/20 bg-luxury-dark text-luxury-cream placeholder:text-luxury-cream/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="border-luxury-gold/20 bg-luxury-dark text-luxury-cream placeholder:text-luxury-cream/50"
                />
              </div>
              <Button variant="luxury" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-lg bg-luxury-charcoal p-6 transition-all hover:bg-luxury-charcoal/80"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-luxury-gold/20">
                  <info.icon className="h-6 w-6 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-luxury-gold">
                    {info.title}
                  </h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-luxury-cream/80">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
