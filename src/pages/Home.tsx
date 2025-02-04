import React from "react";
import TodoCreator from "../components/TodoCreator";
import { TodoCounter } from "../components/TodoCounter";
import TodoContainer from "../components/TodoContainer";

const Home: React.FC = () => {
  return (
    <>
      <TodoCounter />
      <TodoCreator />
      <TodoContainer />
    </>
  );
};

export default Home;
