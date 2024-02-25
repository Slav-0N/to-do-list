import { Component } from "react";

import ListElement from "../ListElement/ListElement";
import FormCreateTodo from "../NewElement/NewElement";

import FormFilterTodo from "../FormFilterTod/FormFilterTodo";
import { getAllTodo } from "../../api/todo";

class List extends Component {
  state = {
    toDoList: null,
    filter: null,
  };

  componentDidMount() {
    const url = "https://dummyjson.com/todos";
    getAllTodo(url).then((data) => console.log(data));
  }

  handleDelete = (id) => {};

  addNewToDo = (newToDoElement) => {};

  FilteredList = (filterQuery) => {};

  handleCheck = (id) => {};

  render() {
    return (
      <div className="container">
        <h3> Add new todo</h3>

        {/* <FormCreateTodo
          handleChangeForm={this.handleChangeForm}
          addNewToDo={this.addNewToDo}
        />
        <FormFilterTodo FilteredList={this.FilteredList} />
        <ul>
          {(this.state.filter ?? this.state.toDoList).map((el) => (
            <ListElement
              todo={el}
              key={el.id}
              handleDelete={this.handleDelete}
              handleCheck={this.handleCheck}
              updateLocalData={this.updateLocalData}
            />
          ))}
        </ul> */}
      </div>
    );
  }
}

export default List;
