import React, {
  useEffect,
  useRef,
  useState,
  Fragment,
} from 'react';
import injectSheet, { useTheme } from 'react-jss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { changeUserConditions } from '../../store/user';

import done from '../../done';

import Amount from '../../components/Amount';
import Card from '../../components/Card';
import Typography from '../../components/Typography';

const styles = (props) => {
  const {
    spacing,
    palette,
    boxShadow,
    transition,
    linearGradient,
  } = props;

  const termsGutter = spacing() / 2;
  const rangeDimensions = 5;
  const rangeThumbDimensions = rangeDimensions * 4;
  const rangeCommon = { '-webkit-appearance': 'none' };
  const buttonPadding = spacing(2);
  const buttonPaddingSides = buttonPadding * 4;

  const simulatorConditions = {
    rangeContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
    range: {
      ...rangeCommon,
      position: 'relative',
      width: '100%',
      background: 'transparent',
      cursor: 'pointer',
      backgroundColor: palette.brand2,
      transition: transition('background', '450ms', 'ease-in'),
      boxShadow: boxShadow('inset', 0, '1px', '3px', 'rgba(0, 0, 0, .3)'),
      height: rangeDimensions,
      borderRadius: rangeDimensions,
      margin: 0,
      '&:focus': {
        outline: 'none',
      },
      '&::-webkit-slider-thumb': {
        ...rangeCommon,
        border: 0,
        width: rangeThumbDimensions,
        height: rangeThumbDimensions,
        borderRadius: rangeThumbDimensions,
        backgroundColor: palette.primary,
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
        width: rangeDimensions,
        height: rangeDimensions,
        minHeight: 0,
        borderRadius: rangeDimensions,
        backgroundColor: palette.secondary,
        zIndex: 1,
        padding: 0,
      },
    },
    amountsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    termsContainer: {
      marginBottom: spacing(3),
      display: 'flex',
      flexFlow: [['row', 'wrap']],
      margin: [[0, -termsGutter]],
      justifyContent: 'space-around',
    },
    terms: {
      marginBottom: spacing(),
      flex: [[1, 'auto']],
      padding: [[0, termsGutter]],
      '& > *': {
        width: '100%',
      },
    },
    button: {
      padding: buttonPadding,
      paddingLeft: buttonPaddingSides,
      paddingRight: buttonPaddingSides,
      display: 'inline-block',
      border: 0,
      color: palette.light,
      borderRadius: buttonPadding * 2,
      backgroundImage: linearGradient('right', `${palette.brand1} 10%`, `${palette.brand2} 60%`),
      outline: 0,
      cursor: 'pointer',
      '&:disabled': {
        opacity: 0.5,
        cursor: 'initial',
      },
    },
    buttonContainer: {
      textAlign: 'center',
      marginBottom: spacing(2),
    },
  };

  return simulatorConditions;
};

const SimulatorConditions = ({ classes }) => {
  const { linearGradient, palette } = useTheme();

  const dispatch = useDispatch();

  const { user, simulator } = useSelector(({ user, simulator }) => ({ user, simulator }));

  const [rangeValue, setRangeValue] = useState(0);
  const rangeMin = 0;
  const rangeMax = simulator.amounts.length - 1;

  const $range = useRef();

  const changeRangeProgress = (i) => {
    const percent = i * 25;

    const { brand2, success } = palette;
    const linearGradientColors = [
      `${success} 0%`,
      `${success} ${percent}%`,
      `${brand2} ${percent}%`,
      `${brand2} 100%`,
    ];

    $range.current.style.backgroundImage = linearGradient('right', ...linearGradientColors);
  };

  const changeData = (i) => {
    const condition = i;

    dispatch(changeUserConditions({
      condition,
      termsCondition: null,
    }));

    setRangeValue(i);

    changeRangeProgress(i);
  };

  const onChangeRange = ({ target: { value: i } }) => changeData(i);
  const onClickTerm = ({ target: { value: i } }) => (
    dispatch(changeUserConditions({ termsCondition: i }))
  );
  const onClickButton = done;

  useEffect(() => changeData(0), [simulator]);

  return (
    <Fragment>
      <div className={classes.rangeContainer}>
        <input
          ref={$range}
          className={classes.range}
          type="range"
          list="rangeSteps"
          value={rangeValue}
          min={rangeMin}
          max={rangeMax}
          onChange={onChangeRange}
        />

        <datalist id="rangeSteps" className={classes.rangeSteps}>
          {
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            simulator.terms.map((term, i) => <option key={`range-steps-${i}`} value={i} />)
          }
        </datalist>
      </div>

      <div className={classes.amountsContainer}>
        <Typography
          element="span"
          variant="body2"
          marginBottom={3}
        >
          <Amount value={simulator.amounts[rangeMin]} />
        </Typography>

        <Typography
          element="span"
          variant="body2"
          marginBottom={3}
        >
          <Amount value={simulator.amounts[rangeMax]} />
        </Typography>
      </div>

      <Typography
        element="h2"
        variant="h3"
        color="brand1"
        align="center"
        marginBottom={4}
        paragraph
      >
        Selecione a quantidade de parcelas
      </Typography>

      <div className={classes.termsContainer}>
        {
          simulator.terms.map((term, i) => (
            <div className={classes.terms} key={`terms-${i}`}>
              <Card
                element="button"
                variant="primary"
                value={i}
                onClick={onClickTerm}
                focused={user.termsCondition === i}
                hallow
              >
                <Typography
                  element="span"
                  className="Typography"
                  display="block"
                >
                  {term} meses
                </Typography>

                <Typography
                  element="span"
                  className="Typography"
                  display="block"
                  bold
                >
                  <Amount value={simulator.termsInstallments[user.condition][i]} />
                </Typography>
              </Card>
            </div>
          ))
        }
      </div>

      <div className={classes.buttonContainer}>
        <button
          type="button"
          className={classes.button}
          disabled={user.termsCondition === null}
          onClick={onClickButton}
        >
          <Typography
            element="span"
            variant="h3"
            color="secondary"
          >
            Gostei, continuar
          </Typography>
        </button>
      </div>
    </Fragment>
  );
};

SimulatorConditions.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(SimulatorConditions);
