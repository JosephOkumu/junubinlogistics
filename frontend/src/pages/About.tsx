import { Target, Eye, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import teamAnthonyImg from "@/assets/team-anthony.jpg";
import teamPatrickImg from "@/assets/team-patrick.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent-red font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">Who We Are</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Learn about our story, mission, and the team behind Junubin Logistics.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Junubin Logistics was founded with a simple yet powerful vision: to bridge the gap in transport and logistics services across Africa. Starting from humble beginnings, we have grown into a trusted name in the industry, serving businesses and individuals across more than 30 countries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our name "Junubin" — meaning "Southerner" — reflects our deep roots in the African continent and our commitment to connecting communities through reliable, efficient logistics. Today we operate a comprehensive fleet, modern warehouses, and an extensive partner network that enables us to deliver world-class service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", text: "To provide efficient, reliable, and cost-effective logistics solutions that empower businesses to grow and thrive in global markets." },
            { icon: Eye, title: "Our Vision", text: "To be Africa's most trusted logistics partner, connecting the continent to the world through innovation and excellence." },
            { icon: Heart, title: "Our Values", text: "Integrity, reliability, customer-centricity, innovation, and a commitment to building long-term partnerships with every client we serve." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-xl p-8 shadow-card border border-border text-center">
              <div className="w-14 h-14 rounded-full bg-accent-red/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-accent-red" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-foreground text-center mb-14">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {[
              { name: "Anthony Karanja", role: "Director", img: teamAnthonyImg },
              { name: "Patrick Kiarie", role: "Director", img: teamPatrickImg },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-52 h-52 mx-auto mb-5 rounded-full overflow-hidden shadow-elevated border-4 border-primary/20">
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-accent-red font-medium mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
