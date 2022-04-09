import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/containers/app';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './app/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="//*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
