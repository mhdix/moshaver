export default function Pagination() {
  return (
    <div className="mt-5 flex items-center justify-between gap-3">
      <span className="text-xs text-neutral-500">صفحه ۱ از ۴</span>
      <div className="flex gap-2">
        <button className="rounded-lg border border-line px-3 py-2 text-xs font-bold text-neutral-600">
          قبلی
        </button>
        <button className="rounded-lg bg-neutral-950 px-3 py-2 text-xs font-bold text-white">
          ۱
        </button>
        <button className="rounded-lg border border-line px-3 py-2 text-xs font-bold text-neutral-600">
          ۲
        </button>
        <button className="rounded-lg border border-line px-3 py-2 text-xs font-bold text-neutral-600">
          بعدی
        </button>
      </div>
    </div>
  );
}
