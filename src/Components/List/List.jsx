import { Component } from "react";
import toDoList from "../../data/toDoList.json";
import ListElement from "../ListElement/ListElement";

class List extends Component {
  state = {
    toDoList,
  };
  handleDelete = (id) => {
    this.setState((prev) => ({
      toDoList: prev.toDoList.filter((el) => el.id !== id),
    }));
  };

  render() {
    return (
      <ul>
        {this.state.toDoList.map((el) => (
          <ListElement todo={el} key={el.id} handleDelete={this.handleDelete} />
        ))}
      </ul>
    );
  }
}

export default List;
