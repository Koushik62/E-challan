
import './Navbar.css'
import logo from '../Assets/logo3.png'
import { Link} from 'react-router-dom'
import { useState } from 'react'
const Navbar =()=>{

    const[menu,setMenu] = useState("shop");
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img className='logo' src={logo} alt=''/>
                <p>Vahanfin</p>
                <img className="nav-dropdown"  alt=""/>
           
            </div>
            
            <div className='nav-login'>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("Basic RC info")}}><Link style = {{textDecoration:'none'}}  to = '/basicrcinfo'>Basic Rc info</Link></li>
                <li onClick={()=>{setMenu("Adv Rc info")}}><Link style = {{textDecoration:'none'}} to = '/advrcinfo'>Adv Rc info</Link> </li>
                <li onClick={()=>{setMenu("Payment")}}><Link style = {{textDecoration:'none'}}  to = '/addcredits'>Add Credits</Link></li>
                <li onClick={()=>{setMenu("challan")}}><Link style = {{textDecoration:'none'}}  to = '/challan'>Challan</Link></li>
            </ul>
                    {localStorage.getItem('auth-token')
                    ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                    : <Link to = '/login'><button>Login</button></Link>
                    }
            </div>

        </div>
    )
}

export default Navbar