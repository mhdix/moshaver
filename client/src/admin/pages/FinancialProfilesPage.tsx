import { Link } from "react-router-dom";
import {
  DataTable,
  PageHeader,
  SearchInput,
  type TableColumn,
} from "../components";

interface FinancialProfileRow {
  id: number;
  businessName: string;
  type: string;
  field: string;
  employees: number;
  revenue: string;
  expenses: string;
  profit: string;
  createdAt: string;
}

const profiles: FinancialProfileRow[] = [
  {
    id: 1,
    businessName: "تولیدی پارس",
    type: "تولیدی",
    field: "قطعات صنعتی",
    employees: 24,
    revenue: "۹۸۰ م",
    expenses: "۷۴۰ م",
    profit: "۲۴۰ م",
    createdAt: "۱۴۰۵/۰۶/۱۲",
  },
  {
    id: 2,
    businessName: "فروشگاه سپهر",
    type: "بازرگانی",
    field: "لوازم خانگی",
    employees: 9,
    revenue: "۵۲۰ م",
    expenses: "۴۱۰ م",
    profit: "۱۱۰ م",
    createdAt: "۱۴۰۵/۰۶/۰۹",
  },
  {
    id: 3,
    businessName: "خدمات آریا",
    type: "خدماتی",
    field: "فناوری اطلاعات",
    employees: 15,
    revenue: "۴۳۰ م",
    expenses: "۳۱۰ م",
    profit: "۱۲۰ م",
    createdAt: "۱۴۰۵/۰۶/۰۳",
  },
];

export default function FinancialProfilesPage() {
  const columns: TableColumn<FinancialProfileRow>[] = [
    {
      key: "name",
      title: "نام کسب‌وکار",
      render: (row) => <span className="font-bold">{row.businessName}</span>,
    },
    { key: "type", title: "نوع", render: (row) => row.type },
    { key: "field", title: "حوزه فعالیت", render: (row) => row.field },
    { key: "employees", title: "کارکنان", render: (row) => row.employees },
    { key: "revenue", title: "درآمد ماهانه", render: (row) => row.revenue },
    { key: "profit", title: "سود ماهانه", render: (row) => row.profit },
    { key: "date", title: "تاریخ ایجاد", render: (row) => row.createdAt },
    {
      key: "action",
      title: "عملیات",
      render: (row) => (
        <Link
          to={`/admin/financial-profiles/${row.id}`}
          className="text-xs font-bold text-text underline decoration-[#D4AF37] decoration-2 underline-offset-4"
        >
          مشاهده
        </Link>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        title="پروفایل‌های مالی"
        description="اطلاعات مالی و عملیاتی کسب‌وکارهای ثبت‌شده"
      />
      <div className="mb-4 rounded-2xl border border-line bg-bg p-4">
        <SearchInput placeholder="جستجو در کسب‌وکارها..." />
      </div>
      <DataTable
        data={profiles}
        columns={columns}
        getRowKey={(row) => row.id}
      />
    </>
  );
}
