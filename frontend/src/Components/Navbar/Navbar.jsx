
import './Navbar.css'
import logo from '../Assets/logo3.png'
import { Link } from 'react-router-dom'
const Navbar =()=>{

  
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img className='logo' src={logo} alt=''/>
                <p>Vahanfin</p>
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