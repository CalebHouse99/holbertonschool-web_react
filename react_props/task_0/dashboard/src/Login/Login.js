import React from 'react';
import './Login.css';

function Login() {
    return (
        <React.Fragment>
            <div className="login-section">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"/>
                <button>Login</button>
            </div>
        </React.Fragment>
    );
}

export default Login;
