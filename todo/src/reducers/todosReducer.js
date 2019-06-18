import todosState from "../state/todosState";

import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SAVE_TODOS
} from "../actions/index";

export default (state = todosState, action) => {
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

    case SAVE_TODOS:
      localStorage.clear();
      let count = 0;
      state.forEach(todo => {
        localStorage.setItem(count, JSON.stringify(todo));
        count++;
      });
      return state;

    default:
      return state;
  }
};
