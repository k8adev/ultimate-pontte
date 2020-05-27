import React from 'react';
import jss from 'jss';
import jssPresetDefault from 'jss-preset-default';
import { JssProvider, SheetsRegistry } from 'react-jss';
import resetJss from 'reset-jss';
import deepmerge from 'deepmerge';
import PropTypes from 'prop-types';

export const useStyles = () => {
  jss.setup(jssPresetDefault());

  const sheetsRegistry = new SheetsRegistry();

  const cssGlobalCommon = { height: '100%' };
  const cssGlobal = jss.createStyleSheet(deepmerge(resetJss, {
    '@global': {
      html: cssGlobalCommon,
      body: cssGlobalCommon,
      '#root': cssGlobalCommon,
    },
  })).attach();

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

Normalize.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Normalize;
