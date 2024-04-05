// import React from 'react';
// import './Userbox.css'
// const defaultImage = 'https://via.placeholder.com/150';
// const UserBox = ({ user }) => {
//     return (

//         <div className="user-box">
//             <div className="user-image">
//             {/* Display user photo if available, otherwise use a placeholder */}
//             <img
//                 src={user.photo || defaultImage}
//                 alt="User Photo"
//                 onError={(event) => event.target.src = defaultImage} // Fallback to placeholder on error
//             />
//             </div>
//             <div className="user-info">
//                 <strong>Name:</strong> {user.name}<br />
//                 <strong>Email:</strong> {user.email}<br />
//                 <strong>Credits:</strong> {user.credits}<br/>
//                 <strong>Phone No:</strong> {user.number}<br/>
//                 <strong>Company Name:</strong> {user.companyname}
//             </div>
//         </div>
        
            
    
//     );
// };

// export default UserBox;


import React from 'react';
import './Userbox.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const defaultImage = 'https://via.placeholder.com/150';

const UserBox = ({ user }) => {
  return (
    <Link to={`/user/${user._id}`}  style = {{textDecoration:'none'}} > {/* Wrap in Link for navigation */}
      <div className="user-box">
        <div className="user-image">
          <img
            src={user.photo || defaultImage}
            alt="User Photo"
            onError={(event) => (event.target.src = defaultImage)} // Fallback to placeholder
          />
        </div>
        <div className="user-info">
          <strong>Name:</strong> {user.name}<br />
          <strong>Email:</strong> {user.email}<br />
          <strong>Credits:</strong> {user.credits || 'N/A'}<br />
          <strong>Phone No:</strong> {user.number}<br />
          <strong>Company Name:</strong> {user.companyname}
        </div>
      </div>
    </Link>
  );
};

export default UserBox;

