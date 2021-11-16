import { useState, useEffect } from 'react';
import { useSubscription, useMqttState } from 'mqtt-react-hooks';

import './Status.css'

export default function Status() {
    const { message : batteryMsg } = useSubscription('battery')
    const { message : predictionMsg } = useSubscription('prediction')
    const { connectionStatus } = useMqttState()

    return (
        <>
            <h2>Battery Status: { batteryMsg ? batteryMsg.message : 'None' }</h2>
            <h2>Current prediction: { predictionMsg ? predictionMsg.message : 'None' }</h2>
            <h2>Connection state: <span className={ `status-${connectionStatus == 'Connected'}`}>{ connectionStatus }</span></h2>
        </>
    )
}