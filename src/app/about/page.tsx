'use client';

import styles from './about.module.css';
import VantaBackground from '@/components/VantaBackground';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithubAlt } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

export default function About() {
  const [hovered, setHovered] = useState(false);

  const name = 'eriku';
  const domain = 'gmail.com';

  return (
    <>
      <VantaBackground></VantaBackground>
      <div className="flex h-dvh w-dvw p-2 sm:p-16">
        <div className="flex-1">
          <div className="border-light relative h-full border-2 p-12">
            <div className="inline-flex flex-wrap justify-center">
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
                >
                  <Image
                    src="https://avatars.githubusercontent.com/u/92637603?v=4"
                    alt="Profile picture"
                    className="rounded-full p-4"
                    width={250}
                    height={250}
                  />
                </motion.div>
              </div>

              <div className="mt-6 flex flex-col text-center sm:ml-8 sm:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight">c2eriku</h1>
                <h2 className="text-2xl font-bold">Full Stack Developer</h2>
                <div className="mt-2 flex gap-2">
                  <a
                    href="https://github.com/c2eriku"
                    className="flex rounded-xl border-1 border-[#181717] px-2 py-1 text-[#181717] hover:bg-[#0969DA]"
                  >
                    <FaGithubAlt size={24} />
                    <span className="ml-2">GitHub</span>
                  </a>
                  <a
                    href={`mailto:${name}@${domain}`}
                    className="flex rounded-xl border-1 border-[#D93025] px-2 py-1 text-[#D93025] hover:bg-[#B1271C]"
                  >
                    <IoMail size={24} />
                    <span className="ml-2">{`${name}@${domain}`}</span>
                  </a>
                </div>
              </div>
            </div>

            <nav className="absolute right-0 bottom-0 m-6 w-fit tracking-wide">
              <ul className="flex flex-col text-right text-4xl font-extrabold">
                <motion.li
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.1 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href="/about" className="block px-4 py-2">
                    About
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.1 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href="/contact" className="block px-4 py-2">
                    Contact
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
