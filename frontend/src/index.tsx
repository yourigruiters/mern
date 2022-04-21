import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { store } from './app/redux/store.js';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
