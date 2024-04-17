import React, { useEffect } from "react";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
import { useDispatch } from "react-redux";
import { setTodos } from "./store/actions/todoActions";
import api from "./utils/api";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    api.get("/todos").then((res) => dispatch(setTodos(res.data)));
  }, []);

  return (
    <div className="vh-100 vw-100 bg-dark text-light">
      <div className="container p-5">
        <h2 className="text-center fw-bolder">
          REDUX <span className="text-warning">CRUD </span>
        </h2>

        <AddForm />
        <ListTodos />
      </div>
    </div>
  );
};

export default App;
