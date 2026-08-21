import { Download, Mail, Linkedin, Phone, MessageCircle } from "lucide-react";
import arfin from "@/assets/arfin.jpg.asset.json";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 text-center md:flex-row md:text-left">
        <Reveal className="shrink-0">
          <img
            src={arfin.url}
            alt="Arfin Zaman Badhon, Network Support Engineer"
            width={192}
            height={192}
            className="glow-ring h-40 w-40 rounded-full object-cover object-top sm:h-48 sm:w-48"
          />
        </Reveal>

        <Reveal delay={100} className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Network Support Engineer
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            ARFIN ZAMAN <span className="text-primary">BADHON</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Network & IT Support Specialist with expertise in configuring, managing, and
            troubleshooting network infrastructure and corporate systems.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2 md:justify-start">
            <ContactChip
              href="tel:+8801303626221"
              icon={<Phone className="h-3.5 w-3.5" />}
              label="+880 1303-626221"
            />
            <ContactChip
              href="https://wa.me/8801303626221"
              icon={<MessageCircle className="h-3.5 w-3.5" />}
              label="WhatsApp"
            />
            <ContactChip
              href="https://linkedin.com/in/arfinzamanbadhon"
              icon={<Linkedin className="h-3.5 w-3.5" />}
              label="LinkedIn"
            />
            <ContactChip
              href="mailto:arfinj27@gmail.com"
              icon={<Mail className="h-3.5 w-3.5" />}
              label="arfinj27@gmail.com"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactChip({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      {icon}
      {label}
    </a>
  );
}
