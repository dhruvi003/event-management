import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios'

function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result)
        if (result.data === "success") {
          navigate('/home')
        }

      })
      .catch(err => console.log(err))
  }
  return (
    <div className='Auth-container'>

      <form className='Auth-form' onSubmit={handleSubmit}>
        <h2 className="Auth-title">Sign In</h2>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email" />

          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" />
        </div>
        {/* <div class="form-group form-check">
<input type="checkbox" class="form-check-input" id="exampleCheck1" />
<label class="form-check-label" for="exampleCheck1">Check me out</label>
</div> */}
  <Link to="/home">
        <button
          type="submit"

          className="btn btn-primary btn-block">Sign In
          </button>
</Link>

      </form>
      <p>Don't have an Account? {" "}
        <Link to="/signup" className="btn btn-default">Signup</Link>
      </p>
    </div>
  )
}

export default Login;