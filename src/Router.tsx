import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { ComicDetails } from './pages/ComicDetails';
import { Comics } from './pages/Comics';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Comics />} />
          <Route path="/details" element={<ComicDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
