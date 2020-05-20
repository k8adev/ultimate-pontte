import React from 'react';

const Simulator = () => (
  <div>
    <div className="Card">
      <h1 className="Typography">Valor Solicitado</h1>

      <span className="Typography">
        <span className="Amount">R$ 100.000,000</span>
      </span>

      <span className="Typography">
        Valor bruto:
        <span className="Amount">R$ 100.000,002</span>
        <span className="Tooltip" />
      </span>

      <div className="Slider">
        <span className="Amount">R$ 100,00</span>
        <span className="Amount">R$ 200,00</span>
      </div>

      <span className="Typography">Quantidade de parcelas</span>

      {
        [1, 2, 3, 4, 5].map((e) => (
          <span className="Card">
            <span className="Typography">
              { e }
              meses
              <span className="Amount">R$ 300,00</span>
            </span>
          </span>
        ))
      }

      <button className="Button" type="button">Gostei, continuar</button>

      <small className="Typography">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus numquam adipisci quidem repellat reprehenderit enim suscipit asperiores sed consectetur eaque, voluptatem rem? Quae, eum quibusdam! Obcaecati amet possimus in?</small>
    </div>
  </div>
);

export default Simulator;
