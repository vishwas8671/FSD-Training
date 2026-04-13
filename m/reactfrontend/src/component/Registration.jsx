import React, { useState } from 'react'

function Registration() {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[message,setMessage]=useState('');
  const[loading,setLoading]=useState(false);

    async function captureData(e)
      {
        e.preventDefault();
        // Validation
        if(!name || !email || !password){
          setMessage('Please fill all fields');
          alert('⚠️ Please fill all fields');
          return;
        }
        
        setLoading(true);
        try{
          const res=await fetch("http://localhost:4007/register",{
            method:'POST',
            body:JSON.stringify({name,email,password}),
            headers:{'Content-Type':'application/json'}
          })
          
          const data = await res.json();
          setMessage(data.msg);
          
          // Show browser alert for important messages
          if(data.msg.includes('successfully')) {
            alert('🎉 ' + data.msg);
            setName('');
            setEmail('');
            setPassword('');
          } else if(data.msg.includes('already registered')) {
            alert('⚠️ ' + data.msg);
          } else {
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
      <h2>Student Registration Form</h2>
      {message && (
        <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
          {message}
        </div>
      )}
      <form onSubmit={captureData}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e)=>setName(e.target.value)} 
            className="form-control" 
            id="name" 
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            type="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            className="form-control" 
            id="email" 
            placeholder="Enter your email"
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
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
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  )
}

export default Registration