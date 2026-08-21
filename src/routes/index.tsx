import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/hero";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";

const title = "Arfin Zaman Badhon — Network Support Engineer";
const description =
  "Network & IT Support Specialist skilled in Cisco IOS, MikroTik RouterOS, VLAN, OSPF, NAT, PPPoE and corporate systems support.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
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
