import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="p-4 text-white bg-gray-900 dark:bg-gray-800 flex justify-between items-center">
      <h6 className="text-2xl font-bold">My Portfolio</h6>
      <Navigation />
    </header>
  );
}
