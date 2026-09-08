import { useEffect, useState } from "react";
import api from "../../services/axios";
import { getMe } from "../login/auth";
import FinancialHealth from "../financial/FinancialHealth";

type Service = {
  number: string;
  title: string;
  text: string;
  items: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "مشاوره مالی",
    text: "تبدیل اطلاعات مالی پراکنده به اطلاعاتی که مدیر بتواند بر اساس آن تصمیم بگیرد.",
    items: [
      "گزارش‌های مدیریتی",
      "بودجه و پیش‌بینی",
      "تحلیل سودآوری",
      "داشبورد مدیریتی",
    ],
  },
  {
    number: "02",
    title: "مشاوره عملیاتی",
    text: "پیدا کردن گلوگاه‌های عملیاتی و تبدیل مسئله‌های روزمره به برنامه قابل اجرا.",
    items: [
      "بهبود فرآیند",
      "کنترل هزینه",
      "مدیریت نقدینگی",
      "KPI و شاخص‌های عملکرد",
    ],
  },
  {
    number: "03",
    title: "تحلیل و تصمیم‌گیری",
    text: "قبل از تصمیم، سؤال درست را مشخص می‌کنیم؛ سپس داده مناسب برای آزمون آن سؤال را پیدا می‌کنیم.",
    items: ["تحلیل داده", "Cost Mapping", "ABC Costing", "تحلیل انحرافات"],
  },
];

const problems = [
  "فروش دارید اما سود واقعی را نمی‌دانید.",
  "مطالبات وصول نمی‌شود و نقدینگی تحت فشار است.",
  "هزینه‌ها بالا رفته اما علت مشخص نیست.",
  "گزارش مالی دارید، ولی برای تصمیم مدیریتی کافی نیست.",
  "فرآیندها به افراد وابسته شده‌اند.",
  "مدیر برای تصمیم‌گیری به اطلاعات سریع و قابل اتکا دسترسی ندارد.",
];

function Main({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const user = getMe();
    console.log("get me user: ", user);
  }, []);
  return (
    <div
      dir="rtl"
      className="min-h-screen overflow-hidden bg-bg font-vazirmatn text-text"
    >
      <FinancialHealth />
      <main>
        {/* ================= HERO ================= */}
        <section
          id="home"
          className="relative flex min-h-212.5 items-center pt-20.5 max-[850px]:min-h-0 max-[850px]:py-22.5 max-[850px]:pt-40"
        >
          <div className="pointer-events-none absolute top-[18%] right-[38%] h-62.5 w-62.5 rounded-full bg-primary/10 blur-[80px]" />
          <div className="pointer-events-none absolute bottom-[5%] left-[5%] h-50 w-50 rounded-full bg-card/60 blur-[80px]" />
          <div className="mx-auto grid w-[min(1160px,calc(100%-48px))] grid-cols-[1.1fr_.9fr] items-center gap-17.5 max-[850px]:grid-cols-1 max-[850px]:gap-13.75">
            {/* Hero Copy */}
            <div>
              <div className="mb-5.5 flex items-center gap-2.25 text-md uppercase tracking-[1.5px] text-primary">
                <span className="h-px w-6.5 bg-primary" /> Financial &
                Operational Consulting
              </div>
              <h1 className="m-0 text-[clamp(50px,7vw,92px)] leading-[1.02] font-bold tracking-[-4px] max-[850px]:tracking-[-2px]">
                عددها را <br /> به
                <em className="not-italic text-primary"> تصمیم </em> تبدیل کنیم.
              </h1>
              <p className="my-7 max-w-155 text-[15px] leading-[2.05] text-text-secondary">
                من جواد دومانلو هستم؛ مشاور مالی و عملیاتی. کمک می‌کنم مدیران،
                پشت اعداد و گزارش‌ها، مسئله واقعی کسب‌وکارشان را ببینند و برای
                آن تصمیم قابل اجرا بگیرند.
              </p>
              <div className="flex items-center gap-5 max-[520px]:flex-col max-[520px]:items-stretch">
                <button
                  className="border-0 bg-primary px-5.5 py-3.75 font-bold text-bg transition hover:bg-primary-soft"
                  onClick={() => scrollToSection("contact")}
                >
                  درباره مسئله کسب‌وکارم صحبت کنیم
                  <span className="mr-3.5">←</span>
                </button>
                <button
                  className="border-0 bg-transparent text-text-secondary transition hover:text-primary"
                  onClick={() => scrollToSection("services")}
                >
                  خدمات مشاوره
                  <span className="mr-2.5 text-primary">↓</span>
                </button>
              </div>
              <div className="mt-16.25 flex gap-9 max-[850px]:mt-11.25 max-[520px]:justify-between max-[520px]:gap-3.5">
                {[
                  ["مالی", "Financial"],
                  ["عملیاتی", "Operational"],
                  ["تصمیم", "Decision"],
                ].map(([title, subtitle]) => (
                  <div
                    key={title}
                    className="border-r border-line pr-4.5 max-[520px]:pr-2.25"
                  >
                    <b className="block text-md">{title}</b>
                    <span className="mt-1 block text-[9px] text-muted">
                      {subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Hero Card */}
            <div className="perspective-[1000px]">
              <div className="relative min-h-120 border border-primary/20 bg-[linear-gradient(145deg,var(--color-card),var(--color-bg))] p-7 shadow-[0_30px_90px_rgba(0,0,0,.35)] [transform:rotateY(-7deg)_rotateX(2deg)] max-[850px]:min-h-[390px] max-[850px]:[transform:none]">
                <div className="pointer-events-none absolute inset-4.5 border border-white/5" />
                <div className="flex justify-between text-sm tracking-[1.5px] text-muted">
                  <span>MANAGEMENT VIEW</span>
                  <span className="text-primary">● LIVE</span>
                </div>
                <div className="absolute top-36.25 right-12.5">
                  <span className="block text-muted">دید مدیریتی</span>
                  <strong className="my-[14px] block text-[80px] leading-none font-bold text-primary">
                    360°
                  </strong>
                  <small className="block text-md text-muted">
                    مالی + عملیات + تصمیم
                  </small>
                </div>
                <div className="absolute right-[42px] bottom-[105px] left-[42px] h-[120px] border-b border-line">
                  <div className="flex h-full items-end gap-2">
                    {["34%", "45%", "41%", "59%", "54%", "72%", "88%"].map(
                      (height, index) => (
                        <i
                          key={index}
                          style={{ height }}
                          className="block flex-1 rounded-t-[2px] bg-gradient-to-t from-primary/15 to-primary/80"
                        />
                      ),
                    )}
                  </div>
                </div>
                <div className="absolute right-[42px] bottom-[38px] left-[42px] flex justify-between text-sm tracking-[1.5px] text-muted">
                  <span>داده</span> <span>→</span> <span>تحلیل</span>
                  <span>→</span> <span>تصمیم</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================= PROBLEMS ================= */}
        <section
          id="problems"
          className="border-t border-line py-[135px] max-[850px]:py-[90px]"
        >
          <div className="mx-auto w-[min(1160px,calc(100%-48px))]">
            <div className="flex items-end justify-between gap-[60px] max-[850px]:block">
              <div>
                <span className="text-md uppercase tracking-[1.5px] text-primary">
                  01 / مسئله
                </span>
                <h2 className="mt-5 text-[clamp(38px,5vw,66px)] leading-[1.15] tracking-[-2px]">
                  اگر این سؤال‌ها <br />
                  <span className="text-primary">برای شما آشناست...</span>
                </h2>
              </div>
              <p className="max-w-97.5 text-md leading-8 text-muted max-[850px]:mt-7">
                مسئله همیشه کمبود گزارش نیست؛ گاهی مشکل این است که گزارش درست،
                برای سؤال درست استفاده نمی‌شود.
              </p>
            </div>
            <div className="mt-[70px] grid grid-cols-3 gap-px bg-line max-[850px]:grid-cols-2 max-[520px]:grid-cols-1">
              {problems.map((problem, index) => (
                <div className="min-h-[175px] bg-bg-soft p-7" key={problem}>
                  <span className="text-md text-primary">0{index + 1} </span>
                  <p className="mt-[30px] text-md leading-[1.9] text-text-light">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ================= SERVICES ================= */}
        <section
          id="services"
          className="border-t border-line py-[135px] max-[850px]:py-[90px]"
        >
          <div className="mx-auto w-[min(1160px,calc(100%-48px))]">
            <span className="text-md uppercase tracking-[1.5px] text-primary">
              02 / خدمات
            </span>
            <h2 className="mt-5 text-[clamp(38px,5vw,66px)] leading-[1.15] tracking-[-2px]">
              مشاوره برای{" "}
              <span className="text-primary">
                دیدن، تحلیل کردن و اقدام کردن.
              </span>
            </h2>
            <div className="mt-[70px]">
              {services.map((service) => (
                <article
                  className="grid grid-cols-[90px_1fr_50px] items-start gap-[30px] border-t border-line py-[38px] last:border-b max-[520px]:grid-cols-[40px_1fr_25px] max-[520px]:gap-3"
                  key={service.number}
                >
                  <div className="pt-2 text-[11px] text-primary">
                    {service.number}
                  </div>
                  <div>
                    <h3 className="m-0 text-[27px] max-[520px]:text-[22px]">
                      {service.title}
                    </h3>
                    <p className="my-3 mb-[22px] max-w-[650px] text-md leading-8 text-muted">
                      {service.text}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="border border-line px-[11px] py-[7px] text-md text-text-secondary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-[25px] text-primary">↗</div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* ================= METHOD ================= */}
        <section
          id="method"
          className="border-t border-line bg-surface py-[135px] max-[850px]:py-[90px]"
        >
          <div className="mx-auto grid w-[min(1160px,calc(100%-48px))] grid-cols-[.8fr_1.2fr] gap-[100px] max-[850px]:grid-cols-1 max-[850px]:gap-[55px]">
            <div>
              <span className="text-md uppercase tracking-[1.5px] text-primary">
                03 / رویکرد
              </span>
              <h2 className="mt-5 text-[clamp(38px,5vw,66px)] leading-[1.15] tracking-[-2px]">
                اول سؤال
                <br />
                <span className="text-primary">بعد داده</span>
              </h2>
            </div>
            <div>
              <p className="m-0 text-[24px] leading-[2] text-text-light">
                قبل از اینکه دنبال گزارش بگردیم، مشخص می‌کنیم مدیر دقیقاً چه
                تصمیمی باید بگیرد و چه فرضیه‌ای باید آزمون شود
              </p>
              <div className="mt-[55px] grid grid-cols-2 gap-px bg-line max-[520px]:grid-cols-1">
                {[
                  ["01", "تعریف مسئله", "What is wrong?"],
                  ["02", "انتخاب داده", "What do we need?"],
                  ["03", "تحلیل", "What does it say?"],
                  ["04", "اقدام", "What should we do?"],
                ].map(([number, title, subtitle]) => (
                  <div key={number} className="min-h-32.5 bg-surface p-5.5">
                    <b className="block text-md text-primary">{number} </b>
                    <span className="mt-5.5 block text-sm"> {title} </span>
                    <small className="mt-1 block text-sm text-muted" dir="ltr">
                      {subtitle}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="border-t border-line py-[135px] max-[850px]:py-[90px]"
        >
          <div className="mx-auto grid w-[min(1160px,calc(100%-48px))] grid-cols-[.9fr_1.1fr] items-center gap-[100px] max-[850px]:grid-cols-1 max-[850px]:gap-[55px]">
            <div className="relative grid aspect-[4/5] max-w-[400px] place-items-center border border-line bg-card">
              <span className="text-[100px] font-bold tracking-[-8px] text-primary/70">
                JD
              </span>
              <small className="absolute bottom-[25px] text-sm tracking-[4px] text-muted">
                JAVAD DOMANLOU
              </small>
            </div>
            <div>
              <span className="text-md uppercase tracking-[1.5px] text-primary">
                04 / درباره من
              </span>
              <h2 className="mt-5 text-[clamp(38px,5vw,66px)] leading-[1.15] tracking-[-2px]">
                حسابداری فقط <br />
                <span className="text-primary">شروع ماجراست.</span>
              </h2>
              <p className="mt-7 max-w-[620px] text-sm leading-[2.1] text-muted">
                مسیر حرفه‌ای من از حوزه مالی و حسابداری شروع شده و به سمت مشاوره
                مالی و عملیاتی و حل مسئله مدیریتی حرکت کرده است.
              </p>
              <p className="max-w-[620px] text-sm leading-[2.1] text-muted">
                تمرکز من روی این است که اطلاعات مالی را از یک خروجی حسابداری، به
                ابزاری برای کنترل، تحلیل و تصمیم‌گیری تبدیل کنم.
              </p>
              <div className="mt-[35px] font-serif text-[25px] italic text-primary">
                Javad Domanlou
              </div>
            </div>
          </div>
        </section>
        {/* ================= CONTACT ================= */}
        <section id="contact" className="bg-contact py-27.5">
          <div className="mx-auto flex w-[min(1160px,calc(100%-48px))] items-end justify-between gap-15 max-[850px]:block">
            <div>
              <span className="text-md uppercase tracking-[1.5px] text-primary">
                05 / شروع گفتگو
              </span>
              <h2 className="mt-5 text-[clamp(38px,5vw,66px)] leading-[1.15] tracking-[-2px]">
                مسئله کسب‌وکارتان <br />
                <span className="text-primary">چیست؟</span>
              </h2>
              <p className="max-w-125 text-md leading-8 text-muted">
                اگر فکر می‌کنید یک مسئله مالی یا عملیاتی مانع رشد کسب‌وکارتان
                شده، از همین‌جا شروع کنیم.
              </p>
            </div>
            <button
              className="flex min-h-30 min-w-57.5 items-end justify-between border-0 bg-primary p-6 font-bold text-bg transition hover:bg-primary-soft max-[850px]:mt-[35px] max-[850px]:w-full"
              onClick={() =>
                (window.location.href = "mailto:contact@example.com")
              }
            >
              <span>تماس برای مشاوره</span>
              <b className="text-[28px]">↗</b>
            </button>
          </div>
        </section>
      </main>
      {/* ================= FOOTER ================= */}
      <footer className="border-t border-line bg-bg">
        <div className="mx-auto flex min-h-[100px] w-[min(1160px,calc(100%-48px))] items-center justify-between text-[9px] text-muted max-[520px]:block max-[520px]:py-[25px]">
          <div>
            <strong className="mb-1 block text-xs text-text-light">
              جواد دومانلو
            </strong>
            <span className="block">مشاور مالی و عملیاتی</span>
          </div>
          <span className="block max-[520px]:mt-[18px]">
            © 2026 — Financial & Operational Consulting
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Main;
