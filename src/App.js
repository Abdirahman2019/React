import LoginForm from './Components/Login';
import Message from './Components/Message';
import MenuBar from './Components/MenuBar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import RegistrationForm from './Components/RegistrationForm'
import './App.css';
import Header from "./Container/Header";
import AddNumber from "./Container/AddNumber";
import RegisterStudent from './Container/RegisterStudent';
import AddTwoNumbers from './Container/AddTwoNumbers';

function App() {
  return (
    <div>
    <div className="container">
      
       <main className="main-content">
        <p>BUXOW BUSINESS LIMITED</p>
        <MenuBar/>
         <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path ="/services"element={<Message/>}/>
          <Route path = "/AddTwoNumbers" element ={<AddTwoNumbers />}/>
          <Route path = "/AddNumber" element={<AddNumber/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
        </Routes>
      </div>
    </Router>
      </main>
      <footer className="footer">
        <p> ©2024 Buxowbusinessltd.com, All rights reserved.</p>
      </footer>
    </div>
   
    </div>
  );
}
export default App;