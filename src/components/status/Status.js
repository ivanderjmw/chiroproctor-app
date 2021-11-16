import { useState, useEffect } from 'react';
import { useSubscription, useMqttState } from 'mqtt-react-hooks';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CellWifiIcon from '@mui/icons-material/CellWifi';

import './Status.css'

export default function Status() {
    const { message : batteryMsg } = useSubscription('battery')
    const { message : predictionMsg } = useSubscription('prediction')
    const { connectionStatus } = useMqttState()

    return (
        <>
            <div className="card">
                <h2>Live Status</h2>

                <div><BatteryChargingFullIcon fontSize="small"/><span>Battery Status: { batteryMsg ? batteryMsg.message : 'None' }</span></div>
                <div><AccessibilityIcon fontSize="small"/><span>Current posture: { predictionMsg ? predictionMsg.message : 'None' }</span></div>
                <div><CellWifiIcon fontSize="small"/><span>Connection state: <span className={ `status-${connectionStatus == 'Connected'}`}>{ connectionStatus }</span></span></div>
            </div>
        </>
    )
}