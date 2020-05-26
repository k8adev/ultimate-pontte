const light = '#ffffff';

const colorsBrand = {
  brand1: '#591783',
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
  palette: {
    ...colorsCommon,
    ...colorsBrand,
  },
};
