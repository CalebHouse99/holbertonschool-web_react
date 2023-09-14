import React from 'react';
import { getFullYear, getFooterCopy } from '../utils'; // Imported here, since it's utilized in this component
import './Footer.css';

function Footer() {
    return (
        <footer className="App-footer">
            <p>{getFooterCopy(true)} - {getFullYear()}</p>
        </footer>
    );
}

export default Footer;
