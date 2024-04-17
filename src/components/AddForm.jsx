import React from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../store/actions/todoActions";

import api from "../utils/api";
import { toast } from "react-toastify";

const AddForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value.trim();
    if (text !== "") {
      const newTodo = {
        id: v4(),
        text: text,
        is_done: false,
        created_ad: new Date().toLocaleDateString(),
      };
      const promise = api
        .post("/todos", newTodo)
        .then(() => dispatch(addTodo(newTodo)))
        .catch((err) => {
          throw new Error();
        });

      toast.promise(promise, {
        pending: "Promise is pending",
        success: "Promise resolved 👌",
        error: "Promise rejected 🤯",
      });
    }
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
        <input
          className="form-control"
          placeholder="eg: ts project"
          type="text"
        />
        <button className="btn btn-warning text-light fw-bolder">Submit</button>
      </form>
    </div>
  );
};

export default AddForm;
