'use client';

import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { IoMoon } from 'react-icons/io5';
import { PiSunFill } from 'react-icons/pi';

export default function LightDarkModeSwitch() {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <div className="absolute top-0 right-0 m-4">
      <button
        onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
        className={clsx(
          'relative inline-flex h-8 w-15 cursor-pointer items-center rounded-full focus:outline-none',
          {
            'bg-gray-700': isDarkMode,
            'bg-yellow-400': !isDarkMode,
          },
        )}
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          className={clsx(
            'flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-700 transition duration-200 ease-in-out',
            {
              'translate-x-8': isDarkMode,
              'translate-x-1': !isDarkMode,
            },
          )}
        >
          {isDarkMode ? <IoMoon size={18} /> : <PiSunFill size={18} />}
        </span>
      </button>
    </div>
  );
}
