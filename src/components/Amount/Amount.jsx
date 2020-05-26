import React, { Fragment } from 'react';
import injectSheet from 'react-jss';

import Typography from '../Typography';

const styles = ({ colors, spacing, fontTypes }) => {
  return {};
};

const Amount = ({ classes, children }) => {
  return (
    <Fragment>
      { children }
    </Fragment>
  );
};

export default injectSheet(styles)(Amount);
