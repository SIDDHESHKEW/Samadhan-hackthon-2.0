const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Temporary in-memory data (like a database)
let students = [
  { id: 1, name: "Vaishnavi", age: 21 },
  { id: 2, name: "Siddhesh", age: 22 }
];

// Routes
// GET - Read all students
app.get('/students', (req, res) => {
  res.json(students);
});

// POST - Create a new student
app.post('/students', (req, res) => {
  const newStudent = { id: students.length + 1, ...req.body };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT - Update a student
app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex(s => s.id === id);
  if (studentIndex !== -1) {
    students[studentIndex] = { id, ...req.body };
    res.json(students[studentIndex]);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// DELETE - Remove a student
app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);
  res.json({ message: "Student deleted" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
