import type { Content } from '../content/types';
import Reveal from './Reveal';

export default function Contact({ content }: { content: Content }) {
  const { contact } = content;
  return (
    <footer id="contact" className="bg-ink text-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-5 py-20 md:py-28 text-center">
        <Reveal as="div">
          <h2 className="font-display font-700 text-3xl md:text-4xl tracking-tight">{contact.title}</h2>
        </Reveal>
        <Reveal as="div" delay={0.05}>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">{contact.body}</p>
        </Reveal>
        <Reveal as="div" delay={0.1} className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="cursor-pointer inline-flex items-center h-11 px-5 rounded-full border border-white/20 hover:border-white/50 transition-colors text-sm"
          >
            {contact.email}
          </a>
          <a
            href={contact.phoneHref}
            className="cursor-pointer inline-flex items-center h-11 px-5 rounded-full border border-white/20 hover:border-white/50 transition-colors text-sm"
          >
            {contact.phone}
          </a>
          <a
            href={contact.linkedinHref}
            className="cursor-pointer inline-flex items-center h-11 px-5 rounded-full border border-white/20 hover:border-white/50 transition-colors text-sm"
          >
            {contact.linkedinLabel}
          </a>
        </Reveal>
        <p className="mt-16 text-xs text-white/40 font-mono">{contact.footer}</p>
      </div>
    </footer>
  );
}
