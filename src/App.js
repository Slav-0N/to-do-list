import { Component } from "react";
import Container from "@mui/material/Container";

import List from "./Components/List/List";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";

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
          <Modal />
        </Container>
      </div>
    );
  }
}

export default App;
