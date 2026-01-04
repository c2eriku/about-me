'use client';

import './pages.css';
import Link from 'next/link';
import { FaGithubAlt } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import LightDarkModeSwitch from '@/components/LightDarkModeSwitch';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import VantaNet from '@/components/Vanta/VantaNet';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const name = 'eriku';
  const domain = 'gmail.com';

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
      <VantaNet></VantaNet>
      <div className="h-dvh">
        <nav>
          <ul className="flex items-center">
            <li>
              <Link href="/" className="block px-4 py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/experience" className="block px-4 py-2">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/techstack" className="block px-4 py-2">
                Tech-Stack
              </Link>
            </li>
            <li className="ml-auto p-2">
              <div className="flex h-full gap-2 align-middle">
                <a
                  href="https://github.com/c2eriku"
                  className="flex rounded-full bg-[#181717] p-1.5 text-white sm:px-3"
                >
                  <FaGithubAlt size={24} className="sm:mr-1" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href={`mailto:${name}@${domain}`}
                  className="flex rounded-full bg-[#b3281e] p-1.5 font-bold text-white sm:px-3"
                >
                  <IoMail size={24} className="sm:mr-1" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>
            </li>
          </ul>
          {/* <LightDarkModeSwitch></LightDarkModeSwitch> */}
        </nav>
        <div className="flex justify-center p-8">
          <div className="flex-col">
            <div className="dock max-w-7xl">{children}</div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
