import { useState, type FormEvent } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "website"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:arfinj27@gmail.com?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary";

  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow="04 / Get in touch" title="Contact" />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="glass-card h-full rounded-2xl p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Direct</p>
            <a
              href="tel:+8801303626221"
              className="mt-5 flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" /> +880 1303-626221
            </a>
            <a
              href="mailto:arfinj27@gmail.com"
              className="mt-4 flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" /> arfinj27@gmail.com
            </a>
            <a
              href="https://wa.me/8801303626221"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={90} className="md:col-span-3">
          <form onSubmit={handleSubmit} className="glass-card h-full rounded-2xl p-6">
            <div className="space-y-3">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className={field}
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={field}
              />
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className={`${field} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
