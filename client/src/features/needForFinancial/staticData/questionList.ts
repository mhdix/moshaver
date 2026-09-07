import type { Question } from "../types";

export const questions: Question[] = [
  {
    id: "cashFlow",
    title: "آیا جریان نقدی کسب‌وکار خود را به‌صورت منظم بررسی می‌کنید؟",
    options: [
      {
        label: "بله، به‌صورت منظم",
        value: "yes",
        score: 0,
      },
      {
        label: "گاهی اوقات",
        value: "sometimes",
        score: 1,
      },
      {
        label: "خیر",
        value: "no",
        score: 2,
      },
    ],
  },

  {
    id: "incomeAndExpenses",
    title: "آیا همیشه از میزان دقیق درآمد و هزینه‌های خود اطلاع دارید؟",
    options: [
      {
        label: "کاملاً اطلاع دارم",
        value: "yes",
        score: 0,
      },
      {
        label: "تا حدودی",
        value: "sometimes",
        score: 1,
      },
      {
        label: "خیر، دید دقیقی ندارم",
        value: "no",
        score: 2,
      },
    ],
  },

  {
    id: "budgeting",
    title: "آیا برای هزینه‌ها و بودجه ماهانه برنامه مشخصی دارید؟",
    options: [
      {
        label: "بله، برنامه مشخص دارم",
        value: "yes",
        score: 0,
      },
      {
        label: "تا حدودی",
        value: "sometimes",
        score: 1,
      },
      {
        label: "خیر",
        value: "no",
        score: 2,
      },
    ],
  },

  {
    id: "financialReports",
    title: "آیا گزارش‌های مالی و مدیریتی را به‌صورت منظم بررسی می‌کنید؟",
    options: [
      {
        label: "بله، به‌صورت منظم",
        value: "yes",
        score: 0,
      },
      {
        label: "گاهی اوقات",
        value: "sometimes",
        score: 1,
      },
      {
        label: "خیر",
        value: "no",
        score: 2,
      },
    ],
  },

  {
    id: "forecasting",
    title: "آیا برای ماه‌ها و شرایط آینده کسب‌وکار پیش‌بینی مالی دارید؟",
    options: [
      {
        label: "بله، به‌صورت مشخص",
        value: "yes",
        score: 0,
      },
      {
        label: "تا حدودی",
        value: "sometimes",
        score: 1,
      },
      {
        label: "خیر",
        value: "no",
        score: 2,
      },
    ],
  },

  {
    id: "financialDecisions",
    title:
      "آیا تصمیمات مهم کسب‌وکار را بر اساس اطلاعات و تحلیل‌های مالی می‌گیرید؟",
    options: [
      {
        label: "بله، همیشه",
        value: "yes",
        score: 0,
      },
      {
        label: "گاهی اوقات",
        value: "sometimes",
        score: 1,
      },
      {
        label: "خیر، معمولاً بدون تحلیل دقیق",
        value: "no",
        score: 2,
      },
    ],
  },
];