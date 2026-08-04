'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

type NavItem = {
  label: string;
  href: string;
};

const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60 && !isOpen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -24, opacity: 0 }}
      animate={{
        y: isHidden ? '-100%' : 0,
        opacity: isHidden ? 0 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(15,23,42,0.04)]"
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <div className="h-8 w-8 shrink-0 overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt="Code Craft Studio software house icon"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-slate-950">
            Code Craft <span className="text-blue-600">Studio</span>
          </span>
        </Link>

        <div className="ml-auto hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text transition-colors hover:bg-black/5 focus:outline-none md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200/60 bg-white px-4 py-4 shadow-sm md:hidden">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
