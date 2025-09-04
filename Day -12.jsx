import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Step 1: Fetch existing students from backend
  useEffect(() => {
    axios.get("http://localhost:5000/students")
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  // Step 2: Function to add a new student
  const handleAdd = () => {
    axios.post("http://localhost:5000/students", { name, age })
      .then(res => {
        setStudents([...students, res.data]);  // add new student to list
        setName(""); // clear input after adding
        setAge("");
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎓 Student Directory</h1>

      {/* Form to add new student */}
      <h3>Add Student</h3>
      <input 
        type="text" 
        placeholder="Enter name" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Enter age" 
        value={age} 
        onChange={e => setAge(e.target.value)} 
      />
      <button onClick={handleAdd}>Add</button>

      {/* Show student list */}
      <h3>All Students</h3>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} ({student.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
