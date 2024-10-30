import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import '../App.css';

export default function Layout() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors" id='app-wrapper'>
      <Header />
      <main className="flex-grow p-4">
        <Outlet /> {/* Renders the nested route component */}
      </main>
      <Footer />
    </div>
  );
}
