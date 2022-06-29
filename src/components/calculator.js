/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="Calc-Container">
        <div className="input AR">
          0
        </div>
        <div className="calculator-symbols">
          <button className="calculator__btn" type="button">AC</button>
          <button className="calculator__btn" type="button">+/-</button>
          <button className="calculator__btn" type="button">%</button>
          <button className="calculator__btn calculator__btn--primary" type="button">÷</button>
          <button className="calculator__btn" type="button">7</button>
          <button className="calculator__btn" type="button">8</button>
          <button className="calculator__btn" type="button">9</button>
          <button className="calculator__btn calculator__btn--primary" type="button">x</button>
          <button className="calculator__btn" type="button">4</button>
          <button className="calculator__btn" type="button">5</button>
          <button className="calculator__btn" type="button">6</button>
          <button className="calculator__btn calculator__btn--primary" type="button">-</button>
          <button className="calculator__btn" type="button">1</button>
          <button className="calculator__btn" type="button">2</button>
          <button className="calculator__btn" type="button">3</button>
          <button className="calculator__btn calculator__btn--primary" type="button">+</button>
          <button className="calculator__btn calculator__btn span " type="button">0</button>
          <button className="calculator__btn" type="button">.</button>
          <button className="calculator__btn calculator__btn--primary" type="button">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
