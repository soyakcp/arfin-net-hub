import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const education = [
  {
    degree: "BBA in Finance (4th Year)",
    school: "Tejgaon College, Dhaka",
    meta: "Session: 2021-2022",
  },
  { degree: "HSC", school: "BPATC School and College", meta: "GPA: 4.25 (2021)" },
  { degree: "SSC", school: "Amin Model Town School and College", meta: "GPA: 4.00 (2019)" },
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow="03 / Academics" title="Education" />
      </Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 90}>
            <div className="glass-card h-full rounded-2xl p-6">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="mt-4 text-base font-semibold text-foreground">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
              <p className="mt-3 font-mono text-xs text-primary">{item.meta}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
