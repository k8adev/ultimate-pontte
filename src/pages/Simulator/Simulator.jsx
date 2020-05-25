/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';

import { getSimulatorConditions, setSimulatorAmount } from './../../store/simulator';

const Simulator = () => {
  const dispatch = useDispatch();
  const [value, setValue] =  useState(0);
  const { amount, monthly, conditions } = useSelector(({ simulator }) => (simulator));

  useEffect(() => {
    dispatch(getSimulatorConditions());
  }, [dispatch])


  return (
    <div>
      <div className="Card">
        <h1 className="Typography">Valor Solicitado</h1>

        <span className="Typography">
          <span className="Amount">R$ {value}</span>
        </span>

        <span className="Typography">
          Valor bruto:
          <span className="Amount">R$ {amount.total}</span>
          <span className="Tooltip" />
        </span>

        <div className="Slider">
          <input type="range" list="marks" onChange={({ target: { value } }) => setValue(value)} />

          <datalist id="marks">
            {
              conditions.terms.map((term, i) => (
                <option value={i * 25}></option>
              ))
            }
          </datalist>
          <br />
          <span className="Amount">R$ {conditions.amount[0]}</span>
          <span className="Amount">R$ {conditions.amount[4]}</span>
          <br />
        </div>

        <span className="Typography">Quantidade de parcelas</span>
        <br />

        {
          conditions.terms.map((term) => (
            <span className="Card">
              <span className="Typography">
                {term} meses
                <span className="Amount">R$ {term}</span>
                <br />
              </span>
            </span>
          ))
        }

        <button className="Button" type="button">Gostei, continuar</button>

        <small className="Typography">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus numquam adipisci quidem repellat reprehenderit enim suscipit asperiores sed consectetur eaque, voluptatem rem? Quae, eum quibusdam! Obcaecati amet possimus in?</small>
      </div>
    </div>
  );
};

export default Simulator;
