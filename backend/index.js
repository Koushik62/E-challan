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






app.get("/",(req,res)=>{
    res.send("Express is running");
})





app.post("/challans", (req, res) => {
    // Extract vehicle number from the request body
    const vehicleNumber = req.body.vehicleNumber;

    
    const clientId = '';

    // Options for making the request to the external API
    const options = {
        method: 'POST',
        url: 'https://apisetu.gov.in/certificate/v3/transport/chaln',
        headers: {
            'X-APISETU-CLIENTID': clientId,
            'content-type': 'application/json'
        },
        body: {
            txnId: 'f7f1469c-29b0-4325-9dfc-c567200a70f7',
            format: 'xml',
            certificateParameters: {
                REQUEST: 'Driving License,Registration Certificate',
                dl_rc: vehicleNumber
            },
            consentArtifact: {
                consent: {
                    consentId: 'ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba',
                    timestamp: '2019-08-24T14:15:22Z',
                    dataConsumer: { id: 'string' },
                    dataProvider: { id: 'string' },
                    purpose: { description: 'string' },
                    user: { idType: 'string', idNumber: 'string', mobile: 'string', email: 'string' },
                    data: { id: 'string' },
                    permission: {
                        access: 'string',
                        dateRange: { from: '2019-08-24T14:15:22Z', to: '2019-08-24T14:15:22Z' },
                        frequency: { unit: 'string', value: 0, repeats: 0 }
                    }
                },
                signature: { signature: 'string' }
            },
            json: true
        }
    };

    // Make the request to the external API
    request(options, (error, response, body) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Error fetching challan details' });
        } else {
            // Send the fetched data as response
            res.json(body);
        }
    });
});






app.listen(port, (error)=>{
    if(!error){
        console.log("Server running on Port "+port);
    }
    else{
        console.log("Error"+error);
    }
})


