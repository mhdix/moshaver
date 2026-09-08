import React, { useEffect, useState } from "react";
import type { User } from "../../../types";
import { loginService } from "../services/loginServices";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
// import BackgroundGlow from "../../../components/BackgroundGlow.tsx";

export default function LoginPage() {
  const [loginData, setLoginData] = useState<User>({ email: "", password: "" });
  const { isAuthenticated, loading, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const loginServicesHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginData;
    if (!email || !password) {
      toast.error("ایمیل یا رمز عبور نمیتواند خالی باشد");
    }

    const loginedUser = await loginService(loginData);
    if (loginedUser.status == 200) {
      console.log("loginedUser.data.data12232: ", loginedUser.data.message);
      toast.success(loginedUser.data.message);
      navigate("/");
    } else {
      console.log(loginedUser.data);
      toast.success(loginedUser.data.message);
    }
    console.log("loginedUser", loginedUser);
  };

  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-bg text-white"
    >
      {/* Background Glow */}
      {/* <BackgroundGlow /> */}
      
      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-16 px-6 py-12 lg:grid-cols-2 lg:px-8">
        {/* ================= LEFT / BRAND ================= */}
        <section className="hidden lg:block">
          <div className="max-w-xl">
            {/* Brand */}
            <div className="mb-16 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-bold text-[#171717]">
                JD
              </div>

              <div className="flex flex-col">
                <strong className="text-sm">جواد دومانلو</strong>

                <span className="mt-1 text-xs text-white/40">
                  مشاور مالی و عملیاتی
                </span>
              </div>
            </div>

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3 text-xs tracking-[0.2em] text-white/40">
              <span className="h-px w-10 bg-primary" />
              MANAGEMENT PLATFORM
            </div>

            {/* Heading */}
            <h1 className="text-6xl font-semibold leading-[1.15] tracking-tight xl:text-7xl">
              دوباره
              <br />
              <span className="text-white/30">به عددها</span>
              <br />
              نگاه کنیم.
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-9 text-white/50">
              وارد پنل مدیریت شوید و اطلاعات مالی و عملیاتی کسب‌وکارتان را به
              تصمیم‌های قابل اجرا تبدیل کنید.
            </p>

            {/* Trust */}
            <div className="mt-14 flex gap-10 border-t border-white/10 pt-8">
              <div className="flex flex-col">
                <b className="text-sm">مالی</b>

                <span className="mt-1 text-xs text-white/30">Financial</span>
              </div>

              <div className="flex flex-col">
                <b className="text-sm">عملیاتی</b>

                <span className="mt-1 text-xs text-white/30">Operational</span>
              </div>

              <div className="flex flex-col">
                <b className="text-sm">تصمیم</b>

                <span className="mt-1 text-xs text-white/30">Decision</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LOGIN CARD ================= */}
        <section className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-xl sm:p-9">
            {/* Mobile Brand */}
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-[#171717]">
                JD
              </div>

              <div className="flex flex-col">
                <strong className="text-sm">جواد دومانلو</strong>

                <span className="text-xs text-white/40">
                  مشاور مالی و عملیاتی
                </span>
              </div>
            </div>

            {/* Header */}
            <div>
              <span className="text-xs tracking-[0.2em] text-primabg-primary">
                LOGIN / ورود
              </span>

              <h2 className="mt-4 text-3xl font-semibold">خوش برگشتی.</h2>

              <p className="mt-3 text-sm leading-7 text-white/40">
                برای ورود به پنل مدیریت، اطلاعات حساب خود را وارد کنید.
              </p>
            </div>

            {/* Form */}
            <form className="mt-10 space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-white/60"
                >
                  ایمیل
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-left text-sm text-white outline-none transition placeholder:text-white/20 focus:border-primabg-primary focus:bg-white/[0.06]"
                  onChange={(e) =>
                    setLoginData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="text-sm text-white/60">
                    رمز عبور
                  </label>

                  <button
                    type="button"
                    className="text-xs text-primabg-primary transition hover:text-orange-300"
                  >
                    رمز عبور را فراموش کرده‌اید؟
                  </button>
                </div>

                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 text-left text-sm text-white outline-none transition placeholder:text-white/20 focus:border-primary/60 focus:bg-white/[0.06]"
                  onChange={(e) =>
                    setLoginData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
              </div>

              {/* Remember */}
              <label className="flex cursor-pointer items-center gap-3 py-1">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/5 accent-primary"
                />

                <span className="text-xs text-white/40">مرا به خاطر بسپار</span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-between rounded-xl bg-primary px-5 py-4 text-sm font-medium text-[#171717] transition hover:bg-primary hover:scale-105"
                onClick={loginServicesHandler}
              >
                <span>ورود به پنل</span>

                <span className="text-xl transition-transform group-hover:-translate-x-1">
                  ←
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-white/20">یا</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            {/* Register */}
            <div className="text-center">
              <span className="text-sm text-white/40">
                هنوز حساب کاربری ندارید؟
              </span>

              <button
                type="button"
                className="mr-2 text-sm text-primary transition hover:text-orange-300"
              >
                ایجاد حساب
              </button>
            </div>

            {/* Security */}
            <div className="mt-8 flex items-center justify-center gap-2 text-[11px] text-white/20">
              <span>●</span>
              اتصال امن و رمزنگاری‌شده
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="absolute bottom-5 left-0 w-full text-center text-[11px] text-white/20">
        © 2026 — Financial & Operational Consulting
      </div>
    </main>
  );
}
