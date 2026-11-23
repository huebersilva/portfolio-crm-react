import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}

/**
 * One-time scroll reveal (fade + rise), never scroll-linked and never repeats.
 * Fails open: if IntersectionObserver or JS somehow never runs, index.css's
 * `.js-ready .reveal` scoping keeps content plainly visible by default.
 */
export default function Reveal({ children, as = 'div', className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isIn, setIsIn] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setIsIn(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setIsIn(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const Tag = as;
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}s` } : undefined;

  return (
    <Tag ref={ref} className={`reveal${isIn ? ' is-in' : ''} ${className}`} style={style}>
      {children}
    </Tag>
  );
}
