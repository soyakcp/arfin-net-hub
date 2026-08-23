import { Network, MonitorCog, Wrench } from "lucide-react";
import { SectionHeading } from "./reveal";

const groups = [
  {
    icon: Network,
    title: "Networking & Labs (EVE-NG)",
    items: [
      "Cisco IOS",
      "MikroTik RouterOS",
      "IPv4 Subnetting",
      "VLAN & Inter-VLAN",
      "DHCP & Static Routing",
      "GRE Tunnel & OSPF",
      "WAN & NAT",
      "PPPoE Server",
      "Simple Queues & PCQ",
      "Network Troubleshooting",
    ],
  },
  {
    icon: MonitorCog,
    title: "IT & Systems Support",
    items: [
      "LAN",
      "OLT & ONU",
      "PC Assembly & Hardware Support",
      "OS Installation & Peripheral Setup",
      "Software Deployment",
      "Data Backup & Recovery",
      "Remote Support",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Soft Skills",
    items: [
      "MS Office Suite",
      "AI Productivity Tools",
      "Documentation",
      "Analytical Problem Solving",
      "Adaptability",
      "Communication",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
      <SectionHeading eyebrow="01 / Stack" title="Technical Core Skills" />
      <div className="grid gap-5 md:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title}>
            <div className="glass-card h-full rounded-2xl p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <group.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
