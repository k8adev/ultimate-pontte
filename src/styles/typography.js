const fontFamily = 'Roboto';
const headings = [
  'h1',
  'h2',
  'h3',
].reduce((heading, tag) => ({
  ...heading,
  [tag]: {
    fontFamily,
  },
}), {});

export default {
  fontFamily: 'Roboto',
  fontTypes: {
    ...headings,
  },
};
