import React, { useState, useEffect } from "react";

export default function App() {
  const [students, setStudents] = useState([])};

  useEffect(() => {
    // Using mock API instead of localhost for testing
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // Map mock API users to student-like data
        const formatted = data.map((u) => ({
          id: u.id,
          name: u.name,
          age: 20 + (u.id % 5), // fake age
        }));
        setStudents(formatted);
      })
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  return;
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>📘 Student Directory</h2>

      {students.length === 0 ? (
        <p>Loading students...</p>
      ) : (
        <ul>
          {students.map((s) => (
            <li key={s.id}>
              <b>{s.name}</b> ({s.age} years old)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
