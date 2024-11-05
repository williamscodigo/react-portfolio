import { useState, useEffect } from 'react';
import DarkModeIcon from '../assets/moon.svg';
import LightModeIcon from '../assets/sun.svg';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
  onClick={() => setIsDarkMode(!isDarkMode)}
  className="p-2 bg-gray-700 rounded group absolute top-20 right-4 z-50"
>
  <img
    src={isDarkMode ? LightModeIcon : DarkModeIcon}
    className="w-6 h-6 transition duration-300 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:invert"
    alt={isDarkMode ? 'Light Mode Icon' : 'Dark Mode Icon'}
  />
</button>
  );
}
