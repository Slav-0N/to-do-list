// const ListElement = ({ todo, handleDelete }) => {

import { Component } from "react";
import { Element } from "./ListElement.styled";

class ListElement extends Component {
  render() {
    console.log(
      "render -->>>",
      this.props.todo.todo,
      this.props.todo.completed
    );
    const { todo, handleDelete, handleCheck } = this.props;
    return (
      <Element>
        <h6>{todo.todo}</h6>

        <div>
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
        </div>
      </Element>
    );
  }
}

export default ListElement;
