import { DataTable, PageHeader, type TableColumn } from "../components";

interface TransactionRow {
  id: number;
  user: string;
  type: "درآمد" | "هزینه";
  category: string;
  amount: string;
  description: string;
  date: string;
}

const transactions: TransactionRow[] = [
  {
    id: 1,
    user: "شرکت آریا",
    type: "درآمد",
    category: "فروش",
    amount: "۲۸ م",
    description: "پرداخت خدمات مشاوره",
    date: "۱۴۰۵/۰۶/۱۹",
  },
  {
    id: 2,
    user: "مدیریت",
    type: "هزینه",
    category: "بازاریابی",
    amount: "۹ م",
    description: "کمپین تبلیغاتی",
    date: "۱۴۰۵/۰۶/۱۸",
  },
  {
    id: 3,
    user: "فروشگاه سپهر",
    type: "درآمد",
    category: "فروش",
    amount: "۱۲ م",
    description: "پروژه تحلیل مالی",
    date: "۱۴۰۵/۰۶/۱۷",
  },
];

export default function TransactionsPage() {
  const columns: TableColumn<TransactionRow>[] = [
    {
      key: "user",
      title: "کاربر",
      render: (row) => <span className="font-bold">{row.user}</span>,
    },
    {
      key: "type",
      title: "نوع",
      render: (row) => (
        <span
          className={
            row.type === "درآمد"
              ? "font-bold text-emerald-700"
              : "font-bold text-rose-700"
          }
        >
          {row.type}
        </span>
      ),
    },
    { key: "category", title: "دسته‌بندی", render: (row) => row.category },
    { key: "amount", title: "مبلغ", render: (row) => row.amount },
    { key: "description", title: "شرح", render: (row) => row.description },
    { key: "date", title: "تاریخ", render: (row) => row.date },
  ];

  return (
    <>
      <PageHeader
        title="تراکنش‌ها"
        description="مدیریت درآمدها و هزینه‌های ثبت‌شده"
      />
      <div className="mb-4 grid gap-3 rounded-2xl border border-line bg-bg p-4 sm:grid-cols-3">
        <select className="h-11 rounded-xl border border-line bg-bg px-3 text-sm">
          <option>همه انواع</option>
          <option>درآمد</option>
          <option>هزینه</option>
        </select>
        <select className="h-11 rounded-xl border border-line bg-bg px-3 text-sm">
          <option>همه دسته‌بندی‌ها</option>
          <option>فروش</option>
          <option>حقوق</option>
          <option>اجاره</option>
          <option>بازاریابی</option>
          <option>خرید</option>
          <option>سایر</option>
        </select>
        <input
          type="date"
          className="h-11 rounded-xl border border-line bg-bg px-3 text-sm"
        />
      </div>
      <DataTable
        data={transactions}
        columns={columns}
        getRowKey={(row) => row.id}
      />
    </>
  );
}
