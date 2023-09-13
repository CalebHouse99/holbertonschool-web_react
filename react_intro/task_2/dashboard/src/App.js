import { getFullYear, getFooterCopy } from './utils';
// import Notifications from './Notifications';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <Notifications/> */}
            </header>
            <div className="App-body">
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' />
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' />
                <button>OK</button>
            </div>
            <footer className="App-footer">
                <p>{getFooterCopy(true)} - {getFullYear()}</p>
            </footer>
        </div>
    );
}

export default App;
