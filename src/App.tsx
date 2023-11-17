import React, { useState } from "react";
import InputField from "./components/InputField";
import { Typography, Container, Paper, Divider } from "@mui/material";
import { Todo } from "./components/model";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  // console.log(todo);
  const handleAdd = () => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  // console.log(todos);
  return (
    <Container>
      <Paper elevation={3}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", padding: "50px 0px", color: "#258fe3" }}
        >
          My Todo-s
        </Typography>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <Divider sx={{ margin: "20px 0px" }} />
        <ToDoList todos={todos} setTodos={setTodos} />
      </Paper>
    </Container>
  );
};

export default App;
