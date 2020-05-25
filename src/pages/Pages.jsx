/* eslint-disable */
import React from 'react';
import injectSheet from 'react-jss'

import Simulator from './Simulator';

const styles = ({ colors }) => ({
  '@global': {
    body: {
      height: '100vh',
      backgroundColor: colors.sunrise,
      backgroundImage: `linear-gradient(to right top, ${colors.sunrise}, ${colors.sunset}) `,
      backgroundRepeat: 'round',
    },
  },
  pages: {},
});

const Pages = ({ classes }) => {
  return (
    <main className={classes.pages}>
      <Simulator />
    </main>
  );
};

export default injectSheet(styles)(Pages);
