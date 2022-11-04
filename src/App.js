import React from 'react';
import './style.css';
import Form from './component/form';
import ErrorBoundary from './component/error';

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <Form />
      </ErrorBoundary>
    </div>
  );
}
