import { useState } from "react";
import globalEmailjs from "@emailjs/browser";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Note: You need to replace these placeholders with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_p1h5wr6";
const EMAILJS_TEMPLATE_ID = "template_4ea23z8";
const EMAILJS_PUBLIC_KEY = "eksbCdR_RBJK7d6Va";

interface QuoteDialogProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const QuoteDialog = ({ children, open: controlledOpen, onOpenChange: setControlledOpen }: QuoteDialogProps) => {
  const [internalOpen, setInternalOpen] = useState(false);

  // Support both controlled (from Header) and uncontrolled (with trigger children) modes
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = setControlledOpen ?? setInternalOpen;

  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

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
          service: form.service,
          message: form.message,
          to_email: "javezdenze@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Quote request sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setOpen(false);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send request. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black">Get a Quote</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <Input
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            <option value="">Select a Service</option>
            <option value="cargo">Cargo Transport</option>
            <option value="clearing">Clearing & Forwarding</option>
            <option value="sea">Sea Freight</option>
            <option value="warehouse">Storage & Warehousing</option>
            <option value="express">Express Parcels</option>
            <option value="air">Air Freight</option>
          </select>
          <Textarea
            placeholder="Tell us about your shipment..."
            rows={4}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 rounded-lg bg-accent-red-dark text-accent-red-foreground font-semibold hover:bg-accent-red transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;
