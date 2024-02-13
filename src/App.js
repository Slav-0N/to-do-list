// import React from "react";
import { Component } from "react";
import Counter from "./Components/Counter/Counter";
// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

class App extends Component {
  state = {
    value: 0,
  };

  render() {
    return (
      <div>
        <Container>
          <Counter />
        </Container>
      </div>
    );
  }
}

export default App;
