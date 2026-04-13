import React from 'react'
import { Link } from 'react-router-dom'
function Main() {
  return (
    <div><h2>Welcome to Student registration App</h2>
    <nav>
      <ul>
        <li><Link to='/login'>Login</Link></li>
         <li><Link to='/register'>Registration</Link></li>
    
    </ul>
    </nav>
    </div>
  )
}

export default Main