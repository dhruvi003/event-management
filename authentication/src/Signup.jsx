import { Button } from 'bootstrap';
import axios from 'axios'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './app.css'

function Signup(){


    const [name, setName] = useState()
    const [email, setEmail ] = useState()
    const[password, setPassword]= useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/signup',{name, email, password})
        .then(result => {console.log(result)
          navigate('/login')
        })
        .catch(err=> console.log(err))
    }
    return(
      <div className="Auth-container">
      <h1>
        Hello
      </h1>
      <form onSubmit={handleSubmit} className="Auth-form">
        <h2 className="Auth-title">Sign Up</h2>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1" 
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <Link to='/login'>
        <button type="submit" className="btn btn-default btn-block">
          Sign Up
        </button>
        </Link>
        <div className="text-center mt-3">
          Already have an account?{" "}
          <Link className="link-primary  " to='/login'>
            Sign In
          </Link>
        </div>
      </form>
    </div>
    )

}

export default Signup;