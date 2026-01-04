'use client';

import styles from './home.module.css';
import VantaBirds from '@/components/Vanta/VantaBirds';
import VantaTrunk from '@/components/Vanta/VantaTrunk';
import LightDarkModeSwitch from '@/components/LightDarkModeSwitch';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaGithubAlt } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { ThemeProvider, useTheme } from 'next-themes';
import P5Wave from '@/components/P5Wave';
import VantaFog from '@/components/Vanta/VantaFog';

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const name = 'eriku';
  const domain = 'gmail.com';

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
        {/* <VantaTrunk></VantaTrunk> */}
        {/* <VantaFog></VantaFog> */}
        {/* <VantaBirds></VantaBirds> */}
        <P5Wave></P5Wave>
        <div className="fixed -z-50 hidden h-dvh w-dvw p-2 sm:block sm:p-8">
          <div className="border-light h-full w-full border-2"></div>
        </div>

        <div className="flex h-dvh w-dvw flex-col overflow-hidden p-2 sm:p-16">
          <div className="h-full p-2 sm:p-16">
            <div className="mt-12 inline-flex flex-wrap justify-center sm:mt-0">
              <div className="relative">
                <motion.div
                  className={styles['gradient-outline']}
                  animate={{ rotate: hovered ? 625 : 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  onHoverStart={() => setHovered(true)}
                  onHoverEnd={() => setHovered(false)}
                  whileHover={{ scale: 1.08, transition: { duration: 0.5 } }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-square w-42 sm:w-62"
                >
                  <Image
                    src="https://avatars.githubusercontent.com/u/92637603?v=4"
                    alt="Profile picture"
                    className="rounded-full p-4"
                    fill
                  />
                </motion.div>
              </div>

              <div className="relative mt-2 flex flex-col text-center sm:mt-6 sm:ml-8 sm:text-left">
                <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold">Hi! I&apos;m Eric</h1>
                <h2 className="text-2xl font-bold">Full Stack Developer</h2>
                <div className="my-2 flex justify-center gap-2 sm:justify-start">
                  <a
                    href="https://github.com/c2eriku"
                    className="flex rounded-xl border-2 border-[#181717] px-2 py-1 font-bold text-[#181717] hover:bg-[#096bda90]"
                  >
                    <FaGithubAlt size={24} />
                    <span className="ml-2">GitHub</span>
                  </a>
                  <a
                    href={`mailto:${name}@${domain}`}
                    className="flex rounded-xl border-2 border-[#b3281e] px-2 py-1 font-bold text-[#b3281e] hover:bg-[#d4d4d490]"
                  >
                    <IoMail size={24} />
                    <span className="ml-2">{`${name}@${domain}`}</span>
                  </a>
                </div>
                <p className="inline-block max-w-xs">
                  <span className="text-shadow-lg">
                    I am a full stack developer with 3+ years experience, passionate about frontend
                    development, and like cats. 😺
                  </span>
                </p>
              </div>
            </div>
          </div>
          <nav className="mt-auto w-full tracking-wide">
            <ul
              className={`${styles.navList} flex justify-center p-[3em] text-right font-extrabold sm:gap-4 sm:p-8 md:flex-col md:text-right md:text-4xl`}
            >
              <Link href="/experience" className="block text-nowrap">
                Experience
              </Link>
              <Link href="/techstack" className="block text-nowrap">
                Tech-Stack & Side
              </Link>
            </ul>
          </nav>
        </div>
      </ThemeProvider>
    </>
  );
}
