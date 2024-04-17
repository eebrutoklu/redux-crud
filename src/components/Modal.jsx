import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { updateTodo } from "../store/actions/todoActions";
import api from "../utils/api";

const Modal = ({ close, todo }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const newText = inputRef.current.value;
    const updatedTodo = {
      ...todo,
      text: newText,
      created_at: new Date().toLocaleDateString(),
    };

    api
      .put(`/todos/${todo.id}`, updatedTodo)
      .then(() => dispatch(updateTodo(updatedTodo)))
      .catch((err) => alert("Sorry, an error occurred."));
    close();
  };
  return (
    <div>
      <div
        className="modal bg-black bg-opacity-50 d-block text-dark"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Todo Uptaded.</h5>
            </div>

            <div className="modal-body my-2">
              <label>New Text</label>
              <input
                ref={inputRef}
                className="form-control shadow mt-2"
                type="text"
                defaultValue={todo.text}
              />
            </div>
            <div className="modal-footer">
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={close}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
