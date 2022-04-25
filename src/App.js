
import './App.css';
import React from 'react';
import ResellerSignup from './Signup/ResellerSignup';
import ResellerSignupForm from './Signup/ResellerSignupForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResellerStepper from './ResellerStepper/ResellerStepper';






function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<ResellerSignup/>}></Route>
    <Route path='stepper' element={<ResellerStepper/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
