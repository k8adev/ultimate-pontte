import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const Amount = ({ value }) => (
  <NumberFormat
    value={value}
    displayType="text"
    prefix="R$"
    thousandSeparator="."
    decimalSeparator=","
  />
);

Amount.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Amount;
