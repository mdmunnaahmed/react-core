import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const uwarning = inputValue.includes(".js") ? "you need to improve your js skill" : null;

    setTodo(inputValue);
    setWarning(uwarning);
  };
  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput}></textarea>
      </p>
      <h2>{warning || "Good job man"}</h2>
    </div>
  );
};

export default Todo;
