import type { ReactNode } from "react";

export interface TableColumn<T> {
  key: string;
  title: string;
  render: (row: T) => ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  getRowKey: (row: T) => string | number;
  emptyText?: string;
}

export default function DataTable<T>({
  data,
  columns,
  getRowKey,
  emptyText = "اطلاعاتی برای نمایش وجود ندارد.",
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center text-sm text-neutral-500">
        {emptyText}
      </div>
    );
  }

  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl border border-line bg-bg md:block">
        <table className="w-full text-right text-sm">
          <thead className="bg-line text-xs text-text/80">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-4 py-3 font-bold ${column.className ?? ""}`}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {data.map((row) => (
              <tr
                key={getRowKey(row)}
                className="transition hover:bg-line/50"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`px-4 py-4 align-middle ${column.className ?? ""}`}
                  >
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {data.map((row) => (
          <article
            key={getRowKey(row)}
            className="rounded-2xl border border-line bg-bg p-4"
          >
            <div className="space-y-3">
              {columns.map((column) => (
                <div
                  key={column.key}
                  className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-xs font-bold text-neutral-500">
                    {column.title}
                  </span>
                  <div className="text-left text-sm text-text">
                    {column.render(row)}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
