const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const fetchData = require('./fetchData');
const { writeData, readData, deleteFile, fileReadAsync } = require('./usefsmodule');

const app = express();
const PORT = 4007;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Routes

// Welcome message route
app.get('/msg', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Welcome message from Express Server</h1>');
});

// Fetch external API data route
app.get('/data', async (req, res) => {
  try {
    const sumData = await fetchData();
    res.json({ msg: sumData });
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching data', error: error.message });
  }
});

// Write data to file route
app.get('/writeData', (req, res) => {
  try {
    const result = writeData();
    res.json({ msg: result });
  } catch (error) {
    res.status(500).json({ msg: 'Error writing data', error: error.message });
  }
});

// Read data from file route
app.get('/readData', (req, res) => {
  try {
    const result = readData();
    res.json({ msg: result });
  } catch (error) {
    res.status(500).json({ msg: 'Error reading data', error: error.message });
  }
});

// Delete file route
app.get('/deleteFile', (req, res) => {
  try {
    const result = deleteFile();
    res.json({ msg: result });
  } catch (error) {
    res.status(500).json({ msg: 'Error deleting file', error: error.message });
  }
});

// Read file asynchronously route
app.get('/readFileAsync', async (req, res) => {
  try {
    const result = await fileReadAsync();
    res.json({ msg: result });
  } catch (error) {
    res.status(500).json({ msg: 'Error reading file async', error: error.message });
  }
});

// User registration route
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Name, email, and password are required' });
    }

    // Read existing students
    let students = [];
    try {
      const fileData = await fs.readFile('student.json', { encoding: 'utf-8' });
      students = JSON.parse(fileData);
    } catch (error) {
      // File doesn't exist yet, start with empty array
      students = [];
    }

    // Check if student already exists
    const existingStudent = students.find(student => student.email === email);

    if (existingStudent) {
      return res.status(400).json({ msg: 'Student is already registered' });
    }

    // Add new student
    students.push({ name, email, password });
    await fs.writeFile('student.json', JSON.stringify(students, null, 2));

    res.status(201).json({ msg: 'Student registered successfully!!!' });
  } catch (error) {
    res.status(500).json({ msg: 'Registration error', error: error.message });
  }
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ msg: 'Server is running' });
});

// 404 Not Found handler
app.use((req, res) => {
  res.status(404).json({ msg: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Internal server error', error: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
  console.log('Available routes:');
  console.log('  GET  /msg - Welcome message');
  console.log('  GET  /data - Fetch external API data');
  console.log('  GET  /writeData - Write data to file');
  console.log('  GET  /readData - Read data from file');
  console.log('  GET  /deleteFile - Delete file');
  console.log('  GET  /readFileAsync - Read file asynchronously');
  console.log('  POST /register - Register a student');
  console.log('  GET  /health - Health check');
});

module.exports = app;
