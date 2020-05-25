import React, { useEffect } from 'react';
import injectSheet from 'react-jss';

const styles = ({ colors, spacing }) => ({
  input: {
    position: 'relative',
    width: '100%',
  },
});

const Card = ({ classes, marks, min, max, onChange }) => {
  return (
    <div className={classes.range}>
      <input className={classes.input} type="range" list="marks" onChange={onChange} />

      <datalist id="marks">
        {
          marks.map((mark, i) => (
            <option value={i * 25}></option>
          ))
        }
      </datalist>
      <br />
      <span className="Amount">{min}</span>
      <span className="Amount">{max}</span>
      <br />
    </div>
  );
};

export default injectSheet(styles)(Card);
