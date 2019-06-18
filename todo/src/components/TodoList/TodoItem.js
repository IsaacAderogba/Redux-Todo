import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../../actions/index";

const TodoItem = props => {
  const { value, completed, id } = props;
  const { toggleTodo, deleteTodo } = props;

  return (
    <div>
      <p onClick={() => toggleTodo(id)}>{value}</p>
      <button>{`${completed}`}</button>
      <button onClick={() => deleteTodo(id)}>X</button>
    </div>
  );
};

export default connect(
  null,
  { toggleTodo, deleteTodo }
)(TodoItem);
