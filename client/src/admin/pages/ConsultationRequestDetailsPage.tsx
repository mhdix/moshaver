import { useParams } from "react-router-dom";
import { PageHeader, SectionCard, StatusBadge } from "../components";

export default function ConsultationRequestDetailsPage() {
  const { id } = useParams();

  return (
    <>
      <PageHeader
        title={`درخواست مشاوره #${id ?? "-"}`}
        description="بررسی اطلاعات مشتری و روند پیگیری"
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="اطلاعات مشتری">
          <div className="space-y-3 text-sm text-neutral-600">
            <p>
              <strong className="text-text">مشتری:</strong> شرکت آریا
            </p>
            <p>
              <strong className="text-text">موضوع:</strong> بهبود نقدینگی
            </p>
            <p>
              <strong className="text-text">وضعیت:</strong>{" "}
              <StatusBadge status="در انتظار بررسی" />
            </p>
          </div>
        </SectionCard>
        <SectionCard title="مدیریت درخواست">
          <div className="space-y-4">
            <select className="h-11 w-full rounded-xl border border-line bg-bg px-3 text-sm outline-none">
              <option>در انتظار بررسی</option>
              <option>در حال پیگیری</option>
              <option>تماس گرفته شد</option>
              <option>تکمیل شد</option>
              <option>لغو شد</option>
            </select>
            <textarea
              rows={5}
              placeholder="یادداشت داخلی..."
              className="w-full rounded-xl border border-line p-3 text-sm outline-none focus:border-[#D4AF37]"
            />
            <button className="rounded-xl bg-neutral-950 px-5 py-2.5 text-sm font-bold text-white">
              ثبت تغییرات
            </button>
          </div>
          {/* REACT LEARNING OPPORTUNITY:
              چند تغییر مرتبط مثل status + note + submit state می‌تواند جای مناسبی برای بررسی useReducer باشد.
              عمداً useReducer در این فایل پیاده‌سازی نشده است. */}
        </SectionCard>
      </div>
    </>
  );
}
