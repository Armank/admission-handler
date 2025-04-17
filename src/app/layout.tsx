import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../contexts/LanguageContext";
import LanguageSwitcher from '../components/LanguageSwitcher';
import Navigation from '../components/Navigation';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'Arial'],
  preload: false,
});

export const metadata: Metadata = {
  title: "Admission App",
  description: "Admission Application Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex items-center space-x-8">
                    <div className="flex-shrink-0">
                      <h1 className="text-xl font-bold text-gray-900">Admission Handler</h1>
                    </div>
                    <Navigation />
                  </div>
                  <div className="flex items-center">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </nav>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
