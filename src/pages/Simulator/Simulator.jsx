import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import injectSheet from 'react-jss';

import { getSimulatorConditions } from '../../store/simulator';

import Card from '../../components/Card';
import Typography from '../../components/Typography';
import Amount from '../../components/Amount';

import SimulatorRange from './SimulatorRange';

const styles = (props) => {
  const {
    spacing,
    palette,
    linearGradient,
    screen,
  } = props;

  const termListGutter = spacing() / 2;
  const buttonPadding = spacing(2);
  const buttonPaddingSides = buttonPadding * 4;

  const simulator = {
    root: {
      position: 'relative',
      marginBottom: spacing(2),
      [screen.up('sm')]: {
        maxWidth: '90vw',
      },
      [screen.up('md')]: {
        maxWidth: '80vw',
      },
      [screen.up('lg')]: {
        maxWidth: '70vw',
      },
    },
    title: {
      padding: spacing(2),
      color: palette.light,
      background: palette.primary,
      borderRadius: spacing(1),
      marginLeft: 'auto',
      marginRight: 'auto',
      transform: 'translateY(50%)',
      position: 'relative',
      zIndex: 2,
      width: '70%',
      textAlign: 'center',
    },
    cardContainer: {
      padding: spacing(3),
      paddingTop: spacing(5),
    },
    amountContainer: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    termsList: {
      marginBottom: spacing(3),
      display: 'flex',
      flexFlow: 'row wrap',
      marginLeft: -termListGutter,
      marginRight: -termListGutter,
      justifyContent: 'space-around',
    },
    termsListCard: {
      marginBottom: spacing(),
      flexGrow: 1,
      flexShrink: 'auto',
      paddingLeft: termListGutter,
      paddingRight: termListGutter,
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
    },
    buttonContainer: {
      textAlign: 'center',
      marginBottom: spacing(2),
    },
  };

  return simulator;
};

const Simulator = ({ classes }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const { amount, conditions } = useSelector(({ simulator }) => (simulator));

  useEffect(() => {
    dispatch(getSimulatorConditions());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography element="h1" variant="h2" color="secondary">
          Valor Solicitado
        </Typography>
      </div>

      <Card>
        <div className={classes.cardContainer}>
          <div className={classes.amountContainer}>
            <Typography
              element="span"
              variant="h1"
              display="block"
              paragraph
            >
              <Amount value={value} />
            </Typography>

            <Typography
              element="span"
              variant="h3"
              display="block"
              paragraph
              bold
            >
              Valor bruto: <Amount value={amount.total} />
            </Typography>

            <span className="Tooltip" />
          </div>

          <SimulatorRange
            value={value}
            marks={conditions.terms}
            min={conditions.amount[0]}
            max={conditions.amount[4]}
            onChange={({ target }) => setValue(target.value)}
          />

          <Typography
            element="h2"
            variant="h3"
            color="brand1"
            align="center"
            paragraph
            marginBottom={4}
          >
            Selecione a quantidade de parcelas
          </Typography>

          <div className={classes.termsList}>
            {
              conditions.terms.map((term) => (
                <div className={classes.termsListCard}>
                  <Card
                    element="button"
                    variant="primary"
                    value={term}
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
                      bold={500}
                    >
                      <span>R$ {term}</span>
                    </Typography>
                  </Card>
                </div>
              ))
            }
          </div>

          <div className={classes.buttonContainer}>
            <button type="button" className={classes.button}>
              <Typography
                element="span"
                variant="h3"
                color="secondary"
              >
                Gostei, continuar
              </Typography>
            </button>
          </div>

          <Typography variant="caption" align="center">Taxa de 1,09%. Valor da primeira - Sistema de Amortização Constante (duas parcelas diminuem com o tempo.</Typography>
        </div>
      </Card>
    </div>
  );
};

Simulator.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Simulator);
