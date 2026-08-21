import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const links = [
  { href: "tel:+8801303626221", icon: Phone, label: "+880 1303-626221" },
  { href: "mailto:arfinj27@gmail.com", icon: Mail, label: "arfinj27@gmail.com" },
  {
    href: "https://linkedin.com/in/arfinzamanbadhon",
    icon: Linkedin,
    label: "linkedin.com/in/arfinzamanbadhon",
  },
  { href: "https://wa.me/8801303626221", icon: MessageCircle, label: "WhatsApp chat" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow="04 / Get in touch" title="Direct Contact" />
      </Reveal>

      <Reveal>
        <div className="glass-card grid gap-3 rounded-2xl p-5 sm:grid-cols-2">
          {links.map(({ href, icon: Icon, label }) => {
            const external = href.startsWith("http");
            return (
              <a
                key={href}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate">{label}</span>
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
