import { Component } from "react";
import toDoList from "../../data/toDoList.json";
import ListElement from "../ListElement/ListElement";
import FormCreateTodo from "../NewElement/NewElement";
import { nanoid } from "nanoid";
import FormFilterTodo from "../FormFilterTod/FormFilterTodo";

class List extends Component {
  state = {
    toDoList: [],
    filter: null,
  };

  componentDidMount() {
    const localData = localStorage.getItem("toDoList");
    if (localData && JSON.parse(localData).length > 0) {
      this.setState({ toDoList: JSON.parse(localData) });
    } else {
      this.setState({ toDoList: toDoList });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.toDoList.length > this.state.toDoList.length) {
      localStorage.setItem("toDoList", JSON.stringify(this.state.toDoList));
    }
  }

  // componentWillUnmount() {
  //   alert("перезавантажива Апп");
  // }

  updateLocalData = () => {
    localStorage.setItem("toDoList", JSON.stringify(this.state.toDoList));
  };

  handleDelete = (id) => {
    this.setState((prev) => ({
      toDoList: prev.toDoList.filter((el) => el.id !== id),
    }));
  };

  addNewToDo = (newToDoElement) => {
    const isAlreadyExist = this.state.toDoList.find(
      (el) => el.title === newToDoElement.title
    );

    if (isAlreadyExist) {
      return alert("The same ToDo is already exist ");
    }
    this.setState(
      (prev) => ({
        toDoList: [
          {
            ...newToDoElement,
            completed: false,
            id: nanoid(),
          },
          ...prev.toDoList,
        ],
      }),
      () => console.log(this.state)
    );
  };

  FilteredList = (filterQuery) => {
    this.setState(
      {
        filter: this.state.toDoList.filter((el) =>
          el.title.toLowerCase().includes(filterQuery.toLowerCase())
        ),
      },
      () => console.log(this.state.filter)
    );
  };

  handleCheck = (id) => {
    console.log(id);
    this.setState((prev) => ({
      toDoList: prev.toDoList.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : { ...el }
      ),
    }));
  };

  render() {
    return (
      <div className="container">
        <h3> Add new todo</h3>

        <FormCreateTodo
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
        </ul>
      </div>
    );
  }
}

export default List;
