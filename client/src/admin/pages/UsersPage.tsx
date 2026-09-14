import { Form, Link, useSearchParams } from "react-router-dom";
import {
  DataTable,
  PageHeader,
  Pagination,
  SearchInput,
  StatusBadge,
  type TableColumn,
} from "../components";

interface UserRow {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: "کاربر" | "مدیر";
  status: "فعال" | "غیرفعال";
  createdAt: string;
}

const users: UserRow[] = [
  {
    id: 1,
    name: "علی رضایی",
    email: "ali@example.com",
    phone: "09121234567",
    role: "کاربر",
    status: "فعال",
    createdAt: "۱۴۰۵/۰۶/۱۸",
  },
  {
    id: 2,
    name: "مینا محمدی",
    email: "mina@example.com",
    phone: "09129876543",
    role: "کاربر",
    status: "فعال",
    createdAt: "۱۴۰۵/۰۶/۱۵",
  },
  {
    id: 3,
    name: "رضا احمدی",
    email: "reza@example.com",
    phone: "09351234567",
    role: "کاربر",
    status: "غیرفعال",
    createdAt: "۱۴۰۵/۰۶/۱۰",
  },
  {
    id: 4,
    name: "سارا کریمی",
    email: "sara@example.com",
    phone: "09151112233",
    role: "مدیر",
    status: "فعال",
    createdAt: "۱۴۰۵/۰۶/۰۷",
  },
];

export default function UsersPage() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();
  // REACT LEARNING OPPORTUNITY:
  // اگر لیست کاربران بزرگ و فیلتر/مرتب‌سازی سنگین شد، بررسی کن آیا useMemo ارزش دارد یا نه.
  // الان داده کم است و عمداً useMemo اضافه نشده است.
  const filteredUsers = query
    ? users.filter((user) =>
        `${user.name} ${user.email} ${user.phone}`
          .toLowerCase()
          .includes(query),
      )
    : users;

  const columns: TableColumn<UserRow>[] = [
    {
      key: "name",
      title: "نام",
      render: (user) => <span className="font-bold">{user.name}</span>,
    },
    { key: "email", title: "ایمیل", render: (user) => user.email },
    { key: "phone", title: "شماره تماس", render: (user) => user.phone },
    { key: "role", title: "نقش", render: (user) => user.role },
    {
      key: "status",
      title: "وضعیت",
      render: (user) => <StatusBadge status={user.status} />,
    },
    {
      key: "createdAt",
      title: "تاریخ ثبت‌نام",
      render: (user) => user.createdAt,
    },
    {
      key: "actions",
      title: "عملیات",
      render: (user) => (
        <div className="flex flex-wrap gap-2">
          <Link
            to={`/admin/users/${user.id}`}
            className="rounded-lg bg-neutral-950 px-3 py-2 text-xs font-bold text-white"
          >
            مشاهده
          </Link>
          <button className="rounded-lg border border-line px-3 py-2 text-xs font-bold text-neutral-700">
            ویرایش
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        title="کاربران"
        description="مدیریت کاربران ثبت‌شده در سامانه"
      />

      <div className="mb-4 rounded-2xl border border-line bg-bg p-4">
        <form method="get" className="flex flex-col gap-3 sm:flex-row">
          <SearchInput
            defaultValue={query}
            placeholder="نام، ایمیل یا شماره تماس..."
          />
          <button className="h-11 rounded-xl bg-neutral-950 px-5 text-sm font-bold text-white">
            جستجو
          </button>
          {query ? (
            <Link
              to="/admin/users"
              className="grid h-11 place-items-center rounded-xl border border-line px-5 text-sm font-bold text-neutral-600"
            >
              پاک کردن
            </Link>
          ) : null}
        </form>
      </div>

      <DataTable
        data={filteredUsers}
        columns={columns}
        getRowKey={(user) => user.id}
      />
      <Pagination />
    </>
  );
}
