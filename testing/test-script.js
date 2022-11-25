const mqtt = require('mqtt')

//the things network url
const connectUrl = `mqtt://eu1.cloud.thethings.network:1883`

var test_SNRs = []

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

client.on("message", function (topic, message, packet) { 
    
    // parse the message
    getDataFromTTN = JSON.parse(message);
    /*
        list of fields: 
            end_device_ids
            correlation_ids
            received_at
            uplink_message
            simulated
    */
    
    var snr = JSON.stringify(getDataFromTTN.uplink_message.rx_metadata[0].snr)
    test_SNRs.push(snr)
    test_string = ("SNR: " + snr + "\n" )
    console.log(test_SNRs)

})  