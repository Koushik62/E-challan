import React from 'react';
import './Userbox.css'
const UserBox = ({ user }) => {
    return (
        
            <div className="user-info">
                <strong>Name:</strong> {user.name}<br />
                <strong>Email:</strong> {user.email}<br />
                <strong>Credits:</strong> {user.credits}<br/>
                <strong>Phone No:</strong> {user.number}<br/>
                <strong>Company Name:</strong> {user.companyname}
            </div>
    
    );
};

export default UserBox;
