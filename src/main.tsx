import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { TypeContext } from './types/mainTypes.ts';

export const Context = React.createContext<TypeContext>({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
