import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import Sherwani images
import sherwani1 from "@/assets/catalogue/sherwanis-1.jpg";
import sherwani2 from "@/assets/catalogue/sherwanis-2.jpg";
import sherwani3 from "@/assets/catalogue/sherwanis-3.jpg";
import sherwani4 from "@/assets/catalogue/sherwanis-4.jpg";
import sherwani5 from "@/assets/catalogue/sherwanis-5.jpg";
import sherwani6 from "@/assets/catalogue/sherwanis-6.jpg";
import sherwani7 from "@/assets/catalogue/sherwanis-7.jpg";
import sherwani8 from "@/assets/catalogue/sherwanis-8.jpg";
import sherwani9 from "@/assets/catalogue/sherwanis-9.jpg";
import sherwani10 from "@/assets/catalogue/sherwanis-10.jpg";

// Import Indo-Western images
import indoWestern1 from "@/assets/catalogue/indo-western-1.jpg";
import indoWestern2 from "@/assets/catalogue/indo-western-2.jpg";
import indoWestern3 from "@/assets/catalogue/indo-western-3.jpg";
import indoWestern4 from "@/assets/catalogue/indo-western-4.jpg";
import indoWestern5 from "@/assets/catalogue/indo-western-5.jpg";
import indoWestern6 from "@/assets/catalogue/indo-western-6.jpg";
import indoWestern7 from "@/assets/catalogue/indo-western-7.jpg";
import indoWestern8 from "@/assets/catalogue/indo-western-8.jpg";
import indoWestern9 from "@/assets/catalogue/indo-western-9.jpg";
import indoWestern10 from "@/assets/catalogue/indo-western-10.jpg";

// Import Kurta-Pajama images
import kurtaPajama1 from "@/assets/catalogue/kurta-pajama-1.jpg";
import kurtaPajama2 from "@/assets/catalogue/kurta-pajama-2.jpg";
import kurtaPajama3 from "@/assets/catalogue/kurta-pajama-3.jpg";
import kurtaPajama4 from "@/assets/catalogue/kurta-pajama-4.jpg";
import kurtaPajama5 from "@/assets/catalogue/kurta-pajama-5.jpg";
import kurtaPajama6 from "@/assets/catalogue/kurta-pajama-6.jpg";
import kurtaPajama7 from "@/assets/catalogue/kurta-pajama-7.jpg";
import kurtaPajama8 from "@/assets/catalogue/kurta-pajama-8.jpg";
import kurtaPajama9 from "@/assets/catalogue/kurta-pajama-9.jpg";
import kurtaPajama10 from "@/assets/catalogue/kurta-pajama-10.jpg";

// Import Three-Piece Suits images
import threePiece1 from "@/assets/catalogue/three-piece-1.jpg";
import threePiece2 from "@/assets/catalogue/three-piece-2.jpg";
import threePiece3 from "@/assets/catalogue/three-piece-3.jpg";
import threePiece4 from "@/assets/catalogue/three-piece-4.jpg";
import threePiece5 from "@/assets/catalogue/three-piece-5.jpg";
import threePiece6 from "@/assets/catalogue/three-piece-6.jpg";
import threePiece7 from "@/assets/catalogue/three-piece-7.jpg";
import threePiece8 from "@/assets/catalogue/three-piece-8.jpg";
import threePiece9 from "@/assets/catalogue/three-piece-9.jpg";
import threePiece10 from "@/assets/catalogue/three-piece-10.jpg";

const Catalogue = () => {
  const categories = [
    {
      title: "Custom Sherwanis",
      description: "Royal wedding & celebration wear",
      images: [sherwani1, sherwani2, sherwani3, sherwani4, sherwani5, sherwani6, sherwani7, sherwani8, sherwani9, sherwani10],
      accent: "Regal elegance",
    },
    {
      title: "Indo-Westerns",
      description: "Fusion of tradition & modernity",
      images: [indoWestern1, indoWestern2, indoWestern3, indoWestern4, indoWestern5, indoWestern6, indoWestern7, indoWestern8, indoWestern9, indoWestern10],
      accent: "Contemporary style",
    },
    {
      title: "Kurta-Pajamas",
      description: "Traditional comfort & grace",
      images: [kurtaPajama1, kurtaPajama2, kurtaPajama3, kurtaPajama4, kurtaPajama5, kurtaPajama6, kurtaPajama7, kurtaPajama8, kurtaPajama9, kurtaPajama10],
      accent: "Classic comfort",
    },
    {
      title: "Three-piece Suits",
      description: "Premium formal excellence",
      images: [threePiece1, threePiece2, threePiece3, threePiece4, threePiece5, threePiece6, threePiece7, threePiece8, threePiece9, threePiece10],
      accent: "Sophisticated power",
    },
  ];

  return (
    <section id="catalogue" className="bg-luxury-beige py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-4xl font-bold text-luxury-dark md:text-5xl">
            Our Collections
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our exclusive range of handcrafted menswear
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              {/* Category Header */}
              <div className="text-center">
                <div className="mb-2 text-sm font-medium tracking-wider text-luxury-gold">
                  {category.accent}
                </div>
                <h3 className="font-display mb-2 text-3xl font-bold text-luxury-dark">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {category.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="group relative aspect-[3/4] overflow-hidden rounded-lg"
                  >
                    <img
                      src={image}
                      alt={`${category.title} ${imageIndex + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                ))}
              </div>

              {/* View More Button */}
              <div className="flex justify-center">
                <Button variant="luxury" className="gap-2">
                  View {category.title} Collection
                  <ArrowRight className="h-4 w-4" />
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
