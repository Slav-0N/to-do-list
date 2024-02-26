import { Component } from "react";

import ListElement from "../ListElement/ListElement";
import FormCreateTodo from "../NewElement/NewElement";

import FormFilterTodo from "../FormFilterTod/FormFilterTodo";
import { getAllTodo } from "../../api/todo";

class List extends Component {
  state = {
    toDoList: null,
    filter: null,
    error: "",
  };

  componentDidMount() {
    getAllTodo()
      .then((data) =>
        this.setState({ toDoList: data.todos }, () => console.log(this.state))
      )
      .catch((error) => this.setState({ error }));
  }

  handleDelete = (id) => {};

  addNewToDo = (newToDoElement) => {};

  FilteredList = (filterQuery) => {};

  handleCheck = (id) => {};

  render() {
    const {
      // handleChangeForm,
      addNewToDo,
      FilteredList,
      handleDelete,
      handleCheck,
      state: { filter, toDoList, error },
    } = this;
    console.log(error);

    const ulStyle = {
      padding: "0 0 0 0",
      margin: "0 0 0 0",
      listStyle: "none",
    };

    return (
      <div className="container">
        <h3> Add new todo</h3>

        <FormCreateTodo
          // handleChangeForm={handleChangeForm}
          addNewToDo={addNewToDo}
        />
        <FormFilterTodo FilteredList={FilteredList} />
        {error && (
          <>
            <h1>{error.message}</h1>
            <p>{error.response.data}</p>
          </>
        )}
        <ul style={ulStyle}>
          {toDoList &&
            (filter ?? toDoList).map((el) => (
              <ListElement
                todo={el}
                key={el.id}
                handleDelete={handleDelete}
                handleCheck={handleCheck}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default List;
