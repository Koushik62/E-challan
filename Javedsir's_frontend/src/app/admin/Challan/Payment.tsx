
import React, { use, useState ,useEffect} from 'react';
import { Copy, Download } from 'lucide-react'; // Assuming you use lucide-react for icons
import { Button } from "@/components/ui/button"

const PaymentSummary = ({ outputData }) => {

    const [totalAmount, setTotalAmount] = useState(0);
//   const handlePayment = (total) => {
   
//     var options = {
//       key: "rzp_test_LetnicYdIN9c1h",
//       amount: total * 100, // Amount in paisa
//       currency: "INR",
//       name: "Krishicare",
//       description: "Credits Payment",
//       image: "https://your-company-logo-url.png",
     
//       handler: function (response) {
//         console.log(response);
//         // Add logic to handle payment success
//         toast.success('Payment Successful');

//         // Extract payment ID from response
//         const paymentId = response.razorpay_payment_id;

//         // Construct order information
//         const orderInfo = {
//           date: new Date().toLocaleString(
//             "en-US",
//             {
//               month: "short",
//               day: "2-digit",
//               year: "numeric",
//             }
//           ),
//           // Add additional order details here if needed
//           paymentId: paymentId
//         };

//         // Example: send order information to your backend for processing
//         fetch('/api/createOrder', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(orderInfo),
//         })
//         .then(response => response.json())
//         .then(data => {
//           console.log('Order created:', data);
//           // Add logic to handle successful order creation
//         })
//         .catch(error => {
//           console.error('Error creating order:', error);
//           // Add logic to handle error
//         });
//       },
//       prefill: {
        
//         email: "customer@example.com",
//         contact: "9999999999",
//         method: "upi",
//         // Add additional UPI payment details if required
//       },
//       theme: {
//         color: "#528FF0", // Razorpay button color
//       },
//     };

//     var pay = new window.Razorpay(options);
//     pay.open();
//     console.log(pay);
      const calculateTotalAmount = () => {
        let total = 0;
        outputData.forEach(entry => {
            total += parseInt(entry.fine_imposed); // Add the fine imposed for each entry
            total += parseInt(118); // Add platform fee + GST for each entry
        });
        return total;
      };

      useEffect(() => {
        // Update the total amount whenever outputData changes
        setTotalAmount(calculateTotalAmount());
      }, [outputData]);

  return (
    <div className="relative flex h-full min-h-[50vh] flex-col lg:col-span-2">
      <fieldset className="grid gap-6 rounded-lg border p-6 bg-white shadow-md">
        <legend className="-ml-1 px-1 text-sm font-medium text-gray-700">Output</legend>
        <div className="grid grid-cols-2 gap-4">
  {outputData.map((entry, index) => (
    <React.Fragment key={index}>
      <div className="space-y-4">
        <div>
          <div className="text-gray-500 text-sm">Challan No:</div>
          <div className="text-lg font-semibold text-gray-900 text-sm">{entry.challan_no}</div>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Name of Violator:</div>
          <div className="text-lg font-semibold text-gray-900 text-sm">{entry.name_of_violator}</div>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Offence</div>
          <div className="text-lg font-semibold text-gray-900 text-sm">{entry.offence_details[0].name}</div>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Challan Amount</div>
          <div  className="text-lg font-semibold text-gray-900 text-sm">{entry.fine_imposed} ₹</div>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Platform fee + GST</div>
          <div className="text-lg font-semibold text-gray-900 text-sm">{118} ₹</div>
        </div>
      </div>
    </React.Fragment>
  ))}
</div>
  
        <div className="flex gap-3 mt-4">
          <Button  className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Total Fine: {totalAmount} ₹
          </Button>
          <Button variant="outline" onClick={() => handleDownload(outputData)} className="flex items-center border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        </div>
      </fieldset>
    </div>
    

 
  );


  function handleDownload(data) {
    const fileName = 'challan_details.json';
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export default PaymentSummary;
