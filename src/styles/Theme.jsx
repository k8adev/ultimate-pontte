import 'typeface-muli';

import React from 'react';
import { ThemeProvider } from 'react-jss';
import PropTypes from 'prop-types';

import Normalize from './Normalize';

import colors from './colors';
import spacings from './spacings';
import typography from './typography';
import breakpoints from './breakpoints';

const Theme = ({ children }) => {
  const theme = {
    ...colors,
    ...spacings,
    ...typography,
    ...breakpoints,
  };

  return (
    <Normalize>
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </Normalize>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
