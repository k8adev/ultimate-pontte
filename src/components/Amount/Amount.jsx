import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCountUp } from 'react-countup';

const Amount = ({ value, currency }) => {
  const formattingFn = new Intl.NumberFormat('pt-BR', { currency, style: 'currency' }).format;
  const { countUp, update } = useCountUp({
    end: value,
    duration: 0.2,
    formattingFn,
  });

  useEffect(() => update(value), [value]);

  return (
    <React.Fragment>
      { countUp }
    </React.Fragment>
  );
};

Amount.propTypes = {
  value: PropTypes.number,
  currency: PropTypes.oneOf(['BRL']),
};

Amount.defaultProps = {
  value: 0,
  currency: 'BRL',
};

export default Amount;
