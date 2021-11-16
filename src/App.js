import { Connector } from 'mqtt-react-hooks'
import dotenv from 'dotenv'

import Status from './components/status/Status'
import Example from './components/Example'
import Realtimechart from './components/realtimechart/Realtimechart'
import Videos from './components/videos/Videos'

import logo from './logo.svg';
import './App.css';


function App() {
  dotenv.config()
  return (
    <div className="App">

      <h1>ChiroProctor</h1>
      <div>
        <Connector brokerUrl={process.env.MQTT_BROKER_URL || 'ws://localhost:9001'} options={{ keepalive: 0 }}>
          <Status/>
          <Realtimechart/>
          {/* <Videos/> */}
          <Example />
        </Connector>

      </div>
    </div>
  );
}

export default App;
