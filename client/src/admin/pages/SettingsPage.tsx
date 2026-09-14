import { PageHeader, SectionCard } from "../components";

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="تنظیمات" description="تنظیمات حساب مدیر و سامانه" />
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="اطلاعات حساب">
          <div className="space-y-3">
            <input
              defaultValue="مدیر سیستم"
              className="h-11 w-full rounded-xl border border-line px-3 text-sm"
            />
            <input
              defaultValue="admin@moshaver.ir"
              className="h-11 w-full rounded-xl border border-line px-3 text-sm"
            />
          </div>
        </SectionCard>
        <SectionCard title="امنیت">
          <button className="rounded-xl border border-line px-4 py-2.5 text-sm font-bold">
            تغییر رمز عبور
          </button>
        </SectionCard>
        <SectionCard title="اعلان‌ها">
          <label className="flex items-center justify-between gap-4 text-sm">
            <span>اعلان درخواست مشاوره جدید</span>
            <input type="checkbox" defaultChecked />
          </label>
        </SectionCard>
        <SectionCard title="تنظیمات سیستم">
          <label className="block text-sm font-bold text-neutral-700">
            نام سامانه
            <input
              defaultValue="Moshaver"
              className="mt-2 h-11 w-full rounded-xl border border-line px-3 font-normal"
            />
          </label>
        </SectionCard>
      </div>
    </>
  );
}
