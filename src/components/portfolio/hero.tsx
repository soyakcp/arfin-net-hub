import { Mail, Linkedin, Phone, MessageCircle } from "lucide-react";
import arfin from "@/assets/arfin.jpg.asset.json";
import { RoleTyping } from "./role-typing";
import { EMAIL_HREF, LINKEDIN, PHONE_TEL, WHATSAPP } from "@/lib/contact-links";

const socials = [
  { href: WHATSAPP, icon: MessageCircle, label: "Chat on WhatsApp" },
  { href: LINKEDIN, icon: Linkedin, label: "LinkedIn profile" },
  { href: EMAIL_HREF, icon: Mail, label: "Send an email" },
  { href: PHONE_TEL, icon: Phone, label: "Call +880 1303-626221" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-10 sm:px-8">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="soft-glow pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="relative h-32 w-32 sm:h-40 sm:w-40">
          {/* Partial animated ring: top-right + bottom-left arcs visible. */}
          <svg
            className="avatar-ring pointer-events-none absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)]"
            viewBox="0 0 120 120"
            aria-hidden="true"
          >
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="color-mix(in oklab, var(--primary) 90%, transparent)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="96 73.6 73.6 96"
              transform="rotate(-90 60 60)"
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

        <h1 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          <span className="block text-sm font-medium tracking-normal text-muted-foreground sm:text-base">
            Hi! I&apos;m
          </span>
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

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_var(--primary)] transition-transform duration-200 hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Let&apos;s Talk
          </a>

          <div className="flex items-center gap-2">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
