
import './App.css';
import Footer from './Components/Footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './pages/home.jsx'
import ChallanDetailsPage from './pages/Challandetails.jsx';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Basicrc from './pages/Challandetails.jsx'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path="/challan-details"  element = {<ChallanDetailsPage />}/>
        <Route path = '/basicrcinfo' element = {<Basicrc />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter> 
      
    </div>
  );
}

export default App;
