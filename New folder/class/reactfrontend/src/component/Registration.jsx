import React, { useState } from 'react'

function Registration() {
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState()

    async function captureData(e)

      {
        e.preventDefault();
        //alert("Hiiii...."+name+email+password)
        const res=await fetch("http://localhost:4007/register",{
          method:'POST',
          body:JSON.stringify({name,email,password}),
          headers:{'Content-Type':'application/json'}
        })

        const response=await res.json();
        alert(response.msg);
            
      }

return (
    <div><h2>Student Registration Form</h2>
 <form>
 <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={captureData}  class="btn btn-primary">Register</button>
</form>

    </div>
  )
}

export default Registration