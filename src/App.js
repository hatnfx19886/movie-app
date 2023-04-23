import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Browse = React.lazy(() => import('./pages/browse/Browse'));
const Search = React.lazy(() => import('./pages/search/Search'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner variant="dark" />}>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
