import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const API = "http://localhost:5000/api/todos";

  // READ todos
  useEffect(() => {
    axios.get(API).then((response) => { // Fetching all todo items from the backend API
      setTodos(response.data); // Updating the state with the fetched todo items
    });
  }, []);

  // CREATE todo
  const addTodo = () => {
    axios.post(API, { text }).then((response) => {  // Sending a POST request to the backend API to create a new todo item with the text from the input field
      setTodos([...todos, response.data]); // Updating the state by adding the newly created todo item to the existing list of todos
      setText(""); // Clearing the input field after adding the todo item
    });
  };

  // UPDATE todo
  const updateTodo = () => {
    axios.put(API + "/" + editId, { text }).then((response) => { // Sending a PUT request to the backend API to update the existing todo item with the specified ID (editId) and the new text from the input field
      setTodos(
        todos.map((todo) => //  Updating the state by mapping through the existing list of todos and replacing the updated todo item with the response from the backend API
          todo._id === editId ? response.data : todo // Checking if the current todo item in the map has the same ID as the editId, if it does, replace it with the updated todo item from the response, otherwise keep it unchanged
        )
      );
      setEditId(null); // Resetting the editId state to null after updating the todo item 
      setText(""); // Clearing the input field after updating the todo item
    });
  };

  // DELETE todo
  const deleteTodo = (id) => {
    axios.delete(API + "/" + id).then(() => { // Sending a DELETE request to the backend API to delete the todo item with the specified ID
      setTodos(todos.filter((todo) => todo._id !== id)); // Updating the state by filtering out the deleted todo item from the existing list of todos, keeping only those that do not have the same ID as the deleted item
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo App</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />

      {editId ? (
        <button onClick={updateTodo}>Update</button>
      ) : (
        <button onClick={addTodo}>Add</button>
      )}

      <ul>
        {todos.map((todo) => (

          
          <li key={todo._id}>
            {todo.text}

            <button
              onClick={() => {
                setEditId(todo._id);
                setText(todo.text);
              }}
            >
              Edit
            </button>

            <button onClick={() => deleteTodo(todo._id)}>
              Delete
            </button>
          </li>
        ))
        }

      </ul>


    </div>
  );
}

export default App;
