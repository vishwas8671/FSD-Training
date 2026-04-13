import React, { useState, useEffect } from "react";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  useEffect(()=>{
    const user = localStorage.getItem("userLoggedIn");

    if(user){
      alert("User already logged in");
    }
  },[]);

  async function loginUser(e){
    e.preventDefault();

    const res = await fetch("http://localhost:4007/login",{
      method:"POST",
      body:JSON.stringify({email,password}),
      headers:{ "Content-Type":"application/json" }
    });

    const data = await res.json();

    if(data.msg === "Login Successful"){
      localStorage.setItem("userLoggedIn", email);
      alert("Login Successful");
    }else{
      alert(data.msg);
    }
  }

  return (
    <div className="container mt-4">
      <h2>Login</h2>

      <form onSubmit={loginUser}>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;