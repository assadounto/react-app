import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ next: 0, total: 0 });
  const change = (input) => {
    setState({ next: input.target.innerHTML });
  };

  const click = (input) => {
    const data = input.target.innerHTML;
    const calculator = calculate(state, data);
    setState(calculator);
  };

  return (
    <div className="Calc-Container">
      <div className="input AR" onChange={change}>
        {state.next || state.total || 0}
      </div>
      <div className="calculator-symbols">
        <button className="calculator__btn" type="button" onClick={click}>AC</button>
        <button className="calculator__btn" type="button" onClick={click}>+/-</button>
        <button className="calculator__btn" type="button" onClick={click}>%</button>
        <button className="calculator__btn calculator__btn--primary" type="button" onClick={click}>÷</button>
        <button className="calculator__btn" type="button" onClick={click}>7</button>
        <button className="calculator__btn" type="button" onClick={click}>8</button>
        <button className="calculator__btn" type="button" onClick={click}>9</button>
        <button className="calculator__btn calculator__btn--primary" type="button" onClick={click}>x</button>
        <button className="calculator__btn" type="button" onClick={click}>4</button>
        <button className="calculator__btn" type="button" onClick={click}>5</button>
        <button className="calculator__btn" type="button" onClick={click}>6</button>
        <button className="calculator__btn calculator__btn--primary" type="button" onClick={click}>-</button>
        <button className="calculator__btn" type="button" onClick={click}>1</button>
        <button className="calculator__btn" type="button" onClick={click}>2</button>
        <button className="calculator__btn" type="button" onClick={click}>3</button>
        <button className="calculator__btn calculator__btn--primary" type="button" onClick={click}>+</button>
        <button className="calculator__btn calculator__btn span " type="button" onClick={click}>0</button>
        <button className="calculator__btn" type="button" onClick={click}>.</button>
        <button className="calculator__btn calculator__btn--primary" type="button" onClick={click}>=</button>
      </div>
    </div>
  );
};
export default Calculator;
