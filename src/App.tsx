/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Header } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';

import { Provider } from 'react-redux';

import store from './redux';

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main></Main>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
