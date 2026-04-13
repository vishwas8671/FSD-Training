const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 4007;

app.use(cors());
app.use(express.json());

const usersFile = path.join(__dirname, 'student.json');
const studentsFile = path.join(__dirname, 'studentCSE.json');

// Helper function to read users
function readUsers() {
  try {
    const data = fs.readFileSync(usersFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

//helper function for the data
// Helper function to write users
function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ msg: 'Email and password are required' });
  }
  const users = readUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ msg: 'success' });
  } else {
    res.json({ msg: 'Invalid email or password' });
  }
});

// Register route
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ msg: 'Name, email, and password are required' });
  }
  const users = readUsers();
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.json({ msg: 'User already registered' });
  }
  users.push({ name, email, password });
  writeUsers(users);
  res.json({ msg: 'User registered successfully' });
});

// Data route (for FetchData component)
app.get('/data', (req, res) => {
  // Return some fake data or from students
  const fakeData = [
    { id: 1, title: 'Product 1', image: 'https://via.placeholder.com/200' },
    { id: 2, title: 'Product 2', image: 'https://via.placeholder.com/200' },
    { id: 3, title: 'Product 3', image: 'https://via.placeholder.com/200' }
  ];
  res.json({ msg: fakeData });
});


// Students route
app.get('/students', (req, res) => {
  try {
    const data = fs.readFileSync(studentsFile, 'utf8');
    const students = JSON.parse(data);
    res.json({ msg: students });
  } catch (err) {
    res.json({ msg: 'Error reading students data' });
  }
});

// Msg route
app.get('/msg', (req, res) => {
  res.json({ msg: 'This is a message from the server!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});