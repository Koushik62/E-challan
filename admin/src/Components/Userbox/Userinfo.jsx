



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Userinfo.css'
const UserInfo = () => {
  const [user, setUser] = useState(null);
  const [newCredits, setNewCredits] = useState('');
  const [showCreditInput, setShowCreditInput] = useState(false);
  const defaultImage = 'https://via.placeholder.com/150';
  const { userId } = useParams(); // Get the userId from the URL

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Use the userId in the API request to fetch user details
        const response = await axios.get(`http://localhost:4000/users/${userId}`);
        setUser(response.data); // Set the user state with the fetched user data
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser(); // Call the fetchUser function when the component mounts or when userId changes
  }, [userId]); // Add userId to the dependency array to re-fetch user details when it changes

  const handleAddCredits = () => {
    setShowCreditInput(true);
  };

  const handleCreditInputChange = (event) => {
    setNewCredits(event.target.value);
  };

  const handleCreditSubmit = async () => {
    try {
      // Update user credits in the database
      await axios.post(`http://localhost:4000/users/${userId}/credits`, { credits: newCredits });
      // Refresh user data after updating credits
      await fetchUser();
      // Hide the credit input box
      setShowCreditInput(false);
    } catch (error) {
      console.error('Error updating credits:', error);
    }
  };

  return (
    <div>
      {user ? (
        <div className='userinfo'>
            <div className='userdetails'>
            <h2>User Details</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Company name:</strong> {user.companyname}</p>
            <p><strong>Phone No:</strong> {user.number}</p>
            <p>
                <strong>Credits:</strong> {user.credits} 
                <button className='plusbutton' onClick={handleAddCredits}>+</button>
            </p>
            {showCreditInput && (
                <div>
                <input type="number" value={newCredits} onChange={handleCreditInputChange} />
                <button onClick={handleCreditSubmit}>Update Credits</button>
                </div>
            )}
            </div>
            <div className='photo'>
            <img
            src={user.photo || defaultImage}
            alt="User Photo"
            onError={(event) => (event.target.src = defaultImage)} // Fallback to placeholder
          />
            </div>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserInfo;
