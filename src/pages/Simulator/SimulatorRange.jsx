import React, { useEffect } from 'react';
import injectSheet from 'react-jss';

import Amount from '../../components/Amount';
import Typography from '../../components/Typography';

const styles = ({ spacing }) => ({
  container: {
    position: 'relative',
  },
  range: {
    position: 'relative',
    width: '100%',
    marginBottom: spacing(),
  },
  amount: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const Card = ({ classes, marks, min, max, onChange }) => {
  return (
    <div className={classes.container}>
      <input className={classes.range} type="range" list="marks" onChange={onChange} />

      <datalist id="marks">
        {
          marks.map((mark, i) => (
            <option value={i * 25}></option>
          ))
        }
      </datalist>

      <div className={classes.amount}>
        <Typography element="span" variant="body2">
          <Amount>R$ {min}</Amount>
        </Typography>

        <Typography element="span" variant="body2">
          <Amount>R$ {max}</Amount>
        </Typography>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Card);
