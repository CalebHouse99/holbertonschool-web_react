import { getFullYear, getFooterCopy } from './utils';
import logo from './holberton-logo.jpg';
// import Notifications from './Notifications';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt='logo'></img>
                <h1>School dashboard</h1>
            </header>
            <div className="App-body">
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' />
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' />
                <button>OK</button>
            </div>
            <footer className="App-footer">
                <p><em>{getFooterCopy(true)} - {getFullYear()}</em></p>
            </footer>
        </div>
    );
}

export default App;
