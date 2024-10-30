import React from 'react';

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-200 dark:bg-gray-800 text-center">
      <p>&copy; {new Date().getFullYear()} My Portfolio</p>
    </footer>
  );
}
