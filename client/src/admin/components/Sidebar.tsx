import { NavLink } from "react-router-dom";

const items = [
  { to: "/admin/dashboard", label: "داشبورد" },
  { to: "/admin/users", label: "کاربران" },
  { to: "/admin/financial-profiles", label: "پروفایل‌های مالی" },
  { to: "/admin/assessments", label: "تحلیل‌های مالی" },
  { to: "/admin/consultation-requests", label: "درخواست‌های مشاوره" },
  { to: "/admin/transactions", label: "تراکنش‌ها" },
  { to: "/admin/reports", label: "گزارش‌ها" },
  { to: "/admin/settings", label: "تنظیمات" },
];

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-l border-line bg-bg text-text lg:flex lg:flex-col">
      <div className="border-b border-white/10 px-6 py-6">
        <div className="text-xl text-text font-black tracking-tight">
          Moshaver
        </div>
        <div className="mt-1 text-xs text-text">پنل مدیریت مشاوره مالی</div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-5">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors",
                isActive
                  ? "bg-[#D4AF37] font-bold text-text"
                  : "text-neutral-300 hover:bg-bg/5 hover:text-white",
              ].join(" ")
            }
          >
            <span className="h-2 w-2 rounded-full bg-current opacity-70" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="rounded-xl bg-bg/5 p-3">
          <div className="text-sm font-bold">مدیر سیستم</div>
          <div className="mt-1 text-xs text-neutral-400">admin@moshaver.ir</div>
        </div>
        <button className="mt-3 w-full rounded-xl border border-white/10 px-4 py-2.5 text-sm text-neutral-300 transition hover:bg-bg/5 hover:text-white">
          خروج از حساب
        </button>
      </div>
    </aside>
  );
}
