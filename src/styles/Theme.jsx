/* eslint-disable */
import React from 'react';
import { ThemeProvider } from 'react-jss';

import Normalize from './Normalize';

import colors from './colors';

const Theme = ({ children }) => {
  const theme = {
    colors,
  };

  return (
    <Normalize>
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </Normalize>
  );
};

export default Theme;
