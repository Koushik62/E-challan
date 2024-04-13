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

                

              <div className="viewbutton">
                <button onClick={handleViewChallan}>View Details</button>
              </div>
            </div>
            <div className="rcvertical-line"></div>
            <div className="rcphoto-right">
                <h2>Output</h2>
                <div className={showResponse ? "rcresponse" : "xyz"}>

                    {showResponse && responseMessage && Array.isArray(responseMessage) && (
                     
                       
                        <div className="rcresponse-table-container">
                          
                              {responseMessage.map((item, index) => (
                                <div key={index}>
                                  
                                <div className="rcctable">
                                          <div  className="rcctable-left"><p>Field</p></div>
                                            
                                          <div className="rcctable-right"><p>Value</p></div>
                                            
                                        
                                      </div>
                                     
                                      <div className="rctable">
                                          <div  className="rctable-left"><p>Owner name</p></div>
                                           
                                          <div className="rctable-right"><p>{item.result.extraction_output.owner_name}</p></div>
                                            
                                        
                                      </div>
                                      
                                      <div className="rctable">
                                          <div className="rctable-left"><p>RTO Name</p></div>

                                          <div className="rctable-right"><p>{item.result.extraction_output.rto_name !== null ? item.result.extraction_output.rto_name : 'N/A'}</p></div>
                                            
                                        
                                      </div>
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Vehicle Class</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.vehicle_class}</p></div>
                                            
                                        
                                      </div>
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Avg. Gross Vehicle Weight</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.avg_gross_vehicle_weight}</p></div>
                                            
                                        
                                      </div>
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Result</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.status}</p></div>
                                            
                                        
                                      </div>
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Chasis Number</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.chassis_number}</p></div>
                                            
                                        
                                      </div>
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Color</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.color !== null? item.result.extraction_output.color : 'N/A' }</p></div>
                                            
                                        
                                      </div>
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Fuel type</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.fuel_type}</p></div>
                                            
                                        
                                      </div>
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Insurance Validity</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.insurance_validity}</p></div>
                                            
                                        
                                      </div>
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Maker Model</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.maker_model}</p></div>
                                            
                                        
                                      </div>
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Manufacturer</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.manufacturer !== null ? item.result.extraction_output.manufacturer : 'N/A'}</p></div>
                                            
                                        
                                      </div>
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Registration Date</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.registration_date}</p></div>
                                            
                                        
                                      </div>

                                       
                                        
                                    
                                   
                                
                                </div>
                              ))}
                            
                        </div>
                      
                    )}

                  </div>
              </div>
          </div>

            
         
       
    
                             



            
      </div>
           
      
    )
}

export default Rcbasic