import clsx from 'clsx';
import Link from 'next/link';
import { HTMLAttributes, ReactNode } from 'react';

interface NavHubProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export default function Navigation({ className, children, ...rest }: NavHubProps) {
  return (
    <div className={clsx('text-white', className)}>
      <nav>
        <ul className="flex">
          <li>
            <Link href="/" className="block px-4 py-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block px-4 py-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block px-4 py-2">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
