import React from 'react';
import injectSheet from 'react-jss';

const styles = ({ colors, spacing }) => ({
  card: {
    borderRadius: 20,
    padding: spacing(4),
    position: 'relative',
    background: ({ background }) => colors[background] || colors.light,
    color: ({ color }) => colors[color] || colors.primary,
  },
});

const Card = ({ classes, children }) => (
  <div className={classes.card}>
    { children }
  </div>
);

export default injectSheet(styles)(Card);
