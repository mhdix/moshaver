interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  accent?: boolean;
}

export default function StatCard({
  title,
  value,
  description,
  accent = false,
}: StatCardProps) {
  return (
    <section className="rounded-2xl border border-line bg-bg p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-neutral-500">{title}</p>
          <p className="mt-3 text-3xl font-black tracking-tight text-text">
            {value}
          </p>
          <p className="mt-2 text-xs leading-6 text-neutral-500">
            {description}
          </p>
        </div>
        <div
          className={`h-10 w-1 rounded-full ${accent ? "bg-[#D4AF37]" : "bg-neutral-200"}`}
        />
      </div>
    </section>
  );
}
