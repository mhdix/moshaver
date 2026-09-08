import { useCallback, useMemo, useState } from "react";
import FinancialDetails from "./FinancialDetails";

function FinancialHealth() {
  const [showDetails, setShowDetails] = useState(false);
  const [sales, setSales] = useState(0);
  const [costs, setCosts] = useState(0);

  const profit = useMemo(() => {
    console.log("محاسبه سود");
    const persentageFee = sales - costs;
    return persentageFee;
  }, [sales, costs]);

  const profitManage = useMemo(() => {
    console.log("محاسبه حاشیه سود");

    return (profit / sales) * 100;
  }, [profit, sales]);

  const calculateProfit = useCallback(() => {
    console.log(sales - costs);
    return sales - costs;
  }, [sales, costs]);

  console.log("FinancialHealth Render");

  return (
    <section className="min-h-screen border-t bg-bg border-line py-[100px]">
      <div className="mx-auto w-[min(1160px,calc(100%-48px))]">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-primary">06 / تحلیل مالی</span>

          <h2 className="my-5 text-[clamp(50px,7vw,92px)] leading-[1.02] font-bold tracking-[-4px] max-[850px]:tracking-[-2px]">
            <span className="text-primary">ارزیابی </span>
            سلامت مالی
          </h2>

          <p className="text-lg leading-8 text-white/70">
            در کمتر از یک دقیقه، با وارد کردن فروش و هزینه‌ها، یک تصویر اولیه از
            سودآوری کسب‌وکارت به دست بیاور.
          </p>
        </div>

        {/* Calculator */}
        <div className="mt-14 border border-line p-6 md:p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold">اطلاعات مالی کسب‌وکار</h3>

            <p className="mt-2 text-sm text-white/50">
              اعداد تقریبی ماهانه کسب‌وکارت رو وارد کن.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Costs */}
            <div className="space-y-3">
              <label className="block text-sm text-white/70">
                هزینه ماهانه
              </label>

              <input
                type="text"
                inputMode="numeric"
                value={costs.toLocaleString("en-US")}
                onChange={(e) => {
                  const value = e.target.value.replace(/,/g, "");
                  setCosts(Number(value));
                }}
                className="w-full border border-gray-400 bg-transparent p-4 text-white outline-none transition focus:border-primary"
                placeholder="مثلاً ۵۰,۰۰۰,۰۰۰"
              />
            </div>

            {/* Sales */}
            <div className="space-y-3">
              <label className="block text-sm text-white/70">فروش ماهانه</label>

              <input
                type="text"
                inputMode="numeric"
                value={sales.toLocaleString("en-US")}
                onChange={(e) => {
                  const value = e.target.value.replace(/,/g, "");
                  setSales(Number(value));
                }}
                className="w-full border border-gray-400 bg-transparent p-4 text-white outline-none transition focus:border-primary"
                placeholder="مثلاً ۱۰۰,۰۰۰,۰۰۰"
              />
            </div>
          </div>

          <button
            onClick={() => setShowDetails(true)}
            className="mt-6 w-full border border-primary bg-primary py-3 font-bold text-black transition hover:bg-primary-soft"
          >
            تحلیل سلامت مالی
          </button>
        </div>

        {/* Result */}
        {showDetails && (
          <div className="mt-10">
            <div className="mb-5">
              <span className="text-sm text-white/50">نتیجه ارزیابی</span>

              <h3 className="mt-2 text-3xl font-bold">
                تصویر اولیه سلامت مالی کسب‌وکار
              </h3>
            </div>

            {/* Status */}
            <div className="mb-5 border border-line p-6">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-sm">وضعیت کلی</p>

                  <h4 className="mt-2 text-2xl font-bold">🟢 وضعیت مناسب</h4>
                </div>

                <div className="text-right">
                  <p className="text-sm">حاشیه سود</p>

                  <p className="mt-1 text-2xl font-bold text-primary">
                    {profitManage.toLocaleString()}%
                  </p>
                </div>
              </div>
            </div>

            {/* Financial numbers */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="border border-line p-6">
                <p className="text-sm text-white/50">فروش ماهانه</p>

                <p className="mt-3 text-2xl font-bold">
                  {sales.toLocaleString()}
                </p>
              </div>

              <div className="border border-line p-6">
                <p className="text-sm text-white/50">هزینه ماهانه</p>

                <p className="mt-3 text-2xl font-bold">
                  {costs.toLocaleString()}
                </p>
              </div>

              <div className="border border-line p-6">
                <p className="text-sm text-white/50">سود ماهانه</p>

                <p className="mt-3 text-2xl font-bold text-primary">
                  {profit.toLocaleString()}
                </p>
              </div>

              <div className="border border-line p-6">
                <p className="text-sm text-white/50">حاشیه سود</p>

                <p className="mt-3 text-2xl font-bold">
                  {profitManage.toLocaleString()}%
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-5 border border-line p-6">
              <p className="text-sm leading-7 text-white/60">
                بر اساس اطلاعات واردشده، این نتیجه یک ارزیابی اولیه از سودآوری
                کسب‌وکار شماست. برای بررسی دقیق‌تر سلامت مالی، عواملی مثل جریان
                نقدی، بدهی‌ها، هزینه‌های ثابت و متغیر و ساختار درآمد نیز باید
                بررسی شوند.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 border border-primary/30 bg-primary/5 p-8 md:p-10">
              <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
                <div>
                  <span className="text-sm text-primary">تحلیل تخصصی</span>

                  <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                    می‌خوای وضعیت مالی کسب‌وکارت رو دقیق‌تر بررسی کنیم؟
                  </h3>

                  <p className="mt-3 max-w-2xl leading-7 text-white/60">
                    ارزیابی اولیه فقط نقطه شروعه. برای شناخت دقیق‌تر مشکلات مالی
                    و پیدا کردن مسیر بهبود، می‌تونی درخواست تحلیل مالی تخصصی ثبت
                    کنی.
                  </p>
                </div>

                <button className="shrink-0 border border-primary bg-primary px-8 py-3 font-bold text-black transition hover:bg-primary-soft">
                  درخواست تحلیل مالی
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default FinancialHealth;
