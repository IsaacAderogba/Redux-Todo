import React, { useState } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { addTodo, saveTodos } from "../../actions/index";

const TodoAdd = props => {
  const [term, setTerm] = useState("");
  const { addTodo, saveTodos } = props;

  const onSubmitForm = event => {
    event.preventDefault();
    addTodo({
      id: uuid(),
      value: term,
      completed: false
    });
    saveTodos();
    setTerm("");
  };

  return (
    <form className="ui fluid input" onSubmit={onSubmitForm}>
      <input
        placeholder="Add Todo"
        term="value"
        onChange={input => setTerm(input.target.value)}
      />
    </form>
  );
};

export default connect(
  null,
  { addTodo, saveTodos }
)(TodoAdd);
