'use client';
import { HTMLAttributes, ReactNode } from 'react';
import Navigation from './Navigation';
import { AnimatePresence, motion, scale } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface InteractHubProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export default function InteractHub({ className, children, ...rest }: InteractHubProps) {
  const pathname = usePathname();

  return (
    <motion.div
      className="inline-block rounded-3xl bg-black/50 p-2"
      layout
      transition={{ duration: 2, type: 'spring' }}
    >
      <motion.div layout="position">
        <Navigation></Navigation>
      </motion.div>
      <motion.div key={pathname} layout>
        {children}
      </motion.div>
    </motion.div>
  );
}
