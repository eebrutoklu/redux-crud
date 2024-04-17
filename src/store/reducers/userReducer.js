const initialState = {
  users: [],

  x: "",
  y: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return state;
    case "SUBTRACT":
      return state;
    default:
      return state;
  }
};

export default userReducer;
