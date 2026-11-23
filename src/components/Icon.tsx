import type { IconKey } from '../content/types';

const paths: Record<IconKey, React.ReactNode> = {
  bolt: <path d="M9 1 3.5 9.5H7L6 15l6.5-8.5H9z" fill="currentColor" stroke="none" />,
  tag: (
    <>
      <path d="M2 2h6l6 6-6 6-6-6z" />
      <circle cx="5.2" cy="5.2" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  bars: <path d="M3 13V7M8 13V3M13 13V9" strokeWidth={1.6} strokeLinecap="round" fill="none" />,
  recover: (
    <>
      <path d="M2 8a6 6 0 1 1 1.76 4.24" />
      <path d="M2 12v-3h3" />
    </>
  ),
  star: <path d="M8 3.2 10 6l3.4.4-2.5 2.3.7 3.4L8 10.3l-3.2 1.8.7-3.4-2.5-2.3L6.4 6Z" />,
  clock: (
    <>
      <circle cx="8" cy="8" r="5.5" />
      <path d="M8 5v3l2 1.5" />
    </>
  ),
  cap: (
    <>
      <path d="M1.5 6 8 3l6.5 3L8 9 1.5 6Z" />
      <path d="M4 7.3v3.4c0 .9 1.8 1.8 4 1.8s4-.9 4-1.8V7.3" />
    </>
  ),
  check: <path d="m3 8.4 2.8 2.8 6.2-6.4" />,
  shield: (
    <>
      <path d="M8 1.8 13 4v3.6c0 3-2.1 5.4-5 6.6-2.9-1.2-5-3.6-5-6.6V4z" />
      <path d="m5.8 8 1.6 1.6 3-3.2" />
    </>
  ),
};

export default function Icon({ name }: { name: IconKey }) {
  return (
    <svg width={18} height={18} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
