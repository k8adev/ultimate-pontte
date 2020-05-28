const linearGradient = (dir, ...colors) => `linear-gradient(to ${dir}, ${colors.join(', ')})`;
const boxShadow = (...args) => args.join(' ');
const transition = (...args) => args.join(' ');

const light = '#ffffff';

const colorsBrand = {
  brand1: '#840183',
  brand2: '#32138a',
  brand3: '#020637',
};

const colorsCommon = {
  light,
  primary: colorsBrand.brand3,
  secondary: light,
  success: '#9cbe47',
};

export default {
  linearGradient,
  boxShadow,
  transition,
  palette: {
    ...colorsCommon,
    ...colorsBrand,
  },
};
