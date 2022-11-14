const express = require('express');
const app = express();
// express.static is a built-in express middleware function. Now index.html is available with no route
app.use(express.static('public'));
const mqtt = require('mqtt')

// http server port
const PORT = 8383;
//the things network url
const connectUrl = `mqtt://eu1.cloud.thethings.network:1883`

// This object will contain the data received 
var finalData = {}

const client = mqtt.connect(connectUrl, {
    clean: true,
    connectTimeout: 4000,
    username: 'dog-tracker-2022@ttn',
    password: 'NNSXS.S3JF4HR74VZA4D6IC6YIOPG3OU2PYD65EBSXNCQ.K4M32LVUFFIJBEWXDDB6YF5WEVFOFPAXUS3Z4ZC7TE27KRM47SBA',
    reconnectPeriod: 1000,
})

client.on('connect', () => {
    // v3/{application id}@{tenant id}/devices/{device id}/up
    var topic = "v3/dog-tracker-2022@ttn/devices/last-device/up"; 
    console.log('Connected')
    client.subscribe(topic);
    console.log('Subscribed');
});

//handle errors
client.on("error", function (error) { 
    console.log("Can't connect" + error); 
    process.exit(1)
});

// get route activated when pressing the getData button
app.get('/data', (req,res) =>{

    // Send back finalData
    res.status(200).send(finalData);

});

client.on("message", function (topic, message, packet) { 
    
    // parse the message
    getDataFromTTN = JSON.parse(message);
    // decode the payload
    data = JSON.stringify(getDataFromTTN.uplink_message.decoded_payload);
    // update the variable
    finalData = data;
    console.log(data)
    
})  

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});