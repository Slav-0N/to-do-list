const ListElement = ({ todo, handleDelete }) => {
  console.log(todo);
  return (
    <li>
      <span>{todo.title}</span>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={() => handleDelete(todo.id)}
      ></button>
    </li>
  );
};

export default ListElement;
