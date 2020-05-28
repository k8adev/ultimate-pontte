import { createElement } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const TYPE_BUTTON = 'button';

const styles = ({ palette, spacing, borderRadius }) => {
  const cursor = ({ element }) => (
    element === TYPE_BUTTON ? 'pointer' : 'initial'
  );

  const primaryColorCommon = ({ focused, hallow }) => (
    focused || !hallow ? palette.secondary : palette.primary
  );

  const card = {
    default: {
      borderRadius,
      padding: spacing(2),
      position: 'relative',
      borderWidth: 1,
      borderStyle: 'solid',
      outline: 'none',
    },
    primary: {
      cursor,
      composes: ['$default'],
      borderColor: primaryColorCommon,
      color: primaryColorCommon,
      backgroundColor: ({ focused, hallow }) => (
        focused || !hallow ? palette.primary : 'transparent'
      ),
    },
    secondary: {
      cursor,
      composes: ['$default'],
      borderColor: palette.secondary,
      color: palette.primary,
      backgroundColor: palette.secondary,
    },
  };

  return card;
};

const Card = (props) => {
  const {
    classes,
    children,
    variant,
    onClick,
    value,
    element: type,
  } = props;

  const className = classes[variant];
  const typeProps = {};

  if (type === TYPE_BUTTON) {
    Object.assign(typeProps, {
      type,
      /**
       * Can't prevent event bubbling so, this palliative solution
       * simulates object structure of @event click.
       */
      onClick: () => onClick({ target: { value } }),
    });
  }

  return createElement(type, {
    className,
    value,
    ...typeProps,
  }, [children]);
};

Card.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.oneOf([
    'div',
    TYPE_BUTTON,
  ]),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
  hallow: PropTypes.bool,
  focused: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  onClick: PropTypes.func,

};

Card.defaultProps = {
  element: 'div',
  variant: 'secondary',
  hallow: false,
  focused: false,
  value: null,
  onClick: () => {},
};

export default injectSheet(styles)(Card);
