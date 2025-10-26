import { Award, Users, Star } from "lucide-react";
import aboutImage from "@/assets/about-craftsmanship.jpg";

const About = () => {
  const stats = [
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Users, value: "10,000+", label: "Happy Clients" },
    { icon: Star, value: "100%", label: "Custom Made" },
  ];

  return (
    <section className="bg-luxury-dark py-20 text-luxury-cream">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={aboutImage}
                alt="Craftsmanship"
                className="h-[600px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 left-8 right-8 rounded-lg bg-luxury-gold p-6 shadow-luxury">
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <stat.icon className="mx-auto mb-2 h-6 w-6 text-luxury-dark" />
                    <div className="font-display text-2xl font-bold text-luxury-dark">
                      {stat.value}
                    </div>
                    <div className="text-xs text-luxury-dark/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="font-display mb-6 text-4xl font-bold md:text-5xl">
              Crafting Excellence
              <br />
              <span className="text-luxury-gold">Since 1998</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-luxury-cream/90">
              From a modest beginning in Ratnagiri, Custom Designer Studio has
              grown into a trusted symbol of luxury and authenticity in men's
              fashion.
            </p>
            <p className="mb-6 leading-relaxed text-luxury-cream/80">
              Founded by acclaimed master tailor Abdul Karim, our studio is more
              than a fashion destination—we are the embodiment of heritage,
              craftsmanship, and personal style. From royal sherwanis to bespoke
              three-piece suits, every piece we create tells a unique story.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-luxury-gold" />
                <p className="text-luxury-cream/80">
                  Precision tailoring refined by decades of tradition
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-luxury-gold" />
                <p className="text-luxury-cream/80">
                  Design consultations tailored to your personality
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-luxury-gold" />
                <p className="text-luxury-cream/80">
                  Unmatched attention to detail in embroidery and finish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
