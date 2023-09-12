import logo from './logo.svg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
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
            <footer className="App-footer">
                <p>{getFooterCopy(true)} - {getFullYear()}</p>
            </footer>
        </div>
    );
}

export default App;
