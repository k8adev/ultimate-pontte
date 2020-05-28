import React from 'react';
import { ThemeProvider } from 'react-jss';
import PropTypes from 'prop-types';

import Normalize from './Normalize';

import standard from './theme/standard';

const Theme = ({ children }) => (
  <Normalize>
    <ThemeProvider theme={standard}>
      { children }
    </ThemeProvider>
  </Normalize>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
