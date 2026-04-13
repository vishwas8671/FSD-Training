import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[message,setMessage]=useState('');
  const[loading,setLoading]=useState(false);
  const navigate=useNavigate();

  async function handleLogin(e){
    e.preventDefault();
    
    // Validation
    if(!email || !password){
      setMessage('Please fill all fields');
      alert('⚠️ Please fill all fields');
      return;
    }
    
    setLoading(true);
    try{
      const res=await fetch("http://localhost:4007/login",{
        method:'POST',
        body:JSON.stringify({email,password}),
        headers:{'Content-Type':'application/json'}
      })
      
      const data = await res.json();
      
      if(data.msg === 'success'){
        setMessage('Login successful!');
        alert('🎉 Login successful! Welcome back!');
        // Clear form
        setEmail('');
        setPassword('');
        // Redirect to dashboard or main page
        setTimeout(()=>{
          navigate('/');
        }, 1500);
      }else{
        setMessage(data.msg);
        alert('❌ ' + data.msg);
      }
    }catch(error){
      setMessage('Error: ' + error.message);
      alert('❌ Network Error: ' + error.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <div style={{maxWidth: '500px', margin: '50px auto', padding: '20px'}}>
      <h2>Student Login</h2>
      {message && (
        <div className={`alert ${message.includes('successful') ? 'alert-success' : 'alert-danger'}`} role="alert">
          {message}
        </div>
      )}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" disabled={loading} className="btn btn-primary">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;