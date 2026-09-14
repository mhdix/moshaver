import { Link } from 'react-router-dom';

export default function NotFoundAdminPage() {
  return (
    <div className="grid min-h-[60vh] place-items-center text-center">
      <div>
        <div className="text-5xl font-black text-[#D4AF37]">404</div>
        <h1 className="mt-4 text-xl font-black">صفحه پیدا نشد</h1>
        <Link to="/admin/dashboard" className="mt-5 inline-block rounded-xl bg-neutral-950 px-5 py-2.5 text-sm font-bold text-white">بازگشت به داشبورد</Link>
      </div>
    </div>
  );
}
