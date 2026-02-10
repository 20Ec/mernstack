import { useState } from "react";

function Ti() {
  const [todos, setTodos] = useState(["Learn React", "Build Vite App"]);

  const addTodo = () => setTodos([...todos, "New Task"]);

  return (
    <div>
      <h2>Todos:</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default Ti; // ✅ export the component
