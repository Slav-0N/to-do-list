// const ListElement = ({ todo, handleDelete }) => {

import { Component } from "react";

class ListElement extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.todo.title !== this.props.todo.title ||
      nextProps.todo.completed !== this.props.todo.completed
    )
      return true;
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todo.completed !== this.props.todo.completed) {
      this.props.updateLocalData();
    }
  }

  componentWillUnmount() {
    // alert("щось видалили");
  }

  render() {
    console.log(
      "render -->>>",
      this.props.todo.title,
      this.props.todo.completed
    );
    const { todo, handleDelete, handleCheck } = this.props;
    return (
      <li>
        <h6>{todo.title}</h6>
        <span>{todo.description}</span>
        <input
          type="checkbox"
          id="chckBx"
          name="agreed"
          checked={todo.completed}
          onChange={() => handleCheck(todo.id)}
        ></input>
        <label htmlFor="chckBx">готово</label>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={() => handleDelete(todo.id)}
        ></button>
      </li>
    );
  }
}

export default ListElement;
