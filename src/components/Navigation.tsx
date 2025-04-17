'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex space-x-4">
      <Link
        href="/"
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          isActive('/')
            ? 'bg-blue-100 text-blue-800'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        {t('common.dashboard')}
      </Link>
      <Link
        href="/applications"
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          isActive('/applications')
            ? 'bg-blue-100 text-blue-800'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        {t('common.applications')}
      </Link>
    </nav>
  );
} 