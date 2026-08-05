'use client';

import { useEffect, useState } from 'react';

export function DesktopCursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop screens to save performance
    if (window.innerWidth < 1024) return;

    let rafId: number;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const animate = () => {
      // Smooth spring-like interpolation
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      setPosition({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 hidden h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500 to-violet-500 opacity-0 blur-3xl transition-opacity duration-500 lg:block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        opacity: isVisible ? 0.08 : 0,
      }}
      aria-hidden="true"
    />
  );
}
