import type { Content } from '../content/types';

export default function Hero({ content }: { content: Content }) {
  const { hero } = content;
  return (
    <section className="relative max-w-6xl mx-auto px-5 pt-20 pb-16 md:pt-28 md:pb-24 grid md:grid-cols-12 gap-10 items-center overflow-hidden">
      <div className="blob absolute -top-10 right-10 w-72 h-72 bg-cta/30 -z-10" aria-hidden="true" />
      <div className="blob blob2 absolute bottom-0 left-1/4 w-64 h-64 bg-[#1baf7a]/20 -z-10" aria-hidden="true" />

      <div className="md:col-span-7">
        <p className="hero-enter font-mono text-xs tracking-widest uppercase text-cta mb-4">{hero.eyebrow}</p>
        <h1 className="hero-enter d1 font-display font-700 text-[40px] leading-[1.08] sm:text-5xl md:text-6xl tracking-tight text-ink">
          {hero.title}
        </h1>
        <p className="hero-enter d2 mt-5 text-lg text-sub max-w-xl">{hero.lead}</p>
        <div className="hero-enter d3 mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="cursor-pointer inline-flex items-center gap-2 h-12 px-6 rounded-full bg-cta text-white font-medium hover:bg-ctadark transition-colors"
          >
            {hero.ctaPrimary}
            <svg className="btn-arrow" width="14" height="14" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h8M4.5 2.5 8 6l-3.5 3.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="cursor-pointer inline-flex items-center h-12 px-6 rounded-full border border-line text-ink font-medium hover:border-ink transition-colors"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="md:col-span-5">
        <div className="hero-enter d2 bob rounded-2xl border border-line bg-card shadow-soft overflow-hidden">
          <div className="h-10 flex items-center gap-2 px-4 border-b border-line">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
            <span className="ml-2 font-mono text-[11px] text-muted">{hero.mockTitle}</span>
          </div>
          <div className="p-4 space-y-2">
            <div className="grid grid-cols-[1fr_auto] gap-2 text-xs font-mono text-muted px-1">
              <span>{hero.mockColSegment}</span>
              <span>{hero.mockColStatus}</span>
            </div>
            {hero.mockRows.map((row) => (
              <div key={row.name} className="flex items-center justify-between rounded-lg px-3 py-2.5 bg-page">
                <div>
                  <p className="text-sm font-medium text-ink">{row.name}</p>
                  <p className="text-xs text-muted font-mono">{row.sub}</p>
                </div>
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                    row.statusTone === 'done' ? 'bg-[#DCFCE7] text-[#15803D]' : 'bg-[#FEF3C7] text-[#92400E]'
                  }`}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4">
            <div className="rounded-lg bg-ink text-white px-3 py-2.5 flex items-center justify-between">
              <span className="text-xs font-mono text-white/70">{hero.floatBrand}</span>
              <span className="text-sm font-semibold font-mono">{hero.floatValue}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
