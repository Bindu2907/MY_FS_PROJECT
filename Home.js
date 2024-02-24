import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Welcome to Our Educational Website</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>Explore our platform and sign up to access exclusive content!</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/signup" style={{ marginRight: '20px', textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Sign Up</Link> {/* Link to the signup page */}
        <Link to="/login" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Login</Link> {/* Link to the login page */}
      </div>
    </div>
  );
};

export default HomePage;

