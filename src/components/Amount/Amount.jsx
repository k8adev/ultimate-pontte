import React from 'react';
import NumberFormat from 'react-number-format';

const Amount = ({ value }) => (
  <NumberFormat
    value={value}
    displayType="text"
    prefix="R$"
    thousandSeparator="."
    decimalSeparator=","
  />
);

export default Amount;
