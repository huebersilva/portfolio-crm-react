import type { Content } from '../content/types';
import Reveal from './Reveal';
import Icon from './Icon';

export default function Work({ content }: { content: Content }) {
  const { work } = content;
  return (
    <section id="work" className="max-w-6xl mx-auto px-5 py-20 md:py-28 scroll-mt-16">
      <Reveal className="mb-10">
        <p className="font-mono text-xs tracking-widest uppercase text-cta mb-3">{work.eyebrow}</p>
        <h2 className="font-display font-700 text-3xl tracking-tight text-ink">{work.title}</h2>
        <p className="mt-3 text-sub max-w-2xl">{work.intro}</p>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {work.items.map((project, i) => (
          <Reveal
            key={project.title}
            as="article"
            delay={i * 0.05}
            className="hover-card rounded-2xl border border-line bg-card shadow-soft p-6 flex flex-col cursor-default"
          >
            <div className="icon-badge w-10 h-10 rounded-xl bg-cta/10 text-cta flex items-center justify-center mb-4">
              <Icon name={project.icon} />
            </div>
            <p className="font-mono text-[11px] text-muted mb-1">{project.tag}</p>
            <h3 className="font-display font-600 text-lg text-ink mb-2">{project.title}</h3>
            <p className="text-sm text-sub flex-1">{project.body}</p>
            <div className="mt-5 pt-4 border-t border-line">
              <p className="font-display font-700 text-2xl text-ink">{project.resultValue}</p>
              <p className="text-xs text-muted font-mono">{project.resultLabel}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
