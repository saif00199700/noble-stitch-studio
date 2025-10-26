import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import formalImage from "@/assets/formal-wear.jpg";
import partyImage from "@/assets/party-wear.jpg";
import bridalImage from "@/assets/bridal-wear.jpg";
import customImage from "@/assets/custom-tailoring.jpg";

const Catalogue = () => {
  const categories = [
    {
      title: "Formal Wear",
      description: "Premium suits & corporate attire",
      image: formalImage,
      accent: "Three-piece excellence",
    },
    {
      title: "Party Wear",
      description: "Royal sherwanis & indo-western",
      image: partyImage,
      accent: "Stand out in style",
    },
    {
      title: "Bridal Wear",
      description: "Groom's special collection",
      image: bridalImage,
      accent: "Your perfect moment",
    },
    {
      title: "Custom Tailoring",
      description: "Bespoke design consultation",
      image: customImage,
      accent: "Uniquely yours",
    },
  ];

  return (
    <section className="bg-luxury-beige py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-4xl font-bold text-luxury-dark md:text-5xl">
            Our Collections
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our exclusive range of handcrafted menswear
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="catalogue-card group relative h-[500px] overflow-hidden rounded-lg"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/50 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="mb-2 text-sm font-medium tracking-wider text-luxury-gold">
                  {category.accent}
                </div>
                <h3 className="font-display mb-2 text-3xl font-bold text-luxury-cream">
                  {category.title}
                </h3>
                <p className="mb-4 text-luxury-cream/80">
                  {category.description}
                </p>
                <Button
                  variant="outline-light"
                  className="w-fit gap-2"
                >
                  View Collection
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
