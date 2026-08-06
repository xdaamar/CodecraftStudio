'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay mount by 2000ms
    const mountTimer = setTimeout(() => {
      setIsMounted(true);
    }, 2000);

    return () => clearTimeout(mountTimer);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial scroll position after mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-5 z-[100] flex flex-col items-end"
        >
          <a
            href="https://wa.me/6287872926689"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            aria-label="Hubungi Code Craft Studio melalui WhatsApp"
          >
            {/* Tooltip untuk Desktop */}
            <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-md lg:block opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Konsultasi Gratis
              {/* Tooltip Arrow */}
              <span className="absolute left-full top-1/2 -mt-1 border-4 border-transparent border-l-slate-900" />
            </span>
            <FaWhatsapp className="h-7 w-7" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
