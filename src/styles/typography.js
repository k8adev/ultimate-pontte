const fontFamily = 'Roboto';

const fontTypes = {
  h1: {
    fontSize: '2.6rem',
  },
  h2: {
    fontSize: '1.6rem',
  },
  h3: {
    fontSize: '1.4rem',
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
  fontTypes,
};

export default {
  typography,
  components: {
    Typography: {
      fontFamily,
    },
  },
};
