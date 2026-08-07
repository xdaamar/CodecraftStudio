'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { featuredPosts } from '@/content/blog';

export function BlogHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (featuredPosts.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
  };

  if (featuredPosts.length === 0) return null;

  const currentPost = featuredPosts[currentIndex];
  
  const formattedDate = new Date(currentPost.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="relative w-full h-[300px] sm:h-[460px] overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={currentPost.cover}
            alt={currentPost.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end p-6 sm:px-6 sm:pb-12 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
                {formattedDate}
              </span>
            </div>
            
            <h2 className="mt-3 font-heading text-2xl font-bold leading-snug tracking-tight text-white line-clamp-2 sm:text-4xl sm:leading-tight">
              {currentPost.title}
            </h2>
            
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-300 sm:text-lg">
              {currentPost.description}
            </p>

            <div className="mt-6">
              <Link
                href={`/blog/${currentPost.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition-colors hover:text-blue-300"
              >
                <span>Baca Artikel Selengkapnya</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {featuredPosts.length > 1 && (
        <div className="absolute bottom-6 right-6 hidden items-center gap-2 sm:flex lg:bottom-10 lg:right-10 z-20">
          <button
            type="button"
            onClick={handlePrevious}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            aria-label="Previous article"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            aria-label="Next article"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Mobile Swipe Indicators */}
      {featuredPosts.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 sm:hidden z-20">
          {featuredPosts.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === currentIndex ? 'w-6 bg-blue-600' : 'w-1.5 bg-white/50'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
