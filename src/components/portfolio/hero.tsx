import { Mail, Linkedin, Phone, MessageCircle } from "lucide-react";
import arfin from "@/assets/arfin.jpg.asset.json";
import { RoleTyping } from "./role-typing";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-10 sm:px-8">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="relative h-32 w-32 sm:h-40 sm:w-40">
          {/* Partial animated ring: top-right + bottom-left arcs visible,
              bottom-right + top-left arcs removed (25% each). */}
          <svg
            className="avatar-ring pointer-events-none absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)]"
            viewBox="0 0 120 120"
            aria-hidden="true"
          >
            <defs>
              <filter id="ring-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="color-mix(in oklab, var(--primary) 90%, transparent)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="84.8 84.8 84.8 84.8"
              transform="rotate(-90 60 60)"
              filter="url(#ring-glow)"
            />
          </svg>
          <img
            src={arfin.url}
            alt="Arfin Zaman Badhon — Network Support Engineer in Dhaka, Bangladesh"
            width={180}
            height={180}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="avatar-glow relative h-full w-full rounded-full object-cover object-top"
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
