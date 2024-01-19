import { useState } from 'react'
import { BrowserRouter as Router, Route, Navigate, Routes  } from 'react-router-dom';
import './App.css'
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Principal/Dashboard/Dashboard';

function App() {
  const [show, setShow] = useState(true);

  return (
    
    <Router>
      <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
   
  </Router>
  )
}

export default App
