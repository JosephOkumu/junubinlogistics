import { useEffect } from "react";
import { Target, Eye, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import teamAnthonyImg from "@/assets/Karanja.jpg";
import teamPatrickImg from "@/assets/PatrickIARIE.jpg";
import teamNjihiaImg from "@/assets/Njihia.jpg";
import teamGichuhiImg from "@/assets/Gichuhi.jpg";
import reliefLineLogo from "@/assets/relief-line-.png";
import dishnetLogo from "@/assets/dishnet.png";
import continentalLogo from "@/assets/continental-.jpg";
import rosewoodLogo from "@/assets/rosewood.png";
import iomLogo from "@/assets/IOM.jpeg";
import goSolarLogo from "@/assets/go-solar.jpeg";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 text-center reveal-on-scroll animate-fade-in-up">
          <span className="text-accent-red font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">Who We Are</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Learn about our story, mission, and the team behind Junubin Logistics.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 reveal-on-scroll animate-fade-in-up animate-delay-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are a leading Eastern & Central African logistics provider, delivering efficient, secure, and customized supply chain solutions across the region.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We offer tailor-made logistics services, handling all types of cargo to and from any destination within Eastern & Central Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", subtitle: "Connecting Your Products to the World", text: "We exist to bridge distances and simplify trade across Eastern & Central Africa. Through efficient coordination, strong partnerships, and a proactive team, we ensure goods move smoothly from origin to destination with precision and care.", delay: "animate-delay-100" },
            { icon: Eye, title: "Our Vision", subtitle: "Your Cargo, Fast Forward.", text: "Our vision is to set the benchmark for speed, reliability, and resilience in logistics. Even in times of uncertainty, we remain adaptable and solution-oriented, ensuring that your cargo continues its journey without interruption.", delay: "animate-delay-200" },
            { icon: Heart, title: "Our Purpose", subtitle: "Relieving Your Logistics Burden", text: "We understand that logistics can be complex and demanding. Our purpose is to remove that complexity by offering expert guidance, transparent communication, and dependable service—delivering exactly what we promise, every time.", delay: "animate-delay-300" },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`bg-card rounded-xl p-8 shadow-card border border-border text-center reveal-on-scroll ${index === 0 ? 'animate-slide-in-left' : index === 2 ? 'animate-slide-in-right' : 'animate-fade-in-up'
                } ${item.delay}`}
            >
              <div className="w-14 h-14 rounded-full bg-accent-red/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-accent-red" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="font-semibold text-foreground text-sm mb-3">{item.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-foreground text-center mb-14 animate-fade-in">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Patrick Kiarie", role: "Director", img: teamPatrickImg, delay: "animate-delay-100" },
              { name: "Anthony Karanja", role: "Director", img: teamAnthonyImg, delay: "animate-delay-200" },
              { name: "Anthony Njihia", role: "Head of Operations", img: teamNjihiaImg, delay: "animate-delay-300" },
              { name: "Kenneth Gichuhi", role: "Deputy Head of Operations", img: teamGichuhiImg, delay: "animate-delay-200" },
            ].map((member, index) => (
              <div
                key={member.name}
                className={`text-center reveal-on-scroll ${index < 2 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                  } ${member.delay}`}
              >
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
                <p className="text-foreground font-medium mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-foreground text-center mb-14 reveal-on-scroll animate-fade-in">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-items-center">
            {[
              { name: "GoSolar", img: goSolarLogo, url: null, delay: "animate-delay-100" },
              { name: "Relief Line", img: reliefLineLogo, url: "https://reliefline.net/", delay: "animate-delay-200" },
              { name: "Continental", img: continentalLogo, url: "https://continentalmed.com/", delay: "animate-delay-300" },
              { name: "Rosewood", img: rosewoodLogo, url: "https://rosewood.co.ke/", delay: "animate-delay-100" },
              { name: "IOM", img: iomLogo, url: "https://kenya.iom.int/", delay: "animate-delay-200" },
              { name: "Dishnet", img: dishnetLogo, url: "https://dishnetafrica.com/", delay: "animate-delay-300" },
            ].map((client, index) => {
              const content = (
                <div key={client.name} className={`hover:scale-110 transition-transform duration-300 flex items-center justify-center reveal-on-scroll ${index < 3 ? 'animate-slide-in-left' : 'animate-slide-in-right'} ${client.delay}`}>
                  <img
                    src={client.img}
                    alt={client.name}
                    className="max-h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              );

              if (client.url) {
                return (
                  <a key={client.name} href={client.url} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                );
              }
              return content;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
