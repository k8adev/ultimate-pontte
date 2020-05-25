import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Pages from './Pages';

render(
  <Provider store={store}>
    <Pages />
  </Provider>,
  document.getElementById('root'),
);

store.subscribe(() => console.log('store:', store.getState()));
