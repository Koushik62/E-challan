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
       
        axios.post('http://localhost:4000/advrc', {
            "task_id": "15cb1267-c399-44ff-87c1-5309e5ae65fe",
            "group_id": "4ef2309c-890a-4579-9353-e003a68be194",
          data: {
            rc_number: rcNumber,
            challan_blacklist_details: true,
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

        axios.post('http://localhost:4000/advcredits', {}, config)
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
                        <p className="creditsperusage">8 credits per usage</p>
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
                                          <div  className="rctable-left"><p>Owner Name</p></div>
                                           
                                          <div className="rctable-right"><p>{item.result.extraction_output.owner_name}</p></div>
                                            
                                        
                                      </div>
                                      
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Chassic Number</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.chassis_number}</p></div>
                                            
                                        
                                      </div>

                                      <div className="rcline"></div>
                                    


                                      <div className="rctable">
                                          <div className="rctable-left"><p>Vehicle Class</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.vehicle_class}</p></div>
                                            
                                        
                                      </div>
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Color</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.color !== null? item.result.extraction_output.color : 'N/A' }</p></div>
                                            
                                        
                                      </div>
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>NOC Details:</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.noc_valid_upto !== null? item.result.extraction_output.noc_valid_upto : 'N/A' }</p></div>
                                            
                                        
                                      </div>


                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Norms Type:</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.norms_type !== null? item.result.extraction_output.norms_type : 'N/A' }</p></div>
                                            
                                        
                                      </div>


                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Manufacturer Model</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.manufacturer_model !== null? item.result.extraction_output.manufacturer_model : 'N/A' }</p></div>
                                            
                                        
                                      </div>


                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Black list Status:</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.blacklist_status !== null? item.result.extraction_output.blacklist_status : 'N/A' }</p></div>
                                            
                                        
                                      </div>


                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Masked Name:</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.masked_name !== null? item.result.extraction_output.masked_name : 'N/A' }</p></div>
                                            
                                        
                                      </div>


                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Maker Model</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.masked_name !== null? item.result.extraction_output.masked_name : 'N/A' }</p></div>
                                            
                                        
                                      </div>


                                      <div className="rcline"></div>

                                      <div className="rctable">
                                          <div className="rctable-left"><p>Insurance Validity:</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.insurance_validity !== null? item.result.extraction_output.insurance_validity: 'N/A' }</p></div>
                                            
                                        
                                      </div>


                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Permit Validity Upto:</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.permit_validity_upto !== null? item.result.extraction_output.permit_validity_upto : 'N/A' }</p></div>
                                            
                                        
                                      </div>


                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>PUC Number:</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.puc_number !== null? item.result.extraction_output.puc_number: 'N/A' }</p></div>
                                            
                                        
                                      </div>


                                      <div className="rcline"></div>
                                      <div className="rcline"></div>
                                      <div className="rctable">
                                          <div className="rctable-left"><p>Financer:</p></div>
                                            
                                          <div className="rctable-right"><p>{item.result.extraction_output.is_financed !== null? item.result.extraction_output.is_financed: 'N/A' }</p></div>
                                            
                                        
                                      </div>


                                      <div className="rcline"></div>
                                      <div className="rctable">
                                        <div className="rctable-left"><p>Fitness Upto:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.fitness_upto !== null ? item.result.extraction_output.fitness_upto : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Current Address:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.current_address !== null ? item.result.extraction_output.current_address : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Permit Issue Date:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.permit_issue_date !== null ? item.result.extraction_output.permit_issue_date : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Seating Capacity:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.seating_capacity !== null ? item.result.extraction_output.seating_capacity : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Body Type:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.body_type !== null ? item.result.extraction_output.body_type : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Manufacturing Year:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.m_y_manufacturing !== null ? item.result.extraction_output.m_y_manufacturing : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>N Permit Upto:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.npermit_upto !== null ? item.result.extraction_output.npermit_upto : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>
                                    <div className="rctable">
                                    <div className="rctable-left"><p>Permanent Address:</p></div>
                                    <div className="rctable-right"><p>{item.result.extraction_output.permanent_address !== null ? item.result.extraction_output.permanent_address : 'N/A' }</p></div>
                                </div>
                                <div className="rcline"></div>

                                <div className="rctable">
                                    <div className="rctable-left"><p>Father's Name:</p></div>
                                    <div className="rctable-right"><p>{item.result.extraction_output.father_name !== null ? item.result.extraction_output.father_name : 'N/A' }</p></div>
                                </div>
                                <div className="rcline"></div>

                                <div className="rctable">
                                    <div className="rctable-left"><p>Permit Type:</p></div>
                                    <div className="rctable-right"><p>{item.result.extraction_output.permit_type !== null ? item.result.extraction_output.permit_type : 'N/A' }</p></div>
                                </div>
                                <div className="rcline"></div>

                                <div className="rctable">
                                    <div className="rctable-left"><p>Cubic Capacity:</p></div>
                                    <div className="rctable-right"><p>{item.result.extraction_output.cubic_capacity !== null ? item.result.extraction_output.cubic_capacity : 'N/A' }</p></div>
                                </div>
                                <div className="rcline"></div>

                                <div className="rctable">
                                    <div className="rctable-left"><p>Insurance Policy Number:</p></div>
                                    <div className="rctable-right"><p>{item.result.extraction_output.insurance_policy_no !== null ? item.result.extraction_output.insurance_policy_no : 'N/A' }</p></div>
                                </div>
                                <div className="rcline"></div>

                                <div className="rctable">
                                    <div className="rctable-left"><p>Status Message:</p></div>
                                    <div className="rctable-right"><p>{item.result.extraction_output.status_message !== null ? item.result.extraction_output.status_message : 'N/A' }</p></div>
                                </div>
                                <div className="rcline"></div>

                                <div className="rctable">
                                    <div className="rctable-left"><p>Manufacturer:</p></div>
                                    <div className="rctable-right"><p>{item.result.extraction_output.manufacturer !== null ? item.result.extraction_output.manufacturer : 'N/A' }</p></div>
                                </div>
                                <div className="rcline"></div>

                                <div className="rctable">
                                    <div className="rctable-left"><p>Wheelbase:</p></div>
                                    <div className="rctable-right"><p>{item.result.extraction_output.wheelbase !== null ? item.result.extraction_output.wheelbase : 'N/A' }</p></div>
                                </div>
                                <div className="rcline"></div>

                                <div className="rctable">
                                    <div className="rctable-left"><p>Status:</p></div>
                                    <div className="rctable-right"><p>{item.status !== null ? item.status : 'N/A' }</p></div>
                                </div>
                                <div className="rcline"></div>

                                <div className="rctable">
                                    <div className="rctable-left"><p>N Permit Issued By:</p></div>
                                    <div className="rctable-right"><p>{item.result.extraction_output.npermit_issued_by !== null ? item.result.extraction_output.npermit_issued_by : 'N/A' }</p></div>
                                </div>
                                <div className="rcline"></div>
                                <div className="rctable">
                                        <div className="rctable-left"><p>NOC Status:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.noc_status !== null ? item.result.extraction_output.noc_status : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Variant:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.variant !== null ? item.result.extraction_output.variant : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>MV Tax upto:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.mv_tax_upto !== null ? item.result.extraction_output.mv_tax_upto : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Permit Validity From:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.permit_validity_from !== null ? item.result.extraction_output.permit_validity_from : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>State:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.state !== null ? item.result.extraction_output.state : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Registration Number:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.registration_number !== null ? item.result.extraction_output.registration_number : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Engine Number:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.engine_number !== null ? item.result.extraction_output.engine_number : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Owner's Mobile No.:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.owner_mobile_no !== null ? item.result.extraction_output.owner_mobile_no : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>N Permit Number:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.npermit_no !== null ? item.result.extraction_output.npermit_no : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Date of Registration:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.registration_date !== null ? item.result.extraction_output.registration_date : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>NOC Valid Upto:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.noc_valid_upto !== null ? item.result.extraction_output.noc_valid_upto : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>NOC Issue Date:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.noc_issue_date !== null ? item.result.extraction_output.noc_issue_date : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Number of Cylinder:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.number_of_cylinder !== null ? item.result.extraction_output.number_of_cylinder : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Fuel Type:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.fuel_type !== null ? item.result.extraction_output.fuel_type : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>Status Verification:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.status_verification !== null ? item.result.extraction_output.status_verification : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>

                                    <div className="rctable">
                                        <div className="rctable-left"><p>PUC Valid Upto:</p></div>
                                        <div className="rctable-right"><p>{item.result.extraction_output.puc_valid_upto !== null ? item.result.extraction_output.puc_valid_upto : 'N/A' }</p></div>
                                    </div>
                                    <div className="rcline"></div>
                                          <div className="rctable">
                                      <div className="rctable-left"><p>Unladden Weight:</p></div>
                                      <div className="rctable-right"><p>{item.result.extraction_output.unladden_weight !== null ? item.result.extraction_output.unladden_weight : 'N/A' }</p></div>
                                  </div>
                                  <div className="rcline"></div>

                                  <div className="rctable">
                                      <div className="rctable-left"><p>Registered Place:</p></div>
                                      <div className="rctable-right"><p>{item.result.extraction_output.registered_place !== null ? item.result.extraction_output.registered_place : 'N/A' }</p></div>
                                  </div>
                                  <div className="rcline"></div>

                                  <div className="rctable">
                                      <div className="rctable-left"><p>Owner Serial Number:</p></div>
                                      <div className="rctable-right"><p>{item.result.extraction_output.owner_serial_number !== null ? item.result.extraction_output.owner_serial_number : 'N/A' }</p></div>
                                  </div>
                                  <div className="rcline"></div>

                                  <div className="rctable">
                                      <div className="rctable-left"><p>Standing Capacity:</p></div>
                                      <div className="rctable-right"><p>{item.result.extraction_output.standing_capacity !== null ? item.result.extraction_output.standing_capacity : 'N/A' }</p></div>
                                  </div>
                                  <div className="rcline"></div>

                                  <div className="rctable">
                                      <div className="rctable-left"><p>Status Verify Date:</p></div>
                                      <div className="rctable-right"><p>{item.result.extraction_output.status_verify_date !== null ? item.result.extraction_output.status_verify_date : 'N/A' }</p></div>
                                  </div>
                                  <div className="rcline"></div>

                                  <div className="rctable">
                                      <div className="rctable-left"><p>Permit Number:</p></div>
                                      <div className="rctable-right"><p>{item.result.extraction_output.permit_number !== null ? item.result.extraction_output.permit_number : 'N/A' }</p></div>
                                  </div>
                                  <div className="rcline"></div>

                                  <div className="rctable">
                                      <div className="rctable-left"><p>Insurance Name:</p></div>
                                      <div className="rctable-right"><p>{item.result.extraction_output.insurance_name !== null ? item.result.extraction_output.insurance_name : 'N/A' }</p></div>
                                  </div>
                                  <div className="rcline"></div>

                                  <div className="rctable">
                                      <div className="rctable-left"><p>Vehicle Category:</p></div>
                                      <div className="rctable-right"><p>{item.result.extraction_output.vehicle_category !== null ? item.result.extraction_output.vehicle_category : 'N/A' }</p></div>
                                  </div>
                                  <div className="rcline"></div>

                                  <div className="rctable">
                                      <div className="rctable-left"><p>Sleeper Capacity:</p></div>
                                      <div className="rctable-right"><p>{item.result.extraction_output.sleeper_capacity !== null ? item.result.extraction_output.sleeper_capacity : 'N/A' }</p></div>
                                  </div>
                                  <div className="rcline"></div>

                                  <div className="rctable">
                                      <div className="rctable-left"><p>Gross Vehicle Weight:</p></div>
                                      <div className="rctable-right"><p>{item.result.extraction_output.gross_vehicle_weight !== null ? item.result.extraction_output.gross_vehicle_weight : 'N/A' }</p></div>
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