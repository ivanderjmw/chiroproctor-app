import { useEffect, useState } from 'react';
import { useSubscription } from 'mqtt-react-hooks';

export default function Status() {
    const [data, setData] = useState([]);
    const { message } = useSubscription([
        'prediction'
    ])

    useEffect(() => {
        if (message) setData((dt) => [...dt, [Date.now(), message]])
    }, [message])

    return (
        <>
            <h2>Prediction Log</h2>
            {
                data.map((d) => (
                    <><tr>
                        <td>{d[0]}</td>
                        <td>{d[1]}</td>
                    </tr></>
                ))
            }
        </>
    )
}