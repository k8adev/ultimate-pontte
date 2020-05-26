import React from 'react';
import injectSheet from 'react-jss';

import Simulator from './Simulator';

const styles = ({ palette, spacing, fontFamily }) => ({
  '@global': {
    body: {
      color: palette.primary,
      height: '100vh',
      backgroundColor: palette.brand1,
      backgroundImage: `linear-gradient(to right top, ${palette.brand1}, ${palette.brand2}) `,
      backgroundRepeat: 'round',
    },
  },
  pages: {
    fontFamily,
    padding: spacing(2),
    height: '100vh',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
});

const Pages = ({ classes }) => (
  <main className={classes.pages}>
    <Simulator />
  </main>
);

export default injectSheet(styles)(Pages);
