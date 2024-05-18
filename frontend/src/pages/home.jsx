import React,{useState,useEffect} from "react";
import axios from 'axios';
import './CSS/home.css'
import Sidelogo from '../Components/Assets/sidelogi.jpg'
const Rcbasic =()=>{

 

    const [credits, setCredits] = useState(0);
    const [rcNumber, setRcNumber] = useState('');
    const [showResponse, setShowResponse] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
   
    const places = ['HR26 Gurgaon North', 'DL01 Delhi North Mall Road', 'TS010 Hyderabad North', 'AP02 Vizianagaram', 'KA01 Bangalore'];
    const [currentPlaceIndex, setCurrentPlaceIndex] = useState(0);
    const [isBlinking, setIsBlinking] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Dictionary');
  
    const handleClick = (option) => {
        setSelectedOption(option);
    };
    useEffect(() => {
      const intervalId = setInterval(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          setCurrentPlaceIndex((prevIndex) => (prevIndex + 1) % places.length);
        }, 1000);
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, [places.length]);


    useEffect(() => {
      // Fetch user's credis when the component mounts
      
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
       
        axios.post('http://localhost:4000/basicrc', {
            "task_id": "15cb1267-c399-44ff-87c1-5309e5ae65fe",
            "group_id": "4ef2309c-890a-4579-9353-e003a68be194",
          data: {
            rc_number: rcNumber,
          }
        })
        .then(response => {
            
            const parsedResponse = JSON.parse(response.data);
            console.log(parsedResponse);
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
          <div className="Initialpara">
              <div className="Intialpara-left"> 
                    <div className="input-container">
                        <h1>Real time Vehicle RC using<br/> Government Database <br/> Check</h1>
                        <h2 className="changing">{isBlinking ? '': places[currentPlaceIndex]}</h2>
                    </div>
                    <br/>
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
              <div className="Intialpara-right">
    {showResponse ? (
        <div className="rcresponse">
            
            <div className="tab-container">
                <button
                    className={`tab ${selectedOption === 'Dictionary' ? 'active' : ''}`}
                    onClick={() => handleClick('Dictionary')}
                    aria-pressed={selectedOption === 'Dictionary'}
                >
                    <span>Dictionary</span>
                </button>
                <button
                    className={`tab ${selectedOption === 'JSON' ? 'active' : ''}`}
                    onClick={() => handleClick('JSON')}
                    aria-pressed={selectedOption === 'JSON'}
                >
                    <span>JSON</span>
                </button>
            </div>

           

            {showResponse && responseMessage && Array.isArray(responseMessage) && (
                <div className="rcresponse-table-container">
                    {responseMessage.map((item, index) => (
                        <div key={index}>
                           
                           
                            {item.message === "Insufficient credits" ? (

                                selectedOption === 'Dictionary' ?  (
                                    <div>
                                        <div className="rcctable">
                                            <div className="rcctable-left"><p>Field</p></div>
                                            <div className="rcctable-right"><p>Value</p></div>
                                        </div>
                                        <div className="rcctable">
                                            <div className="rctable-left"><p>Message</p></div>
                                            <div className="rctable-right"><p>{item.message}</p></div>
                                        </div>
                                        <div className="rcctable">
                                            <div className="rctable-left"><p>action</p></div>
                                            <div className="rctable-right"><p>{item.action}</p></div>
                                        </div>
                                        <div className="rcctable">
                                        <div className="rctable-left"><p>Status</p></div>
                                        <div className="rctable-right"><p>{item.status}</p></div>
                                        </div>
                                        <div className="rcctable">
                                            <div className="rctable-left"><p>Type</p></div>
                                            <div className="rctable-right"><p>{item.type}</p></div>
                                        </div>
                                    </div>)
                                    :(  
                                        <pre className="json-data">{JSON.stringify( responseMessage  , null, 2)}</pre>
                                    )
                                    
                                
                            ) : (

                                <div>
                                    <div className="rctable">
                                        <div className="rctable-left"><p>Owner name</p></div>
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
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    ) : (
        <img src={Sidelogo} alt="" />
    )}
</div>
</div>
     
            </div>
       
      
)
}


export default Rcbasic