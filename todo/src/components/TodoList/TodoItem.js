import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../../actions/index";
import './TodoList.css';

const TodoItem = props => {
  const { value, completed, id } = props;
  const { toggleTodo, deleteTodo } = props;

  return (
    <div className={"ui card fluid"}>
      <div className="content">
        <p className="description" onClick={() => toggleTodo(id)}>
          {value}
        </p>
      </div>
      <button className="extra content" onClick={() => deleteTodo(id)}>
        X {completed ? "| Task Completed" : ''}
      </button>
    </div>
  );
};

export default connect(
  null,
  { toggleTodo, deleteTodo }
)(TodoItem);
