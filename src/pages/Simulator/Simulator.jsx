import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import injectSheet from 'react-jss';

import { getSimulatorConditions } from '../../store/simulator';

import Card from '../../components/Card';
import CardTitle from '../../components/CardTitle';
import Range from '../../components/Range';
import Typography from '../../components/Typography';
import Amount from '../../components/Amount';
import Button from '../../components/Button';

const styles = ({ spacing }) => {
  const gutter = spacing() / 2;

  return {
    container: {
      display: 'flex',
      margin: '0 auto',
    },
    '@media screen and (min-width: 765px)': {
      container: {
        maxWidth: '70vw',
      },
    },
    termsList: {
      display: 'flex',
      flexFlow: 'row wrap',
      marginLeft: -gutter,
      marginRight: -gutter,
    },
    terms: {
      padding: gutter,
      flexGrow: 1,
    },
  };
};

const Simulator = ({ classes }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const { amount, conditions } = useSelector(({ simulator }) => (simulator));

  useEffect(() => {
    dispatch(getSimulatorConditions());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Card>
        <CardTitle>Valor Solicitado</CardTitle>

        <Amount>R$ {value}</Amount>

        <Typography>
          Valor bruto:
          <Amount>R$ {amount.total}</Amount>
          <span className="Tooltip" />
        </Typography>

        <Range
          value={value}
          marks={conditions.terms}
          min={conditions.amount[0]}
          max={conditions.amount[4]}
          onChange={({ target: { value } }) => setValue(value)}
        />

        <Typography>Quantidade de parcelas</Typography>
        <br />

        <div className={classes.termsList}>
          {
            conditions.terms.map((term) => (
              <div className={classes.terms}>
                <Card background="primary" color="light">
                  <Typography className="Typography">
                    {term} meses
                    <span>R$ {term}</span>
                    <br />
                  </Typography>
                </Card>
              </div>
            ))
          }
        </div>

        <Button>Gostei, continuar</Button>

        <Typography variant="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus numquam adipisci quidem repellat reprehenderit enim suscipit asperiores sed consectetur eaque, voluptatem rem? Quae, eum quibusdam! Obcaecati amet possimus in?</Typography>
      </Card>
    </div>
  );
};

export default injectSheet(styles)(Simulator);
