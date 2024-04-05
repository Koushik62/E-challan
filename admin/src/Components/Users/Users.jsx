
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserBox from '../Userbox/Userbox';
import './Users.css'
const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users data when component mounts
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
            // Handle error if needed
        }
    };

    return (
        <div className="user-container">
          <h2>Users</h2>
          <div className="user-boxes">
            {users.map(user => (
              <UserBox key={user._id} user={user} /> // Render each user in a UserBox
            ))}
          </div>
        </div>
      );
};

export default UsersPage;
