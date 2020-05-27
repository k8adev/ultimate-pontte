import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Pages from './pages';

import Theme from './styles/Theme';

const App = () => (
  <Provider store={store}>
    <Theme>
      <Pages />
    </Theme>
  </Provider>
);
/* eslint-disable */
store.subscribe(() => console.log('store:', store.getState()));

export default App;
