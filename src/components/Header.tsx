import type { Content } from '../content/types';

export default function Header({ content }: { content: Content }) {
  const { nav, langSwitch } = content;
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-page/80 border-b border-line">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-700 text-[17px] tracking-tight">
          Hueber Rodrigues
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-sub font-mono">
          <a href="#skills" className="nav-link hover:text-ink transition-colors">{nav.skills}</a>
          <a href="#about" className="nav-link hover:text-ink transition-colors">{nav.about}</a>
          <a href="#experience" className="nav-link hover:text-ink transition-colors">{nav.experience}</a>
          <a href="#work" className="nav-link hover:text-ink transition-colors">{nav.work}</a>
          <a href="#education" className="nav-link hover:text-ink transition-colors">{nav.education}</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 text-xs font-mono text-muted">
            <span className="px-2 py-1 rounded bg-black/5 text-ink">{langSwitch.self}</span>
            <a href={langSwitch.otherHref} className="px-2 py-1 rounded hover:bg-black/5 transition-colors">
              {langSwitch.otherLabel}
            </a>
          </div>
          <a
            href="#contact"
            className="cursor-pointer inline-flex items-center h-10 px-4 rounded-full bg-ink text-white text-sm font-medium hover:bg-cta transition-colors"
          >
            {nav.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
