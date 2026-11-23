import type { Content } from '../content/types';
import Reveal from './Reveal';

export default function About({ content }: { content: Content }) {
  const { about } = content;
  return (
    <section id="about" className="bg-ink text-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-5 py-20 md:py-28">
        <Reveal as="div">
          <p className="font-mono text-xs tracking-widest uppercase text-white/50 mb-5">{about.eyebrow}</p>
        </Reveal>
        <Reveal as="div" delay={0.05}>
          <p className="font-display font-500 text-2xl sm:text-3xl md:text-[34px] leading-snug tracking-tight">
            {about.pre}
            <span className="text-cta font-600">{about.highlight1}</span>
            {about.mid}
            <span className="text-cta font-600">{about.highlight2}</span>
            {about.post}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
