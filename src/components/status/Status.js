import { useState, useEffect } from 'react';
import { useSubscription, useMqttState } from 'mqtt-react-hooks';

import './Status.css'

export default function Status() {
    const { message : batteryMsg } = useSubscription('battery')
    const { message : predictionMsg } = useSubscription('prediction')
    const { connectionStatus } = useMqttState()

    return (
        <>
            <h2>Live Status</h2>

            <p>Battery Status: { batteryMsg ? batteryMsg.message : 'None' }</p>
            <p>Current prediction: { predictionMsg ? predictionMsg.message : 'None' }</p>
            <p>Connection state: <span className={ `status-${connectionStatus == 'Connected'}`}>{ connectionStatus }</span></p>
        </>
    )
}