import { ActionTypes } from "../actionTypes";

const initialState = {
  todos: [],
  isDarkMode: true,
  x: "",
  y: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return { ...state, todos: state.todos.concat(action.payload) };
    case ActionTypes.DELETE:
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      return { ...state, todos: filtred };
    case ActionTypes.UPDATE:
      const updatedArr = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, todos: updatedArr };
    case ActionTypes.SET:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
