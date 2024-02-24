import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/signupForm';
import Profile from './components/Profile';
import Home from './components/Home';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
