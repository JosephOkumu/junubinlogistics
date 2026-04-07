import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import QuoteDialog from "@/components/QuoteDialog";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Our Services", path: "/#services" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" && location.hash === "";
    }
    return location.pathname + location.hash === path || location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Main nav */}
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Junubin Logistics" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path)
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-muted"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <QuoteDialog>
            <button className="ml-3 px-5 py-2 rounded-md text-sm font-semibold bg-accent-red text-accent-red-foreground hover:bg-accent-red-dark transition-colors">
              Get a Quote
            </button>
          </QuoteDialog>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${isActive(link.path)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <QuoteDialog>
              <button
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 rounded-md text-sm font-semibold bg-accent-red text-accent-red-foreground text-center"
              >
                Get a Quote
              </button>
            </QuoteDialog>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
