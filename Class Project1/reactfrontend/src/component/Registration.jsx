import React, { useState } from "react"

function Registration() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [showPopup,setShowPopup] = useState(false)

  async function captureData(e){
    e.preventDefault()

    const res = await fetch("http://localhost:4007/register",{
      method:'POST',
      body: JSON.stringify({name,email,password}),
      headers:{'Content-Type':'application/json'}
    })

    const data = await res.json()

    if(data.msg){
      setShowPopup(true)
    }

    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <div className="container mt-4">
      <h2>Student Registration Form</h2>

      <form onSubmit={captureData}>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>

      </form>

      {/* Popup Modal */}
      {showPopup && (
        <div className="modal show fade" style={{display:"block"}}>
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Alert Message</h5>
                <button
                  className="btn-close"
                  onClick={()=>setShowPopup(false)}
                ></button>
              </div>

              <div className="modal-body">
                <p>Registration Successful...</p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-success"
                  onClick={()=>setShowPopup(false)}
                >
                  OK
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Registration