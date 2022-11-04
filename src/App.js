import React from 'react';
import './style.css';
import Form from './component/form';
import ErrorBoundary from './component/error';
import PageError from './component/notfound';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="error" element={<ErrorBoundary />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </div>
  );
}
