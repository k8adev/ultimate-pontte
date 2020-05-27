import React, { useEffect, useRef, useState } from 'react';
import injectSheet, { useTheme, createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Amount from '../../components/Amount';
import Typography from '../../components/Typography';

const styles = (props) => {
  const {
    spacing,
    palette,
    boxShadow,
    transition,
  } = props;

  const rangeCommon = {
    '-webkit-appearance': 'none',
  };

  const simulatorRange = {
    container: {
      position: 'relative',
      marginBottom: spacing(),
    },
    range: {
      ...rangeCommon,
      position: 'relative',
      width: '100%',
      background: 'transparent',
      height: 5,
      cursor: 'pointer',
      backgroundColor: palette.brand2,
      transition: transition('background', '450ms', 'ease-in'),
      boxShadow: boxShadow('inset', 0, 1, 3, 'rgba(0, 0, 0, .3)'),
      borderRadius: 5,
      margin: 0,
      '&:focus': {
        outline: 'none',
      },
      '&::-webkit-slider-thumb': {
        ...rangeCommon,
        border: 0,
        width: 20,
        height: 20,
        borderRadius: 20,
        background: palette.primary,
        cursor: 'pointer',
        position: 'relative',
        zIndex: 2,
      },
    },
    rangeSteps: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'absolute',
      width: '100%',
      pointerEvents: 'none',
      '& option': {
        position: 'relative',
        width: 5,
        height: 5,
        minHeight: 0,
        borderRadius: 10,
        backgroundColor: palette.secondary,
        zIndex: 1,
        padding: 0,
      },
    },
    rangeContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 15,
    },
    amount: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  };

  return simulatorRange;
};

const SimulatorRange = (props) => {
  const {
    classes,
    marks,
    min,
    max,
    onChange,
  } = props;
  const [value, setValue] = useState(0);
  const steps = marks.reduce((arr, step, i) => ([...arr, i]), []);
  const $input = useRef();
  const {
    linearGradient,
    palette: {
      brand2,
      success,
    },
  } = useTheme();

  const changeInputColor = (value) => {
    const step = value * 20;

    const color1 = `${success} ${step}%`;
    const color2 = `${brand2} ${step}%`;

    const backgroundImage = linearGradient('right', `${success} 0%`, color1, color2, `${brand2} 100%`);

    $input.current.style.backgroundImage = backgroundImage;
  };

  const onInput = (event) => {
    const { target: { value } } = event;

    setValue(value);
    changeInputColor(value);
    onChange(event);
  };

  useEffect(() => {
    changeInputColor(0);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.rangeContainer}>
        <input ref={$input} className={classes.range} type="range" list="marks" value={value} min={0} max={5} onChange={onInput} />

        <datalist id="marks" className={classes.rangeSteps}>
          {
            steps.map((step, i) => (
              <option value={i} />
            ))
          }
        </datalist>
      </div>

      <div className={classes.amount}>
        <Typography element="span" variant="body2">
          <Amount value={min} />
        </Typography>

        <Typography element="span" variant="body2">
          <Amount value={max} />
        </Typography>
      </div>
    </div>
  );
};

SimulatorRange.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(SimulatorRange);
