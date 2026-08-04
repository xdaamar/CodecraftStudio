'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { WA_LINK } from '@/lib/constants';

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
    <header
      className={`sticky top-0 z-50 w-full border-b border-border-light bg-surface/90 backdrop-blur-md shadow-md shadow-black/5 transition-transform duration-300 ease-in-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
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
          <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXN5aDNtempqeXUzMWRhZnNsbzdvYXZ5MjgxcjI3aWFscjRtejJveSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3MLdIYIHup9Q2xG/giphy.gif"
              alt="Code Craft Studio logo animation"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-text">
            Code Craft Studio
          </span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-text/80 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-green-500 px-4 text-xs font-semibold text-white shadow-xs transition hover:bg-green-600"
          >
            <FaWhatsapp className="text-sm" />
            <span>Contact via Whatsapp</span>
          </a>
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
        <div className="border-t border-border-light bg-surface px-4 py-4 shadow-sm md:hidden">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-text transition-colors hover:bg-black/5 hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 pt-2 border-t border-border-light">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-xs transition hover:bg-green-600"
              >
                <FaWhatsapp className="text-base" />
                <span>Contact via Whatsapp</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
