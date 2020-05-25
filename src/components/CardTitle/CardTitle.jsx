import React from 'react';
import injectSheet from 'react-jss';

import Typography from '../Typography';

const styles = ({ colors, spacing }) => {
  const padding = spacing(2);
  const marginTop = -padding;

  return {
    title: {
      padding,
      marginTop,
      color: colors.light,
      background: colors.primary,
      borderRadius: spacing(1),
      position: 'relative',
      // top: `calc(-25% - ${marginTop / 2}px)`,
      width: '80%',
      margin: '0 auto',
      textAlign: 'center',
    },
  };
};

const CardTitle = ({ classes, children }) => (
  <div className={classes.title}>
    <Typography variant="h2">
      { children }
    </Typography>
  </div>
);

export default injectSheet(styles)(CardTitle);
