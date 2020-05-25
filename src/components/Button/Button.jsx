import React from 'react';
import injectSheet from 'react-jss';

import Typography from '../Typography';

const styles = ({ colors, spacing, fontTypes }) => {
  return {
    button: {
      background: `linear-gradient(to left bottom, ${colors.sunrise}, ${colors.sunset})`,
      border: 0,
      color: colors.light,
      borderRadius: spacing(),
      display: 'inline-block',
    },
  };
};

const Button = ({ classes, children, onClick }) => {
  return (
    <button className={classes.button} type="button" onClick={onClick}>
      <Typography variant="span">
        { children }
      </Typography>
    </button>
  );
};

export default injectSheet(styles)(Button);
