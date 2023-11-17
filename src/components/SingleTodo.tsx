import React, { useEffect, useRef, useState } from "react";
import { Todo } from "./model";
import { Typography, Stack, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Box sx={{ paddingBottom: "30px" }}>
      <form onSubmit={(e) => handleEdit(e, todo.id)}>
        <Box
          sx={{
            //   border: "1px solid #2ebaef",
            borderRadius: "5px",
            width: "80%",
            margin: "auto",
            marginTop: "20px",
            backgroundColor: "#258fe3",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            {edit ? (
              <input
                ref={inputRef}
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              />
            ) : todo.isDone ? (
              <s>{todo.todo}</s>
            ) : (
              <Typography variant="h4" sx={{ color: "#fff" }}>
                {todo.todo}
              </Typography>
            )}
            <Box>
              <EditIcon
                sx={{ marginRight: "20px", color: "#fff" }}
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit);
                  }
                }}
              />
              <DeleteIcon
                sx={{ marginRight: "20px", color: "#fff" }}
                onClick={() => handleDelete(todo.id)}
              />
              <DoneIcon
                sx={{ color: "#fff" }}
                onClick={() => handleDone(todo.id)}
              />
            </Box>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default SingleTodo;
