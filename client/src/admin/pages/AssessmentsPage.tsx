import { Link } from 'react-router-dom';
import { DataTable, PageHeader, StatusBadge, type TableColumn } from '../components';

interface AssessmentRow {
  id: number;
  user: string;
  score: number;
  revenue: string;
  expense: string;
  profit: string;
  margin: string;
  status: string;
  date: string;
}

const assessments: AssessmentRow[] = [
  { id: 1, user: 'علی رضایی', score: 82, revenue: '۳۲۰ م', expense: '۲۴۰ م', profit: '۸۰ م', margin: '۲۵٪', status: 'عالی', date: '۱۴۰۵/۰۶/۱۸' },
  { id: 2, user: 'شرکت آریا', score: 71, revenue: '۵۴۰ م', expense: '۴۳۰ م', profit: '۱۱۰ م', margin: '۲۰٪', status: 'مناسب', date: '۱۴۰۵/۰۶/۱۶' },
  { id: 3, user: 'فروشگاه سپهر', score: 49, revenue: '۲۸۰ م', expense: '۲۵۵ م', profit: '۲۵ م', margin: '۹٪', status: 'نیازمند بررسی', date: '۱۴۰۵/۰۶/۱۴' },
];

export default function AssessmentsPage() {
  const columns: TableColumn<AssessmentRow>[] = [
    { key: 'user', title: 'کاربر', render: (row) => <span className="font-bold">{row.user}</span> },
    { key: 'score', title: 'امتیاز مالی', render: (row) => `${row.score}/100` },
    { key: 'revenue', title: 'درآمد', render: (row) => row.revenue },
    { key: 'expense', title: 'هزینه', render: (row) => row.expense },
    { key: 'profit', title: 'سود', render: (row) => row.profit },
    { key: 'margin', title: 'حاشیه سود', render: (row) => row.margin },
    { key: 'status', title: 'وضعیت', render: (row) => <StatusBadge status={row.status} /> },
    { key: 'action', title: 'عملیات', render: (row) => <Link to={`/admin/assessments/${row.id}`} className="text-xs font-bold underline decoration-[#D4AF37] decoration-2 underline-offset-4">جزئیات</Link> },
  ];

  return (
    <>
      <PageHeader title="تحلیل‌های مالی" description="بررسی نتایج تحلیل مالی مشتریان" />
      <DataTable data={assessments} columns={columns} getRowKey={(row) => row.id} />
    </>
  );
}
