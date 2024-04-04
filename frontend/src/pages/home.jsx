import React,{useState} from "react";
import './CSS/home.css'
import one from '../Components/Assets/carphoto.png'
import second from '../Components/Assets/2nd.png'
import third from '../Components/Assets/3rd.png'
import whatisechallan from '../Components/Assets/whatisechallan.png'

import { Link} from "react-router-dom";

import axios from 'axios';





const Home=()=>{

    const [rcNumber, setRcNumber] = useState('');
   
    const [responseMessage, setResponseMessage] = useState('');
    const [chassis, setChassisNumber] = useState('');


  const handleViewChallan = () => {
    console.log(rcNumber);
    
    axios.post('http://localhost:4000/challans', {
        "task_id": "15cb1267-c399-44ff-87c1-5309e5ae65fe",
        "group_id": "4ef2309c-890a-4579-9353-e003a68be194",
      data: {
        rc_number: rcNumber,
        chassis_number: chassis
      }
    })
    .then(response => {
        setResponseMessage(response.data); // Set the response message
        
        
      })
      .catch(error => {
        console.error('Error fetching vehicle details:', error);
        // Handle error if needed
      });
      
  };
  
    return ( 
        <div className="Home">
            <div className="photo">
                
                <div className="photo-left">
                    <h1>CheckTraffic<br/>Challan Status& <br/>
                    Pay Online</h1>
                    <ul>
                        <li>View your traffic eChallans for Free</li>
                        <li>Pay your traffic eChallans with ease</li>
                        <li>No hassle of court visits</li>
                    </ul>
                </div>
                <div className="photo-right">
                    <div>
                        <p>Enter RC Number</p>
                    </div>

                    <div>
                        <input
                        placeholder='Enter RC Number'
                        type='text'
                        value={rcNumber}
                        onChange={e => setRcNumber(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                        placeholder='Enter Chassis no'
                        type='text'
                        value={chassis}
                        onChange={e => setChassisNumber(e.target.value)}
                        />
                    </div>

                    <div>
                       <Link to ='/challan-details' ><button onClick={handleViewChallan}>View Challan Details</button></Link> 
                        
                        
                        
                    </div>
                </div>
              



               
            </div>
            <div className="process"> 
                <div className="heading">
                    <h2>How to Check& Pay Traffic Challan?</h2>
                </div>  
                <div className="photos">   
                    <div className="one">
                        <img src={one} alt="" />
                        <p><span>1.Search</span> Enter Car Registration number</p>
                    </div>
                    <div className="second" >
                        <img src={second} alt="" />
                        <p><span>2.View</span> View Pending challans</p>
                    </div>
                    <div className="third">
                        <img src={third} alt="" className="third" />
                        <p><span>3.Pay</span>Securely pay with vahanfin </p>
                    </div>
                    
                </div>

            </div>
            <div className="echallan">
                <img src ={whatisechallan} alt=""/>
                <div>
                    <h2>What is a Traffic eChallan?</h2>
                    <p>
                        A traffic eChallan is a digital traffic violation challan that is issued by the traffic police, traffic cameras or transport authorities in India.  As opposed to offline methods of traffic eChallan payment, online payment is convenient, time-saving, and can be done using multiple payment methods including NetBanking, UPI, Credit Card, Debit Card, or a digital wallet. It is also more transparent and gives you an electronic record of the payment you have made.
                    </p>
                </div>
                
            </div>

            
           
        </div>




    )
}

export default Home;