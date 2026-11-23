import { useEffect, useRef, useState } from 'react';
import type { Stat } from '../content/types';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function StatCounter({ stat, locale }: { stat: Stat; locale: string }) {
  const [display, setDisplay] = useState('0');
  const [barIn, setBarIn] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefix = stat.prefix ?? '';
    const suffix = stat.suffix ?? '';
    const isDecimal = stat.count % 1 !== 0;
    const format = (v: number) =>
      prefix +
      (isDecimal
        ? v.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
        : Math.round(v).toLocaleString(locale)) +
      suffix;

    if (reduced) {
      setDisplay(format(stat.count));
      setBarIn(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          setBarIn(true);
          const dur = 1100;
          const t0 = performance.now();
          function tick(t: number) {
            const p = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(format(stat.count * eased));
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, stat, locale]);

  return (
    <div>
      <p ref={ref} className="font-display font-700 text-3xl md:text-4xl text-ink">
        {display}
      </p>
      <p className="mt-1 text-xs font-mono text-muted">{stat.label}</p>
      <div className={`count-bar mt-2 h-[2px] bg-cta/40 rounded-full${barIn ? ' is-in' : ''}`} />
    </div>
  );
}
