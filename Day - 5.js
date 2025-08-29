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



// Package.json 
{
  "name": "day-5",
  "version": "1.0.0",
  "description": "",
  "main": "day5_express.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^5.1.0"
  }
}

// Start server
app.listen(PORT, () => {
  console.log('Server running at http://localhost:3000');

});
