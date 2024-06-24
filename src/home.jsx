import React, { useEffect, useState } from "react";
import Input from "./input";
import axios from "axios";

const home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <Input />
      {todos.length === 0 ? (
        <div>
          <h2>Empty</h2>
        </div>
      ) : (
        todos.map((todo) => <div>{todo.task}</div>)
      )}
    </div>
  );
};

export default home;
home;
