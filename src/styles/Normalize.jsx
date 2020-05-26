/* eslint-disable */
import React from 'react';
import jss from 'jss';
import jssPresetDefault from 'jss-preset-default';
import { JssProvider, SheetsRegistry } from 'react-jss';
import resetJss from 'reset-jss';

export const useStyles = () => {
  jss.setup(jssPresetDefault());

  const sheetsRegistry = new SheetsRegistry();
  const cssGlobal = jss.createStyleSheet(resetJss).attach();

  sheetsRegistry.add(cssGlobal);

  return sheetsRegistry;
};

const Normalize = ({ children }) => {
  const styles = useStyles();

  return (
    <JssProvider registry={styles} classNamePrefix="pontte">
      { children }
    </JssProvider>
  );
};

export default Normalize;