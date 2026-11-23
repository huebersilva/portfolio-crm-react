import type { Content } from '../content/types';
import StatCounter from './StatCounter';
import Reveal from './Reveal';

export default function StatsStrip({ content, locale }: { content: Content; locale: string }) {
  return (
    <section className="border-y border-line bg-card">
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {content.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.05}>
            <StatCounter stat={stat} locale={locale} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
