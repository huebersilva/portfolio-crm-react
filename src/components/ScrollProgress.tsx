import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    update();
    document.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      document.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <div id="scrollbar" ref={barRef} />;
}
