import { Connector } from 'mqtt-react-hooks'
import dotenv from 'dotenv'

import Status from './components/status/Status'
import Realtimechart from './components/realtimechart/Realtimechart'
import Videos from './components/videos/Videos'

import logo from './logo.svg';
import './App.css';

function App() {
  dotenv.config()
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div>
        {/* <Connector brokerUrl={process.env.MQTT_BROKER_URL || 'ws://test.mosquitto.org:8080/mqtt'}> */}
          <Status/>
          {/* <Realtimechart/> */}
          {/* <Videos/> */}
        {/* </Connector> */}

      </div>
    </div>
  );
}

export default App;
