import type React from "react";
interface ShowcaseSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ShowcaseSection({
  title,
  description,
  children,
}: ShowcaseSectionProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="p-6 border rounded-lg bg-card/50">{children}</div>
    </section>
  );
}
