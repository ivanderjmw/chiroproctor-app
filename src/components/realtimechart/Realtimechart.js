import { useEffect, useState } from "react";
import { useSubscription } from "mqtt-react-hooks";
import { Line } from "react-chartjs-2";

export default function Status() {
  const [data, setData] = useState([]);
  const { message } = useSubscription(["Group_2/predict"]);

  useEffect(() => {
    if (message?.message && JSON.parse(message.message)?.prediction) {
      setData((dt) =>
        [...dt, [new Date(), JSON.parse(message.message)?.prediction]]
          // Filter to last hour
          .filter((d) => new Date().getTime() - d[0].getTime() < 60000)
      );
    }
  }, [message]);

  const options = {
    scales: {
      yAxes: {
        min: -0.1,
        max: 1.1,
      },
    },
    maintainAspectRatio: false,
  };

  const toChartData = (data) => {
    return {
      labels: data.map((d) => d[0].toLocaleString("en-SG")),
      datasets: [
        {
          label: "Posture",
          data: data.map((d) => (d[1] === "NORMAL" ? 3 : (d[1] === "SCOLIOSIS" ? 2 : (d[1] === "KYPHOSIS" ? 1 : 0)))),
          fill: false,
        },
      ],
    };
  };

  return (
    <div>
      <h2>Posture History</h2>
      <div className="chartContainer">
        <div className="chart">
          <Line data={toChartData(data)} options={options} />
        </div>
        <table>
          <tr>
            <th>Timestamp</th>
            <th>Posture</th>
          </tr>
          {data.map((d, i) => (
            <tr key={data.length - 1 - i}>
              <td>{data[data.length - 1 - i][0].toLocaleString("en-SG")}</td>
              <td>{data[data.length - 1 - i][1]}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
