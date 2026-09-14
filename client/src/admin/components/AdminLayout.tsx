import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AdminLayout() {
  return (
    <div dir="rtl" className="min-h-screen bg-bg font-['Vazirmatn'] text-text">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Topbar />
          <main className="p-4 md:p-6 xl:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
