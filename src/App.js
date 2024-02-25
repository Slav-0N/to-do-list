import { Component } from "react";
import Container from "@mui/material/Container";

import List from "./Components/List/List";
import Header from "./Components/Header/Header";

class App extends Component {
  state = {
    value: 0,
  };

  render() {
    return (
      <div>
        <Container>
          <Header />
          <List />
        </Container>
      </div>
    );
  }
}

export default App;
