import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../../actions/index";

const TodoItem = props => {
  const { value, completed } = props;
  const { toggleTodo, deleteTodo } = props;

  return (
    <div>
      <p>{value}</p>
      <button>{`${completed}`}</button>
    </div>
  );
};

export default connect(
  null,
  { toggleTodo, deleteTodo }
)(TodoItem);
