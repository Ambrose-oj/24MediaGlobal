import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import logoBlack from "@/assets/logo-black.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Branding", path: "/services#branding" },
    { name: "Social Media Management", path: "/services#social-media" },
    { name: "Content Creation", path: "/services#content" },
    { name: "Custom Print Solutions", path: "/services#print" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/24mediaglobal", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/24media-global/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/24media_global", label: "Twitter" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-10 md:py-14 lg:py-20 border-t border-secondary-foreground/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-8">
              <img src={logoBlack} alt="24Media Global" className="h-12 w-auto invert" />
            </Link>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-8 tracking-wider">
              Helping busy professionals and growing brands show up clearly and consistently.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-8 tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-8 tracking-wider">Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-smtracking-wide"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-8 tracking-wider">Contact Us</h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:24mediaglobal@gmail.com"
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm tracking-wide"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  24mediaglobal@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2349167490755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm tracking-wide"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  +234 916 749 0755
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/70 text-sm tracking-wide">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/50 text-sm tracking-wide">
              © {currentYear} 24Media Global. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link to="/privacy" className="text-secondary-foreground/50 hover:text-primary transition-colors text-sm tracking-wide">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-foreground/50 hover:text-primary transition-colors text-sm tracking-wide">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
