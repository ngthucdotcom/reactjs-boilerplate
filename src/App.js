import logo from './logo.svg';
import './App.css';
import './css/colors.css';
import {useEffect} from "react";
import {injectDebugger} from "./utils/utils";
import {Logger} from "./utils/logger";

function App() {
  const logger = new Logger('App');
  logger.log_info('App running');

  useEffect(() => {
    initialize();
  }, []);

  async function initialize() {
    if (process.env.REACT_APP_ENV !== "production") {
      await injectDebugger();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
