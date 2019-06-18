import dummyTodos from "../constants/dummyTodos";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/index";

export default (state = dummyTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    default:
      return state;
  }
};
