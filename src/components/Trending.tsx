import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";

const Trending = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const designs = [
    {
      name: "Indo-Western Fusion",
      category: "Contemporary",
      image: trending1,
    },
    {
      name: "Executive Grey",
      category: "Business Elite",
      image: trending2,
    },
    {
      name: "Festive Elegance",
      category: "Traditional",
      image: trending3,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % designs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + designs.length) % designs.length);
  };

  return (
    <section className="bg-luxury-dark py-20 text-luxury-cream">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">
              Trending Designs
            </h2>
            <p className="text-lg text-luxury-cream/80">
              Discover our latest collections
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline-light"
              size="icon"
              onClick={prevSlide}
              className="h-12 w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline-light"
              size="icon"
              onClick={nextSlide}
              className="h-12 w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {designs.map((design, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative h-[600px] overflow-hidden rounded-lg">
                    <img
                      src={design.image}
                      alt={design.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="mb-4 text-sm font-medium tracking-wider text-luxury-gold">
                      {design.category}
                    </div>
                    <h3 className="font-display mb-6 text-4xl font-bold">
                      {design.name}
                    </h3>
                    <p className="mb-8 text-lg leading-relaxed text-luxury-cream/80">
                      Experience the perfect blend of tradition and modern style.
                      Each piece is meticulously crafted to reflect your unique
                      personality and sophisticated taste.
                    </p>
                    <Button variant="luxury" className="w-fit">
                      Explore This Style
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {designs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index
                  ? "w-8 bg-luxury-gold"
                  : "w-2 bg-luxury-gold/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
