import { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import MainSign from './MainSign'
import Dashboard from './Dashboard'
import AddVulnerability from './AddVulnerability'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  const [vulnerabilities, setVulnerabilities] = useState([]);

  // const addvulnerability = (newVulnerability) => {
  //   setVulnerabilities([...vulnerabilities, newVulnerability]);
    
  // }
  const addVulnerability = (newVulnerability) => {
    setVulnerabilities([...vulnerabilities, newVulnerability]);
  };

  return (
   <BrowserRouter>
      <Routes>
  
      <Route exact path='/' element={<Signup />}></Route>
      <Route path='/add' element={<AddVulnerability addVulnerability={addVulnerability} />}></Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route path = '/login' element={<Login />}/>
        <Route path = '/home' element={<Home />}/>
        <Route exact path='/dashboard' element={<Dashboard vulnerabilities={vulnerabilities} />}></Route>
        {/* <Route path = '/dashboard' element={<Dashboard vulnerabilities={vulnerabilities} />}/> */}
        {/* <Route path= '/add' element={<AddVulnerability addvulnerability={addvulnerability} />} /> */}
        {/* <Route path = '/mainSign' element={<MainSign/>}/> */}
      </Routes>
   </BrowserRouter>
  )
}

export default App
