import type { Content } from '../content/types';
import Reveal from './Reveal';

export default function Experience({ content }: { content: Content }) {
  const { experience } = content;
  return (
    <section id="experience" className="max-w-4xl mx-auto px-5 py-20 md:py-28 scroll-mt-16">
      <Reveal className="mb-10">
        <p className="font-mono text-xs tracking-widest uppercase text-cta mb-3">{experience.eyebrow}</p>
        <h2 className="font-display font-700 text-3xl tracking-tight text-ink">{experience.title}</h2>
        <p className="mt-3 text-sub max-w-2xl">{experience.intro}</p>
      </Reveal>
      <ul className="space-y-0">
        {experience.items.map((item, i) => (
          <Reveal
            key={item.company}
            as="li"
            delay={i * 0.05}
            className={`border-t border-line py-5 grid sm:grid-cols-[1fr_auto] gap-x-6 gap-y-1${
              i === experience.items.length - 1 ? ' border-b' : ''
            }`}
          >
            <div>
              <p className="font-semibold text-ink">
                {item.company} <span className="font-normal text-sub">— {item.role}</span>
                {item.badge && (
                  <span className="ml-2 align-middle inline-flex items-center text-[11px] font-mono px-2 py-0.5 rounded-full bg-cta/10 text-cta">
                    {item.badge}
                  </span>
                )}
              </p>
              <p className="text-sm text-sub mt-1">{item.body}</p>
            </div>
            <p className="font-mono text-xs text-muted whitespace-nowrap sm:text-right">
              {item.date}
              <br />
              {item.location}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
