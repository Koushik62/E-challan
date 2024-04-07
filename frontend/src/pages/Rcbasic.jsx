import React,{useState,useEffect} from "react";
import axios from 'axios';
import './CSS/Rcbasic.css'

const Rcbasic =()=>{

 

    const [credits, setCredits] = useState(0);
    const [rcNumber, setRcNumber] = useState('');
    const [showResponse, setShowResponse] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [chassis, setChassisNumber] = useState('');


    useEffect(() => {
      // Fetch user's credits when the component mounts
      fetchUserCredits();
    }, []);
  
    const fetchUserCredits = () => {
      const token = localStorage.getItem('auth-token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
  
      axios.get('http://localhost:4000/credits', config)
        .then(response => {
          const { userCredits } = response.data;
          setCredits(userCredits);
        })
        .catch(error => {
          console.error('Error fetching user credits:', error);
        });
    };
  
    
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
            const { userCredits } = response.data;
            setCredits(userCredits)
            
            // Proceed with other operations after credits are decremented
            
        })
        .catch(error => {
            // Error decrementing credits
            console.error('Error decrementing credits:', error);
            // Handle error if needed
        });
      })

          .catch(error => {
            console.error('Error fetching vehicle details:', error);
            // Handle error if needed
          });
        
      };

    return (
        <div className="rchome">
        
            <div class="container">
              <div class="row justify-content-end">
                <div class="col-md-3">
                  <div class="card text-center credits shadow-sm">
                    <div class="card-body">
                      <p><span><strong>User Credits:</strong></span> {credits}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <div className="hero">

            <div className="photo-left">
                    <div className="photoheading">
                      <p>Enter Vehicle Number</p>
                    </div>

                    <div className="photocreditusage"> 
                        <p>Input</p>
                        <p className="creditsperusage">3 credits per usage</p>
                    </div>

                    <div className="rcdetails">
                      <input
                        placeholder="Enter RC Number"
                        type="text"
                        value={rcNumber}
                        onChange={e => setRcNumber(e.target.value)}
                      />
                    </div>

                  <div className="rcdetails">
                    <input
                      placeholder="Enter Chassis Number"
                      type="text"
                      value={chassis}
                      onChange={e => setChassisNumber(e.target.value)}
                    />
                  </div>

              <div className="viewbutton">
                <button onClick={handleViewChallan}>View Details</button>
              </div>
            </div>
            <div className="verticalline"></div>
            <div className="photo-right">
                <h2>Output</h2>
                  <div>

                    {showResponse && responseMessage && Array.isArray(responseMessage) && (
                      <div className="response">
                        <h2>Response Data</h2>
                        <div className="response-table-container">
                          
                              {responseMessage.map((item, index) => (
                                <div key={index}>
                                  
                                    
                                     
                                      <div className="table">
                                          <div  className="table-left"><p>Action</p></div>
                                            
                                          <div className="table-right"><p>{item.action}</p></div>
                                            
                                        
                                      </div>
                                      <div className="line"></div>
                                      <div className="table">
                                          <div className="table-left"><p>Completed At</p></div>
                                            
                                          <div className="table-right"><p>{item.completed_at}</p></div>
                                            
                                        
                                      </div>
                                      <div className="line"></div>
                                      <div className="table">
                                          <div className="table-left"><p>Created At</p></div>
                                            
                                          <div className="table-right"><p>{item.created_at}</p></div>
                                            
                                        
                                      </div>
                                      <div className="line"></div>
                                      <div className="table">
                                          <div className="table-left"><p>Error</p></div>
                                            
                                          <div className="table-right"><p>{item.error}</p></div>
                                            
                                        
                                      </div>
                                      <div className="line"></div>
                                      <div className="table">
                                          <div className="table-left"><p>task_id</p></div>
                                            
                                          <div className="table-right"><p>{item.task_id}</p></div>
                                            
                                        
                                      </div>
                                      <div className="line"></div>
                                      <div className="table">
                                          <div className="table-left"><p>type</p></div>
                                            
                                          <div className="table-right"><p>{item.type}</p></div>
                                            
                                        
                                      </div>
                                       
                                        
                                    
                                   
                                
                                </div>
                              ))}
                            
                        </div>
                      </div>
                    )}

                     </div>
              </div>
          </div>

            
         
       
    
                             



            
      </div>
           
      
    )
}

export default Rcbasic