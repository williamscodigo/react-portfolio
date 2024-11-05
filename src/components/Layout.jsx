import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-100 text-black dark:bg-gray-900 dark:text-white transition-colors flex flex-col relative">
      <Header />
      <ThemeToggle />
      <main className="flex-grow container mx-auto px-4">
        <Outlet /> {/* Renders the nested route component */}
      </main>
      <Footer />
    </div>
  );
}
