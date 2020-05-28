/**
 * Inspired by Material UI Breakpoints system.
 * @see {@link https://material-ui.com/customization/breakpoints/}
 */
const sizes = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const screen = {
  up: (size) => `@media (min-width: ${sizes[size]}px)`,
};

export default {
  screen,
  breakpoints: {
    sizes,
  },
};
