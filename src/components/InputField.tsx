import { Box, TextField, Button } from "@mui/material";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <Box sx={{ textAlign: "center", position: "relative" }}>
      <TextField
        id="outlined-basic"
        label="Add new..."
        variant="outlined"
        sx={{
          width: "80%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <Button
        sx={{ position: "absolute", left: "80%", top: "20%" }}
        onClick={handleAdd}
        variant="outlined"
      >
        Go
      </Button>
    </Box>
  );
};

export default InputField;
