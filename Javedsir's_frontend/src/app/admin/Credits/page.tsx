"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const Applications = () => {
  const [click, setClick] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [hasGst, setHasGst] = useState(false);
  const [gstNumber, setGstNumber] = useState("");
  const [credits, setCredits] = useState();
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

  const handleClick = () => {
    setClick(true);
    setSelectedState("");
  };

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
        toast.success("Payment Successful");

        // Extract payment ID from response
        const paymentId = response.razorpay_payment_id;

        // Construct order information
        const orderInfo = {
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          // Add additional order details here if needed
          paymentId: paymentId,
        };

        // Example: send order information to your backend for processing
        fetch("/api/createOrder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderInfo),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Order created:", data);
            // Add logic to handle successful order creation
          })
          .catch((error) => {
            console.error("Error creating order:", error);
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
    <div className="flex bg-white-50 font-serif">
      <div className="flex-1 p-5">
        <h1 className="pl-4 text-2xl font-bold">Credits</h1>
        <h2 className="pl-4 text-xl font-semibold">Add Live Credits</h2>

        <div className="flex flex-col w-11/12 ml-2 gap-2 justify-end p-1">
          <input
            className="h-8 rounded border border-gray-400 hover:border-blue-500 px-2"
            placeholder="Eg.1000"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
          />

          <button
            className="w-40 bg-blue-700 border-none text-white p-2 rounded cursor-pointer hover:animate-pulse ml-auto"
            onClick={handleClick}
            type="submit"
          >
            Proceed
          </button>
        </div>

        {click && (
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-4 mt-4 rounded p-2 ">
                <label htmlFor="companyName" className="font-medium">Company Name*</label>
                <input
                  className="h-10 w-full rounded border border-gray-400 px-2"
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col mb-4 mt-4 rounded p-2 ">
                <label htmlFor="address" className="font-medium">Address*</label>
                <textarea
                  className="h-20 w-full rounded border border-gray-400 px-2"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col mb-4 mt-4 rounded p-2">
                <label htmlFor="statesbutton" className="font-medium">State*</label>
                {click && (
                  <select
                    id="statesbutton"
                    value={selectedState}
                    onChange={handleStateChange}
                    className="w-full h-10 rounded border border-gray-400 px-2"
                  >
                    <option value="">{selectedState || "Maharashtra"}</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <div className="flex flex-col mb-4 mt-4 rounded p-2 ">
                <label className="font-medium">Do you have a GST number?*</label>
                <div className="flex gap-4">
                  <label htmlFor="hasGstYes" className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="hasGstYes"
                      name="hasGst"
                      value={true}
                      checked={hasGst}
                      onChange={(e) => setHasGst(true)}
                      className="form-radio h-4 w-4"
                    />
                    Yes
                  </label>
                  <label htmlFor="hasGstNo" className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="hasGstNo"
                      name="hasGst"
                      value={false}
                      checked={!hasGst}
                      onChange={(e) => setHasGst(false)}
                      className="form-radio h-4 w-4"
                    />
                    No
                  </label>
                </div>
              </div>
              {hasGst && (
                <div className="flex flex-col mb-4 mt-4 rounded p-2 ">
                  <label htmlFor="gstNumber" className="font-medium">GST Number*</label>
                  <input
                    className="w-full h-10 rounded border border-gray-400 px-2"
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
      <div className="w-px border-l border-dotted border-black mx-2"></div>
      <div className="flex-1 bg-white m-2 p-4">
        {click && (
          <div className="flex flex-col p-8 border border-white shadow-lg rounded">
            <h2 className="text-xl font-bold mb-4">Credit Amount Payable</h2>
            <div className="flex justify-between">
              <p className="font-semibold">Credit Balance:</p>
              <p className="font-semibold">{credits}</p>
            </div>

            <div className="border border-gray-300 my-2"></div>

            <div className="flex justify-between">
              <p className="font-semibold">Desired Amount:</p>
              <p className="font-semibold">₹{credits}</p>
            </div>

            <div className="border border-gray-300 my-2"></div>

            <div className="flex justify-between">
              <p className="text-gray-500">SGST @ 9%</p>
              <p className="text-gray-500">₹{(credits * 0.09).toFixed(2)}</p>
            </div>

            <div className="border border-gray-300 my-2"></div>
            <div className="flex justify-between">
              <p className="text-gray-500">CGST @ 9%</p>
              <p className="text-gray-500">₹{(credits * 0.09).toFixed(2)}</p>
            </div>
            <div className="border-b-2 border-dotted border-black my-2"></div>
            <div className="flex justify-between">
              <p className="font-bold pt-4">Final amount payable</p>

              <p className="font-bold pt-4">₹{(credits * 1.18).toFixed(2)}</p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-green-500 text-white border-none p-2 cursor-pointer rounded"
                onClick={() => handlePayment((credits * 1.18).toFixed(2))}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applications;
