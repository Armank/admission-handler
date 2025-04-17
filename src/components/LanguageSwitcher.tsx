'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded ${
          language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className={`px-2 py-1 rounded ${
          language === 'ru' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLanguage('kz')}
        className={`px-2 py-1 rounded ${
          language === 'kz' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        KZ
      </button>
    </div>
  );
} 