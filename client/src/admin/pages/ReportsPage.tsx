import { BarChart, PageHeader, SectionCard } from '../components';

const revenueData = [
  { label: 'فروردین', value: 96 },
  { label: 'اردیبهشت', value: 124 },
  { label: 'خرداد', value: 118 },
  { label: 'تیر', value: 142 },
  { label: 'مرداد', value: 161 },
  { label: 'شهریور', value: 184 },
];

export default function ReportsPage() {
  return (
    <>
      <PageHeader title="گزارش‌ها" description="گزارش‌های مدیریتی کاربردی برای تصمیم‌گیری" />
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="گزارش کاربران"><p className="text-sm leading-7 text-neutral-600">تعداد ثبت‌نام، کاربران فعال و روند رشد کاربران.</p></SectionCard>
        <SectionCard title="گزارش تحلیل‌های مالی"><p className="text-sm leading-7 text-neutral-600">تعداد تحلیل‌ها و توزیع وضعیت مالی مشتریان.</p></SectionCard>
        <SectionCard title="گزارش درخواست‌های مشاوره"><p className="text-sm leading-7 text-neutral-600">درخواست‌های جدید، در حال پیگیری و تکمیل‌شده.</p></SectionCard>
        <SectionCard title="گزارش درآمد و هزینه"><BarChart data={revenueData} /></SectionCard>
      </div>
    </>
  );
}
