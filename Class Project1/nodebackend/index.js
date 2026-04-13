const http = require('http')
const fs = require('fs').promises
const sum = require('./fetchData')
const { writeData, readData, deleteFile, fileReadAsync } = require('./usefsmodule')

const PORT = 4007

const server = http.createServer(async (req, res) => {

  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    res.end()
    return
  }

  // Welcome message
  if (req.url === '/msg' && req.method === "GET") {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    return res.end("<h1>Welcome message from Node Server</h1>")
  }

  // Sum API
  if (req.url === '/data' && req.method === "GET") {
    const sumData = await sum()
    res.writeHead(200, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify({ msg: sumData }))
  }

  // Register API
  if (req.url === '/register' && req.method === "POST") {

    let body = ""

    req.on('data', chunk => {
      body += chunk
    })

    req.on('end', async () => {

      const { name, email, password } = JSON.parse(body)

      let arr = []

      try {
        const data = await fs.readFile('student.json', 'utf-8')
        arr = JSON.parse(data)
      } catch {
        arr = []
      }

      const status = arr.find(ele => ele.email === email)

      res.writeHead(200, { 'Content-Type': 'application/json' })

      if (status) {
        res.end(JSON.stringify({ msg: "Student already registered" }))
      } else {
        arr.push({ name, email, password })
        await fs.writeFile('student.json', JSON.stringify(arr, null, 2))
        res.end(JSON.stringify({ msg: "Registration Successful" }))
      }

    })

    return
  }

  // Login API
  if (req.url === '/login' && req.method === "POST") {

    let body = ""

    req.on('data', chunk => {
      body += chunk
    })

    req.on('end', async () => {

      const { email, password } = JSON.parse(body)

      let arr = []

      try {
        const data = await fs.readFile('student.json', 'utf-8')
        arr = JSON.parse(data)
      } catch {
        arr = []
      }

      const status = arr.find(ele => ele.email === email && ele.password === password)

      res.writeHead(200, { 'Content-Type': 'application/json' })

      if (status) {
        res.end(JSON.stringify({ msg: "Login Successful" }))
      } else {
        res.end(JSON.stringify({ msg: "Invalid user" }))
      }

    })

    return
  }

  // Default route
  res.writeHead(404, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ msg: "Route not found" }))

})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})