// Import express
const express = require("express");

// Create app
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample student data
let students = [
  { id: 1, name: "Siddhesh", course: "AL & ML" },
  { id: 2, name: "Yash", course: "AI & ML" },
  { id: 3, name: "Vikrant", course: "AI & ML" }
];

// GET route - return list of students
app.get("/students", (req, res) => {
  res.json(students);
});

// POST route - add a new student
app.post("/students", (req, res) => {
  const newStudent = req.body; 
  students.push(newStudent);
  res.json({ message: "Student added successfully!", students });
});

// Start server
app.listen(PORT, () => {
  console.log('Server running at http://localhost:3000');
});