import React from 'react';
import { ThemeProvider } from 'react-jss';

import Normalize from './Normalize';

import colors from './colors';
import spacings from './spacings';
import typography from './typography';

const Theme = ({ children }) => {
  const theme = {
    ...colors,
    ...spacings,
    ...typography,
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
