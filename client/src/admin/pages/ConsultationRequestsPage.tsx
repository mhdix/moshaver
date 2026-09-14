import { Link, useParams } from "react-router-dom";
import {
  DataTable,
  PageHeader,
  StatusBadge,
  type TableColumn,
} from "../components";

interface RequestRow {
  id: number;
  customer: string;
  subject: string;
  phone: string;
  status: string;
  date: string;
}

const requests: RequestRow[] = [
  {
    id: 101,
    customer: "شرکت آریا",
    subject: "بهبود نقدینگی",
    phone: "02188770000",
    status: "در انتظار بررسی",
    date: "۱۴۰۵/۰۶/۱۹",
  },
  {
    id: 102,
    customer: "تولیدی پارس",
    subject: "کاهش هزینه تولید",
    phone: "09121230000",
    status: "در حال پیگیری",
    date: "۱۴۰۵/۰۶/۱۸",
  },
  {
    id: 103,
    customer: "فروشگاه سپهر",
    subject: "تحلیل سودآوری",
    phone: "09151110000",
    status: "تماس گرفته شد",
    date: "۱۴۰۵/۰۶/۱۷",
  },
  {
    id: 104,
    customer: "خدمات آریا",
    subject: "طراحی داشبورد مدیریت",
    phone: "09351230000",
    status: "تکمیل شد",
    date: "۱۴۰۵/۰۶/۱۵",
  },
];

export default function ConsultationRequestsDetailsPage() {
  const userId = useParams<{ id: string }>().id;

  const columns: TableColumn<RequestRow>[] = [
    {
      key: "customer",
      title: "مشتری",
      render: (row) => <span className="font-bold">{row.customer}</span>,
    },
    { key: "subject", title: "موضوع", render: (row) => row.subject },
    { key: "phone", title: "تماس", render: (row) => row.phone },
    {
      key: "status",
      title: "وضعیت",
      render: (row) => <StatusBadge status={row.status} />,
    },
    { key: "date", title: "تاریخ", render: (row) => row.date },
    {
      key: "action",
      title: "عملیات",
      render: (row) => (
        <Link
          to={`/admin/consultation-requests/${row.id}`}
          className="rounded-lg bg-line px-3 py-2 text-xs font-bold text-white"
        >
          بررسی درخواست
        </Link>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        title="درخواست‌های مشاوره"
        description="مدیریت جریان پیگیری درخواست‌های مشتریان"
      />
      {userId}fds
      <DataTable
        data={requests}
        columns={columns}
        getRowKey={(row) => row.id}
      />
    </>
  );
}
