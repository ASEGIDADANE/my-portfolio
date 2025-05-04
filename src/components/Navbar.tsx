import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const Navbar = ({ activeSection, onSectionChange, isDarkMode, onThemeToggle }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          onSectionChange(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, onSectionChange]);

  const handleClick = (section: string) => {
    setIsOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors duration-300 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-300">
              Asegid Adane
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700'
                    : 'text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-900 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
              aria-label="Toggle theme"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
              aria-label="Toggle theme"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 border-b border-gray-100 dark:border-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700'
                    : 'text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-900 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 