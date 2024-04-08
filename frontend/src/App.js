
import './App.css';
import Footer from './Components/Footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './pages/home.jsx'

import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Basicrc from './pages/Rcbasic.jsx'
import AdvRcinfo from './pages/Rcadv.jsx'
import LoginSignup from './pages/login.jsx';
import AddCredits from './pages/AddCredits.jsx'
function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Basicrc/>} />
        {/* <Route path="/challan-details"  element = {<ChallanDetailsPage />}/> */}
        <Route path = '/basicrcinfo' element = {<Basicrc />} />
        <Route path = '/advrcinfo' element = {<AdvRcinfo />} />
        <Route path='/login' element={<LoginSignup/>} />
        
        <Route path='/addcredits' element={<AddCredits/>} />
      </Routes>
      <Footer/>
    </BrowserRouter> 
      
    </div>
  );
}

export default App;
