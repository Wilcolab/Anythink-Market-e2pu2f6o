const express = require('express');

const app = express();
const port = 8001;

// Middleware
app.use(express.json());

// In-memory task list (migrated from Python server)
const tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// GET / endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

// POST /tasks endpoint - Add a new task
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Task text is required' });
  }
  tasks.push(text);
  res.json({ message: 'Task added successfully' });
});

// GET /tasks endpoint - Retrieve all tasks
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

app.listen(port, () => {
  console.log(`Node server listening on port ${port}`);
});
