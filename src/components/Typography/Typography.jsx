import React, { createElement } from 'react';
import injectSheet from 'react-jss';

const styles = ({ colors, spacing, fontTypes }) => {
  console.log(fontTypes);
  return {
    ...fontTypes,
  };
};

const Typography = ({ classes, children, variant = 'p' }) => {
  const Component = variant;
  const className = classes[variant] || '';

  return (
    <Component className={className}>
      { children }
    </Component>
  );
};

export default injectSheet(styles)(Typography);
