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
      <div className="flex h-dvh items-center justify-center p-2">
        <VantaNet></VantaNet>
        <div className="liquidGlass-wrapper dock flex-col">
          <nav>
            <ul className="flex">
              <li>
                <Link href="/" className="block px-4 py-2">
                  Home
                </Link>
              </li>
              <li className="m-auto">
                <div className="flex gap-2">
                  <a
                    href="https://github.com/c2eriku"
                    className="flex rounded-xl bg-[#181717] p-1.5 text-white"
                  >
                    <FaGithubAlt size={24} />
                  </a>
                  <a
                    href={`mailto:${name}@${domain}`}
                    className="flex rounded-xl bg-[#b3281e] p-1.5 font-bold text-white"
                  >
                    <IoMail size={24} />
                  </a>
                  <LightDarkModeSwitch></LightDarkModeSwitch>
                </div>
              </li>
            </ul>
          </nav>
          <div className="dock">{children}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}
