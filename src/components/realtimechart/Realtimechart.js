import { useEffect, useState } from 'react';
import { useSubscription } from 'mqtt-react-hooks';
import { Line } from 'react-chartjs-2';

export default function Status() {
    const [data, setData] = useState([]);
    const { message } = useSubscription([
        'prediction'
    ])

    useEffect(() => {
        if (message) {
            setData((dt) => [...dt, [new Date(), message.message]]
            // Filter to last hour
            .filter((d) => (new Date().getTime() - d[0].getTime()) < 3600000))
        }
    }, [message])

    const options = {
        scales: {
            yAxes: {
                min:-0.1,
                max:1.1
            }
        },
        maintainAspectRatio: false
    }

    const toChartData = (data) => {
        return {
            labels: data.map((d) => d[0].toLocaleString('en-SG')),
            datasets: [
                {
                    label: 'Posture',
                    data: data.map((d) => d[1] == 'good' ? 1 : 0),
                    fill: false,
                }
            ]
        }
    }

    return (
        <>
            <div className="card">
            <h2>Posture History</h2>
            <div className="chart">
                <Line data={toChartData(data)} options={options}/>
            </div>
            <table>
                <tr>
                    <th>Timestamp</th>
                    <th>Posture</th>
                </tr>
            {
                data.map((d,i) => (
                    <tr key={i}>
                        <td>{d[0].toLocaleString('en-SG')}</td>
                        <td>{d[1]}</td>
                    </tr>
                ))
            }
            </table>
            </div>
        </>
    )
}