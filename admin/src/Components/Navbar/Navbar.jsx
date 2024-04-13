
import './Navbar.css'
import logo from '../../assets/logo3.png'
import { Link} from 'react-router-dom'

const Navbar =()=>{

    
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img className='logo' src={logo} alt=''/>
                <p>Vahanfin</p>
                <img className="nav-dropdown"  alt=""/>
           
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