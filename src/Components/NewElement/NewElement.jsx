import { Component } from "react";
// import { nanoid } from "nanoid";
const INITIALSTATE = {
  title: "",
  description: "",
  isValid: true,
};

class FormCreateTodo extends Component {
  state = { ...INITIALSTATE };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.description)
      return this.setState({ isValid: false });
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
            className={`form-control ${!this.state.isValid && `is-invalid`}`}
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <div
            id="validationServerUsernameFeedback"
            className="invalid-feedback"
          >
            Please choose title!
          </div>
        </div>
        <div className=" mb-3 mt-3">
          <label htmlFor="descrInputToDo">Description:</label>
          <input
            type="text"
            id="descrInputToDo"
            className={`form-control ${!this.state.isValid && `is-invalid`}`}
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <div
            id="validationServerUsernameFeedback"
            className="invalid-feedback"
          >
            Please choose description!
          </div>
        </div>
        <button type="submit" className="btn btn-primary mb-5">
          Create todo
        </button>
      </form>
    );
  }
}

export default FormCreateTodo;
