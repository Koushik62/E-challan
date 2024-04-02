import React,{useState} from "react";
import './CSS/Rcbasic.css'




import axios from 'axios';





const ChallanDetailsPage=()=>{

    const [rcNumber, setRcNumber] = useState('');
    const [showResponse, setShowResponse] = useState(false);
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
        responseMessage = JSON.parse(responseMessage);
        setShowResponse(true); // Show the response
        
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
                       <button onClick={handleViewChallan}>View Challan Details</button> 
                    </div>
                </div>

            </div>
            {showResponse && responseMessage && (
                <div className="response">
                    <h2>Response Data </h2>
                    <p>{responseMessage}</p>
                </div>
            )}

            
           
        </div>




    )
}

export default ChallanDetailsPage;