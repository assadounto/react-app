/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };

    this.change = this.change.bind(this);
    this.click = this.click.bind(this);
  }

  change(input) {
    this.setState({
      next: input.target.innerHTML,
    });
  }

  click(input) {
    const data = input.target.innerHTML;
    const calculator = calculate(this.state, data);
    this.setState(calculator);
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="Calc-Container">
        <div className="input AR" onChange={this.change}>
          {next || total || 0}
        </div>
        <div className="calculator-symbols">
          <button className="calculator__btn" type="button" onClick={this.click}>AC</button>
          <button className="calculator__btn" type="button" onClick={this.click}>+/-</button>
          <button className="calculator__btn" type="button" onClick={this.click}>%</button>
          <button className="calculator__btn calculator__btn--primary" type="button" onClick={this.click}>÷</button>
          <button className="calculator__btn" type="button" onClick={this.click}>7</button>
          <button className="calculator__btn" type="button" onClick={this.click}>8</button>
          <button className="calculator__btn" type="button" onClick={this.click}>9</button>
          <button className="calculator__btn calculator__btn--primary" type="button" onClick={this.click}>x</button>
          <button className="calculator__btn" type="button" onClick={this.click}>4</button>
          <button className="calculator__btn" type="button" onClick={this.click}>5</button>
          <button className="calculator__btn" type="button" onClick={this.click}>6</button>
          <button className="calculator__btn calculator__btn--primary" type="button" onClick={this.click}>-</button>
          <button className="calculator__btn" type="button" onClick={this.click}>1</button>
          <button className="calculator__btn" type="button" onClick={this.click}>2</button>
          <button className="calculator__btn" type="button" onClick={this.click}>3</button>
          <button className="calculator__btn calculator__btn--primary" type="button" onClick={this.click}>+</button>
          <button className="calculator__btn calculator__btn span " type="button" onClick={this.click}>0</button>
          <button className="calculator__btn" type="button" onClick={this.click}>.</button>
          <button className="calculator__btn calculator__btn--primary" type="button" onClick={this.click}>=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
