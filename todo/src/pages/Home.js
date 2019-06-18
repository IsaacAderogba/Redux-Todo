import React from "react";
import TodoList from "../components/TodoList/TodoList";
import TodoHeader from "../components/TodoHeader/TodoHeader";

const Home = () => {
  return (
    <div>
      <TodoHeader />
      <TodoList />
    </div>
  );
};

export default Home;
