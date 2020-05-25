import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import jss from 'jss';
import jssPresetDefault from 'jss-preset-default';
import { SheetsRegistry, JssProvider } from 'react-jss';
import resetJss from 'reset-jss';

import store from './store';
import Pages from './Pages';

const stylesheet = (() => {
  jss.setup(jssPresetDefault());

  const sheetsRegistry = new SheetsRegistry();
  const stylesheetGlobal = jss.createStyleSheet(resetJss).attach();

  sheetsRegistry.add(stylesheetGlobal);

  return sheetsRegistry;
})();

const App = () => (
  <ReduxProvider store={store}>
    <JssProvider registry={stylesheet}>
      <Pages />
    </JssProvider>
  </ReduxProvider>
);

store.subscribe(() => console.log('store:', store.getState()));

export default App;
