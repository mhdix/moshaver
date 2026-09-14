import { NavLink } from "react-router-dom";

const mobileItems = [
  ["/admin/dashboard", "داشبورد"],
  ["/admin/users", "کاربران"],
  ["/admin/financial-profiles", "پروفایل‌های مالی"],
  ["/admin/assessments", "تحلیل‌های مالی"],
  ["/admin/consultation-requests", "درخواست‌های مشاوره"],
  ["/admin/transactions", "تراکنش‌ها"],
  ["/admin/reports", "گزارش‌ها"],
  ["/admin/settings", "تنظیمات"],
] as const;

export default function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <div>
          <h1 className="text-base font-black text-text md:text-lg">
            پنل مدیریت Moshaver
          </h1>
          <p className="hidden text-xs text-neutral-500 sm:block">
            مدیریت کاربران، تحلیل‌ها و درخواست‌های مشاوره
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden text-left sm:block">
            <div className="text-sm font-bold text-text">مدیر سیستم</div>
            <div className="text-xs text-neutral-500">دسترسی کامل</div>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-full bg-neutral-950 text-sm font-black text-[#D4AF37]">
            م
          </div>

          <details className="relative lg:hidden">
            <summary className="list-none cursor-pointer rounded-xl border border-line px-3 py-2 text-sm font-bold text-neutral-700">
              منو
            </summary>
            <div className="absolute left-0 top-12 w-64 rounded-2xl border border-line bg-bg p-2 shadow-xl">
              {mobileItems.map(([to, label]) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-2.5 text-sm ${isActive ? "bg-neutral-950 font-bold text-white" : "text-neutral-700 hover:bg-neutral-50"}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
