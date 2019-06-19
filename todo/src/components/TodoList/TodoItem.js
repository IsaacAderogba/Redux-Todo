import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo, saveTodos } from "../../actions/index";
import './TodoList.css';

const TodoItem = props => {
  const { value, completed, id } = props;
  const { toggleTodo, deleteTodo, saveTodos } = props;

  const onToggleTodo = () => {
    toggleTodo(id)
    saveTodos();
  }

  const onDeleteTodo = () => {
    deleteTodo(id)
    saveTodos();
  }

  return (
    <div className={"ui card fluid"}>
      <div className="content">
        <p className="description" onClick={onToggleTodo}>
          {value}
        </p>
      </div>
      <button className="extra content" onClick={onDeleteTodo}>
        X {completed ? "| Task Completed" : ''}
      </button>
    </div>
  );
};

export default connect(
  null,
  { toggleTodo, deleteTodo, saveTodos }
)(TodoItem);
