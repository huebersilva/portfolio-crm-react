import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './pages/Page';
import { pt } from './content/pt';
import { en } from './content/en';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page content={pt} locale="pt-BR" />} />
        <Route path="/en" element={<Page content={en} locale="en-US" />} />
      </Routes>
    </BrowserRouter>
  );
}
