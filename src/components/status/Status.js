import { useState, useEffect } from 'react';
import mqtt from 'mqtt'; 
import Paho from 'paho-mqtt';
import { useSubscription, useMqttState } from 'mqtt-react-hooks';

const client = mqtt.connect('ws://localhost:1883/mqtt')
client.subscribe('prediction')

// var client = Paho.Client('test.mosquitto.org', 8080, 'asdfalsdkfj;as')
// client.connect({onSuccess: () => {
//     console.log("Connected")
//     client.subscribe('prediction')
// }})

export default function Status() {
    // const { message } = useSubscription([
    //     'battery',
    //     'prediction'
    // ])
    const { battery, setBattery } = useState(0)
    const { prediction, setPrediction } = useState('bad')
    const { connectionStatus, setConnectionStatus } = useState('Connecting')

    client.on('message', function (topic, message) {
        console.log(`Received ${message}`)
        setPrediction(message)
    })

    // function generateNewClient () {
    //     var client = mqtt.connect('ws://test.mosquitto.org:8080/mqtt')

    //     console.log("generating new client")

    //     function onConnect () { setConnectionStatus('Connected') }
    //     const onError = (err) => {
    //         console.error('Connection error: ', err);
    //         client.end();
    //     }
    //     const onMessage = (topic, message) => {
    //         const payload = { topic, message: message.toString() };
    //         setPrediction(payload)
    //     }
    //     const onReconnect = () => {
    //         setConnectionStatus('Reconnecting')
    //     }
    //     client.on('connect', onConnect)
    //     client.on('error', onError)
    //     client.on('reconnect', onReconnect)
    //     client.on('message', onMessage)

    //     return client
    // }
    // const { client, setClient } = useState(generateNewClient())

    // const mqttConnect = (host, mqttOption) => {
    //     setConnectStatus('Connecting');
    //     setClient(mqtt.connect(host, mqttOption));
    //   };

    

    // useEffect((client) => {
    //     function handleClientChange(c) {
    //         setClient(() => generateNewClient(c))
    //     }
    //     return 
    // }, [])

    return (
        <>
            <h1>Battery Status and current prediction: { battery } { prediction }</h1>
            <h2>Connection state: { connectionStatus }</h2>
        </>
    )
}