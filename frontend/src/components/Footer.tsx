import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, Facebook, Instagram } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-black text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-black text-primary-foreground mb-4 block">
              Junubin Logistics
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              We deliver as promised. Your trusted partner for seamless logistics solutions throughout Africa and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Our Services", path: "/#services" },
                { label: "About Us", path: "/about" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm flex items-center gap-1 transition-colors"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Cargo Transport", "Clearing & Forwarding", "Sea Freight", "Storage & Warehousing", "Express Parcels", "Air Freight"].map((s) => (
                <li key={s}>
                  <Link
                    to={`/#${s.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-1 hover:text-primary-foreground transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=JUNUBIN+LOGISTICS+PRHP%2BH2M+Losai+Rd+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Pangani, Nairobi Kenya
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+254140557871" className="hover:text-primary-foreground transition-colors">
                  +254 140 557 871
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@junubinlogistics.com" className="hover:text-primary-foreground transition-colors">
                  info@junubinlogistics.com
                </a>
              </li>
            </ul>
            {/* Social Media */}
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://web.facebook.com/profile.php?id=100063564324866"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-primary-foreground" />
              </a>
              <a
                href="https://www.instagram.com/junubinlogistics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-primary-foreground" />
              </a>
              <a
                href="mailto:info@junubinlogistics.com"
                className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Junubin Logistics. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Design by:{" "}
            <a
              href="https://larscooper.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors underline decoration-primary/30 underline-offset-4"
            >
              O. Otieno from larscooper
            </a>
          </p>
          <p className="mt-2 md:mt-0 font-medium tracking-wide">Connecting Africa to the World</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
