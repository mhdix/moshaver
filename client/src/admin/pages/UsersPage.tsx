import { Link, useSearchParams } from "react-router-dom";

import {
  DataTable,
  PageHeader,
  Pagination,
  SearchInput,
  StatusBadge,
  type TableColumn,
} from "../components";

import { useUsers } from "../../context/usersContext";

import type { User } from "../../types";

export default function UsersPage() {
  const { users, loading } = useUsers();

  const [searchParams] = useSearchParams();

  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  const filteredUsers = query
    ? users.filter((user) =>
        `${user.name} ${user.email} ${user.phoneNumber}`
          .toLowerCase()
          .includes(query),
      )
    : users;

  const columns: TableColumn<User>[] = [
    {
      key: "name",
      title: "نام",
      render: (user) => <span className="font-bold">{user.name}</span>,
    },

    {
      key: "email",
      title: "ایمیل",
      render: (user) => user.email,
    },

    {
      key: "phoneNumber",
      title: "شماره تماس",
      render: (user) => user.phoneNumber,
    },

    {
      key: "role",
      title: "نقش",
      render: (user) => user.role,
    },

    {
      key: "status",
      title: "وضعیت",
      render: (user) => (
        <StatusBadge status={user.status === "active" ? "فعال" : "غیرفعال"} />
      ),
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
            to={`/admin/users/${user._id}`}
            className="rounded-lg bg-line px-3 py-2 text-xs font-bold text-text"
          >
            مشاهده
          </Link>

          <button
            type="button"
            className="rounded-lg border border-line bg-primary px-3 py-2 text-xs font-bold text-texts"
          >
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

          <button
            type="submit"
            className="h-11 rounded-xl border border-line bg-bg-soft px-5 text-sm font-bold text-white"
          >
            جستجو
          </button>

          {query && (
            <Link
              to="/admin/users"
              className="grid h-11 place-items-center rounded-xl border border-line px-5 text-sm font-bold text-neutral-600"
            >
              پاک کردن
            </Link>
          )}
        </form>
      </div>

      {loading ? (
        <div className="rounded-2xl border border-line bg-bg p-6 text-center">
          در حال دریافت کاربران...
        </div>
      ) : (
        <>
          <DataTable
            data={filteredUsers}
            columns={columns}
            getRowKey={(user) => user._id || ""}
          />

          <Pagination />
        </>
      )}
    </>
  );
}
