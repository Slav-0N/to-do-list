import { Component } from "react";
import { Wrap, Value, ButtonPlus, ButtonMinus } from "./Counter.styled";

class Counter extends Component {
  state = {
    value: 0,
  };

  handleClicPlus = () => {
    this.setState((prev) => ({ value: prev.value + 1 }));
  };

  handleClicMinus = () => {
    this.setState((prev) => ({ value: prev.value - 1 }));
  };

  render() {
    const color = this.state.value < 0 ? "red" : "green";
    return (
      <Wrap>
        <Value style={{ color }}>{this.state.value}</Value>
        <ButtonPlus onClick={this.handleClicPlus}> +1 питання</ButtonPlus>
        <ButtonMinus onClick={this.handleClicMinus}> -1 </ButtonMinus>
      </Wrap>
    );
  }
}

export default Counter;
