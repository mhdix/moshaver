Moshaver Admin Panel

ساختار پوشه:
adminPanel/
├── components/
├── pages/
└── routes.tsx

نحوه اتصال به Router اصلی:

import { adminRoutes } from './adminPanel/routes';

const router = createBrowserRouter([
  ...mainRoutes,
  ...adminRoutes,
]);

نیازمندی‌ها:
- React
- TypeScript
- Tailwind CSS
- react-router-dom
- فونت Vazirmatn در پروژه اصلی

این پوشه package.json یا تنظیمات پروژه جدا ندارد و برای ادغام مستقیم ساخته شده است.
