import React, { useState } from "react";
import { GrCompliance } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { BiSolidEditAlt } from "react-icons/bi";
import Modal from "./Modal";
import { deleteTodo, updateTodo } from "../store/actions/todoActions";
import api from "../utils/api";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    api
      .delete(`/todos/${todo.id}`)
      .then(() => {
        dispatch(deleteTodo(todo.id));
      })
      .catch((err) => alert("Sorry, an error occurred."));
  };

  const toggleIsDone = () => {
    const updated = { ...todo, is_done: !todo.is_done };

    api
      .put(`/todos/${todo.id}`, updated)
      .then(() => dispatch(updateTodo(updated)))
      .catch((err) => alert("Sorry, an error occurred."));
  };
  return (
    <div className="border shadow-lg p-4 my-3 rounded-3 border-dark">
      <div className="d-flex justify-content-between">
        <h5>{todo.text} </h5>
        <h6>{todo.is_done ? <GrCompliance /> : <BiSolidEditAlt />} </h6>
      </div>
      <p className="">{todo.created_ad} </p>
      <button className="btn btn-primary" onClick={() => setIsOpen(!isOpen)}>
        Edit
      </button>
      <button className="btn btn-danger mx-2" onClick={handleDelete}>
        Delete
      </button>
      <button className="btn btn-success" onClick={toggleIsDone}>
        {todo.is_done ? "Undo" : "Complete"}
      </button>
      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
