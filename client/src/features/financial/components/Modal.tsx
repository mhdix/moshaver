import React from "react";

type FinancialResultModalProps = {
  isOpen: boolean;
  needsFinancialManager: boolean;
  onClose: () => void;
  onRestart?: () => void;
};

const FinancialResultModal = ({
  isOpen,
  needsFinancialManager,
  onClose,
  onRestart,
}: FinancialResultModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-170 overflow-hidden border border-line bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative top line */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-primary" />

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="بستن"
          className="absolute left-5 top-5 z-10 grid h-10 w-10 place-items-center border border-line bg-bg-soft text-muted transition hover:border-primary hover:text-primary"
        >
          <span className="text-xl leading-none">×</span>
        </button>

        <div className="p-[clamp(28px,6vw,55px)]">
          {/* Header */}
          <div className="text-center">
            <span className="text-[10px] tracking-[2px] text-primary">
              FINANCIAL ASSESSMENT
            </span>

            <div className="mx-auto mt-8 grid h-20 w-20 place-items-center rounded-full border border-primary/40 bg-primary/5">
              <span className="text-3xl text-primary">
                {needsFinancialManager ? "✓" : "−"}
              </span>
            </div>

            <h2 className="mt-7 text-[clamp(28px,5vw,42px)] font-bold leading-[1.4] tracking-[-1px] text-text">
              {needsFinancialManager ? (
                <>
                  کسب‌وکار شما به
                  <span className="mt-1 block text-primary">
                    مدیر مالی عملیاتی
                  </span>
                  نیاز دارد.
                </>
              ) : (
                <>
                  در حال حاضر به
                  <span className="mt-1 block text-primary">
                    مدیر مالی عملیاتی
                  </span>
                  نیاز ندارید.
                </>
              )}
            </h2>

            <p className="mx-auto mt-5 max-w-[510px] text-sm leading-8 text-muted">
              {needsFinancialManager
                ? "بر اساس پاسخ‌های شما، مدیریت و پایش منظم جریان نقدی، درآمد و هزینه‌ها و گزارش‌های مالی می‌تواند به تصمیم‌گیری بهتر و کنترل دقیق‌تر کسب‌وکار شما کمک کند."
                : "بر اساس پاسخ‌های شما، در شرایط فعلی نیاز فوری به مدیر مالی عملیاتی دیده نمی‌شود؛ با این حال پیشنهاد می‌کنیم وضعیت مالی کسب‌وکار را به‌صورت دوره‌ای بررسی کنید."}
            </p>
          </div>

          {/* Result Box */}
          <div className="mt-9 border border-line bg-bg-soft p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />

              <div>
                <h3 className="text-sm font-bold text-text">
                  {needsFinancialManager ? "پیشنهاد ما" : "پیشنهاد فعلی ما"}
                </h3>

                <p className="mt-2 text-xs leading-7 text-muted">
                  {needsFinancialManager
                    ? "یک ارزیابی دقیق‌تر می‌تواند مشخص کند چه سطحی از مدیریت مالی، گزارش‌دهی و پیش‌بینی برای کسب‌وکار شما مناسب است."
                    : "با رشد کسب‌وکار، افزایش حجم تراکنش‌ها یا پیچیده‌تر شدن تصمیم‌های مالی، این ارزیابی را دوباره انجام دهید."}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            {onRestart && (
              <button
                type="button"
                onClick={onRestart}
                className="min-h-14 border border-line bg-bg-soft px-7 text-sm text-text-secondary transition hover:border-primary hover:text-primary"
              >
                انجام دوباره ارزیابی
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="min-h-14 bg-primary px-8 font-bold text-bg transition hover:bg-primary-soft"
            >
              متوجه شدم
              <span className="mr-3">←</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-7 flex items-center justify-center gap-3 border-t border-line pt-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <span className="text-[10px] text-muted">
              این نتیجه بر اساس پاسخ‌های ثبت‌شده در ارزیابی اولیه است.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialResultModal;
