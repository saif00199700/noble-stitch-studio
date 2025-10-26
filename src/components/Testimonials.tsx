import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ayaan Siddiqui",
      location: "Mumbai",
      rating: 5,
      text: "It's not just tailoring. It's therapy. I came in for a sherwani and left with not only an outfit but a memory. Abdul bhai treats every client like royalty.",
    },
    {
      name: "Sahil Doshi",
      location: "Kurla",
      rating: 5,
      text: "The only studio that understands real fit. I struggled with finding clothes that fit my tall frame until I found them. They nailed it in the first try.",
    },
    {
      name: "Imran Qureshi",
      location: "Dubai",
      rating: 5,
      text: "I wore a story, not a suit. My engagement attire had hand-sewn initials, family motifs, and color accents from my fiancée's outfit. That's next-level personalization.",
    },
  ];

  return (
    <section className="bg-luxury-beige py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-4xl font-bold text-luxury-dark md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Stories of satisfaction and style
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-lg bg-card p-8 shadow-lg transition-all hover:scale-105 hover:shadow-luxury"
            >
              {/* Quote Icon */}
              <Quote className="mb-4 h-12 w-12 text-luxury-gold/20" />
              
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-luxury-gold text-luxury-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 text-lg italic leading-relaxed text-foreground">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-luxury-dark">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.location}
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute right-8 top-8 h-20 w-20 rounded-full bg-luxury-gold/5 transition-all group-hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
