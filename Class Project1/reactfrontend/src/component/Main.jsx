import React from "react"
import { Link } from "react-router-dom"

function Main() {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Welcome to Student Registration App</h2>

      <div>
        <Link to="/login" className="btn btn-primary m-2">
          Login
        </Link>

        <Link to="/register" className="btn btn-success m-2">
          Register
        </Link>
      </div>
    </div>
  )
}

export default Main