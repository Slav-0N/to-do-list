const ListElement = ({ todo, handleDelete }) => {
  return (
    <li>
      <h6>{todo.title}</h6>
      <span>{todo.description}</span>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={() => handleDelete(todo.id)}
      ></button>
    </li>
  );
};

export default ListElement;
