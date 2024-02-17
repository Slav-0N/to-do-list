import { Component } from "react";
import { nanoid } from "nanoid";
const INITIALSTATE = {
  title: "",
  description: "",
};

class FormCreateTodo extends Component {
  state = { ...INITIALSTATE };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addNewToDo } = this.props;
    addNewToDo(this.state);
    this.setState(INITIALSTATE);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className=" mb-3 mt-3">
          <label htmlFor="titleInputToDo">Title:</label>
          <input
            type="text"
            id="titleInputToDo"
            className="form-control"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </div>
        <div className=" mb-3 mt-3">
          <label htmlFor="descrInputToDo">Description:</label>
          <input
            type="text"
            id="descrInputToDo"
            className="form-control"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-5">
          Create todo
        </button>
      </form>
    );
  }
}

export default FormCreateTodo;
