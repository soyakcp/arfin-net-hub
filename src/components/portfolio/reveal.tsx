export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
    </div>
  );
}
