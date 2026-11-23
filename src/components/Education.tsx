import type { Content } from '../content/types';
import Reveal from './Reveal';
import Icon from './Icon';

export default function Education({ content }: { content: Content }) {
  const { education } = content;
  return (
    <section id="education" className="max-w-6xl mx-auto px-5 py-20 md:py-28 scroll-mt-16">
      <Reveal className="mb-10">
        <p className="font-mono text-xs tracking-widest uppercase text-cta mb-3">{education.eyebrow}</p>
        <h2 className="font-display font-700 text-3xl tracking-tight text-ink">{education.title}</h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {education.items.map((item, i) => (
          <Reveal
            key={item.title}
            as="article"
            delay={i * 0.05}
            className="hover-card rounded-2xl border border-line bg-card shadow-soft p-6"
          >
            <div className="icon-badge w-10 h-10 rounded-xl bg-cta/10 text-cta flex items-center justify-center mb-4">
              <Icon name={item.icon} />
            </div>
            <h3 className="font-display font-600 text-ink mb-1">{item.title}</h3>
            <p className="text-sm text-sub mb-4">{item.body}</p>
            <span className="inline-flex items-center text-xs font-mono px-3 py-1 rounded-full bg-page border border-line text-muted">
              {item.badge}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
