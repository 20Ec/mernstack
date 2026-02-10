import express from "express";
import Todo from "../models/Todo.js"; // Importing the Todo model from

const router = express.Router();

/* READ */
router.get("/", async (req, res) => {
  const todos = await Todo.find(); // Fetching all todo items from the database
  res.json(todos);
});

/* CREATE */
router.post("/", async (req, res) => {
  const newTodo = new Todo({ text: req.body.text }); // Creating a new todo item
  console.log(req.body.text);
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
});

/* UPDATE */
router.put("/:id", async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id, // Finding the todo item by ID
    { text: req.body.text }, // Updating the text of the todo item
    { new: true } // Return the updated document
  );
  res.json(updatedTodo); // Sending the updated todo item as a response
});


/* DELETE */
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id); // Deleting the todo item by ID
  res.json({ message: "Todo deleted" }); // Sending a response indicating that the todo item has been deleted
});

export default router;
