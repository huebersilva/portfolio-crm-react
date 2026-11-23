import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// marks the reveal-on-scroll CSS as armed only once React has actually mounted; see index.css
document.documentElement.classList.add('js-ready');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
