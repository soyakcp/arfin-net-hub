import { SectionHeading } from "./reveal";

const roles = [
  {
    title: "Accounts Intern",
    company: "The Premium Homes Ltd.",
    period: "May 2026 – Aug 2026",
    detail:
      "Maintained daily expense records in Excel, organized bills, and verified daily cash transactions.",
    current: false,
  },
  {
    title: "Digital Sales Representative",
    company: "Self-employed",
    period: "Apr 2019 – Feb 2021",
    detail: "Handled social media sales, managed customer inquiries, orders, and payments.",
    current: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
      <SectionHeading eyebrow="02 / Track record" title="Professional Experience" />

      <div className="relative pl-6">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
        <div className="space-y-5">
          {roles.map((role) => (
            <div key={role.title}>
              <div className="relative">
                <span
                  className={`absolute -left-[27px] top-7 h-3 w-3 rounded-full border-2 ${
                    role.current
                      ? "border-primary bg-primary shadow-[0_0_14px_var(--primary)]"
                      : "border-border bg-background"
                  }`}
                />
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-foreground">{role.title}</h3>
                    <span className="font-mono text-xs text-primary">{role.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{role.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {role.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
