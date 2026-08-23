import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react";
import { SectionHeading } from "./reveal";
import { EMAIL, EMAIL_HREF, LINKEDIN, PHONE, PHONE_TEL, WHATSAPP } from "@/lib/contact-links";

const links = [
  { href: WHATSAPP, icon: MessageCircle, name: "WhatsApp", label: PHONE },
  { href: LINKEDIN, icon: Linkedin, name: "LinkedIn", label: "in/arfinzamanbadhon" },
  { href: EMAIL_HREF, icon: Mail, name: "Email", label: EMAIL },
  { href: PHONE_TEL, icon: Phone, name: "Phone", label: PHONE },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <SectionHeading eyebrow="04 / Get in touch" title="Contact Me" />

      <p className="-mt-4 mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Feel free to reach out for collaborations or just a friendly hello.
      </p>

      <div className="glass-card rounded-2xl p-5">
        <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
          Contact Information
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map(({ href, icon: Icon, name, label }) => (
            <a
              key={name}
              href={href}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              className="flex items-center gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">{name}</span>
                <span className="block truncate">{label}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
