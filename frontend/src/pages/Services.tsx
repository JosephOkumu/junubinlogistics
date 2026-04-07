import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import QuoteDialog from "@/components/QuoteDialog";
import Layout from "@/components/Layout";
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
    title: "Express Parcels",
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

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent-red font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mt-3 mb-4">Our Services</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Comprehensive logistics solutions designed to meet every shipping need — from local deliveries to international freight.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((svc, i) => (
            <div
              key={svc.title}
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
                  <h2 className="text-3xl font-black text-foreground mb-4">{svc.title}</h2>
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
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-red-dark text-accent-red-foreground font-semibold hover:bg-accent-red transition-colors">
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </button>
                  </QuoteDialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-primary-foreground mb-4">Need a Custom Solution?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            We tailor our services to fit your unique logistics requirements. Let's discuss your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent-red-dark text-accent-red-foreground font-bold hover:bg-accent-red transition-colors"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
