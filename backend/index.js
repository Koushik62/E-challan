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

const request = require('request');

const apiKey = 'a4db0f87-a8db-48ed-b91f-af2cf1369c9f';
const accountId = '04259ab9861e/814cd672-bd23-4aff-96dd-87caed118df2';


// POST endpoint to handle /challans
app.post('/challans', (req, res) => {
   
  console.log(req.body)
  const externalApiUrl = 'https://eve.idfy.com/v3/tasks/async/verify_with_source/ind_rc_plus';
  const requestData = req.body;
  console.log(requestData)

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

    const responseBody = JSON.parse(body);
    console.log(responseBody)
    const requestId = responseBody.request_id;

    setTimeout( () => {
      const apiUrl = 'https://eve.idfy.com/v3/tasks';
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
      return;
    }

    res.status(200).json(body);
    console.log(body);
    // Send task details to frontend or process it further as needed
  });
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