'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SPRING_CONFIG = { damping: 25, stiffness: 250, mass: 0.5 };

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Raw cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring-smoothed for the outer ring
  const ringX = useSpring(cursorX, SPRING_CONFIG);
  const ringY = useSpring(cursorY, SPRING_CONFIG);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible],
  );

  const handleMouseLeave = useCallback(() => setIsVisible(false), []);
  const handleMouseEnter = useCallback(() => setIsVisible(true), []);

  useEffect(() => {
    // Detect touch device
    const hasTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    if (hasTouch) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    // Hide default cursor globally
    document.documentElement.style.cursor = 'none';

    // Attach mouse listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Interactive-element hover detection
    const handleOverInteractive = () => setIsHovering(true);
    const handleOutInteractive = () => setIsHovering(false);

    const selector = 'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

    const observe = () => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.style.cursor = 'none';
        el.addEventListener('mouseenter', handleOverInteractive);
        el.addEventListener('mouseleave', handleOutInteractive);
      });
    };

    observe();

    // Re-observe on DOM mutations (SPA route changes, dynamic content)
    const observer = new MutationObserver(observe);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.style.cursor = '';
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();

      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.style.cursor = '';
        el.removeEventListener('mouseenter', handleOverInteractive);
        el.removeEventListener('mouseleave', handleOutInteractive);
      });
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 48 : 20,
          height: isHovering ? 48 : 20,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovering ? 'rgba(255,42,133,0.8)' : 'rgba(0,240,255,0.9)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <span
          className="block w-full h-full rounded-full border border-[#00F0FF]"
          style={{ borderWidth: isHovering ? 1.5 : 1 }}
        />
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#FF2A85]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 0 : 4,
          height: isHovering ? 0 : 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      />
    </>
  );
}
