import { Mail, Linkedin, Phone, MessageCircle } from "lucide-react";
import arfin from "@/assets/arfin.jpg.asset.json";
import { RoleTyping } from "./role-typing";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-10 sm:px-8">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="relative h-28 w-28 sm:h-36 sm:w-36">
          <div className="ring-orbit pointer-events-none absolute -inset-[3px] rounded-full opacity-70 [mask-image:radial-gradient(circle,transparent_66%,black_68%)]" />
          <img
            src={arfin.url}
            alt="Arfin Zaman Badhon — Network Support Engineer in Dhaka, Bangladesh"
            width={160}
            height={160}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="glow-ring-animated relative h-full w-full rounded-full object-cover object-top"
          />
        </div>

        <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          ARFIN ZAMAN <span className="text-primary">BADHON</span>
        </h1>

        <span className="mt-3 inline-flex min-h-8 items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <RoleTyping />
        </span>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Network & IT Support Specialist with expertise in configuring, managing, and
          troubleshooting network infrastructure and corporate systems.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
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
