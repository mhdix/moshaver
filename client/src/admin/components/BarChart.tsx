interface BarChartItem {
  label: string;
  value: number;
}

interface BarChartProps {
  data: BarChartItem[];
}

export default function BarChart({ data }: BarChartProps) {
  const max = Math.max(...data.map((item) => item.value), 1);

  return (
    <div className="flex h-56 items-end gap-3 pt-6">
      {data.map((item) => (
        <div key={item.label} className="flex min-w-0 flex-1 flex-col items-center gap-2">
          <div className="text-xs font-bold text-text">{item.value}</div>
          <div className="flex h-40 w-full items-end rounded-t-lg">
            <div className="w-full rounded-t-lg bg-primary transition-all" style={{ height: `${Math.max((item.value / max) * 100, 6)}%` }} />
          </div>
          <div className="truncate text-xs text-text">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
