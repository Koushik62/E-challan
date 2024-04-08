import React, { useState } from "react";
import { toast } from 'react-toastify';
import './addcredits.css'


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

  const [total, setTotal] = useState();
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



  //payment gateway
  const handlePayment = (total) => {
   
    var options = {
      key: "rzp_test_LetnicYdIN9c1h",
      amount: total * 100, // Amount in paisa
      currency: "INR",
      name: "Krishicare",
      description: "Credits Payment",
      image: "https://your-company-logo-url.png",
     
      handler: function (response) {
        console.log(response);
        // Add logic to handle payment success
        toast.success('Payment Successful');

        // Extract payment ID from response
        const paymentId = response.razorpay_payment_id;

        // Construct order information
        const orderInfo = {
          date: new Date().toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          ),
          // Add additional order details here if needed
          paymentId: paymentId
        };

        // Example: send order information to your backend for processing
        fetch('/api/createOrder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderInfo),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Order created:', data);
          // Add logic to handle successful order creation
        })
        .catch(error => {
          console.error('Error creating order:', error);
          // Add logic to handle error
        });
      },
      prefill: {
        
        email: "customer@example.com",
        contact: "9999999999",
        method: "upi",
        // Add additional UPI payment details if required
      },
      theme: {
        color: "#528FF0", // Razorpay button color
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
  };
  


  return (
    <div className="addhome">
      <div className="addhome-left">
        <h1>Credits</h1>
        <h2>Add Live Credits</h2>
       
        <div className="addprocces">
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
          <div className="addform-group">
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
          <div className="addform-group">
            <label htmlFor="address">Address*</label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="addform-group">
          <label htmlFor="statesbutton">State*</label>  {/* Label for the select element */}
          {click && (
            <select id="statesbutton" value={selectedState} onChange={handleStateChange}>
              <option value="">{selectedState || 'Maharastra'}</option> {/* Placeholder */}
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          )}
        </div>
          
          <div className="addform-group">
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
              <label htmlFor="addhasGstNo">
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
            <div className="addform-group">
              <label htmlFor="gstNumber">GST Number*</label>
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

        
      </div>
      <div className="addvertical-line"></div>
      <div className="addhome-right">
        {click && (
          <div className="addcredit-details">
            <h2>Credit Amount Payable</h2>
            <div className="paymentdetails">
              <p><strong>Credit Balance:</strong> </p>
              <p><strong>{credits}</strong></p>
            </div>

            
            <div className="hdivider"></div>

            <div className="paymentdetails">
              <p><strong>Desired Amount:</strong>  </p>
              <p><strong>₹{credits}</strong></p>
            </div>
            
            <div className="hdivider"></div>

            <div className="paymentdetails">
              <p style={{ color: 'grey' }}> SGST @ 9%  </p>
              <p style={{ color: 'grey' }}>₹{(credits * 0.09).toFixed(2)}</p>
            </div>
            
            <div className="hdivider"></div>
            <div className="paymentdetails" >
              <p style={{ color: 'grey' }}> CGST @ 9%  </p>
              <p style={{ color: 'grey' }}>₹{(credits * 0.09).toFixed(2)}</p>
            </div>
            <div className="hdivider"></div>
            <div className="paymentdetails">
              <p className="finalamountpay" ><strong>Final amount payable</strong> </p>
               
              <p className="finalamountpay"> <strong>₹{(credits*1.18).toFixed(2)}</strong></p>
            </div>
            <div className="hdivider1"></div>
            
            <div className="Proceedtopayment">
              <button onClick={()=>handlePayment((credits*1.18).toFixed(2))}  >Proceed to Payment</button>
            </div>
          </div>
          
          

        )}
      </div>
      
    </div>
  );
};

export default AddCredits;
