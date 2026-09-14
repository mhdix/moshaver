import {
  BarChart,
  PageHeader,
  SectionCard,
  StatCard,
  StatusBadge,
} from "../components";

const growthData = [
  { label: "فروردین", value: 32 },
  { label: "اردیبهشت", value: 47 },
  { label: "خرداد", value: 58 },
  { label: "تیر", value: 71 },
  { label: "مرداد", value: 86 },
  { label: "شهریور", value: 104 },
];

const activities = [
  {
    title: "کاربر جدید ثبت‌نام کرد",
    user: "علی رضایی",
    time: "۱۰ دقیقه قبل",
    status: "فعال",
  },
  {
    title: "درخواست مشاوره جدید دریافت شد",
    user: "شرکت آریا",
    time: "۳۵ دقیقه قبل",
    status: "در انتظار بررسی",
  },
  {
    title: "تحلیل مالی تکمیل شد",
    user: "فروشگاه سپهر",
    time: "۱ ساعت قبل",
    status: "تکمیل شد",
  },
  {
    title: "پروفایل مالی به‌روزرسانی شد",
    user: "مینا محمدی",
    time: "۲ ساعت قبل",
    status: "فعال",
  },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="داشبورد"
        description="نمای کلی وضعیت کاربران، تحلیل‌ها و درخواست‌های مشاوره"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="کاربران"
          value="۱,۲۴۸"
          description="کل کاربران ثبت‌شده"
          accent
        />
        <StatCard
          title="تحلیل‌های مالی"
          value="۳۸۶"
          description="تحلیل‌های ایجادشده"
        />
        <StatCard
          title="درخواست‌های مشاوره"
          value="۲۷"
          description="در انتظار بررسی یا پیگیری"
        />
        <StatCard
          title="درآمد این ماه"
          value="۱۸۴ م"
          description="میلیون تومان تراکنش درآمدی"
          accent
        />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <SectionCard
          title="رشد کاربران"
          description="روند ثبت‌نام کاربران در شش ماه اخیر"
        >
          <BarChart data={growthData} />
        </SectionCard>

        <SectionCard
          title="وضعیت درخواست‌ها"
          description="توزیع درخواست‌های مشاوره فعال"
        >
          <div className="space-y-4">
            {[
              ["در انتظار بررسی", 12],
              ["در حال پیگیری", 8],
              ["تماس گرفته شد", 5],
              ["تکمیل شد", 19],
            ].map(([label, value]) => (
              <div
                key={String(label)}
                className="flex items-center justify-between rounded-xl bg-line px-4 py-3"
              >
                <StatusBadge status={String(label)} />
                <span className="text-lg font-black text-text">{value}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-6">
        <SectionCard title="فعالیت‌های اخیر">
          <div className="divide-y divide-line">
            {activities.map((activity) => (
              <div
                key={`${activity.title}-${activity.user}`}
                className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-bold text-text">
                    {activity.title}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    {activity.user} · {activity.time}
                  </p>
                </div>
                <StatusBadge status={activity.status} />
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </>
  );
}
