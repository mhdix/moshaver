import { useParams } from 'react-router-dom';
import { PageHeader, SectionCard } from '../components';

export default function FinancialProfileDetailsPage() {
  const { id } = useParams();

  return (
    <>
      <PageHeader title={`پروفایل مالی #${id ?? '-'}`} description="جزئیات مالی و عملیاتی کسب‌وکار" />
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="مشخصات کسب‌وکار"><p className="text-sm leading-7 text-neutral-600">تولیدی پارس · حوزه قطعات صنعتی · ۲۴ نفر نیروی انسانی</p></SectionCard>
        <SectionCard title="خلاصه مالی"><p className="text-sm leading-7 text-neutral-600">درآمد ۹۸۰ میلیون · هزینه ۷۴۰ میلیون · سود ۲۴۰ میلیون تومان</p></SectionCard>
      </div>
    </>
  );
}
