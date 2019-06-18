import React from "react";
import TodoList from "../components/TodoList/TodoList";
import TodoHeader from "../components/TodoHeader/TodoHeader";

const Home = () => {
  return (
    <div className="ui container">
      <TodoHeader />
      <div className="ui divider"></div>
      <TodoList />
    </div>
  );
};

export default Home;
