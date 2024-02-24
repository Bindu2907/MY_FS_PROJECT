import React, { useState, useEffect } from 'react';
import Axios from 'axios';
const Profile = () => {
    // State for user profile data
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState('');
  
    // Fetch user profile data when component mounts
    useEffect(() => {
      const fetchProfileData = async () => {
        try {
          // Make HTTP GET request to profile endpoint
          const response = await Axios.get('/api/profile', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming token is stored in localStorage
            },
          });
  
          // Set profile data in state
          setProfileData(response.data.user);
        } catch (error) {
          // If fetching profile data fails, display error message
          setError(error.response.data.message);
        }
      };
  
      fetchProfileData();
    }, []);
    return (
        <div>
          <h2>Profile</h2>
          {profileData ? (
            <div>
              <p>Username: {profileData.username}</p>
              <p>Email: {profileData.email}</p>
              {/* Add more profile information here if needed */}
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <p>Loading profile data...</p>
          )}
          {error && <p>{error}</p>}
        </div>
      );
    };
      // Event handler for logout button click
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    // Redirect user to the login page or perform any other necessary action
  };

    export default Profile;
    