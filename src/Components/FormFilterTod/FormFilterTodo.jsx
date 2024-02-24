import React from "react";

const FormFilterTodo = ({ FilteredList }) => {
  const handleChange = ({ target: { value } }) => {
    FilteredList(value);
  };

  return (
    <div className=" mb-3 mt-3">
      <label htmlFor="titleInputToDo">Filter form:</label>
      <input
        type="text"
        id="titleInputToDo"
        className="form-control"
        name="filter"
        onChange={handleChange}
        // value={this.state.title}
      />
    </div>
  );
};
export default FormFilterTodo;
