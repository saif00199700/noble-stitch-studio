import { Scissors, Ruler, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ruler,
      title: "Consultation",
      description:
        "Personalized design consultation tailored to your style and personality",
    },
    {
      icon: Scissors,
      title: "Measurement",
      description:
        "Precision body measurements and fabric selection for perfect fit",
    },
    {
      icon: Sparkles,
      title: "Stitching",
      description:
        "Expert craftsmanship and attention to detail in every stitch",
    },
  ];

  return (
    <section className="bg-luxury-beige py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-4xl font-bold text-luxury-dark md:text-5xl">
            Our Process
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Three simple steps to your perfect custom outfit
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative overflow-hidden rounded-lg bg-card p-8 transition-all hover:scale-105 hover:shadow-luxury"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-luxury-gold/20 transition-all group-hover:scale-110 group-hover:bg-luxury-gold/30">
                <service.icon className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="font-display mb-3 text-2xl font-semibold text-luxury-dark">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
              
              {/* Step Number */}
              <div className="absolute right-4 top-4 text-6xl font-bold text-luxury-gold/10">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
