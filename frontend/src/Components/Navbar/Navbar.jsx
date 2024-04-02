
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
            <ul     className="nav-menu">
                <li onClick={()=>{setMenu("Basic RC info")}}><Link style = {{textDecoration:'none'}}  to = '/basicrcinfo'>Basic Rc info</Link>{menu === "Basic RC info"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Adv Rc info")}}><Link style = {{textDecoration:'none'}} to = '/advrcinfo'>Adv Rc info</Link> {menu === "Adv Rc info  "?<hr/>:<></>}</li>
                
            </ul>
            </div>
            
            <div className='nav-login'>

                    {localStorage.getItem('auth-token')
                    ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                    : <Link to = '/login'><button>Login</button></Link>
                    }
            </div>

        </div>
    )
}

export default Navbar