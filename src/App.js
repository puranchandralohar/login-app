import React from 'react';
import LoginForm from "./components/LoginForm";
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
const App = () => {


  return (
    <Routes>
    <Route path="/" element={<LoginForm />} />
    <Route path="/signup" element={<SignupForm />} />
    <Route path="/dashboard/:userId" element={<Dashboard/>} />
  </Routes>
  );
};

export default App;
