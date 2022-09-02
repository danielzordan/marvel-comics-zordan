import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { ComicDetails } from './pages/ComicDetails';
import { Home } from './pages/Home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<ComicDetails />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
