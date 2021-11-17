import { Connector } from "mqtt-react-hooks";
import dotenv from "dotenv";

import Status from "./components/status/Status";
import Realtimechart from "./components/realtimechart/Realtimechart";
import Videos from "./components/videos/Videos";

import "./App.css";

function App() {
  dotenv.config();
  return (
    <div className="App">
      <h1>ChiroProctor</h1>
      <div>
        <Connector
          brokerUrl={process.env.MQTT_BROKER_URL || "ws://54.255.139.76:80"}
          options={{ keepalive: 0 }}
        >
          <div className="Container">
            <Status />
            <div className="bigSpace" />
            <Realtimechart />
          </div>
          <Videos />
        </Connector>
      </div>
    </div>
  );
}

export default App;
