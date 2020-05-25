import React from 'react';
import injectSheet from 'react-jss';

import Simulator from './Simulator';

const styles = ({ colors, spacing, fontFamily }) => ({
  '@global': {
    body: {
      color: colors.primary,
      height: '100vh',
      backgroundColor: colors.sunrise,
      backgroundImage: `linear-gradient(to right top, ${colors.sunrise}, ${colors.sunset}) `,
      backgroundRepeat: 'round',
    },
  },
  pages: {
    fontFamily,
    padding: spacing(2),
    // paddingRight: spacing(2),
    height: '100vh',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Pages = ({ classes }) => (
  <main className={classes.pages}>
    <Simulator />
  </main>
);

export default injectSheet(styles)(Pages);
