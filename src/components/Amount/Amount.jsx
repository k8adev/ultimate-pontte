import React, { createElement } from 'react';
import injectSheet from 'react-jss';

import Typography from '../Typography';

const styles = ({ colors, spacing, fontTypes }) => {
  return {};
};

const Amount = ({ classes, children }) => {
  return (
    <Typography variant="span">
      { children }
    </Typography>
  );
};

export default injectSheet(styles)(Amount);
