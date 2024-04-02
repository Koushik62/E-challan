
import './App.css';
import Footer from './Components/Footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './pages/home.jsx'

import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Basicrc from './pages/Rcbasic.jsx'
import AdvRcinfo from './pages/Rcadv.jsx'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* <Route path ='/' element={<Home/>} /> */}
        {/* <Route path="/challan-details"  element = {<ChallanDetailsPage />}/> */}
        <Route path = '/basicrcinfo' element = {<Basicrc />} />
        <Route path = '/advrcinfo' element = {<AdvRcinfo />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter> 
      
    </div>
  );
}

export default App;
