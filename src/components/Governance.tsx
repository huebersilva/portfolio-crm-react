import type { Content } from '../content/types';
import Reveal from './Reveal';

export default function Governance({ content }: { content: Content }) {
  const { governance } = content;
  return (
    <section className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase text-white/50 mb-3">{governance.eyebrow}</p>
          <h2 className="font-display font-700 text-3xl tracking-tight mb-5">{governance.title}</h2>
          <p className="text-white/70 mb-4">{governance.p1}</p>
          <p className="text-white/70">{governance.p2}</p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <div className="flex items-center justify-between mb-5">
            <p className="font-display font-600">{governance.panelTitle}</p>
            <span className="font-mono text-xs text-white/50">{governance.releasedLabel}</span>
          </div>
          <ul className="space-y-4">
            {governance.toggles.map((toggle) => (
              <li key={toggle.label} className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm">{toggle.label}</p>
                  <p className="text-xs text-white/50">{toggle.sub}</p>
                </div>
                <div className={`switch${toggle.on ? ' on' : ''}`}>
                  <i />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
