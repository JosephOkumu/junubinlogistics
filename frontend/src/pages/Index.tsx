import { Link } from "react-router-dom";
import { Truck, Ship, Plane, Package, Warehouse, FileCheck, ArrowRight, Globe, Shield, Clock, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollAnimate } from "@/hooks/use-scroll-animate";
import heroImg from "@/assets/hero-logistics.jpg";
import heroNightImg from "@/assets/hero-night-logistics.jpg";
import heroDarkImg from "@/assets/hero-dark-containers.jpg";
import HeroSlider from "@/components/HeroSlider";
import QuoteDialog from "@/components/QuoteDialog";
import cargoImg from "@/assets/services-cargo.jpg";
import clearingImg from "@/assets/services-clearing.jpg";
import seaImg from "@/assets/services-sea.jpg";
import warehouseImg from "@/assets/services-warehouse.jpg";
import expressImg from "@/assets/services-express.jpg";
import airImg from "@/assets/services-air.jpg";

const services = [
  {
    title: "Cargo Transport",
    desc: "Our fleet of modern trucks ensures safe, timely delivery of your goods across East Africa. From full truckload to less-than-truckload shipments, we handle it all with precision and care. Our experienced drivers and advanced GPS tracking provide complete visibility throughout transit.",
    img: cargoImg,
    features: ["Full & Partial Truckloads", "GPS Tracking", "Cross-border Transport", "Dedicated Fleet"],
  },
  {
    title: "Clearing & Forwarding",
    desc: "Navigate complex customs regulations with ease. Our experienced clearing agents handle all documentation, compliance, and regulatory requirements to ensure your goods move smoothly across borders without delays or penalties.",
    img: clearingImg,
    features: ["Customs Documentation", "Regulatory Compliance", "Duty Optimization", "Port Operations"],
  },
  {
    title: "Sea Freight",
    desc: "Cost-effective ocean freight services for FCL and LCL shipments worldwide. We partner with major shipping lines to offer competitive rates, reliable schedules, and door-to-door delivery for your international cargo.",
    img: seaImg,
    features: ["FCL & LCL Shipments", "Global Coverage", "Competitive Rates", "Door-to-Door"],
  },
  {
    title: "Storage & Warehousing",
    desc: "State-of-the-art warehouse facilities with modern inventory management systems. Whether you need short-term storage or long-term warehousing, our secure facilities are equipped to handle all types of cargo with 24/7 surveillance.",
    img: warehouseImg,
    features: ["Climate Control", "Inventory Management", "24/7 Security", "Flexible Terms"],
  },
  {
    title: "Express & Parcels",
    desc: "When speed matters most, our express delivery service ensures your parcels reach their destination on time, every time. From same-day delivery to next-day services, we offer flexible solutions for time-sensitive shipments.",
    img: expressImg,
    features: ["Same-Day Delivery", "Next-Day Service", "Real-Time Tracking", "Signature Confirmation"],
  },
  {
    title: "Air Freight",
    desc: "For time-critical shipments, our air freight services provide the fastest possible transit times. We work with major airlines and cargo carriers to offer reliable, scheduled air cargo services to destinations worldwide.",
    img: airImg,
    features: ["Express Air Cargo", "Charter Services", "Temperature Controlled", "Dangerous Goods"],
  },
];

const ScrollReveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimate(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <HeroSlider images={[heroImg, heroNightImg, heroDarkImg]} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Moving Your World, One Shipment at a Time
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
              Junubin Logistics delivers comprehensive transport and logistics solutions connecting Africa to the world with speed, reliability, and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent-red text-accent-red-foreground font-semibold hover:bg-accent-red-dark transition-colors"
              >
                Our Services <ArrowRight className="w-4 h-4" />
              </a>
              <QuoteDialog>
                <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
                  Get a Quote
                </button>
              </QuoteDialog>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-secondary scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-accent-red font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2">Our Services</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              End-to-end logistics solutions tailored to your business needs
            </p>
          </div>
          <div className="space-y-20">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={0.1}>
                <div
                  className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}
                >
                  <div className="flex-1">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-80 object-cover rounded-xl shadow-elevated"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="rounded-xl border bg-card text-card-foreground shadow-elevated p-8">
                      <h3 className="text-3xl font-black text-foreground mb-4">{svc.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{svc.desc}</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {svc.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                            <ArrowRight className="w-3.5 h-3.5 text-accent-red shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                      <QuoteDialog>
                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-red text-accent-red-foreground font-semibold hover:bg-accent-red-dark transition-colors">
                          Get a Quote <ArrowRight className="w-4 h-4" />
                        </button>
                      </QuoteDialog>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-dark transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-accent-red font-semibold text-sm uppercase tracking-wider">Why Junubin</span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Reach", desc: "Connecting you to over 30 countries with a vast logistics network." },
              { icon: Shield, title: "Secure & Insured", desc: "Your cargo is fully insured and handled with the highest standards." },
              { icon: Clock, title: "On-Time Delivery", desc: "98% on-time delivery rate with real-time shipment tracking." },
              { icon: Users, title: "Dedicated Support", desc: "24/7 customer support with a personal logistics coordinator." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent-red/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-accent-red" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-brand py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
            Ready to Ship?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Get a free quote today and let us handle your logistics needs with precision and care.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent-red text-accent-red-foreground font-bold text-lg hover:bg-accent-red-dark transition-colors"
          >
            Request a Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
