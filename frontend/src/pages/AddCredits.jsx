import React, { useState } from "react";

import './CSS/Addcredits.css'


const states = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Ladakh',
  'Lakshadweep',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Puducherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal'
];



  
  
const AddCredits = () => {
  const [click, setClick] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [hasGst, setHasGst] = useState(false);
  const [gstNumber, setGstNumber] = useState("");
  const[credits, setCredits] = useState();

  const [selectedState, setSelectedState] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Form validation (add checks for required fields and GST number format)
    if (!companyName || !address || (!hasGst && gstNumber)) {
      alert("Please fill in all required fields.");
      return;
    }

    if (hasGst && !/^\d{15}$/.test(gstNumber)) {
      alert("Please enter a valid GST number.");
      return;
    }

    // Form submission logic (replace with your actual submission process)
    console.log("Form submitted:", {
      companyName,
      address,
      hasGst,
      gstNumber,
    });

    // Reset form after submission (optional)
    setCompanyName("");
    setAddress("");
    setHasGst(false);
    setGstNumber("");

    setClick(true); // Set click to true to show company details
  };

  const handleClick=()=>{
    setClick(true);
    setSelectedState('');
  }

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };


  


  return (
    <div className="home">
      <div className="home-left">
        <h1>Credits</h1>
        <h2>Add Live Credits</h2>
       
        <div className="procced">
        <input 
          placeholder="Eg.1000" 
          value={credits}
          onChange={(e)=> setCredits(e.target.value)}
          
        />
        
        
        <button onClick={handleClick} type="submit">Proceed</button>
        </div>
       
        {click &&(
          <div>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="companyName">Company Name*</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address*</label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <button onClick={handleClick}>
          {click ? 'Hide States' : 'Show All States'}
          </button>
          {click && (
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">-- Select State (optional) --</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        )}
          <div className="form-group">
            <label>Do you have a GST number?*</label>
            <div className="radio-group">
              <label htmlFor="hasGstYes">
                <input
                  type="radio"
                  id="hasGstYes"
                  name="hasGst"
                  value={true}
                  checked={hasGst}
                  onChange={(e) => setHasGst(true)}
                />
                Yes
              </label>
              <label htmlFor="hasGstNo">
                <input
                  type="radio"
                  id="hasGstNo"
                  name="hasGst"
                  value={false}
                  checked={!hasGst}
                  onChange={(e) => setHasGst(false)}
                />
                No
              </label>
            </div>
          </div>
          {hasGst && (
            <div className="form-group">
              <label htmlFor="gstNumber">GST Number (optional if no GST):</label>
              <input
                type="text"
                id="gstNumber"
                name="gstNumber"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value)}
              />
            </div>
          )}
          
        </form>
        </div>
        )}

        <div className="pricing">
            <p>Pricing</p>

        </div>
      </div>
      <div className="home-right">
        {click && (
          <div className="credit-details">
            <h2>Credit Amount Payable</h2>
            <p>Credit Balance: <span id="creditBalance">{credits}</span></p>
            <p>Desired Amount: <span id="amount">{credits}</span></p>
            <p>SGST: <span id="sgst">{credits*0.09}</span></p>
            <p>CGST: <span id="cgst"></span>{credits*0.09}</p>
            <p>Final amount payable  <span></span>{credits*(1.18)}</p>
          </div>
          

        )}
      </div>
      
    </div>
  );
};

export default AddCredits;
