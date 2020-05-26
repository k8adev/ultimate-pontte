import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import injectSheet from 'react-jss';

import { getSimulatorConditions } from '../../store/simulator';

import Card from '../../components/Card';
import Typography from '../../components/Typography';
import Amount from '../../components/Amount';

import SimulatorRange from './SimulatorRange';

const styles = ({ spacing, palette }) => {
  const marginBottom = spacing();
  const gutter = spacing() / 2;
  const padding = spacing(2);
  const marginTop = -padding;
  const paddingSides = padding * 3;

  const simulator = {
    root: {
      maxWidth: '60vw',
      position: 'relative',
    },
    cardTitle: {
      padding,
      marginTop,
      color: palette.light,
      background: palette.primary,
      borderRadius: spacing(1),
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translate(-50%, -25%)',
      width: '70%',
      textAlign: 'center',
    },
    cardContainer: {
      padding: spacing(3),
    },
    amountContainer: {
      display: 'flex',
      flexFlow: 'column wrap',
      alignItems: 'center',
    },
    termsList: {
      marginBottom,
      display: 'flex',
      flexFlow: 'row wrap',
      marginLeft: -gutter,
      marginRight: -gutter,
      justifyContent: 'space-around',
    },
    termsListCard: {
      marginBottom,
      flex: '1 auto',
      paddingLeft: gutter,
      paddingRight: gutter,
      '& > *': {
        width: '100%',
      },
    },
    button: {
      padding,
      paddingLeft: paddingSides,
      paddingRight: paddingSides,
      display: 'inline-block',
      border: 0,
      color: palette.light,
      borderRadius: padding * 4,
      background: `linear-gradient(to left bottom, ${palette.brand1}, ${palette.brand2})`,
    },
    buttonContainer: {
      textAlign: 'center',
      marginBottom: marginBottom * 2,
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
      <Card>
        <div className={classes.cardTitle}>
          <Typography element="h1" variant="h2" color="secondary">
            Valor Solicitado
          </Typography>
        </div>

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
            onChange={({ target: { value } }) => setValue(value)}
          />

          <Typography
            element="h2"
            variant="h3"
            color="brand1"
            align="center"
            paragraph
          >
            Quantidade de parcelas
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
                      paragraph
                    >
                      {term} meses
                    </Typography>

                    <Typography
                      element="span"
                      className="Typography"
                      display="block"
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
