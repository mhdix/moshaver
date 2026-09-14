import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function SectionCard({
  title,
  description,
  children,
}: SectionCardProps) {
  return (
    <section className="rounded-2xl border border-line bg-bg">
      <div className="border-b border-line px-5 py-4 md:px-6">
        <h2 className="font-black text-text">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-neutral-500">{description}</p>
        ) : null}
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </section>
  );
}
