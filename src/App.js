import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarMenu from './NavbarMenu';
import SignUpForm from './SignUpForm';
import HomePage from './HomePage';
import './styles.css';

function App() {
  return (
    <Router>
      <NavbarMenu />
      <div className="page-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;