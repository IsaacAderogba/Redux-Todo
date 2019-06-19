import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = props => {
  const { todos } = props;
  return (
    <div>
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            value={todo.value}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);
