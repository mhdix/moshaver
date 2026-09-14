import { Link, useParams } from "react-router-dom";
import { PageHeader, SectionCard, StatusBadge } from "../components";
import { useEffect, useState } from "react";
import api from "../../services/axios";
import type { User } from "../../types";

export default function UserDetailsPage() {
  const [userDetails, setUserDetails] = useState<User>({});
  const { id } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await api.get(`/user/single/${id}`);
        console.log("fetchUser: ", response);
        setUserDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);
  console.log("singleUser detail : ", userDetails);

  return (
    <>
      <PageHeader
        title={`جزئیات کاربر`}
        description="نمای کامل ارتباط کاربر با سامانه مشاوره مالی"
        action={
          <Link
            to={"/admin/users"}
            className="rounded-xl border border-line bg-bg px-4 py-2.5 text-sm font-bold text-neutral-700"
          >
            بازگشت به کاربران
          </Link>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_1.5fr]">
        <SectionCard title="اطلاعات کاربر">
          <dl className="space-y-4 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">نام</dt>
              <dd className="font-bold">{userDetails?.name}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">ایمیل</dt>
              <dd className="font-bold">{userDetails?.email}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">شماره تماس</dt>
              <dd className="font-bold">{userDetails?.phoneNumber}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">هویت</dt>
              <dd className="font-bold">{userDetails?.role}</dd>
            </div>
          </dl>
        </SectionCard>

        <SectionCard title="خلاصه مالی">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["درآمد ماهانه", "۳۲۰ میلیون"],
              ["هزینه ماهانه", "۲۴۰ میلیون"],
              ["سود ماهانه", "۸۰ میلیون"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-bg-soft p-4">
                <div className="text-xs text-neutral-500">{label}</div>
                <div className="mt-2 font-black text-text">{value}</div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <SectionCard title="تحلیل‌های مالی">
          <p className="text-sm text-neutral-500">
            آخرین تحلیل: مناسب · امتیاز ۷۶ از ۱۰۰
          </p>
        </SectionCard>
        <SectionCard title="درخواست‌های مشاوره">
          <p className="text-sm text-neutral-500">
            ۲ درخواست ثبت‌شده · ۱ مورد در حال پیگیری
          </p>
        </SectionCard>
        <SectionCard title="تراکنش‌ها">
          <p className="text-sm text-neutral-500">
            آخرین تراکنش: ۱۲ میلیون تومان · درآمد
          </p>
        </SectionCard>
        <SectionCard title="فعالیت‌های اخیر">
          <p className="text-sm text-neutral-500">
            پروفایل مالی در ۱۴۰۵/۰۶/۱۸ به‌روزرسانی شد.
          </p>
        </SectionCard>
      </div>
    </>
  );
}
