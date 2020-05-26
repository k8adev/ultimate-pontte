import { createElement } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = ({ palette, spacing }) => {
  const cardCommon = {
    padding: spacing(2),
    position: 'relative',
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    outline: 'none',
    cursor: ({ element }) => (element === 'button' ? 'pointer' : 'initial'),
  };

  const cardVariant = {
    primary: {
      ...cardCommon,
      borderColor: palette.primary,
      color: ({ hallow }) => (hallow ? palette.primary : palette.secondary),
      backgroundColor: ({ hallow }) => (hallow ? 'transparent' : palette.primary),
      '&.selected': () => ({
        color: palette.primary,
        backgroundColor: 'transparent',
      }),
    },
    secondary: {
      ...cardCommon,
      borderColor: palette.secondary,
      color: palette.primary,
      backgroundColor: palette.secondary,
    },
  };

  return cardVariant;
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

  const handlerClick = (...onClickArguments) => {
    onClick.call(...onClickArguments);
  };

  return createElement(type, {
    className,
    value,
    onClick: handlerClick,
  }, [children]);
};

Card.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.oneOf([
    'div',
    'button',
  ]),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
  hallow: PropTypes.bool,
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
  value: null,
  onClick: () => {},
};

export default injectSheet(styles)(Card);
