import React, { useState } from 'react';
import Axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('/api/users/login', formData);

      console.log('Login successful:', response.data);
      
      // Redirect to profile page on successful login
      window.location.href = '/profile';
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Login Page</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px', width: '100%' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '100%' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '100%' }}
            required
          />
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', fontWeight: 'bold', padding: '10px', borderRadius: '5px', width: '100%' }}>
          Login
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};

export default LoginForm;
