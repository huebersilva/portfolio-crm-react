import { useEffect } from 'react';
import type { Content } from '../content/types';
import ScrollProgress from '../components/ScrollProgress';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StatsStrip from '../components/StatsStrip';
import Skills from '../components/Skills';
import About from '../components/About';
import Experience from '../components/Experience';
import Work from '../components/Work';
import Governance from '../components/Governance';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default function Page({ content, locale }: { content: Content; locale: string }) {
  useEffect(() => {
    document.documentElement.lang = content.htmlLang;
  }, [content.htmlLang]);

  return (
    <>
      <ScrollProgress />
      <Header content={content} />
      <main id="top" className="pt-16">
        <Hero content={content} />
        <StatsStrip content={content} locale={locale} />
        <Skills content={content} locale={locale} />
        <About content={content} />
        <Experience content={content} />
        <Work content={content} />
        <Governance content={content} />
        <Education content={content} />
      </main>
      <Contact content={content} />
    </>
  );
}
