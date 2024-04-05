import React from 'react'
import './Admin.css'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Route,Routes } from 'react-router-dom'
// import AddProduct from '../../Components/AddProduct/AddProduct'
// import ListProduct from '../../Components/ListProduct/ListProduct'
import Users from '../Components/Users/Users'
import UserInfo from '../Components/Userbox/Userinfo'

const Admin=()=>{
    return (
        <div className='admin'>
            <Sidebar />
            <div className="admin-content"> {/* New container for user data */}
                <Routes>
                    <Route path="/users" element={<Users />} />
                    <Route path='/user/:userId' element={<UserInfo/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Admin