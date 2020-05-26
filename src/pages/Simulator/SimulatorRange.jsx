/**
 */
import React, { useEffect, useRef } from 'react';
import injectSheet from 'react-jss';

import Amount from '../../components/Amount';
import Typography from '../../components/Typography';

const styles = ({ spacing, palette }) => {
  const rangeCommon = {
    '-webkit-appearance': 'none',
  };

  const simulatorRange = {
    container: {
      position: 'relative',
    },
    range: {
      ...rangeCommon,
      position: 'relative',
      width: '100%',
      background: 'transparent',
      height: 5,
      cursor: 'pointer',
      background: `linear-gradient(to right, #9cbe47 0%, #9cbe47 50%, #591783 50%, #591783 100%)`,
      transition: `background 450ms ease-in`,
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
    },
    amount: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  };

  return simulatorRange;
};

const Card = ({ classes, marks, min, max, onChange }) => {
  const steps = marks.reduce((steps, step, i) => ([...steps, i + 1]), [0]);
  const input = useRef();

  const onInput = (event) => {
    const { target: { value } } = event;
    const c = value * 20;
    input.current.style.background = `linear-gradient(to right, #9cbe47 0%, #9cbe47 ${c}%, #591783 ${c}%, #591783 100%)`;
    onChange(event);
  };

  return (
    <div className={classes.container}>
      <div className={classes.rangeContainer}>
        <input ref={input} className={classes.range} type="range" list="marks" step="1" min={0} max={5} onChange={onInput} />

        <datalist id="marks" className={classes.rangeSteps}>
          {
            steps.map((step, i) => (
              <option value={i}></option>
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

export default injectSheet(styles)(Card);
