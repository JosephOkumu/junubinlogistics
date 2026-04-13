import { useState } from "react";
import globalEmailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

// Note: You need to replace these placeholders with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_p1h5wr6";
const EMAILJS_TEMPLATE_ID = "template_4ea23z8";
const EMAILJS_PUBLIC_KEY = "eksbCdR_RBJK7d6Va";

const Contact = () => {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await globalEmailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          to_email: "javezdenze@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error Sending Message",
        description: "Please try again later or contact us via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent-red font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mt-3 mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Have a question or need a quote? We're here to help. Reach out to us today.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Form */}
          <div className="max-w-3xl mx-auto mb-14">
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-card border border-border space-y-5">
              <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Send Us a Message</h3>
              <p className="text-muted-foreground text-sm text-center mb-4">
                Whether you need a shipping quote, have questions about our services, or want to discuss a custom logistics solution — our team is ready to assist.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+254 140 557 871"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Shipping Quote"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us about your logistics needs..."
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent-red-dark text-accent-red-foreground font-semibold hover:bg-accent-red transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: "Address", value: "Nairobi, Kenya" },
              { icon: Phone, label: "Phone", value: "+254 140 557 871" },
              { icon: Mail, label: "Email", value: "info@junubinlogistics.com" },
              { icon: Clock, label: "Opening Hours", value: "Mon - Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 2:00 PM" },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
