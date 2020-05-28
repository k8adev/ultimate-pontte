const fontFamily = 'Muli, sans-serif';

const fontVariant = {
  h1: {
    fontSize: '2.6rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '1.6rem',
    fontWeight: 600,
  },
  h3: {
    fontSize: '1.4rem',
    fontWeight: 600,
  },
  body1: {
    fontSize: '1.2rem',
  },
  body2: {
    fontSize: '1rem',
  },
  caption: {
    fontSize: '.9rem',
    lineHeight: '1.2rem',
  },
};

const typography = {
  fontFamily,
  fontVariant,
};

export default {
  typography,
  components: {
    Typography: {
      fontFamily,
    },
  },
};
