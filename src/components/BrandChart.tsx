import { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  type ChartOptions,
} from 'chart.js';
import { useReducedMotion } from '../hooks/useReducedMotion';
import type { Content } from '../content/types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

// dataviz-validated 3-series categorical palette (blue/orange/aqua) — CVD-safe at this count
const COLORS = ['#2a78d6', '#eb6834', '#1baf7a'];
const VALUES = [64.6, 59.9, 31.4];
const LABELS = ['BR4Bet', 'Lotogreen', 'Goldebet'];

export default function BrandChart({ skills, locale }: { skills: Content['skills']; locale: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setArmed(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const fmt = (v: number) => `R$${v.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M`;

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y',
    layout: { padding: { left: 4 } },
    animation: reduced ? false : { duration: 900, easing: 'easeOutCubic' },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: (c) => fmt(c.raw as number) },
        backgroundColor: '#18181B',
        padding: 10,
        cornerRadius: 8,
        titleFont: { family: 'Roboto Mono' },
        bodyFont: { family: 'Roboto Mono' },
      },
    },
    scales: {
      x: {
        grid: { color: '#E4E4E7' },
        ticks: { font: { family: 'Roboto Mono', size: 11 }, callback: (v) => fmt(v as number) },
        border: { display: false },
      },
      y: {
        grid: { display: false },
        ticks: { font: { family: 'Roboto Mono', size: 12 }, color: '#18181B' },
        border: { display: false },
      },
    },
  };

  const data = {
    labels: LABELS,
    datasets: [{ data: VALUES, backgroundColor: COLORS, borderRadius: 6, maxBarThickness: 46 }],
  };

  return (
    <div ref={containerRef} className="flex-1 min-h-[220px]">
      {armed && <Bar data={data} options={options} aria-label={skills.chartAriaLabel} role="img" />}
      <table className="sr-only">
        <caption>{skills.chartTableCaption}</caption>
        <thead>
          <tr>
            <th>{skills.chartTableBrand}</th>
            <th>{skills.chartTableValue}</th>
          </tr>
        </thead>
        <tbody>
          {LABELS.map((l, i) => (
            <tr key={l}>
              <td>{l}</td>
              <td>{fmt(VALUES[i])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
