import React,{useState} from "react";
import axios from 'axios';
import './CSS/Rcbasic.css'

const Rcbasic =()=>{

 


    const [rcNumber, setRcNumber] = useState('');
    const [showResponse, setShowResponse] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [chassis, setChassisNumber] = useState('');

    // const handleViewChallan = async () => {
    //   try {
    //     const token = localStorage.getItem('auth-token'); // Get the auth-token from localStorage
    //     console.log(token);
    //     const config = {
    //       headers: {
    //         Authorization: `Bearer ${token}` // Include the auth-token in the Authorization header
    //       }
    //     };
  
    //     // Send request to decrement credits
    //     await axios.post('http://localhost:4000/credits', {}, config);
  
    //     // Proceed with viewing the challan details
    //     // Send request to view challan
    //     const response = await axios.post('http://localhost:4000/challans', {
    //       task_id: "15cb1267-c399-44ff-87c1-5309e5ae65fe",
    //       group_id: "4ef2309c-890a-4579-9353-e003a68be194",
    //       data: {
    //         rc_number: rcNumber,
    //         chassis_number: chassis
    //       }
    //     }, config);
  
    //     // Handle the response for viewing the challan details
    //     console.log('Challan details:', response.data);
    //   } catch (error) {
    //     console.error('Error viewing challan:', error);
    //     // Handle error if needed
    //   }
    // };
    
    const handleViewChallan = () => {
    
        console.log(rcNumber);
      
        const token = localStorage.getItem('auth-token');
        console.log(token);
       
        axios.post('http://localhost:4000/challans', {
            "task_id": "15cb1267-c399-44ff-87c1-5309e5ae65fe",
            "group_id": "4ef2309c-890a-4579-9353-e003a68be194",
          data: {
            rc_number: rcNumber,
            chassis_number: chassis
          }
        })
        .then(response => {
            const parsedResponse = JSON.parse(response.data);
            setResponseMessage(parsedResponse);
            setShowResponse(true); // Show the response
          
          const config = {
            headers: {
                Authorization: `Bearer ${token}` // Include the authentication token in the request headers
            }
        };

        axios.post('http://localhost:4000/credits', {}, config)
        .then(response => {
            // Credits decremented successfully
            const data = response.data;
            console.log('Credits decremented:', data.userCredits);
            
            // Proceed with other operations after credits are decremented
            
        })
        .catch(error => {
            // Error decrementing credits
            console.error('Error decrementing credits:', error);
            // Handle error if needed
        });
      })





          //   const parsedResponse = JSON.parse(response.data);
          //   setResponseMessage(parsedResponse);
          //   // console.log(response.data)

          //   setShowResponse(true); // Show the response
          //   // const ResponseData = JSON.parse(responseMessage);
          //   // console.log(ResponseData);
          //   // const error = ResponseData[0].error;
          //   // console.log('Error:', error);

          // })
          .catch(error => {
            console.error('Error fetching vehicle details:', error);
            // Handle error if needed
          });
        
      };

    return (
        <div className="home">
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

            <div> 
            
                {/* {showResponse && responseMessage && (
                    
                    <div className="response">
                    
                        <h2>Response Data</h2>
                        <p>{responseMessage}</p>
                        
                       
                    </div>
                    
                 )} */}

                 {/* {showResponse && responseMessage && Array.isArray(responseMessage) && (
  <div className="response">
    <h2>Response Data</h2>
    <div className="response-table-container">
      <table className="response-table">
        <tbody>
          {responseMessage.map((item, index) => (
            <tr key={index}>
              <td>
                <table className="inner-table">
                  <tbody>
                    <tr><th>Action</th><td>{item.action}</td></tr>
                    <tr><th>Completed At</th><td>{item.completed_at}</td></tr>
                    <tr><th>Created At</th><td>{item.created_at}</td></tr>
                    <tr><th>Error</th><td>{item.error}</td></tr>
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)} */}

{showResponse && responseMessage && Array.isArray(responseMessage) && (
  <div className="response">
    <h2>Response Data</h2>
    <div className="response-table-container">
      
          {responseMessage.map((item, index) => (
            <div key={index}>
              
                <table className="response-table">
                  <tbody>
                    <tr>
                        <td>Action</td>
                        <td>{item.action}</td>
                    </tr>
                    <tr><td>Completed At</td><td>{item.completed_at}</td></tr>
                    <tr><td>Created At</td><td>{item.created_at}</td></tr>
                    <tr><td>Error</td><td>{item.error}</td></tr>
                  </tbody>
                </table>
            
            </div>
          ))}
        
    </div>
  </div>
)}




            
                </div>
           
        </div>
    )
}

export default Rcbasic