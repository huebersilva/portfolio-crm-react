import type { Content } from '../content/types';
import Reveal from './Reveal';
import BrandChart from './BrandChart';

export default function Skills({ content, locale }: { content: Content; locale: string }) {
  const { skills } = content;
  return (
    <section id="skills" className="max-w-6xl mx-auto px-5 py-20 md:py-28 scroll-mt-16">
      <Reveal className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="font-mono text-xs tracking-widest uppercase text-cta mb-3">{skills.eyebrow}</p>
          <h2 className="font-display font-700 text-3xl tracking-tight text-ink mb-8">{skills.title}</h2>
          <ul className="space-y-5">
            {skills.items.map((item, i) => (
              <li
                key={item.title}
                className={`border-t border-line pt-4${i === skills.items.length - 1 ? ' border-b pb-4' : ''}`}
              >
                <p className="font-medium text-ink">{item.title}</p>
                <p className="text-sm text-sub mt-1">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-7">
          <div className="rounded-2xl border border-line bg-card shadow-soft p-6 md:p-8 h-full flex flex-col">
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="font-display font-600 text-ink">{skills.chartTitle}</h3>
              <span className="font-mono text-xs text-muted">{skills.chartPeriod}</span>
            </div>
            <p className="text-sm text-muted mb-4">{skills.chartCaption}</p>
            <BrandChart skills={skills} locale={locale} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
