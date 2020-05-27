import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Simulator from './Simulator';

const styles = (props) => {
  const {
    palette,
    spacing,
    fontFamily,
    linearGradient,
  } = props;

  return {
    '@global': {
      body: {
        backgroundColor: palette.brand2,
      },
    },
    root: {
      fontFamily,
      height: '100%',
      padding: spacing(2),
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      color: palette.primary,
      backgroundImage: linearGradient('right top', `${palette.brand1} -80%`, palette.brand2),
    },
  };
};

const Pages = ({ classes }) => (
  <main className={classes.root}>
    <Simulator />
  </main>
);

Pages.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Pages);
