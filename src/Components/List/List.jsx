import { Component } from "react";
import toDoList from "../../data/toDoList.json";
import ListElement from "../ListElement/ListElement";
import FormCreateTodo from "../NewElement/NewElement";
import { nanoid } from "nanoid";

class List extends Component {
  state = {
    toDoList,
  };

  handleDelete = (id) => {
    this.setState((prev) => ({
      toDoList: prev.toDoList.filter((el) => el.id !== id),
    }));
  };

  addNewToDo = (newToDoElement) => {
    this.setState(
      (prev) => ({
        toDoList: [
          ...prev.toDoList,
          {
            ...newToDoElement,
            completed: false,
            id: nanoid(),
          },
        ],
      }),
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div className="container">
        <h3> Add new todo</h3>
        <FormCreateTodo
          handleChangeForm={this.handleChangeForm}
          addNewToDo={this.addNewToDo}
        />
        <ul>
          {this.state.toDoList.map((el) => (
            <ListElement
              todo={el}
              key={el.id}
              handleDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
