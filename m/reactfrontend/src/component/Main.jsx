import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">welcome to student registration app</h2>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
        <Link to="/register" className="btn btn-success">
          Register
        </Link>
      </div>
    </div>
  )
}

export default Main