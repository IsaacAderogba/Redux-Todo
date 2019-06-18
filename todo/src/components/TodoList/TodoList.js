import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { toggleTodo, deleteTodo } from "../../actions/index";

const TodoList = props => {
  const { todos } = props;
  return (
    <div>
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
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
