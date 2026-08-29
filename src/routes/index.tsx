import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/hero";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
const SITE = "https://arfin-net-hub.lovable.app";
const title = "Arfin Zaman Badhon — Network Support Engineer | Arfin Zaman";
const description =
  "Arfin Zaman Badhon (Arfin Zaman) is a Network Support Engineer in Dhaka, Bangladesh — Cisco IOS, MikroTik RouterOS, VLAN, OSPF, NAT, PPPoE, EVE-NG labs and corporate IT support. Contact, LinkedIn and CV details.";
const image = `${SITE}/arfin.jpg`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arfin Zaman Badhon",
  alternateName: ["Arfin Zaman", "Arfin", "Arfin Badhon"],
  givenName: "Arfin",
  familyName: "Badhon",
  jobTitle: "Network Support Engineer",
  description,
  image,
  url: SITE,
  email: "mailto:arfinj27@gmail.com",
  telephone: "+8801303626221",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Tejgaon College" },
    { "@type": "EducationalOrganization", name: "BPATC School & College" },
  ],
  knowsAbout: [
    "Computer Networking",
    "Cisco IOS",
    "MikroTik RouterOS",
    "VLAN",
    "OSPF",
    "NAT",
    "PPPoE",
    "EVE-NG",
    "IT Support",
  ],
  sameAs: [
    "https://linkedin.com/in/arfinzamanbadhon",
    "https://www.linkedin.com/in/arfinzamanbadhon",
    "https://wa.me/8801303626221",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arfin Zaman Badhon — Portfolio",
  url: SITE,
  inLanguage: "en",
  about: { "@type": "Person", name: "Arfin Zaman Badhon" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Arfin, Arfin Zaman, Arfin Zaman Badhon, Arfin Badhon, Badhon, network engineer, Network Support Engineer, MikroTik, Cisco, IT support Dhaka, networking, Bangladesh",
      },
      { name: "author", content: "Arfin Zaman Badhon" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: SITE },
      { property: "og:site_name", content: "Arfin Zaman Badhon" },
      { property: "og:image", content: image },
      { property: "profile:first_name", content: "Arfin" },
      { property: "profile:last_name", content: "Badhon" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: SITE },
      { rel: "preload", as: "image", href: "/arfin.jpg", fetchpriority: "high" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(personJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(websiteJsonLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <footer className="border-t border-border px-5 py-8 text-center text-xs text-muted-foreground sm:px-8">
        © 2026 Arfin Zaman Badhon. Open to Network & IT Support Opportunities.
      </footer>
    </main>
  );
}
