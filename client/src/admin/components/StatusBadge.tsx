interface StatusBadgeProps {
  status: string;
}

const map: Record<string, string> = {
  فعال: "bg-emerald-50 text-emerald-700 border-emerald-200",
  غیرفعال: "bg-neutral-100 text-neutral-600 border-line",
  "در انتظار بررسی": "bg-amber-50 text-amber-700 border-amber-200",
  "در حال پیگیری": "bg-blue-50 text-blue-700 border-blue-200",
  "تماس گرفته شد": "bg-violet-50 text-violet-700 border-violet-200",
  "تکمیل شد": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "لغو شد": "bg-rose-50 text-rose-700 border-rose-200",
  عالی: "bg-emerald-50 text-emerald-700 border-emerald-200",
  مناسب: "bg-blue-50 text-blue-700 border-blue-200",
  "نیازمند بررسی": "bg-amber-50 text-amber-700 border-amber-200",
  بحرانی: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold ${map[status] ?? "border-line bg-neutral-100 text-neutral-700"}`}
    >
      {status}
    </span>
  );
}
