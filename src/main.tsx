import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.scss';
import { HashRouter } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <MainPage />
    </HashRouter>
  </React.StrictMode>,
);
