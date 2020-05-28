/**
 * Inspired by Material UI Typography component.
 * @see {@link https://material-ui.com/components/typography/#typography}
 */
import { createElement } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = (theme) => {
  const {
    spacing,
    typography,
    palette,
    components: { Typography },
  } = theme;

  const headings = [
    'h1',
    'h2',
    'h3',
  ];

  const typographyCommon = (fontVariant) => ({
    ...Typography,
    textAlign: ({ align }) => align,
    display: ({ display }) => display,
    color: ({ color }) => palette[color],
    marginBottom: ({
      marginBottom,
      variant,
      paragraph,
    }) => {
      if (marginBottom) {
        return spacing(marginBottom);
      }

      if (!paragraph) {
        return 0;
      }

      if (headings.includes(variant)) {
        return spacing(2);
      }

      return spacing();
    },
    fontWeight: ({ bold: fontWeight }) => {
      if (fontWeight === null) {
        return fontVariant?.fontWeight;
      }

      return fontWeight === true ? 'bold' : fontWeight;
    },
  });

  const typographyVariant = Object.keys(typography.fontVariant).reduce((props, type) => ({
    ...props,
    [type]: {
      ...typography.fontVariant[type],
      ...typographyCommon(typography.fontVariant[type]),
    },
  }), {});

  return typographyVariant;
};

const Typography = (props) => {
  const {
    classes,
    children,
    variant,
    element: type,
  } = props;

  const className = classes[variant];

  return createElement(type, { className }, [children]);
};

Typography.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'body1',
    'body2',
    'caption',
  ]),
  element: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'p',
    'span',
    'small',
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'brand1',
    'inherit',
  ]),
  block: PropTypes.bool,
  paragraph: PropTypes.bool,
  display: PropTypes.oneOf([
    'block',
    'inline',
    'inline-block',
    'initial',
  ]),
  align: PropTypes.oneOf([
    'inherit',
    'left',
    'right',
    'center',
  ]),
  bold: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  marginBottom: PropTypes.number,
};

Typography.defaultProps = {
  element: 'p',
  variant: 'body1',
  color: 'inherit',
  paragraph: false,
  display: null,
  align: 'inherit',
  bold: null,
  marginBottom: null,
};

export default injectSheet(styles)(Typography);
