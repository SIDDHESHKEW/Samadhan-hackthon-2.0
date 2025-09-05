const express = require('express');
const app = express();

app.use(express.json());

// Example routes
app.get('/', (req, res) => {
  res.send('Server running ✅');
});

app.get('/api/notes', (req, res) => {
  res.json({ message: "All notes will be returned here" });
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  res.json({ message: "New note created", note: newNote });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
