import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tailor.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Master tailor at work"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-display mb-6 text-5xl font-bold leading-tight text-luxury-cream md:text-7xl">
              Find Custom Suits
              <br />
              <span className="text-luxury-gold">Tailor Make Your Cloth</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-luxury-cream/90 md:text-xl">
              Where every thread tells a story, and every stitch defines
              character. Experience bespoke tailoring excellence since 1998.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                variant="luxury"
                size="lg"
                className="group gap-2"
              >
                Book a Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline-light"
                size="lg"
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-8 rounded-full border-2 border-luxury-gold/50">
          <div className="mx-auto mt-2 h-2 w-2 animate-pulse rounded-full bg-luxury-gold" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
