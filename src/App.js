import { Component } from "react";
import Container from "@mui/material/Container";
import DrawerAppBar from "./Components/Header/Header";
import List from "./Components/List/List";

class App extends Component {
  state = {
    value: 0,
  };

  render() {
    return (
      <div>
        <Container>
          <DrawerAppBar fixed={true} />

          <List />
        </Container>
      </div>
    );
  }
}

export default App;
