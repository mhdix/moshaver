import { useParams } from 'react-router-dom';
import { PageHeader, SectionCard, StatCard, StatusBadge } from '../components';

export default function AssessmentDetailsPage() {
  const { id } = useParams();

  return (
    <>
      <PageHeader title={`تحلیل مالی #${id ?? '-'}`} description="نمای مدیریتی نتیجه تحلیل مالی کسب‌وکار" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="امتیاز مالی" value="۷۱/۱۰۰" description="ارزیابی کلی" accent />
        <StatCard title="درآمد" value="۵۴۰ م" description="ماهانه" />
        <StatCard title="هزینه" value="۴۳۰ م" description="ماهانه" />
        <StatCard title="سود" value="۱۱۰ م" description="حاشیه سود ۲۰٪" accent />
      </div>
      <div className="mt-6"><SectionCard title="نتیجه تحلیل"><div className="flex items-center gap-3"><StatusBadge status="مناسب" /><p className="text-sm text-neutral-600">وضعیت مالی قابل قبول است اما کنترل هزینه و دوره وصول مطالبات نیاز به بررسی دارد.</p></div></SectionCard></div>
    </>
  );
}
