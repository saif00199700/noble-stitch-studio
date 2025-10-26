import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Services: [
      "Custom Sherwanis",
      "Three-Piece Suits",
      "Indo-Western",
      "Bridal Collection",
      "Custom Footwear",
    ],
    Company: [
      "About Us",
      "Our Process",
      "Testimonials",
      "Contact",
      "Book Consultation",
    ],
    Resources: [
      "Style Guide",
      "Fabric Care",
      "Size Guide",
      "FAQs",
      "Terms & Conditions",
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Mail, href: "#" },
  ];

  return (
    <footer className="bg-luxury-dark text-luxury-cream">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <h3 className="font-display mb-4 text-2xl font-bold text-luxury-gold">
              Custom Designer Studio
            </h3>
            <p className="mb-6 text-luxury-cream/80">
              Crafting excellence in men's fashion since 1998. Every thread tells
              a story, every stitch defines character.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-luxury-gold/20 transition-all hover:bg-luxury-gold hover:text-luxury-dark"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-semibold text-luxury-gold">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-luxury-cream/80 transition-colors hover:text-luxury-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-luxury-gold/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-luxury-cream/60">
              © 2024 Custom Designer Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-luxury-cream/60 hover:text-luxury-gold">
                Privacy Policy
              </a>
              <a href="#" className="text-luxury-cream/60 hover:text-luxury-gold">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
