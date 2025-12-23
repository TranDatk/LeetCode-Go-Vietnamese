import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">404</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        Không tìm thấy trang
      </p>
      <p className="text-zinc-500 dark:text-zinc-500">
        Trang bạn truy cập không tồn tại
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        <Home className="w-4 h-4" />
          Quay về trang chủ
      </Link>
    </div>
  );
}

