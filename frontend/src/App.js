
import './App.css';
import Footer from './Components/Footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';


import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Basicrc from './pages/Rcbasic.jsx'
import AdvRcinfo from './pages/Rcadv.jsx'
import LoginSignup from './pages/login.jsx';
import AddCredits from './pages/AddCredits.jsx'
import Home from './pages/home.jsx'
import Design from './pages/designpage.jsx'
import Challan from './pages/Challan.jsx';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>} />
        {/* <Route path="/challan-details"  element = {<ChallanDetailsPage />}/> */}
        <Route path = '/basicrcinfo' element = {<Basicrc />} />
        <Route path = '/advrcinfo' element = {<AdvRcinfo />} />
        <Route path='/login' element={<LoginSignup/>} />
        <Route path='/challan' element={<Challan/>}/>
        <Route path='/addcredits' element={<AddCredits/>} />
      </Routes>
      <Design/>
      <Footer/>
    </BrowserRouter> 
      
    </div>
  );
}

export default App;
