'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion, useScroll, useMotionValueEvent } from 'framer-motion';
import { slideUp } from '@/lib/motion';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > previous && latest > 60 && !isOpen) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    
    setIsScrolled(latest > 40);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{
          y: isHidden ? '-150%' : 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className={`sticky top-0 z-50 w-full border-b border-slate-200/60 shadow-[0_4px_30px_rgba(15,23,42,0.04)] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-sm'
            : 'bg-white/70 backdrop-blur-md'
        }`}
      >
        {/* Desktop Blue Slanted Shape */}
        <div 
          className="absolute right-0 top-[-8px] bottom-[-8px] w-[55vw] hidden md:block bg-blue-600 shadow-[-20px_0_40px_rgba(0,0,0,0.15)] pointer-events-none transition-all duration-300"
          style={{ clipPath: 'polygon(3rem 0, 100% 0, 100% 100%, 0 100%)' }}
        />
        <nav
          className="relative z-10 mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
          >
            <div className="h-8 w-auto shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/navbar_logo.webp"
                alt="Code Craft Studio software house icon"
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="font-heading text-lg font-bold tracking-tight text-slate-950">
              Code Craft <span className="text-blue-600">Studio</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="ml-auto hidden h-full md:flex md:items-center md:gap-8 px-8">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-blue-50 transition-colors hover:text-white relative z-10"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-text transition-colors hover:bg-black/5 focus:outline-none md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile bottom sheet overlay + drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            {/* Bottom sheet drawer */}
            <motion.div
              key="drawer"
              variants={shouldReduceMotion ? undefined : slideUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-x-0 bottom-0 z-50 rounded-t-[2rem] border-t border-slate-200/70 bg-white/95 shadow-[0_-8px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden"
            >
              {/* Drag indicator pill */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="h-1 w-10 rounded-full bg-slate-200" />
              </div>

              {/* Nav links */}
              <nav
                aria-label="Mobile navigation"
                className="px-4 pb-8 pt-2"
              >
                <ul className="flex flex-col divide-y divide-slate-100">
                  {NAV_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center py-3.5 text-base font-medium text-slate-700 transition-colors hover:text-slate-950 active:text-blue-600"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
