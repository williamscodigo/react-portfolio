import React from 'react';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="p-4 bg-gray-200 dark:bg-gray-800 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <Navigation />
      <ThemeToggle />
    </header>
  );
}
