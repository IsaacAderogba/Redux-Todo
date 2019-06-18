import React, { useState } from "react";
import { addTodo } from "../../actions/index";

const TodoAdd = () => {
  const [term, setTerm] = useState("");

  const onSubmitForm = event => {
    event.preventDefault();
    console.log(term);
    setTerm("");
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        placeholder="Add Todo"
        term="value"
        onChange={input => setTerm(input.target.value)}
      />
    </form>
  );
};

export default TodoAdd;
