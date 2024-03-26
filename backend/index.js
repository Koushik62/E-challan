const port = 4000;
const express  = require("express");
const app = express();
const jwt =require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
import('node-fetch').then(({ default: fetch }) => {
    // Use fetch here
}).catch(err => {
    console.error('Failed to load node-fetch', err);
});



app.use(express.json());

// using this our react will connect to the backend
app.use(cors());

// Function to make GET request to fetch task details
const getTaskDetails = (requestId) => {
    const apiKey = '7df1cd02-8bb5-4913-b85a-8034b42b7292';
    const accountId = 'fdc3277c91ce/875ef6a3-3b5c-42ee-9b5c-22edc41f1963';
    const apiUrl = `https://eve.idfy.com/v3/tasks`;
    const getRequestUrl = `${apiUrl}?request_id=${requestId}`;
  
    const options = {
      method: 'GET',
      url: getRequestUrl,
      headers: {
        'api-key': apiKey,
        'account-id': accountId,
        'Content-Type': 'application/json'
      }
    };
  
    request(options, (error, response, body) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).send('Error fetching task details');
        return;
      }
  
      console.log(body);
  
      const taskDetails = JSON.parse(body);
      if (taskDetails.status === "completed") {
        // Task completed, send response
        //res.send(body);
      } else if (taskDetails.status === "in_progress") {
        // Task still in progress, wait for some time and check again
        setTimeout(() => {
          getTaskDetails(requestId); // Recursive call
        }, 5000); // Wait for 5 seconds before checking again
      } else {
        // Handle other statuses if needed
        //res.status(500).send('Task status: ' + taskDetails.status);
      }
    });
  };
  
  
  
  // POST endpoint to handle /challans
  app.post('/challans', (req, res) => {
    const apiKey = '7df1cd02-8bb5-4913-b85a-8034b42b7292';
    const accountId = 'fdc3277c91ce/875ef6a3-3b5c-42ee-9b5c-22edc41f1963';
    const externalApiUrl = 'https://eve.idfy.com/v3/tasks/async/verify_with_source/ind_rc_plus'; // Replace with your external API URL
    const requestData = req.body;
  
    // Make a request to the external API
    const options = {
      method: 'POST',
      url: externalApiUrl,
      headers: {
        'api-key': apiKey,
        'account-id': accountId,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };
  
    request(options, (error, response, body) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).send('Error making request to external API');
        return;
      }
  
      console.log('Response from external API:', body);
      
      const responsebody = JSON.parse(body);
      const requestId = responsebody.request_id;
      
      console.log(requestId);
      setTimeout(() => {
        getTaskDetails(requestId); // Recursive call
      }, 5000);
      
  
    });
  });
  
  
  
  





app.get("/",(req,res)=>{
    res.send("Express is running");
})







app.listen(port, (error)=>{
    if(!error){
        console.log("Server running on Port "+port);
    }
    else{
        console.log("Error"+error);
    }
})


