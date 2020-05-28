import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import injectSheet from 'react-jss';

import { getSimulatorConditions } from '../../store/simulator';

import Card from '../../components/Card';
import Typography from '../../components/Typography';
import Amount from '../../components/Amount';

import SimulatorConditions from './SimulatorConditions';

const styles = (props) => {
  const {
    spacing,
    palette,
    screen,
  } = props;

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
  };

  return simulator;
};

const Simulator = ({ classes }) => {
  const dispatch = useDispatch();
  const { user, simulator } = useSelector(({ user, simulator }) => ({ user, simulator }));

  useEffect(() => {
    dispatch(getSimulatorConditions());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography
          element="h1"
          variant="h2"
          color="secondary"
        >
          Valor solicitado
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
              <Amount value={simulator.amounts[user.condition]} />
            </Typography>

            <Typography
              element="span"
              variant="h3"
              display="block"
              paragraph
              bold
            >
              Valor bruto: <Amount value={simulator.amountsTotal[user.condition]} />
            </Typography>

            <span className="Tooltip" />
          </div>

          <SimulatorConditions />

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
