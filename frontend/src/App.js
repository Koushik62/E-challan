
import './App.css';
import Footer from './Components/Footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './pages/home.jsx'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>} />
       
      </Routes>
      <Footer/>
    </BrowserRouter> 
      
    </div>
  );
}

export default App;
