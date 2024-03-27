import React,{useState} from "react";
import './CSS/home.css'
import one from '../Components/Assets/carphoto.png'
import second from '../Components/Assets/2nd.png'
import third from '../Components/Assets/3rd.png'
import whatisechallan from '../Components/Assets/whatisechallan.png'

import axios from 'axios';

const Home=()=>{

    const [rcNumber, setRcNumber] = useState('');
    const [challanBlacklistDetails, setChallanBlacklistDetails] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

  const handleViewChallan = () => {
    console.log(rcNumber);
    console.log(challanBlacklistDetails);
    axios.post('http://localhost:4000/challans', {
      task_id: "74f4c926-250c-43ca-9c53-453e87ceacd1",
      group_id: "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
      data: {
        rc_number: rcNumber,
        challan_blacklist_details: true
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
                        <button onClick={handleViewChallan}>View Challan</button>
                    </div>
                </div>
                {responseMessage && (
    <div className="popup">
        <span className="close" onClick={() => setResponseMessage(null)}>&times;</span>
        <h2>Response Data</h2>
        <table className="response-table">
            <thead>
                <tr>
                    <th>Field</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {JSON.parse(responseMessage).map((item, index) => (
                    <React.Fragment key={index}>
                        <tr>
                            <td>Action</td>
                            <td>{item.action}</td>
                        </tr>
                        <tr>
                            <td>Completed At</td>
                            <td>{item.completed_at}</td>
                        </tr>
                        <tr>
                            <td>Created At</td>
                            <td>{item.created_at}</td>
                        </tr>
                        <tr>
                            <td>Error</td>
                            <td>{item.error}</td>
                        </tr>
                        <tr>
                            <td>Group ID</td>
                            <td>{item.group_id}</td>
                        </tr>
                        <tr>
                            <td>Message</td>
                            <td>{item.message}</td>
                        </tr>
                        <tr>
                            <td>Request ID</td>
                            <td>{item.request_id}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>{item.status}</td>
                        </tr>
                        <tr>
                            <td>Task ID</td>
                            <td>{item.task_id}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>{item.type}</td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    </div>
)}



               
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

export default Home